import { Link } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="text-3xl font-extrabold tracking-tight">
          <span className="text-green-600">Fridge</span>
          <span className="text-gray-900">ToRecipe</span>
        </Link>
        <div className="hidden md:flex items-center gap-10">
          <Link
            to="/"
            className="text-gray-700 font-medium hover:text-green-600 transition"
          >
            Home
          </Link>
          <Link
            to="/generate"
            className="text-gray-700 font-medium hover:text-green-600 transition"
          >
            Generate Recipe
          </Link>

          <Link
            to="/about"
            className="text-gray-700 font-medium hover:text-green-600 transition"
          >
            About
          </Link>
        </div>

        {/* For Mobile Screen */}
        <button
          className="md:hidden text-3xl text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block px-6 py-4 text-gray-700 hover:bg-green-50 hover:text-green-600"
          >
            Home
          </Link>
          <Link
            to="/generate"
            onClick={() => setIsOpen(false)}
            className="block px-6 py-4 text-gray-700 hover:bg-green-50 hover:text-green-600"
          >
            Generate Recipe
          </Link>

          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="block px-6 py-4 text-gray-700 hover:bg-green-50 hover:text-green-600"
          >
            About
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
