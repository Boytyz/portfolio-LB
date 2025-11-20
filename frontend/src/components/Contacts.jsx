// src/components/Contact.jsx
export default function Contact() {
  return (
    <div className="space-y-8 max-w-xl">
      <header>
        <p className="text-xs uppercase tracking-[0.25em] text-indigo-400">
          Contact
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold mt-2">
          Travaillons ensemble
        </h2>
        <p className="text-sm text-slate-400 mt-2">
          Tu peux me contacter par email pour toute opportunité, question 
          ou projet. Je réponds généralement assez rapidement.
        </p>
      </header>

      <div className="space-y-4 text-sm">
        <p>
          <span className="text-slate-400">Email :</span>{" "}
          <a
            href="mailto:tonmail@exemple.com"
            className="text-indigo-400 hover:text-indigo-300"
          >
            tonmail@exemple.com
          </a>
        </p>

        <p>
          <span className="text-slate-400">GitHub :</span>{" "}
          <a
            href="https://github.com/Boytyz"
            className="text-indigo-400 hover:text-indigo-300"
            target="_blank"
            rel="noreferrer"
          >
            github.com/Boytyz
          </a>
        </p>
      </div>

      {/* Optionnel : mini formulaire (sans logique pour l'instant) */}
      <form className="space-y-4 text-sm">
        <div>
          <label className="block mb-1 text-slate-200">Nom</label>
          <input
            type="text"
            className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2
                       outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
            placeholder="Ton nom"
          />
        </div>

        <div>
          <label className="block mb-1 text-slate-200">Email</label>
          <input
            type="email"
            className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2
                       outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
            placeholder="ton.email@exemple.com"
          />
        </div>

        <div>
          <label className="block mb-1 text-slate-200">Message</label>
          <textarea
            rows={4}
            className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2
                       outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 resize-none"
            placeholder="Parle-moi de ton projet..."
          />
        </div>

        <button
          type="button"
          className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium
                     bg-indigo-500 hover:bg-indigo-400 text-white transition"
        >
          Envoyer (à connecter plus tard)
        </button>
      </form>
    </div>
  );
}

