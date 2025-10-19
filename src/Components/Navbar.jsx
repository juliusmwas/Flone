import { useState, useContext } from "react";
import {
  IoCartOutline,
  IoMenu,
  IoClose,
  IoPersonOutline,
} from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "./Pages/CartContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [user, setUser] = useState(null); // ✅ Store logged-in user

  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCartClick = () => navigate("/cart");

  // ✅ Mock login & registration
  const handleLogin = (e) => {
    e.preventDefault();
    setUser({ name: "John Doe" });
    setShowLogin(false);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setUser({ name: "New User" });
    setShowRegister(false);
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
          {/* 🛒 Cart */}
          <div className="relative cursor-pointer" onClick={handleCartClick}>
            <IoCartOutline className="text-2xl hover:text-gray-300 transition" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartItems.length}
              </span>
            )}
          </div>

          {/* 👤 User logic */}
          {!user ? (
            <>
              <button
                className="border cursor-pointer px-4 py-2 rounded-xl text-center text-sm"
                onClick={() => setShowLogin(true)}
              >
                Login
              </button>
              <button
                className="bg-white cursor-pointer text-emerald-900 font-medium text-sm px-4 py-2 rounded-xl text-center"
                onClick={() => setShowRegister(true)}
              >
                Get started
              </button>
            </>
          ) : (
            <IoPersonOutline
              className="text-2xl cursor-pointer hover:text-gray-300 transition"
              onClick={() => navigate("/account")}
            />
          )}
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
        <IoClose
          className="absolute top-5 right-5 text-3xl cursor-pointer"
          onClick={() => setIsOpen(false)}
        />

        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/shop" onClick={() => setIsOpen(false)}>Shop</Link>
        <a href="#newarrivals" onClick={() => setIsOpen(false)}>New Arrivals</a>
        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>

        {/* Mobile Cart */}
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

        {/* Mobile Buttons */}
        {!user && (
          <div className="flex flex-col gap-3 mt-4">
            <button
              className="border px-6 py-2 rounded-xl text-sm"
              onClick={() => setShowLogin(true)}
            >
              Login
            </button>
            <button
              className="bg-white text-emerald-900 font-medium text-sm px-6 py-2 rounded-xl"
              onClick={() => setShowRegister(true)}
            >
              Get started
            </button>
          </div>
        )}

        {user && (
          <IoPersonOutline
            className="text-3xl mt-4 cursor-pointer"
            onClick={() => navigate("/account")}
          />
        )}
      </div>

      {/* 🧾 Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl p-8 w-[90%] max-w-md shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Login</h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <input type="email" placeholder="Email" className="border p-3 rounded-md w-full" required />
              <input type="password" placeholder="Password" className="border p-3 rounded-md w-full" required />
              <button type="submit" className="bg-emerald-900 text-white w-full py-3 rounded-md hover:bg-emerald-800 transition">Login</button>
            </form>
            <button onClick={() => setShowLogin(false)} className="mt-4 text-gray-600 hover:underline w-full text-center">Cancel</button>
          </div>
        </div>
      )}

      {/* 🧾 Register Modal */}
      {showRegister && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl p-8 w-[90%] max-w-md shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Create Account</h2>
            <form onSubmit={handleRegister} className="space-y-4">
              <input type="text" placeholder="Full Name" className="border p-3 rounded-md w-full" required />
              <input type="email" placeholder="Email" className="border p-3 rounded-md w-full" required />
              <input type="password" placeholder="Password" className="border p-3 rounded-md w-full" required />
              <button type="submit" className="bg-emerald-900 text-white w-full py-3 rounded-md hover:bg-emerald-800 transition">Register</button>
            </form>
            <button onClick={() => setShowRegister(false)} className="mt-4 text-gray-600 hover:underline w-full text-center">Cancel</button>
          </div>
        </div>
      )}
    </>
  );
}
