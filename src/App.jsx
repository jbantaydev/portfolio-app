import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Projects from './components/Projects.jsx';

export default function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h1 className="text-3xl font-bold text-blue-500">Tailwind 4 is Working!</h1>

      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
