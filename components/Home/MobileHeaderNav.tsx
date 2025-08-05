"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function MobileHeaderNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="absolute top-full left-0 right-0 bg-gray-800 border-b border-gray-700 md:hidden z-50">
          <div className="flex flex-col px-4 py-4 space-y-4">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Features
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Login
            </a>
            <button className="bg-green-500 px-4 py-2 rounded-lg text-black font-semibold hover:bg-green-600 transition-colors duration-200 w-full">
              Try Now
            </button>
          </div>
        </nav>
      )}
    </>
  );
}

export default MobileHeaderNav;
