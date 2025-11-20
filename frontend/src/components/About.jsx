// src/components/About.jsx
export default function About() {
  return (
    <div className="space-y-8">
      <header>
        <p className="text-xs uppercase tracking-[0.25em] text-indigo-400">
          À propos
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold mt-2">
          Qui je suis
        </h2>
      </header>

      <div className="grid md:grid-cols-[2fr,1fr] gap-8 items-start">
        {/* Texte principal */}
        <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
          <p>
            Je m&apos;appelle <span className="text-slate-100 font-medium">Boytyz</span>, 
            développeur web spécialisé en front-end avec React et Tailwind CSS. 
            Je conçois des interfaces modernes, propres et orientées expérience utilisateur.
          </p>
          <p>
            J&apos;aime particulièrement structurer le code pour qu&apos;il soit 
            maintenable, réutilisable et compréhensible par une équipe. 
            Mon objectif est de travailler sur des projets concrets pour des entreprises 
            et des startups afin d&apos;apporter de la valeur via le produit.
          </p>
          <p>
            Je suis aussi en constante progression sur l&apos;aspect 
            <span className="text-slate-100 font-medium"> performance, SEO et bonnes pratiques</span>, 
            afin de livrer des sites rapides et bien référencés.
          </p>
        </div>

        {/* Cartes infos rapides */}
        <div className="space-y-4 text-sm">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
            <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-wide mb-2">
              Ce que je recherche
            </h3>
            <p className="text-slate-300">
              Opportunités en développement front-end, projets freelance ou 
              alternance/stage pour renforcer mes compétences en React & Tailwind.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
            <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-wide mb-2">
              Ce que j&apos;apporte
            </h3>
            <ul className="text-slate-300 list-disc list-inside space-y-1">
              <li>Code propre et structuré</li>
              <li>Bonne compréhension UI/UX</li>
              <li>Capacité à apprendre et m&apos;adapter vite</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
