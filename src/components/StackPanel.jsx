import StackItem from './StackItem.jsx';

/**
 * The "Your Stack" sidebar. It shows an empty message by default, lists every
 * selected technology once the user starts adding, and lets them remove items
 * one by one or all at once.
 */
export default function StackPanel({ stack, onRemove, onClearAll }) {
  const count = stack.length;

  return (
    <aside className="lg:col-span-3">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card lg:sticky lg:top-24">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">Your Stack</h2>

        <p className="mt-1 text-sm text-slate-400">
          {count === 0 ? 'No technologies selected yet.' : `${count} Technology Selected`}
        </p>

        {count === 0 ? (
          <div className="mt-5 grid min-h-[132px] place-items-center rounded-xl border border-dashed border-slate-300 px-4 py-8 text-center">
            <p className="text-sm text-slate-400">Your stack is empty.</p>
          </div>
        ) : (
          <>
            <ul className="mt-5 flex flex-col gap-3">
              {stack.map((tech) => (
                <StackItem key={tech.id} tech={tech} onRemove={onRemove} />
              ))}
            </ul>

            <button
              type="button"
              onClick={onClearAll}
              className="mt-6 w-full rounded-xl border border-rose-200 bg-white px-4 py-2.5 text-sm font-semibold text-rose-500 transition hover:bg-rose-50 hover:text-rose-600"
            >
              Remove All
            </button>
          </>
        )}
      </div>
    </aside>
  );
}
