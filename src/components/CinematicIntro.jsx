import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const introLanterns = Array.from({ length: 9 }, (_, index) => ({
  left: `${8 + index * 10}%`,
  delay: index * 0.16,
  scale: 0.6 + (index % 4) * 0.12
}));

export default function CinematicIntro({ onComplete }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(false);
      window.setTimeout(onComplete, 800);
    }, 6800);

    return () => window.clearTimeout(timer);
  }, [onComplete]);

  const exitIntro = () => {
    setVisible(false);
    window.setTimeout(onComplete, 500);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-[#09070d]"
          exit={{ opacity: 0, scale: 1.04, filter: 'blur(16px)' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(216,164,65,.26),transparent_38%),radial-gradient(circle_at_22%_70%,rgba(239,182,189,.18),transparent_30%)]" />
          <div className="intro-stars" aria-hidden="true" />

          {introLanterns.map((lantern, index) => (
            <motion.span
              aria-hidden="true"
              className="intro-lantern"
              initial={{ y: 240, opacity: 0, scale: lantern.scale }}
              animate={{ y: -260, opacity: [0, 1, 1, 0], scale: lantern.scale }}
              transition={{
                duration: 5,
                delay: 2.2 + lantern.delay,
                ease: 'easeInOut'
              }}
              key={`intro-lantern-${index}`}
              style={{ left: lantern.left }}
            />
          ))}

          <div className="relative z-10 flex min-h-[min(720px,100svh)] w-full max-w-5xl items-center justify-center px-5">
            <motion.div
              className="intro-card"
              initial={{ opacity: 0, rotateX: 18, y: 80 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              transition={{ delay: 0.25, duration: 1.2, ease: 'easeOut' }}
            >
              <motion.div
                className="intro-card-left"
                initial={{ rotateY: 0 }}
                animate={{ rotateY: -78 }}
                transition={{ delay: 4.7, duration: 1.5, ease: [0.2, 0.8, 0.2, 1] }}
              />
              <motion.div
                className="intro-card-right"
                initial={{ rotateY: 0 }}
                animate={{ rotateY: 78 }}
                transition={{ delay: 4.7, duration: 1.5, ease: [0.2, 0.8, 0.2, 1] }}
              />

              <motion.p
                className="relative z-10 font-script text-4xl text-champagne drop-shadow-[0_0_24px_rgba(248,218,154,.55)] sm:text-6xl"
                initial={{ opacity: 0, y: 26, filter: 'blur(18px)' }}
                animate={{ opacity: [0, 1, 1, 0], y: [26, 0, 0, -20], filter: ['blur(18px)', 'blur(0px)', 'blur(0px)', 'blur(8px)'] }}
                transition={{ delay: 0.8, duration: 3.2, times: [0, 0.28, 0.78, 1] }}
              >
                With the Grace of God
              </motion.p>

              <motion.p
                className="relative z-10 mt-7 text-center font-display text-2xl uppercase text-white/90 sm:text-4xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: [0, 1, 1, 0.92], y: [30, 0, 0, -6] }}
                transition={{ delay: 3.05, duration: 2.6, ease: 'easeOut' }}
              >
                You are lovingly invited
              </motion.p>
            </motion.div>
          </div>

          <button className="absolute bottom-6 right-6 z-20 rounded-full border border-white/25 px-4 py-2 text-sm text-white/80 backdrop-blur transition hover:border-champagne hover:text-white" onClick={exitIntro}>
            Enter now
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
