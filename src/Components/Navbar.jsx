import { useState, useContext, useEffect } from "react";
import { IoCartOutline, IoMenu, IoClose, IoPersonOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "./Pages/CartContext";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [user, setUser] = useState(null);
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  // Handle cart click
  const handleCartClick = () => navigate("/cart");

  // 🔄 Track Firebase Auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => setUser(currentUser));
    return () => unsubscribe();
  }, []);

  // 🟩 Handle Registration
  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", userCredential.user.uid), {
        name,
        email,
        createdAt: new Date(),
      });
      setShowRegister(false);
      alert("✅ Account created successfully!");
    } catch (error) {
      alert(error.message);
    }
  };

  // 🟩 Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setShowLogin(false);
      alert("✅ Logged in successfully!");
    } catch (error) {
      alert(error.message);
    }
  };

  // 🟥 Logout
  const handleLogout = async () => {
    await signOut(auth);
    alert("Logged out successfully!");
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
          {/* Cart */}
          <div className="relative cursor-pointer" onClick={handleCartClick}>
            <IoCartOutline className="text-2xl hover:text-gray-300 transition" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartItems.length}
              </span>
            )}
          </div>

          {/* 🔐 Auth Buttons or Profile */}
          {!user ? (
            <>
              <button
                onClick={() => setShowLogin(true)}
                className="border cursor-pointer px-4 py-2 rounded-xl text-center text-sm"
              >
                Login
              </button>
              <button
                onClick={() => setShowRegister(true)}
                className="bg-white cursor-pointer text-emerald-900 font-medium text-sm px-4 py-2 rounded-xl text-center"
              >
                Get started
              </button>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <IoPersonOutline
                className="text-2xl cursor-pointer"
                onClick={() => navigate("/account")}
              />
              <button onClick={handleLogout} className="text-sm underline">
                Logout
              </button>
            </div>
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

        {/* Mobile Auth Buttons */}
        {!user ? (
          <div className="flex flex-col gap-3 mt-4">
            <button
              onClick={() => {
                setShowLogin(true);
                setIsOpen(false);
              }}
              className="border px-6 py-2 rounded-xl text-sm"
            >
              Login
            </button>
            <button
              onClick={() => {
                setShowRegister(true);
                setIsOpen(false);
              }}
              className="bg-white text-emerald-900 font-medium text-sm px-6 py-2 rounded-xl"
            >
              Get started
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-3 mt-4 items-center">
            <IoPersonOutline
              className="text-3xl cursor-pointer"
              onClick={() => {
                navigate("/account");
                setIsOpen(false);
              }}
            />
            <button
              onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}
              className="underline text-sm"
            >
              Logout
            </button>
          </div>
        )}
      </div>

      {/* 🔸 Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 px-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
            <h2 className="text-xl font-semibold mb-4 text-center">Login</h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <input name="email" type="email" placeholder="Email" className="border p-3 rounded-md w-full" required />
              <input name="password" type="password" placeholder="Password" className="border p-3 rounded-md w-full" required />
              <button type="submit" className="bg-emerald-900 text-white w-full py-3 rounded-md hover:bg-emerald-800 transition">
                Login
              </button>
            </form>
            <button
              onClick={() => setShowLogin(false)}
              className="mt-4 text-gray-600 hover:underline w-full text-center"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* 🔸 Register Modal */}
      {showRegister && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 px-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
            <h2 className="text-xl font-semibold mb-4 text-center">Create Account</h2>
            <form onSubmit={handleRegister} className="space-y-4">
              <input name="name" type="text" placeholder="Full Name" className="border p-3 rounded-md w-full" required />
              <input name="email" type="email" placeholder="Email" className="border p-3 rounded-md w-full" required />
              <input name="password" type="password" placeholder="Password" className="border p-3 rounded-md w-full" required />
              <button type="submit" className="bg-emerald-900 text-white w-full py-3 rounded-md hover:bg-emerald-800 transition">
                Register
              </button>
            </form>
            <button
              onClick={() => setShowRegister(false)}
              className="mt-4 text-gray-600 hover:underline w-full text-center"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}
