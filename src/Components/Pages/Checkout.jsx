import React, { useContext, useState } from "react";
import { CartContext } from "../Pages/CartContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cartItems, subtotal } = useContext(CartContext);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    paymentMethod: "cash",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      !formData.city
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    // Simulate order placement
    alert(
      `✅ Order placed successfully!\n\nPayment: ${formData.paymentMethod.toUpperCase()}\nTotal: $${(
        subtotal + 10
      ).toFixed(2)}`
    );

    // Optionally redirect to home or success page
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 md:px-20">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Checkout</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {/* 🏠 Shipping Details */}
        <form
          onSubmit={handlePlaceOrder}
          className="md:col-span-2 bg-white rounded-2xl shadow p-6"
        >
          <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>

          <div className="grid gap-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="border p-3 rounded-md"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="border p-3 rounded-md"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="border p-3 rounded-md"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Street Address"
              value={formData.address}
              onChange={handleChange}
              className="border p-3 rounded-md"
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City / Town"
              value={formData.city}
              onChange={handleChange}
              className="border p-3 rounded-md"
              required
            />
          </div>

          {/* 💳 Payment Method */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-3">Payment Method</h2>
            <div className="space-y-3">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cash"
                  checked={formData.paymentMethod === "cash"}
                  onChange={handleChange}
                />
                Cash on Delivery
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={formData.paymentMethod === "card"}
                  onChange={handleChange}
                />
                Credit / Debit Card
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="mpesa"
                  checked={formData.paymentMethod === "mpesa"}
                  onChange={handleChange}
                />
                M-Pesa
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="mt-8 bg-emerald-900 text-white w-full py-3 rounded-md font-semibold hover:bg-emerald-800 transition"
          >
            Place Order
          </button>
        </form>

        {/* 🧾 Order Summary */}
        <div className="bg-white rounded-2xl shadow p-6 h-fit">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between mb-3 border-b border-gray-200 pb-2"
            >
              <span>{item.name} × {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}

          <div className="flex justify-between mt-4">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between text-gray-600">
            <span>Delivery</span>
            <span>$10.00</span>
          </div>

          <hr className="my-3" />

          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>${(subtotal + 10).toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
