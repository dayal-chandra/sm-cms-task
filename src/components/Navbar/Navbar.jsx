import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import ActionButtons from "../ActionButtons/ActionButtons";
import { LuMenu, LuX } from "react-icons/lu";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Shop</a>
      </li>
      <li>
        <a>Product</a>
      </li>
      <li>
        <div className="flex justify-start items-center">
          <a>Blog</a>
          <IoIosArrowDown></IoIosArrowDown>
        </div>
      </li>
      <li>
        <a>Contact Us</a>
      </li>
    </>
  );

  return (
    <div className="drawer drawer-end">
      <input id="nav-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content">
        <div className="bg-base-100 shadow-sm">
          <div className="navbar max-w-7xl mx-auto px-5">
            <div className="navbar-start">
              <div className="flex justify-center items-center">
                <img className="w-8 h-8" src="/logo.png" alt="logo" />
                <h1 className="text-[#CE4E61] text-3xl font-bold whitespace-nowrap">
                  Velvet Glow
                </h1>
              </div>
            </div>

            <div className="navbar-center hidden md:flex">
              <ul className="menu menu-horizontal px-1">{navItems}</ul>
            </div>

            <div className="navbar-end">
              <div className="hidden md:flex">
                <ActionButtons />
              </div>

              <label htmlFor="nav-drawer" className="md:hidden cursor-pointer">
                <LuMenu size={25} />
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="drawer-side z-40">
        <label htmlFor="nav-drawer" className="drawer-overlay"></label>
        <div className="min-h-full w-64 bg-base-100 p-4 relative">
          <div className="absolute top-4 right-4 md:hidden">
            <label htmlFor="nav-drawer" className="cursor-pointer">
              <LuX size={25} />
            </label>
          </div>
          <ul className="menu text-base-content mt-10">{navItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
