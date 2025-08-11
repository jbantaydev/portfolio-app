/**
 * Fetches JSON data from a REST API endpoint.
 * Throws an error if the request fails.
 * @param {string} path - The API endpoint URL.
 * @param {Object} param1 - Optional parameters for the fetch request.
 * @returns {Promise<Object>} - The JSON response from the API or an error.
 */
export async function getJSON(path, { signal, headers } = {}) {
  const res = await fetch(path, { signal, headers });
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} on ${path}`);
  }
  return res.json();
}
