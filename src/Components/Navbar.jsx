import React from 'react' ;
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
           <nav className="bg-white shadow-md px-6 py-3 flex items-center justify-between">

      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">
        &lt;code/&gt;
      </div>

      {/* Menu */}
      <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
        <NavLink to="/" className="hover:text-blue-600">Home</NavLink>
        <NavLink to="/about" className="hover:text-blue-600">About</NavLink>
        <NavLink to="/education" className="hover:text-blue-600">Education</NavLink>
        <NavLink to="/experience" className="hover:text-blue-600">Experience</NavLink>
        <NavLink to="/skills" className="hover:text-blue-600">Skills</NavLink>
        <NavLink to="/coding" className="hover:text-blue-600">Coding</NavLink>
        <NavLink to="/projects" className="hover:text-blue-600">Projects</NavLink>
        <NavLink to="/contact" className="hover:text-blue-600">Contact</NavLink>
      </ul>

      {/* Right Side Buttons */}
      <div className="flex items-center gap-3">

        {/* Hire Me Button */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700 transition">
          Hire Me
        </button>

        {/* Dark Mode Icon (dummy) */}
        <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full cursor-pointer">
          🌙
        </div>

      </div>

    </nav>
    );
};

export default Navbar;



 