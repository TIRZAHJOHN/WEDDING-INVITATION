import { useCountdown } from '../hooks/useCountdown.js';

const labels = [
  ['days', 'Days'],
  ['hours', 'Hours'],
  ['minutes', 'Minutes'],
  ['seconds', 'Seconds']
];

export default function Countdown({ targetDate }) {
  const remaining = useCountdown(targetDate);

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-3" aria-label="Wedding countdown">
      {labels.map(([key, label]) => (
        <div className="countdown-tile" key={key}>
          <span className="font-display text-2xl font-semibold text-dusk sm:text-4xl">
            {String(remaining[key]).padStart(2, '0')}
          </span>
          <span className="mt-1 text-xs font-bold uppercase text-wine/60">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
