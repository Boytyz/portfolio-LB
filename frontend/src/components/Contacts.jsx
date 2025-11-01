// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-6 py-16"
    >
      <motion.h2
        className="text-5xl font-bold mb-8 text-pink-400"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Me contacter
      </motion.h2>

      <motion.form
        className="flex flex-col gap-4 w-full max-w-md"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="Votre nom"
          className="p-3 rounded-lg bg-white/10 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <input
          type="email"
          placeholder="Votre email"
          className="p-3 rounded-lg bg-white/10 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <textarea
          placeholder="Votre message"
          rows="4"
          className="p-3 rounded-lg bg-white/10 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
        ></textarea>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 bg-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-pink-600 transition"
        >
          Envoyer ✉️
        </motion.button>
      </motion.form>
    </section>
  );
}
