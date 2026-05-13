import { chromium, devices } from 'playwright';
import { mkdir, rm } from 'node:fs/promises';

const url = process.env.VERIFY_URL || 'http://127.0.0.1:5173/';
const outputDir = 'test-artifacts';

const viewports = [
  {
    name: 'desktop',
    context: {
      viewport: { width: 1440, height: 1000 },
      deviceScaleFactor: 1
    }
  },
  {
    name: 'mobile',
    context: {
      ...devices['iPhone 14'],
      colorScheme: 'light'
    }
  }
];

function summarizeCanvas(stats) {
  return stats
    .map((item) => {
      const ratio = Number.isFinite(item.nonBlankRatio) ? item.nonBlankRatio.toFixed(3) : 'n/a';
      return `canvas ${item.index}: ${item.width}x${item.height}, nonblank=${ratio}`;
    })
    .join('; ');
}

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });

const browser = await chromium.launch();

try {
  for (const viewport of viewports) {
    const context = await browser.newContext(viewport.context);
    const page = await context.newPage();

    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await page.waitForLoadState('networkidle', { timeout: 6000 }).catch(() => undefined);

    const enterButton = page.getByRole('button', { name: /enter now/i });
    if (await enterButton.isVisible().catch(() => false)) {
      await enterButton.click();
    }

    await page.waitForTimeout(1800);
    await page.locator('canvas').first().waitFor({ state: 'attached', timeout: 8000 });
    await page.screenshot({ path: `${outputDir}/${viewport.name}-hero.png`, fullPage: false });

    const heroVisible = await page.locator('h1').filter({ hasText: 'SHARON LIZIE' }).first().isVisible();
    if (!heroVisible) {
      throw new Error(`${viewport.name}: hero heading is not visible`);
    }

    const canvasStats = await page.$$eval('canvas', (canvases) =>
      canvases.map((canvas, index) => {
        const sample = document.createElement('canvas');
        sample.width = 96;
        sample.height = 96;
        const ctx = sample.getContext('2d', { willReadFrequently: true });
        let nonBlank = 0;
        let total = 0;

        try {
          ctx.drawImage(canvas, 0, 0, sample.width, sample.height);
          const data = ctx.getImageData(0, 0, sample.width, sample.height).data;
          total = data.length / 4;

          for (let i = 0; i < data.length; i += 4) {
            const alpha = data[i + 3];
            const brightness = data[i] + data[i + 1] + data[i + 2];
            if (alpha > 8 && brightness > 10) nonBlank += 1;
          }
        } catch (error) {
          return {
            index,
            width: canvas.width,
            height: canvas.height,
            nonBlankRatio: 0,
            error: error instanceof Error ? error.message : String(error)
          };
        }

        return {
          index,
          width: canvas.width,
          height: canvas.height,
          nonBlankRatio: total ? nonBlank / total : 0
        };
      })
    );

    if (canvasStats.length < 2) {
      throw new Error(`${viewport.name}: expected ambient and church canvases, found ${canvasStats.length}`);
    }

    const blankCanvas = canvasStats.find((item) => item.nonBlankRatio < 0.001);
    if (blankCanvas) {
      throw new Error(`${viewport.name}: blank or nearly blank canvas detected: ${JSON.stringify(blankCanvas)}`);
    }

    console.log(`${viewport.name}: ${summarizeCanvas(canvasStats)}`);

    for (const sectionId of ['story', 'invitation', 'venues', 'family']) {
      const section = page.locator(`#${sectionId}`);
      await page.evaluate((id) => {
        const element = document.getElementById(id);
        const nav = document.querySelector('nav');
        if (!element) return;
        const navHeight = nav?.getBoundingClientRect().height || 96;
        const y = element.getBoundingClientRect().top + window.scrollY - navHeight - 24;
        window.scrollTo(0, Math.max(y, 0));
      }, sectionId);
      await page.waitForTimeout(1200);
      const visible = await section.isVisible();
      if (!visible) {
        throw new Error(`${viewport.name}: section #${sectionId} is not visible after scrolling`);
      }
      await page.screenshot({ path: `${outputDir}/${viewport.name}-${sectionId}.png`, fullPage: false });
    }

    await context.close();
  }
} finally {
  await browser.close();
}
