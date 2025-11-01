/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const projects = [
  {
    title: "Site e-commerce de figurines",
    description: "Un site de vente en ligne pour les fans de mangas, avec React et Node.js.",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Application IA simplifiée",
    description: "Prototype d'application d'analyse d'images avec Python et Flask.",
    tech: ["Python", "Flask", "OpenAI API"],
  },
  {
    title: "Portfolio personnel",
    description: "Mon propre site, créé pour mettre en avant mes compétences et mes projets.",
    tech: ["React", "TailwindCSS", "Framer Motion"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-800 text-white flex flex-col justify-center items-center px-6 py-16"
    >
      <motion.h2
        className="text-5xl font-bold mb-12 text-indigo-400"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Mes projets
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-md hover:shadow-pink-400/40 transition"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-2xl font-semibold mb-2 text-pink-400">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="bg-pink-500/20 text-pink-300 text-sm px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
