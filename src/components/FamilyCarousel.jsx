import { ChevronLeft, ChevronRight, Heart, Sparkles } from 'lucide-react';
import { useRef } from 'react';
import { familyGroups } from '../data/weddingData.js';

export default function FamilyCarousel() {
  const scroller = useRef(null);

  const scroll = (direction) => {
    if (!scroller.current) return;
    const amount = scroller.current.clientWidth * 0.82 * direction;
    scroller.current.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <section id="family" className="section-shell relative overflow-hidden">
      <div className="soft-section-light right-light" aria-hidden="true" />
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between" data-reveal>
          <div className="section-heading mx-0 text-left">
            <p className="eyebrow text-wine">Best wishes from</p>
            <h2>Family blessings</h2>
            <p>
              Loved ones gather their prayers, pride, and joy around Sharon and Sam.
            </p>
          </div>
          <div className="flex gap-2">
            <button className="icon-button bg-white/55 text-dusk" type="button" onClick={() => scroll(-1)} aria-label="Previous family cards">
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            <button className="icon-button bg-white/55 text-dusk" type="button" onClick={() => scroll(1)} aria-label="Next family cards">
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="family-scroller mt-10" ref={scroller} data-reveal>
          {familyGroups.map((group) => (
            <article className={group.featured ? 'family-card family-card-featured' : 'family-card'} key={group.id}>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="eyebrow text-aureate">{group.featured ? 'Special wishes' : 'With love'}</p>
                  <h3>{group.title}</h3>
                </div>
                <span className="grid size-12 place-items-center rounded-full bg-dusk text-champagne shadow-glow">
                  {group.featured ? <Sparkles size={22} aria-hidden="true" /> : <Heart size={22} aria-hidden="true" />}
                </span>
              </div>

              {group.note && <p className="mt-5 rounded-lg bg-white/45 p-4 font-script text-3xl leading-tight text-wine">{group.note}</p>}

              <div className="mt-7 space-y-4">
                {group.people.map((person) => (
                  <div className="family-person" key={person.name}>
                    <p>{person.name}</p>
                    {person.details?.map((detail) => (
                      <span key={detail}>{detail}</span>
                    ))}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
