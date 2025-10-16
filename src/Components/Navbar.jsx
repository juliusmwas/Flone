import { useState } from "react";
import { IoCartOutline, IoMenu } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="flex border-b-1 border-gray-600 items-center p-5 justify-between bg-emerald-900">
        <div className="p-1">
          <h1 className="text-xl lg:text-3xl font-bold text-white">Flone.</h1>
        </div>

        {/* NAV LINKS - visible on medium screens and up */}
        <ul className="hidden md:flex justify-between text-sm text-white gap-8 list-none">
          <li><a href="#hero">Home</a></li>
          <li><a href="">Shop</a></li>
          <li><a href="">New Arrivals</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
        </ul>

        {/* ICONS - visible on medium screens and up */}
        <div className="hidden md:flex text-white text-xl items-center gap-5">
          <IoCartOutline className="cursor-pointer" />
          <FaRegUser className="cursor-pointer" />
          <button className="border cursor-pointer px-4 py-2 rounded-xl text-center text-sm">Login</button>
          <button className="bg-white cursor-pointer text-emerald-900 font-medium text-sm px-4 py-2 rounded-xl text-center">Get started</button>
        </div>

        {/* MENU ICON - visible only on small screens */}
        <IoMenu
          className="block md:hidden text-white text-3xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-emerald-900 text-white flex flex-col items-center gap-4 py-4 transition-all duration-300">
          <a href="#hero">Home</a>
          <a href="">Shop</a>
          <a href="">New Arrivals</a>
          <a href="">About</a>
          <a href="">Contact</a>

          <div className="flex flex-col gap-2">
            <button className="border px-4 py-2 rounded-xl text-sm">Login</button>
            <button className="bg-white text-emerald-900 font-medium text-sm px-4 py-2 rounded-xl">Get started</button>
          </div>
        </div>
      )}
    </div>
  );
}
