import TechIcon from './TechIcon.jsx';

export default function StackItem({ tech, onRemove }) {
  return (
    <li className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2.5 transition hover:border-slate-300 hover:shadow-card">
      <TechIcon tech={tech} size="sm" />

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-bold text-slate-900">{tech.name}</p>
        <p className="text-xs text-slate-400">{tech.category}</p>
      </div>

      <button
        type="button"
        onClick={() => onRemove(tech)}
        aria-label={`Remove ${tech.name} from your stack`}
        title={`Remove ${tech.name}`}
        className="grid h-8 w-8 shrink-0 place-items-center rounded-lg text-slate-400 transition hover:bg-rose-50 hover:text-rose-500"
      >
        <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" />
        </svg>
      </button>
    </li>
  );
}
