/**
 * ---------------------------------------------------------------
 *  SINGLE SOURCE OF TRUTH FOR THE BRAND THEME
 * ---------------------------------------------------------------
 *  The whole UI is driven by the values below. Change `brand` once
 *  here and the brand name, the hero heading highlight, every
 *  primary button, the logo tile, focus rings and shadows all
 *  re-theme together (they all read the CSS variables that
 *  `applyBrandTheme()` writes onto <html>).
 */

export const brand = {
  /** The three gradient stops: orange → pink → violet (brand gradient). */
  gradient: {
    from: '#F97316', // orange
    via: '#E11D76', // pink
    to: '#8B5CF6', // violet
  },
  /** Solid accent used for tiny details: the Sign Up pill, star ratings, links. */
  solid: '#D91B7E',
  /** Very light tint of the accent, used for soft backgrounds. */
  soft: '#FDF2F8',
};

/** Horizontal gradient — headings, brand name, primary buttons. */
export const brandGradient = `linear-gradient(90deg, ${brand.gradient.from} 0%, ${brand.gradient.via} 50%, ${brand.gradient.to} 100%)`;

/** Diagonal version of the very same gradient — logo tile and square accents. */
export const brandGradientDiagonal = `linear-gradient(135deg, ${brand.gradient.from} 0%, ${brand.gradient.via} 50%, ${brand.gradient.to} 100%)`;

/**
 * Writes the theme into CSS custom properties so Tailwind utilities
 * (`bg-brand`, `text-brand-solid`, …) and plain CSS can consume it.
 */
export function applyBrandTheme(root = document.documentElement) {
  root.style.setProperty('--brand-from', brand.gradient.from);
  root.style.setProperty('--brand-via', brand.gradient.via);
  root.style.setProperty('--brand-to', brand.gradient.to);
  root.style.setProperty('--brand-solid', brand.solid);
  root.style.setProperty('--brand-soft', brand.soft);
  root.style.setProperty('--brand-gradient', brandGradient);
  root.style.setProperty('--brand-gradient-diagonal', brandGradientDiagonal);
}
