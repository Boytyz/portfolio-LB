// src/App.jsx
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contacts";
import Footer from "./components/footer";
import Formations from "./components/Formations";

function App() {
  return (
    <div className="bg-slate-950 text-slate-50 min-h-screen">
      {/* Navbar fixe */}
      <Navbar />

      {/* Contenu principal */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <section id="home" className="pt-28 pb-24">
          <Hero />
        </section>

        <section id="about" className="py-24 border-t border-slate-800">
          <About />
        </section>

        <section id="skills" className="py-24 border-t border-slate-800">
          <Skills />
        </section>

        <section id="formations" className="py-24 border-t border-slate-800">
          <Formations />
        </section>


        <section id="projects" className="py-24 border-t border-slate-800">
          <Projects />
        </section>

        <section id="contact" className="py-24 border-t border-slate-800">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;



