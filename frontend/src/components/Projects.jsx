// src/components/Projects.jsx

const projects = [
  {
    title: "Portfolio LB",
    description:
      "Mon portfolio personnel, développé avec React et Tailwind CSS. Présentation de mes projets et de mon profil.",
    tech: ["React", "Tailwind CSS"],
    link: "https://github.com/Boytyz/portfolio-LB",
    type: "Personnel",
  },
  {
    title: "Projet Exemple",
    description:
      "Un projet que tu pourras décrire ici (application web, landing page, dashboard...).",
    tech: ["React", "API", "UI/UX"],
    link: "#",
    type: "Exemple",
  },
];

export default function Projects() {
  return (
    <div className="space-y-8">
      <header>
        <p className="text-xs uppercase tracking-[0.25em] text-indigo-400">
          Projets
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold mt-2">
          Quelques réalisations
        </h2>
        <p className="text-sm text-slate-400 mt-2 max-w-xl">
          Une sélection de projets sur lesquels j&apos;ai travaillé récemment. 
          D&apos;autres sont disponibles sur mon GitHub.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group relative rounded-2xl border border-slate-800 bg-slate-900/40 p-5
                       hover:border-indigo-500/70 hover:-translate-y-1 transition"
          >
            <div className="flex items-center justify-between gap-3 mb-3">
              <h3 className="text-lg font-semibold group-hover:text-indigo-400">
                {project.title}
              </h3>
              <span className="text-[11px] px-2 py-1 rounded-full bg-slate-800 text-slate-300">
                {project.type}
              </span>
            </div>

            <p className="text-sm text-slate-300 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-[11px] px-2 py-1 rounded-full bg-slate-800 text-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>

            {project.link && project.link !== "#" && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-indigo-400 hover:text-indigo-300 underline underline-offset-4"
              >
                Voir le code
              </a>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
