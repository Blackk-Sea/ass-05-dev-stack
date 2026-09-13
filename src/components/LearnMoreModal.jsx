import { useEffect, useRef } from 'react';

const STEPS = [
  {
    title: 'Pick a technology',
    body: 'Browse curated frontend, backend, database, language, styling and DevOps options, each with a rating and a difficulty level.',
  },
  {
    title: 'Add it to your stack',
    body: 'Every pick lands in the "Your Stack" panel beside the grid, where you can review it, remove it, or clear the whole list.',
  },
  {
    title: 'Ship the right stack',
    body: 'Read the finished panel as a short summary of the tools your next project will run on — nothing is stored on a server.',
  },
];

/** Small dialog opened by the hero's "Learn More" button. */
export default function LearnMoreModal({ open, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-slate-900/40 p-4 backdrop-blur-sm sm:items-center"
      role="presentation"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="learn-more-title"
        className="w-full max-w-lg animate-menu-in rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <h2 id="learn-more-title" className="text-2xl font-bold tracking-tight text-slate-900">
            How the <span className="text-gradient">stack builder</span> works
          </h2>
          <button
            type="button"
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close dialog"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
          >
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <ol className="mt-6 flex flex-col gap-5">
          {STEPS.map((step, index) => (
            <li key={step.title} className="flex gap-4">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand-diagonal text-sm font-bold text-white">
                {index + 1}
              </span>
              <div>
                <p className="text-sm font-bold text-slate-900">{step.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-500">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <button type="button" onClick={onClose} className="btn-brand mt-7 w-full">
          Start building
        </button>
      </div>
    </div>
  );
}
