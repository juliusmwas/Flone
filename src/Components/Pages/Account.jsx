import React, { useState } from "react";

export default function Account() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@email.com",
    phone: "+254 700 123 456",
  });

  const [address, setAddress] = useState("123 Market Street, Nairobi, Kenya");
  const [wishlist, setWishlist] = useState([
    { id: 1, name: "Classic Jeans", price: 70.0, image: "/images/jeans.jpg" },
    { id: 2, name: "Denim Jacket", price: 120.0, image: "/images/jacket.jpg" },
  ]);

  const [orders] = useState([
    {
      id: "ORD-2025-001",
      date: "Oct 10, 2025",
      total: 85.0,
      status: "Delivered",
      items: 2,
    },
    {
      id: "ORD-2025-002",
      date: "Oct 15, 2025",
      total: 110.0,
      status: "Processing",
      items: 1,
    },
  ]);

  const [isEditing, setIsEditing] = useState(false);

  const handleEditToggle = () => setIsEditing(!isEditing);

  const handleSave = (e) => {
    e.preventDefault();
    setIsEditing(false);
    alert("✅ Profile updated successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 md:px-20">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">My Account</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {/* 👤 Personal Info */}
        <div className="bg-white rounded-2xl shadow p-6 md:col-span-1">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">
            Personal Information
          </h2>

          {!isEditing ? (
            <div className="space-y-2">
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone:</strong> {user.phone}</p>
              <button
                onClick={handleEditToggle}
                className="mt-4 w-full bg-emerald-900 text-white py-2 rounded-md hover:bg-emerald-800 transition"
              >
                Edit Details
              </button>
            </div>
          ) : (
            <form onSubmit={handleSave} className="space-y-3">
              <input
                type="text"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                className="border p-2 w-full rounded-md"
              />
              <input
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                className="border p-2 w-full rounded-md"
              />
              <input
                type="tel"
                value={user.phone}
                onChange={(e) => setUser({ ...user, phone: e.target.value })}
                className="border p-2 w-full rounded-md"
              />
              <button
                type="submit"
                className="bg-emerald-900 text-white py-2 w-full rounded-md hover:bg-emerald-800 transition"
              >
                Save Changes
              </button>
            </form>
          )}
        </div>

        {/* 📦 Orders & Wishlist */}
        <div className="md:col-span-2 space-y-8">
          {/* 📦 Order History */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">
              Order History
            </h2>
            {orders.length === 0 ? (
              <p className="text-gray-500 text-sm">No orders yet.</p>
            ) : (
              <div className="space-y-4">
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="flex justify-between items-center border-b pb-3"
                  >
                    <div>
                      <p className="font-semibold text-gray-800">
                        {order.id} — {order.status}
                      </p>
                      <p className="text-sm text-gray-500">
                        {order.date} • {order.items} items
                      </p>
                    </div>
                    <span className="font-medium text-gray-700">
                      ${order.total.toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 🏠 Saved Address */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">
              Saved Address
            </h2>
            <p className="text-gray-700">{address}</p>
            <button
              onClick={() =>
                setAddress(prompt("Enter new address:", address) || address)
              }
              className="mt-4 bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition"
            >
              Edit Address
            </button>
          </div>

          {/* ❤️ Wishlist */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">
              Wishlist
            </h2>

            {wishlist.length === 0 ? (
              <p className="text-gray-500 text-sm">No items in your wishlist.</p>
            ) : (
              <div className="grid md:grid-cols-2 gap-4">
                {wishlist.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 border rounded-lg p-3"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">{item.name}</p>
                      <p className="text-sm text-gray-500">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
