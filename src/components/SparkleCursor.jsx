import { useEffect, useRef, useState } from 'react';

export default function SparkleCursor() {
  const [sparkles, setSparkles] = useState([]);
  const last = useRef(0);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return undefined;

    const onPointerMove = (event) => {
      const now = performance.now();
      if (now - last.current < 45) return;
      last.current = now;

      const sparkle = {
        id: `${now}-${Math.random()}`,
        x: event.clientX,
        y: event.clientY,
        size: 6 + Math.random() * 9
      };

      setSparkles((items) => [...items.slice(-20), sparkle]);
      window.setTimeout(() => {
        setSparkles((items) => items.filter((item) => item.id !== sparkle.id));
      }, 850);
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', onPointerMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[70]" aria-hidden="true">
      {sparkles.map((sparkle) => (
        <span
          className="cursor-spark"
          key={sparkle.id}
          style={{
            left: sparkle.x,
            top: sparkle.y,
            width: sparkle.size,
            height: sparkle.size
          }}
        />
      ))}
    </div>
  );
}
