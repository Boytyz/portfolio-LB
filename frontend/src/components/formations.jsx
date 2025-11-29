// src/components/Formations.jsx

const formations = [
  {
    title: "Développement Web et Web Mobiles",
    school: "OpenClassrooms",
    period: "Janvier 2025 - Octobre 2025",
    description:
      "Développer un site web responsive et interactif et Gérer un projet web de la conception à la livraison",
    icon: "",
    stack: ["React", "html", "css", "node.js", "mongoDB", "JavaScript", "Git / GitHub", "méthodes agiles", "responsive design", "SE0", "accessibilité", "API REST", "Express",],
    logos: [
      { name: "React", src: "/logo/react.svg" },
      { name: "Tailwind", src: "/logo/tailwind.svg" },
      { name: "JS", src: "/logo/javascript.svg" },
    ],
  },
  {
    title: "Ingénieurie Blockchain – En cours",
    school: "ESGI Paris",
    period: "2025 - En cours",
    description:
      "Formation spécialisée dans la conception, l’analyse et l’amélioration d’architectures blockchain. Les étudiants développent des compétences opérationnelles sur Bitcoin, Ethereum, la sécurité, le développement d’applications et les cas d’usage professionnels. Le cursus mène à des postes tels qu’architecte blockchain, consultant crypto ou chef de projet.",
    icon: "",
    stack: ["Docker", "Solidity", "Smart Contracts", "language C", "Python", "base de données SQL/noSQL"],
    logos: [
      { name: "Python", src: "/logo/python.svg" },
      { name: "Docker", src: "/logo/docker.svg" },
    ],
  },
];

export default function Formations() {
  return (
    <div className="space-y-8">
      <header>
        <p className="text-xs uppercase tracking-[0.25em] text-indigo-400">
          Formations
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold mt-2">
          Mon parcours de formation
        </h2>
        <p className="text-sm text-slate-400 mt-2 max-w-xl">
          Un aperçu des formations et apprentissages qui construisent mon profil
          de développeur. J&apos;avance en continu entre théorie et pratique.
        </p>
      </header>

      {/* Timeline verticale */}
      <div className="relative border-l border-slate-800 pl-6 space-y-10">
        {formations.map((formation) => (
          <article
            key={formation.title}
            className="group relative pl-4"
          >
            {/* Point de la timeline + icône */}
            <div className="absolute -left-[1.45rem] flex items-center justify-center">
              <div className="relative">
                {/* Cercle animé */}
                <div className="h-4 w-4 rounded-full bg-indigo-500 group-hover:scale-110 transition-transform" />
                {/* Aura */}
                <div className="absolute inset-0 rounded-full bg-indigo-500/40 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                {/* Icône */}
                <div className="absolute -top-4 left-4 text-lg">
                  <span className="select-none">{formation.icon}</span>
                </div>
              </div>
            </div>

            {/* Card */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 transition-colors
                            group-hover:-translate-y-1 group-hover:border-indigo-500/60">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-100 mb-1">
                    {formation.title}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {formation.school}
                  </p>
                </div>
                <p className="text-[11px] text-slate-400 whitespace-nowrap">
                  {formation.period}
                </p>
              </div>

              <p className="text-sm text-slate-300 mt-3">
                {formation.description}
              </p>

              {/* Stack texte */}
              <div className="flex flex-wrap gap-2 mt-4">
                {formation.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] px-2 py-1 rounded-full bg-slate-800 text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Logos (placeholder) */}
              <div className="flex flex-wrap items-center gap-3 mt-4">
                {formation.logos.map((logo) => (
                  <div
                    key={logo.name}
                    className="flex items-center gap-2 text-[11px] text-slate-400"
                  >
                    {/* 
                      Tu dois créer ces fichiers dans /public/logos
                      (ex : /public/logos/react.svg, /public/logos/tailwindcss.svg, etc.)
                    */}
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="h-5 w-5 object-contain"
                      onError={(e) => {
                        // fallback simple si le logo n'existe pas
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    <span>{logo.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
