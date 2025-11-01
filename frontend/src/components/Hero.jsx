/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";


export default function Hero() {
  return (
    <section className="relative flex flex-col justify-center items-center text-center h-screen bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white overflow-hidden">
      {/* Animation d'apparition */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl font-extrabold mb-4 tracking-tight">
          <span className="text-white">Léo</span>{" "}
          <span className="text-pink-300">B.</span>
        </h1>
        <p className="text-xl font-light mb-8">
          Apprendre constamment, créer passionnément 🚀
        </p>
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-purple-600 font-semibold py-3 px-6 rounded-full shadow-md hover:bg-pink-100 transition"
        >
          Voir mes projets
        </motion.a>
      </motion.div>

      {/* Effet décoratif */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent" />
    </section>
  );
}
