// src/components/Navbar.jsx
import { useEffect, useState } from "react";

const navLinks = [
  { id: "home", label: "Accueil" },
  { id: "about", label: "À propos" },
  { id: "skills", label: "Compétences" },
  { id: "projects", label: "Projets" },
  { id: "formations", label: "Formations" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Gérer le scroll pour :
  // - changer le style de la navbar
  // - détecter quelle section est active
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);

      const scrollPos = window.scrollY + 120; // offset pour tenir compte de la navbar
      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (!section) continue;

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPos >= top && scrollPos < bottom) {
          setActive(link.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all
      ${scrolled ? "backdrop-blur bg-slate-950/70 border-b border-slate-800" : "bg-transparent"}`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo / Nom */}
        <div className="font-semibold tracking-tight text-lg flex items-center gap-1">
          <span className="text-indigo-400">LB</span>
          <span className="text-slate-100">Portfolio</span>
        </div>

        {/* Liens desktop */}
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleClick(link.id)}
                className={`transition-colors border-b-2 pb-0.5
                  ${
                    active === link.id
                      ? "text-indigo-400 border-indigo-400"
                      : "text-slate-300 border-transparent hover:text-white"
                  }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* TODO: plus tard → menu mobile burger */}
        <button className="md:hidden text-sm text-slate-300 border border-slate-600 px-3 py-1 rounded-full">
          Menu
        </button>
      </nav>
    </header>
  );
}
