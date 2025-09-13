import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Debounce search
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (query.length > 2) handleSearch(query);
      else setResults([]);
    }, 400);
    return () => clearTimeout(timeout);
  }, [query]);

  // Fetch data
  const handleSearch = async (keyword) => {
    try {
      setLoading(true);
      const res = await axios.get(`https://api.coingecko.com/api/v3/search?query=${keyword}`);
      setResults(res.data.coins || []);
    } catch (err) {
      console.error("Search error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = (coinId) => {
    setQuery("");
    setResults([]);
    router.push(`/stock/${coinId}`);
  };

  return (
    <div className="w-full max-w-md mx-auto relative">
      {/* Search Box */}
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search cryptocurrency..."
          className="w-full rounded-full px-4 py-2 bg-indigo-50 border border-indigo-200 text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
        />
        {query && (
          <button
            onClick={() => { setQuery(""); setResults([]); }}
            className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600 transition"
          >
            ✕
          </button>
        )}
      </div>

      {/* Loading Indicator */}
      {loading && (
        <div className="flex justify-center mt-2">
          <div className="w-5 h-5 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Results */}
      {results.length > 0 && (
        <ul className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-64 overflow-y-auto">
          {results.map((coin) => (
            <li
              key={coin.id}
              onClick={() => handleSelect(coin.id)}
              className="p-2 cursor-pointer hover:bg-indigo-50 flex items-center transition"
            >
              <img src={coin.thumb} alt={coin.name} className="w-5 h-5 mr-2" />
              <span className="text-gray-800">{coin.name}</span>
              <span className="text-gray-500 ml-1">({coin.symbol.toUpperCase()})</span>
            </li>
          ))}
        </ul>
      )}

      {/* No results */}
      {!loading && query.length > 2 && results.length === 0 && (
        <p className="mt-2 text-sm text-gray-500 text-center">No results found</p>
      )}
    </div>
  );
}
