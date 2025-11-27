import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent("Contact via portfolio");
    const body = encodeURIComponent(
      `Nom : ${form.name}\nEmail : ${form.email}\n\nMessage :\n${form.message}`
    );

    // 🔴 Remplace CETTE adresse par la tienne
    const mailto = `mailto:leobouat6@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailto;
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-6 py-16"
    >
      <motion.h2
        className="text-5xl font-bold mb-4 text-pink-400"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Me contacter
      </motion.h2>

      <motion.p
        className="mb-8 text-gray-300 text-center max-w-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Une opportunité, une alternance, un projet à construire ensemble ?
        N’hésite pas à m’écrire, je réponds dès que possible.
      </motion.p>

      <div className="flex flex-col md:flex-row gap-10 max-w-4xl w-full">
        {/* Bloc infos / réseaux */}
        <motion.div
          className="flex-1 space-y-4"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-2 text-indigo-400">
            Mes contacts
          </h3>
          <p className="text-gray-300">
            Tu peux aussi me joindre directement par email ou via mes réseaux :
          </p>
          <ul className="space-y-2 text-pink-300">
            <li>
              📧{" "}
              <a
                
                className="hover:underline"
              >
                leobouat6@gmail.com
              </a>
            </li>
            <li>
              💼{" "}
              <a
                href="https://www.linkedin.com/in/l%C3%A9o-bouat-9b1a75269/"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Mon LinkedIn
              </a>
            </li>
            <li>
              💻{" "}
              <a
                href="https://github.com/Boytyz?tab=repositories"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Mon GitHub
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Formulaire */}
        <motion.form
          className="flex-1 flex flex-col gap-4 w-full"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            value={form.name}
            onChange={handleChange}
            className="p-3 rounded-lg bg-white/10 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={form.email}
            onChange={handleChange}
            className="p-3 rounded-lg bg-white/10 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
          <textarea
            name="message"
            placeholder="Votre message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            className="p-3 rounded-lg bg-white/10 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
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
      </div>
    </section>
  );
}


