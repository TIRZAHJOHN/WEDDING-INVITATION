import { useEffect, useMemo, useState } from 'react';

const getRemaining = (targetDate) => {
  const target = new Date(targetDate).getTime();
  const now = Date.now();
  const distance = Math.max(target - now, 0);

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / (1000 * 60)) % 60),
    seconds: Math.floor((distance / 1000) % 60),
    complete: distance === 0
  };
};

export function useCountdown(targetDate) {
  const initial = useMemo(() => getRemaining(targetDate), [targetDate]);
  const [remaining, setRemaining] = useState(initial);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRemaining(getRemaining(targetDate));
    }, 1000);

    return () => window.clearInterval(interval);
  }, [targetDate]);

  return remaining;
}
