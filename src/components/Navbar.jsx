import React from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";

const Navbar = ({ title }) => {
  return (
    <header className="bg-slate-800 text-white shadow-md">
      <div className="flex items-center justify-between p-4 md:px-6">
        <div className="hidden sm:block w-full text-center">
          <h1 className="text-xl font-semibold">{title}</h1>
        </div>
        <div className="flex items-center space-x-4 ml-auto">
          <button className="p-2 rounded-full hover:bg-slate-700 transition-colors relative">
            <FaBell className="text-xl" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
          </button>
          <div className="h-8 w-px bg-slate-600"></div>
          <div className="flex items-center space-x-2 cursor-pointer group">
            <div className="h-8 w-8 rounded-full bg-slate-600 flex items-center justify-center group-hover:bg-slate-500 transition-colors">
              <FaUserCircle className="text-xl" />
            </div>
            <span className="hidden md:inline text-sm font-medium">Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
