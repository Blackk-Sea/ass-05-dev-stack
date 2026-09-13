import { useState } from 'react';

const SIZES = {
  sm: 'h-8 w-8',
  md: 'h-9 w-9',
  lg: 'h-10 w-10',
};

/**
 * Renders a technology logo with two safety nets: if the remote icon URL from
 * the JSON cannot be reached it falls back to the bundled local copy, and if
 * that fails too it shows a branded monogram so a card never looks broken.
 */
export default function TechIcon({ tech, size = 'md', className = '' }) {
  const localIcon = `/icons/${tech.id}.svg`;
  const [source, setSource] = useState(tech.icon || localIcon);
  const [failed, setFailed] = useState(false);
  const dimension = SIZES[size] || SIZES.md;

  if (failed) {
    return (
      <span
        className={`grid place-items-center rounded-lg bg-brand-diagonal text-sm font-bold text-white ${dimension} ${className}`}
        aria-hidden="true"
      >
        {tech.name.charAt(0)}
      </span>
    );
  }

  return (
    <img
      src={source}
      alt={`${tech.name} logo`}
      width="40"
      height="40"
      loading="lazy"
      decoding="async"
      onError={() => (source === localIcon ? setFailed(true) : setSource(localIcon))}
      className={`shrink-0 object-contain ${dimension} ${className}`}
    />
  );
}
