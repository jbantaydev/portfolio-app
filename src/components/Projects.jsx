export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 py-8 md:py-12"
      style={{ padding: '2rem 0' }}
    >
      <h2>Projects</h2>
      <ul className="mt-4 grid gap-4 md:grid-cols-2">
        <li className="p-4 rounded-lg border">Project 1</li>
        <li className="p-4 rounded-lg border">Project 2</li>
        <li className="p-4 rounded-lg border md:col-span-2">Project 3</li>
      </ul>
    </section>
  );
}
