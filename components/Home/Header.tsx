"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="px-4 sm:px-6 lg:px-8 py-4 border-b border-gray-800 relative">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="text-green-400 font-bold text-xl sm:text-2xl">
          CommitGen AI
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-gray-300">
          <a
            href="#"
            className="hover:text-white transition-colors duration-200"
          >
            Features
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-200"
          >
            Login
          </a>
          <button className="bg-green-500 px-4 py-2 rounded-lg text-black font-semibold hover:bg-green-600 transition-colors duration-200">
            Try Now
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
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
      </div>
    </header>
  );
}

export default Header;
