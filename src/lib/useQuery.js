// src/lib/useQuery.js
import { useEffect, useState } from 'react';
import { getJSON } from './fetcher';

/**
 * Custom hook for fetching data from a REST API endpoint.
 * This hook manages the loading and error states, and returns the fetched data.
 * The purpose for adding this is to provide a reusable way to fetch data in React components.
 * @param {string} path - The API endpoint path.
 * @param {*} options - Fetch options (e.g., headers, body).
 * @returns {Object} - An object containing the fetched data, error, and loading state.
 */
export function useQuery(path, options = {}) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ctrl = new AbortController();
    setLoading(true);
    setError(null);

    // Build full API URL from env
    const apiBase = import.meta.env.VITE_API_URL || '';
    const fullPath = apiBase
      ? apiBase.replace(/\/$/, '') + (path.startsWith('/') ? path : '/' + path)
      : path;

    getJSON(fullPath, { signal: ctrl.signal, ...options })
      .then(setData)
      .catch((e) => {
        console.error('Fetch error:', e);
        if (e.name !== 'AbortError') setError(e);
      })
      .finally(() => setLoading(false));

    return () => ctrl.abort();
  }, [path]); // re-run when the path or options changes

  return { data, error, loading };
}
