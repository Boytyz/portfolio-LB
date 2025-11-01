/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */

export default function Navbar() {
  const links = ["Accueil", "À propos", "Projets", "Contact"];

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <motion.h1
          className="text-2xl font-bold text-white tracking-widest"
          whileHover={{ scale: 1.1 }}
        >
          LB<span className="text-pink-400">.</span>
        </motion.h1>

        {/* Navigation Links */}
        <ul className="flex gap-6 text-white font-medium">
          {links.map((link, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1, color: "#f472b6" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-pointer"
            >
              {link}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
