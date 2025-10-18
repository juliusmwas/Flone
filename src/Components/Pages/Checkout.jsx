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
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    mpesaNumber: "",
  });

  const navigate = useNavigate();

  const deliveryFee = 10;
  const safeSubtotal = isNaN(subtotal) ? 0 : subtotal;
  const total = safeSubtotal + deliveryFee;

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

    // Validate based on payment method
    if (formData.paymentMethod === "card") {
      if (!formData.cardNumber || !formData.expiryDate || !formData.cvv) {
        alert("Please fill in all card details.");
        return;
      }
    }

    if (formData.paymentMethod === "mpesa" && !formData.mpesaNumber) {
      alert("Please enter your M-Pesa number.");
      return;
    }

    alert(
      `✅ Order placed successfully!\n\nName: ${formData.fullName}\nPayment: ${formData.paymentMethod.toUpperCase()}\nTotal: $${total.toFixed(
        2
      )}`
    );

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
              {["cash", "card", "mpesa"].map((method) => (
                <label key={method} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={method}
                    checked={formData.paymentMethod === method}
                    onChange={handleChange}
                  />
                  {method === "cash"
                    ? "Cash on Delivery"
                    : method === "card"
                    ? "Credit / Debit Card"
                    : "M-Pesa"}
                </label>
              ))}
            </div>
          </div>

          {/* Conditional Payment Fields */}
          {formData.paymentMethod === "card" && (
            <div className="mt-6 space-y-3 border p-4 rounded-md bg-gray-50">
              <h3 className="font-medium">Card Details</h3>
              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                value={formData.cardNumber}
                onChange={handleChange}
                className="border p-3 rounded-md w-full"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="expiryDate"
                  placeholder="Expiry Date (MM/YY)"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  className="border p-3 rounded-md w-full"
                />
                <input
                  type="text"
                  name="cvv"
                  placeholder="CVV"
                  value={formData.cvv}
                  onChange={handleChange}
                  className="border p-3 rounded-md w-full"
                />
              </div>
            </div>
          )}

          {formData.paymentMethod === "mpesa" && (
            <div className="mt-6 space-y-3 border p-4 rounded-md bg-gray-50">
              <h3 className="font-medium">M-Pesa Payment</h3>
              <input
                type="tel"
                name="mpesaNumber"
                placeholder="Enter M-Pesa Number (07XXXXXXXX)"
                value={formData.mpesaNumber}
                onChange={handleChange}
                className="border p-3 rounded-md w-full"
              />
              <p className="text-sm text-gray-500">
                You’ll receive a payment prompt on your M-Pesa phone number.
              </p>
            </div>
          )}

          {formData.paymentMethod === "cash" && (
            <div className="mt-6 p-4 rounded-md bg-yellow-50 border">
              <p className="text-gray-700 text-sm">
                You’ll pay in cash when your order is delivered.
              </p>
            </div>
          )}

          <button
            type="submit"
            className="mt-8 bg-emerald-900 text-white w-full py-3 rounded-md font-semibold hover:bg-emerald-800 transition"
          >
            Place Order
          </button>
        </form>

        {/* 🧾 Order Summary */}
        <div className="bg-white rounded-2xl shadow p-6 h-fit">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">
            Order Summary
          </h2>

          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-sm">Your cart is empty.</p>
          ) : (
            <>
              {cartItems.map((item) => {
                const itemPrice = parseFloat(item.price) || 0;
                const totalItemPrice = itemPrice * (item.quantity || 1);

                return (
                  <div
                    key={item.id}
                    className="flex items-center justify-between mb-4 border-b pb-3"
                  >
                    <div className="flex items-center gap-3">
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-md"
                        />
                      )}
                      <div>
                        <p className="font-semibold text-gray-800">
                          {item.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {item.quantity} × ${itemPrice.toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <span className="font-medium">
                      ${totalItemPrice.toFixed(2)}
                    </span>
                  </div>
                );
              })}

              <div className="flex justify-between mt-4 text-gray-700">
                <span>Subtotal</span>
                <span>${safeSubtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-gray-700">
                <span>Delivery</span>
                <span>${deliveryFee.toFixed(2)}</span>
              </div>

              <hr className="my-3" />

              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
