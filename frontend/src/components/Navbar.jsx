// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Navbar() {
  const links = [
    { name: "Accueil", href: "#" },
    { name: "À propos", href: "#about" },
    { name: "Projets", href: "#projects" },
    { name: "Contact", href: "#contact" },
    { name: "Accueil", href: "#hero" }
  ];

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

        {/* Liens */}
        <ul className="flex gap-6 text-white font-medium">
          {links.map((link, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a href={link.href} className="hover:text-pink-400 transition">
                {link.name}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
