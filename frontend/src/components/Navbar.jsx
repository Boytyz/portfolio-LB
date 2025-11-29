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
  const [mobileOpen, setMobileOpen] = useState(false);

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

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all
      ${scrolled || mobileOpen ? "backdrop-blur bg-slate-950 border-b border-slate-800" : "bg-transparent"}`}
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
                onClick={() => { handleClick(link.id); setActive(link.id); }}
                className={`transition-colors border-b-2 pb-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400
                  ${
                    active === link.id
                      ? "bg-white text-slate-900 border-transparent rounded-md px-2 py-0.5 shadow-sm"
                      : "bg-indigo-600 hover:bg-white hover:text-slate-900 rounded-md px-2 py-0.5"
                  }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Menu mobile toggle */}
        <button
          onClick={() => setMobileOpen((s) => !s)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          className={`md:hidden text-sm px-3 py-1 rounded-full shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400
            ${mobileOpen ? "bg-indigo-600 text-white border border-indigo-600" : "text-slate-900 bg-white border border-slate-200"}`}
        >
          Menu
        </button>
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          role="menu"
          className="md:hidden absolute right-4 top-16 z-40 bg-slate-900 border border-slate-800 shadow-md w-40 rounded-lg"
          style={{ transformOrigin: "top right" }}
        >
          <ul className="flex flex-col p-3 gap-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  role="menuitem"
                  onClick={() => { handleClick(link.id); setActive(link.id); setMobileOpen(false); }}
                  className="w-full text-left px-4 py-2 rounded-md text-white bg-transparent hover:bg-indigo-600/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
