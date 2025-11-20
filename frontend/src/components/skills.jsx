// src/components/Skills.jsx

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Tailwind CSS", "JavaScript (ES6+)", "HTML5", "CSS3"],
  },
  {
    title: "Outils & Écosystème",
    skills: ["Git / GitHub", "Vite", "Node.js (bases)", "REST API"],
  },
  {
    title: "Soft Skills",
    skills: ["Autonomie", "Curiosité", "Apprentissage rapide", "Rigueur"],
  },
];

export default function Skills() {
  return (
    <div className="space-y-8">
      <header>
        <p className="text-xs uppercase tracking-[0.25em] text-indigo-400">
          Compétences
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold mt-2">
          Ce que je maîtrise
        </h2>
        <p className="text-sm text-slate-400 mt-2 max-w-xl">
          Voici un aperçu des technologies et compétences avec lesquelles je suis
          le plus à l&apos;aise aujourd&apos;hui.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-6">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5"
          >
            <h3 className="text-sm font-semibold text-slate-100 mb-3">
              {group.title}
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
