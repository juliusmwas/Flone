import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import products from "../data/products";

export default function Shop() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const categories = ["All", "Tops", "Bottoms", "Shoes", "Outerwear", "Accessories"];

  return (
    <section id="shop" className="min-h-screen bg-gray-50 py-20 px-2 md:px-16">
      {/* ===== Header ===== */}
      <div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-2xl lg:text-4xl mt-4 font-bold text-emerald-900 mb-2">
          Shop Collection
        </h1>
        <p className="text-gray-600 text-sm lg:text-lg mb-4">
          Explore timeless styles designed for everyday confidence.
        </p>
        <button
          onClick={() => navigate("/")}
          className="text-emerald-900 underline cursor-pointer hover:text-emerald-700 text-sm"
        >
          ← Back to Home
        </button>
      </div>

      {/* ===== Category Filter Buttons ===== */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${
              activeCategory === category
                ? "bg-emerald-900 text-white border-emerald-900"
                : "border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* ===== Product Grid ===== */}
      <div
        layout
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
      >
        {filteredProducts.map((product, index) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <div
              layout
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              {/* Product Image */}
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-50 lg:h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Text Details */}
              <div className="p-2 flex flex-col items-center">
                <h3 className="text-sm lg:text-lg font-semibold text-emerald-900 mb-2 text-center">
                  {product.name}
                </h3>
                <p className="lg:text-lg text-gray-700 font-medium mb-3">
                  ${product.price}
                </p>
                <button className="bg-emerald-900 text-xs lg:text-sm font-medium text-white px-6 py-2 rounded-lg hover:bg-emerald-800 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* No Products Message */}
      {filteredProducts.length === 0 && (
        <p
          className="text-center text-gray-500 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          No products found in this category.
        </p>
      )}
    </section>
  );
}
