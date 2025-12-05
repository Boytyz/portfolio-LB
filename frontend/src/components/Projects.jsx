// src/components/Projects.jsx

import { motion } from "framer-motion";

const projects = [
  {
    title: "Application de location immobilière - Kasa",
    description:
      "Interface utilisateur dynamique avec React, React Router et Sass Composants réutilisables, gestion du routing et animations CSS",
    image: "/projects/kasa.png", // ajouter le chemin vers l'image (placer dans public/projects)
    tech: ["React", "Vite", "Sass", "Node.js"],
    link: "https://github.com/Boytyz/projet-kasa",
    type: "Formation",
  },
  {
    title: "API de notation de livres - MonVieuxGrimoire",
    description:
      "Développement du serveur Express connecté à MongoDB,Implémentation d’un système CRUD sécurisé et gestion des images, Architecture MVC et conformité aux principes GreenCode",
    image: "/projects/monvieuxgrimoire.png", // ajouter le chemin vers l'image
    tech: ["JavaScript", "Node.js", "API REST", "Express", "MongoDB"],
    link: "https://github.com/Boytyz/Mon-vieux-Grimoire-P6",
    type: "Formation",
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
        {projects.map((project, index) => (
          <motion.div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 150}
            data-aos-duration="800"
            className="group bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-md hover:shadow-pink-400/40 transition"
          >
            {/* image du projet (si fournie) */}
            {project.image && (
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={`Aperçu du projet ${project.title}`}
                  className="w-full h-40 object-cover md:h-48"
                />
              </div>
            )}

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
                className="text-sm text-indigo-300 hover:text-indigo-200 underline underline-offset-4"
              >
                Voir le code
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
