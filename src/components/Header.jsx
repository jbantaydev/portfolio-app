export default function Header() {
  return (
    <header className="py-4 py-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <h1 className="font-arial font-bold text-green-800">Jaymar Bantay</h1>
      <p>Software Engineer | Full Stack Developer</p>

      <nav>
        <ul className="text-sm">
          <li>
            <a href="#about" className="text-gray-700 hover:text-blue-600">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="text-gray-700 hover:text-blue-600">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
