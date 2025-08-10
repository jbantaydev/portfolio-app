export default function Contact() {
  return (
    <section id="contact" className="py-10">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <div className="mt-3 space-y-1 text-gray-700">
        <p>
          Email:{' '}
          <a className="text-blue-600 underline" href="mailto:jbantaydev@gmail.com">
            jbantaydev@gmail.com
          </a>
        </p>
        <p>
          LinkedIn:{' '}
          <a
            className="text-blue-600 underline"
            href="https://www.linkedin.com/in/jaymar-b-6a2459193"
            target="_blank"
            rel="noreferrer"
          >
            jaymar-b-6a2459193
          </a>
        </p>
      </div>
    </section>
  );
}
