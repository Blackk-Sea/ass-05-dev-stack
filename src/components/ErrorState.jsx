export default function ErrorState({ message }) {
  return (
    <div className="grid min-h-[320px] place-items-center rounded-2xl border border-dashed border-rose-200 bg-rose-50/60 px-6 text-center">
      <div>
        <p className="text-base font-semibold text-rose-600">Something went wrong</p>
        <p className="mt-1 max-w-md text-sm text-rose-500/90">{message}</p>
      </div>
    </div>
  );
}
