// src/components/Footer.jsx
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-xs text-slate-200 flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between">
        <span>© {year} Boytyz. Tous droits réservés.</span>
        <span>Construit avec React & Tailwind CSS.</span>
      </div>
    </footer>
  );
}
