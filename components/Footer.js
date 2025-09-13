import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    "Pricing",
    "Affiliate",
    "Contact",
    "Terms",
    "Privacy",
    "Disclaimer",
    "Disclosure",
    "Refund Policy",
    "Investor Charter",
    "Complaints",
    "Audit Report",
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto py-6 px-4 text-center">
        {/* Toggle Button for Mobile */}
        <div className="sm:hidden mb-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center w-full py-2 px-4 bg-gray-800 rounded text-gray-300 hover:text-white hover:bg-gray-700 transition"
          >
            {isOpen ? "Hide Links" : "Show Links"}
            {isOpen ? <ChevronUp className="ml-2 w-4 h-4" /> : <ChevronDown className="ml-2 w-4 h-4" />}
          </button>
        </div>

        {/* Links - Grid for larger screens, collapsible for mobile */}
        <div
          className={`${
            isOpen ? "grid" : "hidden"
          } grid-cols-2 gap-3 text-sm text-center sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8`}
        >
          {links.map((link, idx) => (
            <Link
              key={idx}
              href="/"
              className="hover:text-white transition"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 mt-6">
          © Copyright 2025 © Coingekko Technologies Pvt Ltd. Datafeed provided by Coingekko Infotech
        </p>
      </div>
    </footer>
  );
}
