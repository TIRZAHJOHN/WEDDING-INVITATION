import { motion } from 'framer-motion';
import { CalendarPlus, ChevronDown, Church, Heart, Sparkles } from 'lucide-react';
import Countdown from './Countdown.jsx';
import { shareText, wedding } from '../data/weddingData.js';

function downloadSaveDate() {
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Sharon Sam Wedding//Invitation//EN',
    'BEGIN:VEVENT',
    'UID:sharon-sam-wedding-20260624@example.com',
    'DTSTAMP:20260513T000000Z',
    'DTSTART:20260624T040000Z',
    'DTEND:20260624T073000Z',
    "SUMMARY:Wedding of Sharon Lizie and Sam Jaspher",
    "LOCATION:CSI St. Peter's Church, Shunmugapuram, Tuticorin",
    `DESCRIPTION:${shareText}`,
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = 'sharon-sam-wedding.ics';
  anchor.click();
  URL.revokeObjectURL(url);
}

export default function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-[100svh] items-center overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-10">
      <div className="hero-veil" aria-hidden="true" />
      <motion.div
        className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.06fr_.94fr]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="relative z-10" data-reveal>
          <motion.p
            className="eyebrow text-wine"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            With the Grace of God
          </motion.p>
          <motion.div
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-dusk/10 bg-white/60 px-4 py-2 text-sm font-semibold text-dusk shadow-glow backdrop-blur"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.8 }}
          >
            <Sparkles size={16} aria-hidden="true" />
            You are lovingly invited
          </motion.div>

          <motion.h1
            className="mt-7 max-w-5xl font-display text-5xl font-semibold leading-[0.88] text-dusk drop-shadow-[0_18px_50px_rgba(255,244,210,.65)] sm:text-7xl lg:text-8xl"
            initial={{ opacity: 0, y: 40, filter: 'blur(16px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.65, duration: 1.2, ease: 'easeOut' }}
          >
            <span className="block">SHARON LIZIE</span>
            <span className="my-3 block font-script text-5xl font-normal leading-none text-champagne sm:text-7xl lg:text-8xl">
              weds
            </span>
            <span className="block">SAM JASPHER</span>
          </motion.h1>

          <motion.p
            className="mt-7 max-w-xl text-lg leading-8 text-dusk/75 sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.9 }}
          >
            A cinematic Christian wedding celebration in Tuticorin, wrapped in prayer, family blessing, golden light, and joy.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <button className="button-gold" type="button" onClick={downloadSaveDate}>
              <CalendarPlus size={20} aria-hidden="true" />
              <span>Save the Date</span>
            </button>
            <a className="button-ghost-dark" href="#invitation">
              <Church size={20} aria-hidden="true" />
              <span>View Invitation</span>
            </a>
          </motion.div>
        </div>

        <motion.aside
          className="relative z-10 mx-auto w-full max-w-lg"
          data-parallax="34"
          initial={{ opacity: 0, y: 50, rotate: 1.2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ delay: 0.8, duration: 1.2, ease: 'easeOut' }}
        >
          <div className="royal-card">
            <div className="relative">
              <div className="mx-auto grid size-36 place-items-center rounded-full border border-champagne/50 bg-dusk text-center shadow-glow sm:size-44">
                <span className="font-script text-6xl text-champagne sm:text-7xl">{wedding.initials}</span>
              </div>
              <div className="mt-8 text-center">
                <p className="font-display text-2xl font-semibold uppercase text-wine sm:text-3xl">
                  {wedding.dateLabel}
                </p>
                <p className="mt-3 text-sm font-semibold uppercase text-dusk/55">Wedding countdown</p>
              </div>
              <div className="mt-6">
                <Countdown targetDate={wedding.ceremonyDateTime} />
              </div>
            </div>
          </div>
        </motion.aside>
      </motion.div>

      <a
        className="absolute bottom-6 left-1/2 z-20 grid -translate-x-1/2 place-items-center rounded-full border border-dusk/10 bg-white/55 p-3 text-dusk backdrop-blur transition hover:bg-white/75"
        href="#story"
        aria-label="Scroll to love story"
      >
        <ChevronDown size={22} aria-hidden="true" />
      </a>

      <Heart className="absolute right-[12%] top-[22%] text-rose/55 blur-[.2px]" size={34} aria-hidden="true" />
      <Heart className="absolute left-[7%] top-[63%] text-champagne/60 blur-[.2px]" size={24} aria-hidden="true" />
    </section>
  );
}
