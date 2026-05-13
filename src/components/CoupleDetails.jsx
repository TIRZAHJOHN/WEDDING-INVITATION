import { Crown, Gem, HeartHandshake } from 'lucide-react';
import { wedding } from '../data/weddingData.js';

function PersonCard({ person, tone }) {
  return (
    <article className={`person-card ${tone}`} data-reveal>
      <div className="flex items-start justify-between gap-5">
        <div>
          <h3>{person.fullName}</h3>
        </div>
        <span className="grid size-12 shrink-0 place-items-center rounded-full bg-dusk text-champagne shadow-glow">
          <Crown size={22} aria-hidden="true" />
        </span>
      </div>

      <ul className="mt-6 space-y-3">
        {person.highlights.map((item) => (
          <li className="flex gap-3 text-sm font-semibold uppercase text-wine/70" key={item}>
            <Gem className="mt-0.5 shrink-0 text-aureate" size={17} aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <p className="eyebrow text-wine/70">{person.parentsTitle}</p>

        <div className="mt-4 space-y-5">
          {person.parents.map((parent, index) => (
            <div className="border-l-2 border-champagne/70 pl-4" key={parent.name}>
              <p className="font-display text-2xl font-semibold leading-tight text-dusk">{parent.name}</p>
              {parent.detail && <p className="mt-2 text-sm font-medium leading-6 text-dusk/60">{parent.detail}</p>}
              {index === 0 && person.parents.length > 1 && (
                <p className="mt-4 font-script text-3xl text-aureate">and</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function CoupleDetails() {
  return (
    <section id="invitation" className="section-shell relative">
      <div className="mx-auto max-w-6xl">
        <div className="section-heading" data-reveal>
          <p className="eyebrow text-wine">The wedding invitation</p>
          <h2>Two families, one covenant</h2>
          <p>
            With gratitude to God and love from both families, Sharon Lizie and Sam Jaspher invite you to bless their wedding day.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <PersonCard person={wedding.bride} tone="from-blush/75 to-white/75" />
          <PersonCard person={wedding.groom} tone="from-champagne/70 to-white/80" />
        </div>

        <div className="mt-10 rounded-lg border border-white/60 bg-white/45 p-6 text-center shadow-rose backdrop-blur-xl" data-reveal>
          <HeartHandshake className="mx-auto text-aureate" size={32} aria-hidden="true" />
          <p className="mx-auto mt-4 max-w-3xl font-display text-2xl leading-9 text-dusk sm:text-3xl">
            Your presence, prayers, and blessings will make this celebration even more joyful.
          </p>
        </div>
      </div>
    </section>
  );
}
