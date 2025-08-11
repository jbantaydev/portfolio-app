import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Projects from './components/Projects.jsx';

export default function App() {
  return (
    <div className="max-w-8xl mx-auto px-4">
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
