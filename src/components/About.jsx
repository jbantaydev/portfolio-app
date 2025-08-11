import { useQuery } from '../lib/useQuery';

/**
 * About component.
 * @returns {JSX.Element} - The rendered component.
 */
export default function About() {
  const { data, error, loading } = useQuery('/about');

  return (
    <section>
      <h2 className="text-2xl font-semibold">About</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && data[0] && <p>{data[0].bio}</p>}
    </section>
  );
}
