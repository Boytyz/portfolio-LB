// src/components/Hero.jsx
export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10">
      {/* Colonne texte */}
      <div className="flex-1 space-y-6">
        <p className="text-xs uppercase tracking-[0.25em] text-indigo-400">
          Développeur Web · React & Tailwind
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Salut, moi c&apos;est{" "}
          <span className="text-indigo-400">Boytyz</span>.
          <br />
          Je conçois des interfaces web modernes
          <span className="text-slate-400"> pour le monde pro.</span>
        </h1>

        <p className="text-slate-300 max-w-xl text-sm sm:text-base">
          Développeur front-end spécialisé en React et Tailwind CSS. J&apos;aime
          construire des interfaces propres, performantes et faciles à
          maintenir, adaptées aux besoins des entreprises.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium
            bg-indigo-500 hover:bg-indigo-400 text-white transition"
          >
            Voir mes projets
          </a>

        <a
            href="#contact"
            className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium
            border border-slate-600 hover:border-indigo-400 hover:text-indigo-300 transition"
          >
            Me contacter
          </a>

        <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium
              border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white
              transition"
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
            {/* Tu pourras remplacer ça par une vraie image plus tard */}
            <span className="text-xs text-slate-300 text-center px-4">
              Ici, tu peux mettre ta photo, un avatar ou un logo.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
