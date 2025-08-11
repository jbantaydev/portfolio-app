import { useQuery } from '../lib/useQuery';

/**
 * Contact component.
 * Displays contact information.
 * @returns {JSX.Element} - The rendered component.
 */
export default function Contact() {
  const { data, error, loading } = useQuery('/contact');

  return (
    <section>
      <h2 className="text-2xl font-semibold">Contact</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && data[0] && (
        <div className="mt-3 space-y-1 text-gray-700">
          {data[0].email && (
            <p>
              Email:{' '}
              <a className="text-blue-600 underline" href={`mailto:${data[0].email}`}>
                {data[0].email}
              </a>
            </p>
          )}
          {data[0].linkedin && (
            <p>
              LinkedIn:{' '}
              <a
                className="text-blue-600 underline"
                href={data[0].linkedin}
                target="_blank"
                rel="noreferrer"
              >
                {data[0].linkedin}
              </a>
            </p>
          )}
          {data[0].github && (
            <p>
              GitHub:{' '}
              <a
                className="text-blue-600 underline"
                href={data[0].github}
                target="_blank"
                rel="noreferrer"
              >
                {data[0].github}
              </a>
            </p>
          )}
          {data[0].mobileNum && (
            <p>
              Mobile:{' '}
              <a className="text-blue-600 underline" href={`tel:${data[0].mobileNum}`}>
                {data[0].mobileNum}
              </a>
            </p>
          )}
        </div>
      )}
    </section>
  );
}
