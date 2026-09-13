/** Shared helpers for the technology cards. */

/** Soft colour tones for the card badges, keyed by the badge text. */
const BADGE_TONES = {
  Popular: 'bg-sky-50 text-sky-700 ring-sky-100',
  Versatile: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
  Fast: 'bg-orange-50 text-orange-600 ring-orange-100',
  'Full-Stack': 'bg-slate-100 text-slate-700 ring-slate-200',
  Standard: 'bg-teal-50 text-teal-700 ring-teal-100',
  'Top SQL': 'bg-indigo-50 text-indigo-700 ring-indigo-100',
  Cache: 'bg-rose-50 text-rose-600 ring-rose-100',
  Ubiquitous: 'bg-amber-50 text-amber-700 ring-amber-100',
  Essential: 'bg-blue-50 text-blue-700 ring-blue-100',
  Robust: 'bg-cyan-50 text-cyan-700 ring-cyan-100',
  Modern: 'bg-sky-50 text-sky-700 ring-sky-100',
  Containers: 'bg-blue-50 text-blue-700 ring-blue-100',
  Document: 'bg-green-50 text-green-700 ring-green-100',
  Orchestration: 'bg-violet-50 text-violet-700 ring-violet-100',
  'Version Control': 'bg-orange-50 text-orange-600 ring-orange-100',
};

/** Fallback tones in case the JSON introduces a brand new badge. */
const CATEGORY_TONES = {
  Frontend: 'bg-sky-50 text-sky-700 ring-sky-100',
  Backend: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
  Database: 'bg-indigo-50 text-indigo-700 ring-indigo-100',
  Language: 'bg-amber-50 text-amber-700 ring-amber-100',
  Styling: 'bg-cyan-50 text-cyan-700 ring-cyan-100',
  DevOps: 'bg-violet-50 text-violet-700 ring-violet-100',
  Tools: 'bg-slate-100 text-slate-700 ring-slate-200',
};

export function badgeTone(tech) {
  return BADGE_TONES[tech.badge] || CATEGORY_TONES[tech.category] || CATEGORY_TONES.Tools;
}
