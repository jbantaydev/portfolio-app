export default function Projects() {
  return (
    <section id="projects" className="py-10">
      <h2 className="text-2xl font-semibold">Projects</h2>

      <ul className="mt-4 grid gap-4 md:grid-cols-2">
        <li className="p-4 rounded-lg border hover:shadow">
          <h3 className="font-semibold">JSON Diff and Merge Tool</h3>
          <p className="text-sm text-gray-600 mt-1">
            Web UI for comparing JSON objects and arrays with inline editing, status tags,
            and consolidated diffs.
          </p>
        </li>

        <li className="p-4 rounded-lg border hover:shadow">
          <h3 className="font-semibold">Image Upload POC</h3>
          <p className="text-sm text-gray-600 mt-1">
            Yii2 UI and Node.js API backed by AWS Lambda, SQS, and S3. Handles async
            upload flows and metadata updates.
          </p>
        </li>

        <li className="p-4 rounded-lg border hover:shadow">
          <h3 className="font-semibold">Harvest and Inventory Manager</h3>
          <p className="text-sm text-gray-600 mt-1">
            Tools for experiment and inventory workflows with CSV pipelines and
            crop-specific rules.
          </p>
        </li>
      </ul>
    </section>
  );
}
