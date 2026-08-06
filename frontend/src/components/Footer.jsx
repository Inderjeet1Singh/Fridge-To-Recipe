import { Link } from "react-router-dom";
import { FaRegCopyright } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-green-50 border-t border-green-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 flex flex-col md:flex-row items-center justify-center gap-4">
        {/* Copyright */}
        <p className=" flex items-center gap-1 text-gray-600 text-sm text-center">
          <FaRegCopyright />
          {new Date().getFullYear()} FridgeToRecipe. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
