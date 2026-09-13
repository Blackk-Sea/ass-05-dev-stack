import { goToSection } from '../utils/navigation.js';

/**
 * Brand lockup: gradient "DS" tile + the two-tone "Dev Stack" wordmark.
 * Both colours come from the shared brand theme, so re-theming the app
 * automatically re-themes the logo.
 */
export default function Logo({ size = 'md', className = '' }) {
  const tile = size === 'sm' ? 'h-8 w-8 rounded-lg text-[11px]' : 'h-9 w-9 rounded-xl text-[13px]';
  const word = size === 'sm' ? 'text-base' : 'text-lg';

  return (
    <a
      href="#home"
      onClick={(event) => goToSection(event, '#home', 'Home')}
      className={`flex shrink-0 items-center gap-2.5 ${className}`}
      aria-label="Dev Stack — back to top"
    >
      <span
        className={`grid place-items-center bg-brand-diagonal font-extrabold tracking-wide text-white shadow-brand ${tile}`}
        aria-hidden="true"
      >
        DS
      </span>
      <span className={`font-extrabold tracking-tight ${word}`}>
        <span className="text-slate-900">Dev</span>
        <span className="text-gradient"> Stack</span>
      </span>
    </a>
  );
}
