import { Heart, Share2 } from 'lucide-react';
import { shareText } from '../data/weddingData.js';

export default function Footer() {
  const share = async () => {
    if (navigator.share) {
      await navigator.share({
        title: 'Sharon Lizie weds Sam Jaspher',
        text: shareText,
        url: window.location.href
      });
    } else {
      await navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/45 bg-dusk px-4 py-12 text-center text-white sm:px-6">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne to-transparent" aria-hidden="true" />
      <div className="mx-auto max-w-4xl">
        <p className="font-script text-5xl text-champagne">Sharon & Sam</p>
        <p className="mt-4 font-display text-2xl text-white/85">24 June 2026 - Tuticorin</p>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/60">
          With prayer, family blessing, and joyful anticipation.
        </p>
        <button className="button-ghost mx-auto mt-7" type="button" onClick={share}>
          <Share2 size={18} aria-hidden="true" />
          <span>Share Invitation</span>
        </button>
        <p className="mt-8 inline-flex items-center gap-2 text-xs uppercase text-white/45">
          <Heart size={14} aria-hidden="true" />
          With love and gratitude
        </p>
      </div>
    </footer>
  );
}
