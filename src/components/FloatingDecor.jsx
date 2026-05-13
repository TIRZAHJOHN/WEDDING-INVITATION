const lanterns = [
  { left: '6%', delay: '0s', duration: '20s', scale: 0.92 },
  { left: '18%', delay: '7s', duration: '23s', scale: 0.74 },
  { left: '73%', delay: '2s', duration: '22s', scale: 0.8 },
  { left: '88%', delay: '10s', duration: '26s', scale: 1 },
  { left: '48%', delay: '12s', duration: '24s', scale: 0.66 }
];

const petals = [
  { left: '8%', delay: '0s', duration: '15s' },
  { left: '16%', delay: '3s', duration: '18s' },
  { left: '29%', delay: '7s', duration: '16s' },
  { left: '38%', delay: '2s', duration: '21s' },
  { left: '51%', delay: '9s', duration: '17s' },
  { left: '64%', delay: '4s', duration: '20s' },
  { left: '79%', delay: '8s', duration: '18s' },
  { left: '91%', delay: '1s', duration: '22s' }
];

const hearts = [
  { left: '14%', top: '34%', delay: '1s' },
  { left: '84%', top: '38%', delay: '2.7s' },
  { left: '72%', top: '68%', delay: '0.2s' },
  { left: '24%', top: '76%', delay: '4s' }
];

const fireflies = Array.from({ length: 18 }, (_, index) => ({
  left: `${5 + ((index * 19) % 90)}%`,
  top: `${8 + ((index * 31) % 82)}%`,
  delay: `${(index % 9) * 0.7}s`
}));

export default function FloatingDecor() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="cloud cloud-one" />
      <div className="cloud cloud-two" />

      {lanterns.map((lantern, index) => (
        <span
          className="lantern"
          key={`lantern-${index}`}
          style={{
            left: lantern.left,
            animationDelay: lantern.delay,
            animationDuration: lantern.duration,
            transform: `scale(${lantern.scale})`
          }}
        />
      ))}

      {petals.map((petal, index) => (
        <span
          className="petal"
          key={`petal-${index}`}
          style={{ left: petal.left, animationDelay: petal.delay, animationDuration: petal.duration }}
        />
      ))}

      {hearts.map((heart, index) => (
        <span
          className="heart-float"
          key={`heart-${index}`}
          style={{ left: heart.left, top: heart.top, animationDelay: heart.delay }}
        />
      ))}

      {fireflies.map((fly, index) => (
        <span
          className="firefly"
          key={`firefly-${index}`}
          style={{ left: fly.left, top: fly.top, animationDelay: fly.delay }}
        />
      ))}
    </div>
  );
}
