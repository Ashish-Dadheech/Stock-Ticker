import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-indigo-900 text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="hover:text-indigo-300 transition">Stock Picks</Link>
            <Link href="/" className="hover:text-indigo-300 transition">Research Report</Link>
            <Link href="/" className="hover:text-indigo-300 transition">Market</Link>
            <Link href="/" className="hover:text-indigo-300 transition">Tools</Link>
            <Link href="/" className="hover:text-indigo-300 transition">Portal AI</Link>
          </div>

          {/* Search bar */}
          <div className="hidden md:block flex-1 mx-4">
            <input
              type="text"
              placeholder="Search Stocks..."
              className="w-full rounded-lg px-3 py-1 bg-indigo-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Right side - Pricing + Login */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="hover:text-indigo-300 transition">View Pricing</Link>
            <button
              onClick={() => setShowLogin(true)}
              className="hover:text-indigo-300 transition"
            >
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-indigo-800 px-4 pb-4 space-y-2">
            <Link href="/" className="block hover:text-indigo-300 transition">Stock Picks</Link>
            <Link href="/" className="block hover:text-indigo-300 transition">Research Report</Link>
            <Link href="/" className="block hover:text-indigo-300 transition">Market</Link>
            <Link href="/" className="block hover:text-indigo-300 transition">Tools</Link>
            <Link href="/" className="block hover:text-indigo-300 transition">Portal AI</Link>
            <Link href="/" className="block hover:text-indigo-300 transition">View Pricing</Link>
            <button
              onClick={() => { setShowLogin(true); setIsMenuOpen(false); }}
              className="block hover:text-indigo-300 transition w-full text-left"
            >
              Login
            </button>
          </div>
        )}
      </nav>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-sm shadow-lg">
            <h2 className="text-xl font-bold text-center mb-4 text-gray-800">Login</h2>
            <input
              type="email"
              placeholder="Email"
              className="w-full mb-3 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
            >
              Login
            </button>
            <button
              onClick={() => setShowLogin(false)}
              className="mt-3 w-full text-gray-500 hover:text-gray-700 text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}
