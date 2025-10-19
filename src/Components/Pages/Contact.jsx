import React, { useState } from "react";
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`✅ Thank you, ${form.name}! Your message has been sent.`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-20">
      <h1 className="text-3xl font-bold text-gray-800 mb-10 text-center">
        Get in Touch
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* 📩 Contact Form */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-800"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-800"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              required
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-800"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-emerald-900 text-white py-3 rounded-lg hover:bg-emerald-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* 📞 Contact Info */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-6">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-3">
            Contact Information
          </h2>

          <div className="flex items-center gap-3 text-gray-700">
            <Mail className="text-emerald-800" /> 
            <p>support@flonefashion.com</p>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <Phone className="text-emerald-800" /> 
            <p>+254 700 123 456</p>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <MapPin className="text-emerald-800" /> 
            <p>Nairobi, Kenya</p>
          </div>

          <div className="border-t pt-4">
            <p className="font-medium text-gray-800 mb-2">Follow us</p>
            <div className="flex gap-4 text-emerald-800">
              <a href="#" className="hover:text-emerald-600">
                <Facebook />
              </a>
              <a href="#" className="hover:text-emerald-600">
                <Instagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
