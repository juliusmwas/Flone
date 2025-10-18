import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Pages/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  // ✅ Safely handle prices with or without "$"
  const parsePrice = (price) => {
    if (!price) return 0;
    return typeof price === "string"
      ? parseFloat(price.replace(/[^0-9.]/g, "")) // removes $ or commas
      : price;
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + parsePrice(item.price) * item.quantity,
    0
  );

  const deliveryFee = cartItems.length > 0 ? 10 : 0;
  const total = subtotal + deliveryFee;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 md:px-20">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-600 mb-6">Your cart is currently empty.</p>
          <Link
            to="/shop"
            className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {/* 🛍 Cart Items */}
          <div className="md:col-span-2 bg-white rounded-2xl shadow p-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center justify-between border-b border-gray-200 py-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-600">
                      ${parsePrice(item.price).toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-4 md:mt-0">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value))
                    }
                    className="w-16 border rounded-md text-center"
                  />
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* 💵 Summary */}
          <div className="bg-white rounded-2xl shadow p-6 h-fit">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between mb-2 text-gray-600">
              <span>Delivery Estimate</span>
              <span>${deliveryFee.toFixed(2)}</span>
            </div>

            <hr className="my-3" />

            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <div className="flex flex-col gap-3 mt-6">
              <Link
                to="/shop"
                className="border border-gray-300 py-3 rounded-md text-center hover:bg-gray-100 transition"
              >
                Continue Shopping
              </Link>

              <Link
                to="/checkout"
                className="bg-black text-white py-3 rounded-md text-center hover:bg-gray-800 transition"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
