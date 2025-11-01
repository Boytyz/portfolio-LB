export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 py-6 text-center">
      <p>
        © {new Date().getFullYear()} <span className="text-pink-400 font-semibold">Léo B.</span> — 
        Tous droits réservés.
      </p>
    </footer>
  );
}
