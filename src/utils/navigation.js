import { toast } from 'react-toastify';

/**
 * Smooth-scrolls to a section of the page. Destinations that do not exist in
 * this single-page build (Projects, Careers, …) answer with a toast instead of
 * silently jumping nowhere.
 */
export function goToSection(event, hash, label) {
  const id = String(hash).replace('#', '');
  const target = document.getElementById(id);

  if (target) {
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Keep the URL shareable without letting the browser jump twice.
    window.history.replaceState(null, '', `#${id}`);
    return;
  }

  event.preventDefault();
  toast.info(`${label} is not part of this demo build yet — stay tuned!`, {
    toastId: `coming-soon-${id}`, // one toast at a time, never a stack of duplicates
  });
}
