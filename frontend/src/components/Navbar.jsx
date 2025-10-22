import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-black shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <h1 className="text-2xl font-bold">
          <span className="text-blue-400">App</span>
          <span className="text-cyan-400">Dost</span>
        </h1>
        <p className="text-xs tracking-wide text-gray-400 mt-2">
          COMPLETE IT SOLUTION
        </p>
      </div>

      {/* Menu Links */}
      <ul className="hidden md:flex space-x-8 font-semibold text-gray-300">
        <li>
          <a href="#home" className="hover:text-blue-400 transition-colors">
            Home
          </a>
        </li>
        <li>
          <a href="#services" className="hover:text-blue-400 transition-colors">
            Services
          </a>
        </li>
        <li>
          <a href="#portfolio" className="hover:text-blue-400 transition-colors">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#resources" className="hover:text-blue-400 transition-colors">
            Resources
          </a>
        </li>
        <li>
          <a href="#careers" className="hover:text-blue-400 transition-colors">
            Careers
          </a>
        </li>
      </ul>

      {/* Button */}
      <button className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-5 py-2 rounded-lg shadow hover:scale-105 transition-transform">
        Get Started
      </button>

      {/* Mobile Menu Icon */}
      <div className="md:hidden cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
