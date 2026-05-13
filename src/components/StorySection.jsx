import { BookHeart, Cross, Flower2 } from 'lucide-react';
import { scriptures, storyMoments } from '../data/weddingData.js';

export default function StorySection() {
  return (
    <section id="story" className="section-shell relative overflow-hidden">
      <div className="soft-section-light left-light" aria-hidden="true" />
      <div className="mx-auto max-w-6xl">
        <div className="section-heading" data-reveal>
          <p className="eyebrow text-wine">A sacred invitation</p>
          <h2>A love story held in grace</h2>
          <p>
            Scripture, promise, blessing, and celebration gather around the beginning of their life together.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2" data-reveal>
          {scriptures.map((verse) => (
            <blockquote className="scripture-card" key={verse.reference}>
              <BookHeart className="text-aureate" size={26} aria-hidden="true" />
              <p>"{verse.text}"</p>
              <footer>- {verse.reference}</footer>
            </blockquote>
          ))}
        </div>

        <div className="relative mt-16">
          <div className="timeline-line" aria-hidden="true" />
          <div className="grid gap-6 lg:grid-cols-3">
            {storyMoments.map((moment, index) => (
              <article className="timeline-card" data-reveal key={moment.title}>
                <div className="timeline-dot">
                  {index === 0 && <Cross size={20} aria-hidden="true" />}
                  {index === 1 && <Flower2 size={20} aria-hidden="true" />}
                  {index === 2 && <BookHeart size={20} aria-hidden="true" />}
                </div>
                <p className="eyebrow text-aureate">{moment.eyebrow}</p>
                <h3>{moment.title}</h3>
                <p>{moment.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
