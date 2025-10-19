import { useState, useContext, useEffect } from "react";
import { IoCartOutline, IoMenu, IoClose, IoPersonCircleOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "./Pages/CartContext";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [user, setUser] = useState(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  const handleCartClick = () => navigate("/cart");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setShowSignup(false);
      setEmail("");
      setPassword("");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setShowLogin(false);
      setEmail("");
      setPassword("");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <>
      {/* ✅ Fixed Navbar */}
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-5 bg-emerald-900 text-white z-50 border-b border-gray-600">
        <div className="p-1">
          <h1 className="text-xl lg:text-3xl font-bold">Flone.</h1>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex justify-between text-sm gap-8">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><a href="#newarrivals">New Arrivals</a></li>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>

        </ul>

        {/* Desktop Icons */}
        <div className="hidden md:flex text-xl items-center gap-5">
          {/* 🛒 Cart Icon */}
          <div className="relative cursor-pointer" onClick={handleCartClick}>
            <IoCartOutline className="text-2xl hover:text-gray-300 transition" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartItems.length}
              </span>
            )}
          </div>

          {/* 👤 Auth Buttons */}
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
                onClick={() => setShowSignup(true)}
              >
                Get started
              </button>
            </>
          ) : (
            <>
              <IoPersonCircleOutline
                className="text-3xl cursor-pointer hover:text-gray-300"
                onClick={() => navigate("/account")}
              />
              <button
                className="text-sm border px-3 py-1 rounded-lg"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
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

      {/* 📱 Mobile Overlay Menu */}
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
        <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="contact" onClick={() => setIsOpen(false)}>Contact</Link>
        

        {/* Cart Icon */}
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
        {!user ? (
          <div className="flex flex-col gap-3 mt-4">
            <button
              className="border px-6 py-2 rounded-xl text-sm"
              onClick={() => {
                setShowLogin(true);
                setIsOpen(false);
              }}
            >
              Login
            </button>
            <button
              className="bg-white text-emerald-900 font-medium text-sm px-6 py-2 rounded-xl"
              onClick={() => {
                setShowSignup(true);
                setIsOpen(false);
              }}
            >
              Get started
            </button>
          </div>
        ) : (
          <>
            <IoPersonCircleOutline
              className="text-4xl mt-5 cursor-pointer"
              onClick={() => {
                setIsOpen(false);
                navigate("/account");
              }}
            />
            <button
              className="border px-6 py-2 rounded-xl text-sm mt-2"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        )}
      </div>

      {/* 🔐 LOGIN MODAL */}
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-80 max-w-[90%] text-gray-800">
            <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
            <form onSubmit={handleLogin} className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Email"
                className="border p-2 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="border p-2 rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-emerald-900 text-white py-2 rounded mt-2"
              >
                Login
              </button>
              <button
                type="button"
                className="text-sm text-gray-500 mt-1"
                onClick={() => setShowLogin(false)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 📝 SIGNUP MODAL */}
      {showSignup && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-80 max-w-[90%] text-gray-800">
            <h2 className="text-xl font-bold mb-4 text-center">Create Account</h2>
            <form onSubmit={handleSignup} className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Email"
                className="border p-2 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="border p-2 rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-emerald-900 text-white py-2 rounded mt-2"
              >
                Register
              </button>
              <button
                type="button"
                className="text-sm text-gray-500 mt-1"
                onClick={() => setShowSignup(false)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
