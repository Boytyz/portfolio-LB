// src/components/Hero.jsx
export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10">
      {/* Colonne texte */}
      <div className="flex-1 space-y-6">
        <p className="text-xs uppercase tracking-[0.25em] text-indigo-400">
          Développeur Web · Backend
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Bonjour, moi c&apos;est{" "}
          <span className="text-indigo-400">Léo</span>.
          <br />
          Je conçois des interfaces web modernes
          <span className="text-slate-400"> pour le monde pro.</span>
        </h1>

        <p className="text-slate-300 max-w-xl text-sm sm:text-base">
          J’ai pour ambition d’être développeur FullStack, avec une appétence pour le BackEnd.
          Pour y parvenir, j’intègre l’ESGI ce qui va me permettre notamment d’améliorer mes compétences en BackEnd. 
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <a
            href="#projects"
            className="flex w-full sm:w-auto justify-center items-center px-5 py-2.5 rounded-full text-sm font-medium bg-indigo-600 hover:bg-indigo-700 text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
          >
            Voir mes projets
          </a>

          <a
            href="#contact"
            className="flex w-full sm:w-auto justify-center items-center px-5 py-2.5 rounded-full text-sm font-medium bg-indigo-600 hover:bg-indigo-700 text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
          >
            Me contacter
          </a>

          <a
            href="/léo-bouat-CV-alternance.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full sm:w-auto justify-center items-center px-5 py-2.5 rounded-full text-sm font-medium bg-indigo-600 hover:bg-indigo-700 text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
          >
            Voir mon CV
          </a>
        </div>

        <div className="flex flex-wrap gap-3 text-[11px] text-slate-400">
          <span className="px-3 py-1 rounded-full border border-slate-700">
            React
          </span>
          <span className="px-3 py-1 rounded-full border border-slate-700">
            Tailwind CSS
          </span>
          <span className="px-3 py-1 rounded-full border border-slate-700">
            JavaScript moderne
          </span>
        </div>
      </div>

      {/* Colonne visuelle */}
      <div className="flex-1 w-full">
        <div
          className="relative mx-auto h-64 w-64 md:h-80 md:w-80
          rounded-3xl bg-gradient-to-br from-indigo-500/30 via-slate-900 to-sky-500/30
          border border-slate-700/60 shadow-xl shadow-indigo-500/20
          flex items-center justify-center"
        >
          <div className="h-40 w-40 md:h-52 md:w-52 rounded-2xl bg-slate-900/80 border border-slate-700 flex items-center justify-center">
            {/* Remplace ce texte par ta photo (place le fichier dans `public/photo.jpeg`) */}
            <img
              src="/photo.jpeg"
              alt="Photo de Boytyz"
              className="h-full w-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
