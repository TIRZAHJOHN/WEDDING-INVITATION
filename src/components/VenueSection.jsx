import { CalendarDays, Clock3, MapPin, Navigation } from 'lucide-react';
import ChurchGlowScene from './ChurchGlowScene.jsx';
import { events } from '../data/weddingData.js';

export default function VenueSection() {
  return (
    <section id="venues" className="section-shell relative min-h-[960px] overflow-hidden">
      <ChurchGlowScene />
      <div className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_50%_18%,rgba(255,244,205,.45),transparent_46%)]" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-6xl pt-64 sm:pt-72 lg:pt-[25rem]">
        <div className="section-heading" data-reveal>
          <p className="eyebrow text-wine">Ceremony and reception</p>
          <h2>Where the day unfolds</h2>
          <p>
            A church ceremony in the morning, followed by a joyful reception with family and friends.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {events.map((event) => (
            <article className={`venue-card bg-gradient-to-br ${event.accent}`} data-reveal key={event.type}>
              <div className="flex items-center justify-between gap-4">
                <p className="eyebrow text-wine/70">{event.type}</p>
                <span className="grid size-12 place-items-center rounded-full bg-dusk text-champagne shadow-glow">
                  <MapPin size={22} aria-hidden="true" />
                </span>
              </div>

              <h3>{event.venue}</h3>
              <p className="mt-3 text-lg leading-8 text-dusk/70">{event.address}</p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="venue-meta">
                  <CalendarDays size={18} aria-hidden="true" />
                  <span>{event.date}</span>
                </div>
                <div className="venue-meta">
                  <Clock3 size={18} aria-hidden="true" />
                  <span>{event.time}</span>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a className="button-gold flex-1 justify-center" href={event.maps} target="_blank" rel="noreferrer">
                  <Navigation size={19} aria-hidden="true" />
                  <span>Navigate</span>
                </a>
                <a className="button-ghost-dark flex-1 justify-center" href={event.maps} target="_blank" rel="noreferrer">
                  <MapPin size={19} aria-hidden="true" />
                  <span>Google Maps</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
