import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center py-12 px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-3 drop-shadow-lg">
          Crypto App
        </h1>
        <p className="text-lg sm:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
          Search, analyze, and track your favorite stocks with real-time data and professional charts
        </p>
      </div>

      {/* Search Section */}
      <div className="mt-10 max-w-2xl mx-auto px-4">
        <SearchBar />
      </div>

      {/* Crypto Info Section */}
      <div className="mt-14 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-800">
          About Crypto Markets
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition">
            <h3 className="font-semibold text-lg text-indigo-600 mb-2">Real-Time Prices</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Get instant access to the latest cryptocurrency prices with live market updates.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition">
            <h3 className="font-semibold text-lg text-purple-600 mb-2">Professional Charts</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Analyze trends with advanced charting tools designed for crypto traders.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition">
            <h3 className="font-semibold text-lg text-pink-600 mb-2">Global Coverage</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Stay connected to the worldwide crypto market with top news and data feeds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
