import { useQuery } from '../lib/useQuery';

/**
 * Projects component.
 * Renders project information including title,
 * description, tech stack, and project URL.
 * @returns {JSX.Element} - The rendered component.
 */
export default function Projects() {
  const { data, error, loading } = useQuery('/projects');

  return (
    <section id="projects" className="py-10">
      <h2 className="text-2xl font-semibold">Projects</h2>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <ul className="mt-4 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data.map((project) => (
            <li key={project.id} className="p-4 rounded-lg border hover:shadow">
              <h3 className="font-semibold hover:text-blue-500 transition-colors duration-500">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{project.description}</p>
              {project.techs && project.techs.length > 0 && (
                <div className="mt-2">
                  <span className="font-medium text-gray-700">Tech Stack:</span>
                  <ul className="flex flex-wrap gap-2 mt-1">
                    {project.techs.map((t) => (
                      <li key={t.tech.id}>
                        <a
                          href={t.tech.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-block px-2 py-1 bg-gray-100 rounded text-xs text-blue-700 hover:bg-blue-100"
                        >
                          {t.tech.techName}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
