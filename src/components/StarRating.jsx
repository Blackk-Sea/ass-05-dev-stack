export default function StarRating({ rating }) {
  return (
    <span className="inline-flex items-center gap-1" title={`Rated ${rating} out of 5`}>
      <svg viewBox="0 0 20 20" className="h-4 w-4 text-amber-400" aria-hidden="true" fill="currentColor">
        <path d="M10 1.6l2.47 5.01 5.53.8-4 3.9.94 5.51L10 14.22l-4.94 2.6.94-5.51-4-3.9 5.53-.8L10 1.6z" />
      </svg>
      <span className="text-sm font-semibold text-slate-700">{Number(rating).toFixed(1)}</span>
      {/* screen readers get the full sentence below, sighted users get the star */}
      <span className="sr-only">out of 5</span>
    </span>
  );
}
