/** Shown while the technology JSON is being fetched. */
export default function LoadingState() {
  return (
    <div className="grid min-h-[320px] place-items-center rounded-2xl border border-dashed border-slate-200 bg-slate-50/60">
      <div className="flex flex-col items-center gap-4" role="status" aria-live="polite">
        <span className="relative grid h-12 w-12 place-items-center">
          <span className="absolute inset-0 rounded-full border-[3px] border-slate-200" />
          <span className="absolute inset-0 animate-spin rounded-full border-[3px] border-transparent [border-top-color:var(--brand-solid)]" />
        </span>
        <p className="text-sm font-medium text-slate-500">Loading technologies…</p>
      </div>
    </div>
  );
}
