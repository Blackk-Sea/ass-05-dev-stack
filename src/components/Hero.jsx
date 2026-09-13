import { useState } from 'react';

import LearnMoreModal from './LearnMoreModal.jsx';
import { goToSection } from '../utils/navigation.js';

export default function Hero() {
  const [learnMoreOpen, setLearnMoreOpen] = useState(false);

  return (
    <section id="home" className="relative overflow-hidden scroll-mt-24">
      <div className="shell grid items-center gap-10 py-10 lg:grid-cols-2 lg:gap-14 lg:py-14">
        <div className="animate-fade-up">
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem]">
            <span className="block">Build Your Ideal</span>
            <span className="block text-gradient">Development Stack</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-500">
            Explore frontend, backend, database, and tooling options, compare them side by side,
            and put together the stack that fits your next project.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#technologies"
              onClick={(event) => goToSection(event, '#technologies', 'Technologies')}
              className="btn-brand px-6 py-3.5"
            >
              Explore Technologies
            </a>
            <button
              type="button"
              onClick={() => setLearnMoreOpen(true)}
              className="btn-outline px-6 py-3.5"
            >
              Learn More
            </button>
          </div>

          <p className="mt-6 text-sm text-slate-400">
            15 hand-picked technologies · ratings, difficulty and categories included
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[380px] lg:max-w-[420px]">
          {/* Barely-there brand glow so the artwork sits on clean white. */}
          <div
            className="absolute inset-16 rounded-full bg-brand opacity-[0.08] blur-3xl"
            aria-hidden="true"
          />
          <img
            src="/banner-stack.png"
            alt="Isometric illustration of a layered development stack built from glowing circuit boards"
            width="526"
            height="526"
            className="relative w-full drop-shadow-2xl"
          />
        </div>
      </div>

      <LearnMoreModal open={learnMoreOpen} onClose={() => setLearnMoreOpen(false)} />
    </section>
  );
}
