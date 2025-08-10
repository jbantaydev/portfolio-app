import profile from '../assets/images/jbantay_profpic.png';

export default function Header() {
  return (
    <header className="py-6 flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-between">
      {/* Left side: profile + name */}
      <div className="flex items-center gap-4">
        <img
          src={profile}
          alt="Jaymar Bantay"
          className="w-16 h-16 rounded-full object-cover border border-gray-300"
        />
        <div>
          <h1 className="text-3xl font-bold">Jaymar Bantay</h1>
          <p className="text-sm text-gray-600">
            Software Engineer · Backend APIs · React UI
          </p>
        </div>
      </div>

      {/* Right side: navigation */}
      <nav className="text-sm">
        <ul className="flex gap-4">
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
