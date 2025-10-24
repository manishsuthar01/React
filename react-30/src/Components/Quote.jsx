import { useEffect, useState } from "react";

export default function Quote() {
  const [datas, setdatas] = useState({});
  const [next, setnext] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const [showFav, setShowFav] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    window.speechSynthesis.cancel();
    fetch("https://thequoteshub.com/api/")
      .then((res) => res.json())
      .then((data) => setdatas(data))
      .catch((e) => console.error(e));
    return () => {
      datas.text = false;
    };
  }, [next]);

  const speakQuote = () => {
    if (!datas.text) return;
    const utterance = new SpeechSynthesisUtterance(
      `${datas.text} — ${datas.author || "Unknown"}`
    );
    utterance.rate = 1;
    utterance.pitch = 1;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  const saveFavorite = () => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    const exists = stored.some((item) => item.id === datas.id);
    if (!exists) {
      stored.push(datas);
      localStorage.setItem("favorites", JSON.stringify(stored));
      setMessage("✅ Added to Favorites!");
    } else {
      setMessage("⚠️ Already in Favorites!");
    }
    setTimeout(() => setMessage(""), 2000);
  };

  const loadFavorites = () => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(stored);
    setShowFav(true);
  };

  const removeFavorite = (id) => {
    let stored = JSON.parse(localStorage.getItem("favorites")) || [];
    stored = stored.filter((item) => item.id !== id);
    localStorage.setItem("favorites", JSON.stringify(stored));
    setFavorites(stored);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 p-6">
      <div className="backdrop-blur-xl bg-white/80 shadow-2xl rounded-3xl p-10 max-w-2xl w-full text-center border border-gray-300">
        {!showFav ? (
          <>
            {message && (
              <p className="mt-2 text-sm text-green-700 font-semibold animate-fade">
                {message}
              </p>
            )}

            <p className="text-2xl font-serif text-gray-800 italic leading-relaxed">
              “{datas.text || "Loading..."}”
            </p>

            <div className="mt-8">
              <p className="text-lg font-medium text-gray-600 tracking-wide">
                — {datas.author || "Unknown"}
              </p>
              <p className="text-sm text-gray-400 mt-1">Quote ID: {datas.id}</p>

              <div className="flex justify-center flex-wrap gap-4 mt-8">
                <button
                  onClick={() => setnext((prev) => prev + 1)}
                  className="px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-indigo-700 text-white font-semibold rounded-xl shadow-md hover:scale-105 transition-transform"
                >
                  ↻ New Quote
                </button>
                <button
                  onClick={speakQuote}
                  className="px-5 py-2.5 bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold rounded-xl shadow-md hover:scale-105 transition-transform"
                >
                  🔊 Listen
                </button>
                <button
                  onClick={saveFavorite}
                  className="px-5 py-2.5 bg-gradient-to-r from-pink-500 to-pink-700 text-white font-semibold rounded-xl shadow-md hover:scale-105 transition-transform"
                >
                  ❤️ Save
                </button>
                <button
                  onClick={loadFavorites}
                  className="px-5 py-2.5 bg-gradient-to-r from-gray-600 to-gray-800 text-white font-semibold rounded-xl shadow-md hover:scale-105 transition-transform"
                >
                  ⭐ Liked
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6 text-gray-800">
                ⭐ Favorite Quotes
              </h2>
              {favorites.length === 0 ? (
                <p className="text-gray-500 italic">No favorites yet.</p>
              ) : (
                <ul className="space-y-4">
                  {favorites.map((q) => (
                    <li
                      key={q.id}
                      className="p-5 border rounded-xl shadow-sm bg-white/70  transition"
                    >
                      <p className="italic text-lg text-gray-800">“{q.text}”</p>
                      <p className="mt-2 text-sm text-gray-600">
                        — {q.author || "Unknown"}
                      </p>
                      <button
                        onClick={() => removeFavorite(q.id)}
                        className="mt-2 text-red-500 hover:text-red-700 text-sm font-medium"
                      >
                        🗑️ Remove
                      </button>
                    </li>
                  ))}
                </ul>
              )}
              <button
                onClick={() => setShowFav(false)}
                className="mt-8 px-6 py-2 bg-gradient-to-r from-indigo-500 to-indigo-700 text-white rounded-xl shadow-lg hover:scale-105 transition-transform"
              >
                ← Back
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
