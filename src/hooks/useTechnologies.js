import { useEffect, useState } from 'react';

/**
 * Loads the technology catalogue from the JSON file in /public/data.
 * The fetch keeps the data out of the component code, so the list can be
 * edited without touching a single React file.
 */
export function useTechnologies() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    let active = true;

    async function loadTechnologies() {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}data/technologies.json`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();

        if (active) {
          setTechnologies(data);
          setError(null);
        }
      } catch (err) {
        // An abort is expected when the component unmounts — not a real error.
        if (active && err.name !== 'AbortError') {
          setError('We could not load the technology list. Please refresh the page and try again.');
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadTechnologies();

    return () => {
      active = false;
      controller.abort();
    };
  }, []);

  return { technologies, loading, error };
}
