import React, { useState } from "react";
import User from './assets/user.jpg';
import Logo from "./assets/zysk-logo.png";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  return (
    <nav className="bg-white border-b border-gray-300 w-full h-20 flex items-center px-4 sm:px-8">
      <div className="flex-shrink-0">
        <img src={Logo} alt="Zysk-Logo" className="h-10 cursor-pointer" />
      </div>

      <ul className="flex ml-4 sm:ml-10 gap-8 text-gray-700 text-base font-medium flex-grow hidden sm:flex">
        <li className="hover:text-blue-600 cursor-pointer">Home</li>

        <li className="relative flex items-center gap-2 cursor-pointer">
          <span>Products</span>
          <button
            onClick={() => toggleDropdown("products")}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            ▼
          </button>
          {openDropdown === "products" && (
            <ul className="absolute left-0 mt-2 bg-white border border-gray-200 shadow-md rounded-md">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Product 1</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Product 2</li>
            </ul>
          )}
        </li>

        <li className="relative flex items-center gap-2 cursor-pointer">
          <span>Resources</span>
          <button
            onClick={() => toggleDropdown("resources")}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            ▼
          </button>
          {openDropdown === "resources" && (
            <ul className="absolute left-0 mt-2 bg-white border border-gray-200 shadow-md rounded-md">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Blog</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Tutorials</li>
            </ul>
          )}
        </li>

        <li className="hover:text-blue-600 cursor-pointer">Pricing</li>
      </ul>

      <div className="flex-shrink-0">
        <img
          src={User}
          alt="User Avatar"
          className="w-10 h-10 rounded-full border opacity-80 cursor-pointer"
          style={{
            borderWidth: "0.75px",
          }}
        />
      </div>

      <div className="sm:hidden flex ml-auto">
        <button
          onClick={() => toggleDropdown("mobileMenu")}
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          ☰
        </button>
        {openDropdown === "mobileMenu" && (
          <ul className="absolute right-0 mt-2 bg-white border border-gray-200 shadow-md rounded-md w-48">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Home</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Products</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Resources</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Pricing</li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
