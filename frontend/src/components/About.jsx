/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gray-900 text-white"
    >
      <motion.h2
        className="text-5xl font-bold mb-8 text-pink-400"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        À propos
      </motion.h2>

      <motion.p
        className="max-w-3xl text-lg text-gray-300 leading-relaxed"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Je suis un <span className="text-pink-400 font-semibold">développeur web</span> passionné par
        les technologies modernes, l’IA et l’automatisation. Mon objectif est de créer des
        expériences web performantes, esthétiques et utiles.  
        <br />
        <br />
        J'apprends constamment pour progresser, relever des défis techniques et concevoir des
        projets qui allient créativité et impact.
      </motion.p>
    </section>
  );
}
