import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-transparent fixed top-0 left-0 w-full z-30 backdrop-blur-md bg-white/10 border-b border-white/20 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-white">
            MyLogo
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex justify-center flex-grow space-x-8">
            <a href="#home" className="text-white hover:text-orange-400 transition">Home</a>
            <a href="#about" className="text-white hover:text-orange-400 transition">About</a>
            <a href="#services" className="text-white hover:text-orange-400 transition">Services</a>
            <a href="#contact" className="text-white hover:text-orange-400 transition">Contact</a>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-8">
            <button className="bg-transparent text-white border-2 border-white px-6 py-2 rounded-lg text-sm hover:bg-white hover:text-black transition">
              Sign In
            </button>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-lg text-sm hover:bg-orange-600 transition">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-orange-400 focus:outline-none"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden
            bg-white/10
            backdrop-blur-md
            rounded-md
            overflow-hidden
            transition-all duration-300 ease-in-out
            text-center
            ${
              isOpen
                ? 'max-h-96 opacity-100 py-4 px-6 pointer-events-auto'
                : 'max-h-0 opacity-0 py-0 px-6 pointer-events-none'
            }
          `}
          aria-hidden={!isOpen}
        >
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-white hover:text-orange-400 transition"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-white hover:text-orange-400 transition"
          >
            About
          </a>
          <a
            href="#services"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-white hover:text-orange-400 transition"
          >
            Services
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-white hover:text-orange-400 transition"
          >
            Contact
          </a>
          <div className="flex flex-col items-center space-y-3 mt-4">
            <button className="w-full max-w-xs bg-transparent text-white border-2 border-white px-6 py-2 rounded-lg text-sm hover:bg-white hover:text-black transition">
              Sign In
            </button>
            <button className="w-full max-w-xs bg-orange-500 text-white px-6 py-2 rounded-lg text-sm hover:bg-orange-600 transition">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;