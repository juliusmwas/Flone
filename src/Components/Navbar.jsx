import { useState, useContext } from "react";
import { IoCartOutline, IoMenu, IoClose } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "./Pages/CartContext"; // 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useContext(CartContext); // to Access cart
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate("/cart");
  };

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-5 bg-emerald-900 text-white z-50 border-b border-gray-600">
        <div className="p-1">
          <h1 className="text-xl lg:text-3xl font-bold">Flone.</h1>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex justify-between text-sm gap-8">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><a href="#newarrivals">New Arrivals</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Desktop Icons */}
        <div className="hidden md:flex text-xl items-center gap-5">
          {/* ✅ Cart icon always visible */}
          <div className="relative cursor-pointer" onClick={handleCartClick}>
            <IoCartOutline className="text-2xl hover:text-gray-300 transition" />
            {/* ✅ Badge only when items exist */}
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartItems.length}
              </span>
            )}
          </div>

          <button className="border cursor-pointer px-4 py-2 rounded-xl text-center text-sm">
            Login
          </button>
          <button className="bg-white cursor-pointer text-emerald-900 font-medium text-sm px-4 py-2 rounded-xl text-center">
            Get started
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="block md:hidden text-3xl cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <IoMenu />
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-emerald-900 text-white flex flex-col items-center justify-center gap-6 text-lg transform transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close button */}
        <IoClose
          className="absolute top-5 right-5 text-3xl cursor-pointer"
          onClick={() => setIsOpen(false)}
        />

        {/* Menu Links */}
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/shop" onClick={() => setIsOpen(false)}>Shop</Link>
        <a href="#newarrivals" onClick={() => setIsOpen(false)}>New Arrivals</a>
        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>

        {/*  Cart icon always visible on mobile */}
        <div
          className="relative cursor-pointer mt-4 text-3xl"
          onClick={() => {
            setIsOpen(false);
            handleCartClick();
          }}
        >
          <IoCartOutline />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartItems.length}
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3 mt-4">
          <button className="border px-6 py-2 rounded-xl text-sm">Login</button>
          <button className="bg-white text-emerald-900 font-medium text-sm px-6 py-2 rounded-xl">
            Get started
          </button>
        </div>
      </div>
    </>
  );
}
