import { useEffect, useState } from 'react';

export default function PageProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? window.scrollY / scrollable : 0);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[80] h-1 w-full bg-white/15">
      <div
        className="h-full rounded-r-full bg-gradient-to-r from-rose via-champagne to-white shadow-[0_0_22px_rgba(248,218,154,.75)]"
        style={{ width: `${Math.min(progress * 100, 100)}%` }}
      />
    </div>
  );
}
