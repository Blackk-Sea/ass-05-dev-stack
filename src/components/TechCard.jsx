import TechIcon from './TechIcon.jsx';
import StarRating from './StarRating.jsx';
import { badgeTone } from '../utils/tones.js';

export default function TechCard({ tech, isInStack, onAdd }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-card transition duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-card-hover xl:p-6">
      <div className="flex items-start justify-between gap-3">
        <TechIcon tech={tech} />
        <span
          className={`rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${badgeTone(tech)}`}
        >
          {tech.badge}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-bold tracking-tight text-slate-900 xl:text-xl">
        {tech.name}
      </h3>

      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{tech.description}</p>

      <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-slate-100 pt-4">
        <span className="whitespace-nowrap rounded-lg bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">
          {tech.category}
        </span>
        <span className="whitespace-nowrap text-xs font-medium text-slate-500">{tech.difficulty}</span>
        <span className="ml-auto shrink-0">
          <StarRating rating={tech.rating} />
        </span>
      </div>

      {/* Once added the button locks itself (aria-disabled + muted styling). It
          stays clickable on purpose so a second attempt can answer with a
          "already in your stack" warning instead of failing silently. */}
      <button
        type="button"
        onClick={() => onAdd(tech)}
        aria-disabled={isInStack}
        aria-label={isInStack ? `${tech.name} is already in your stack` : `Add ${tech.name} to your stack`}
        className={
          isInStack
            ? 'mt-4 inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2.5 text-sm font-semibold text-emerald-700'
            : 'btn-dark mt-4'
        }
      >
        {isInStack ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </article>
  );
}
