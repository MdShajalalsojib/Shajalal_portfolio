import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" flex  items-center shadow-current justify-center p-3">
      {/* Logo */}
      <div className="flex justify-between gap-60 items-center">
        <a href="#home" className="group relative">
          <span className="text-2xl font-extrabold font-mono">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              &lt;code
            </span>
            <span className="text-accent">/&gt;</span>
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
        </a>

        {/* Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <NavLink to="/" className="hover:text-blue-600 ">
            Home
          </NavLink>
          <NavLink to="/about" className="hover:text-blue-600">
            About
          </NavLink>
          <NavLink to="/education" className="hover:text-blue-600">
            Education
          </NavLink>
          <NavLink to="/experience" className="hover:text-blue-600">
            Experience
          </NavLink>
          <NavLink to="/skills" className="hover:text-blue-600">
            Skills
          </NavLink>
          <NavLink to="/coding" className="hover:text-blue-600">
            Coding
          </NavLink>
          <NavLink to="/projects" className="hover:text-blue-600">
            Projects
          </NavLink>
          <NavLink to="/contact" className="hover:text-blue-600">
            Contact
          </NavLink>
        </ul>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-3">
          {/* Hire Me Button */}
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700 transition">
            Hire Me
          </button>

          {/* Dark Mode Icon (dummy) */}
          <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full cursor-pointer ">
            🌙
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
