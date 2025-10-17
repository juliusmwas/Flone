import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Shop() {
  const navigate = useNavigate();

  // ====== Product Data ======
  const products = [
    {
      id: 1,
      name: "Classic White Shirt",
      price: "$45",
      category: "Tops",
      image: "/public/shop/white shirt.jpeg",
    },
    {
      id: 27,
      name: "Classic Jeans",
      price: "$70",
      category: "Bottoms",
      image: "/public/shop/Classic Jeans 2.jpeg",
    },
    {
      id: 31,
      name: "Leather Belt",
      price: "$35",
      category: "Accessories",
      image: "/public/shop/Leather Belt 2.jpeg",
    },
    {
      id: 12,
      name: "Minimalist Sneakers",
      price: "$85",
      category: "Shoes",
      image: "/public/shop/Minimalist Sneakers 2.jpeg",
    },
    {
      id: 28,
      name: "Classic Jeans",
      price: "$70",
      category: "Bottoms",
      image: "/public/shop/Classic Jeans 3.jpeg",
    },
    {
      id: 32,
      name: "Leather Belt",
      price: "$35",
      category: "Accessories",
      image: "/public/shop/Leather Belt 3.jpeg",
    },
    {
      id: 13,
      name: "Minimalist Sneakers",
      price: "$85",
      category: "Shoes",
      image: "/public/shop/Minimalist Sneakers 5.jpeg",
    },
    {
      id: 2,
      name: "Tailored Navy Blazer",
      price: "$120",
      category: "Tops",
      image: "/public/shop/Tailored Navy Blazer.jpeg",
    },
    {
      id: 33,
      name: "Leather Belt",
      price: "$35",
      category: "Accessories",
      image: "/public/shop/Leather Belt 4.jpeg",
    },
    {
      id: 39,
      name: "Wool Overcoat",
      price: "$140",
      category: "Outerwear",
      image: "/public/shop/Wool Overcoat 2.jpeg",
    },
    {
      id: 29,
      name: "Classic Jeans",
      price: "$70",
      category: "Bottoms",
      image: "/public/shop/Classic Jeans 4.jpeg",
    },
    {
      id: 38,
      name: "Oxford Dress Shoes",
      price: "$95",
      category: "Shoes",
      image: "/public/shop/Oxford Dress Shoes 5.jpeg",
    },
    {
      id: 40,
      name: "Wool Overcoat",
      price: "$140",
      category: "Outerwear",
      image: "/public/shop/Wool Overcoat 3.jpeg",
    },
    {
      id: 22,
      name: "Minimalist Sneakers",
      price: "$85",
      category: "Shoes",
      image: "/public/shop/Minimalist Sneakers 15.jpeg",
    },
    {
      id: 34,
      name: "Leather Belt",
      price: "$35",
      category: "Accessories",
      image: "/public/shop/Leather Belt 5.jpeg",
    },
    {
      id: 41,
      name: "Wool Overcoat",
      price: "$140",
      category: "Outerwear",
      image: "/public/shop/Wool Overcoat 4.jpeg",
    },
    {
      id: 30,
      name: "Classic Jeans",
      price: "$70",
      category: "Bottoms",
      image: "/public/shop/Classic Jeans 5.jpeg",
    },
    {
      id: 37,
      name: "Oxford Dress Shoes",
      price: "$95",
      category: "Shoes",
      image: "/public/shop/Oxford Dress Shoes 4.jpeg",
    },
    {
      id: 3,
      name: "Casual Chinos",
      price: "$60",
      category: "Bottoms",
      image: "/public/shop/Casual Chinos 1.jpeg",
    },
    {
      id: 42,
      name: "Wool Overcoat",
      price: "$140",
      category: "Outerwear",
      image: "/public/shop/Wool Overcoat 5.jpeg",
    },
    {
      id: 14,
      name: "Minimalist Sneakers",
      price: "$85",
      category: "Shoes",
      image: "/public/shop/Minimalist Sneakers 6.jpeg",
    },
    {
      id: 36,
      name: "Oxford Dress Shoes",
      price: "$95",
      category: "Shoes",
      image: "/public/shop/Oxford Dress Shoes 3.jpeg",
    },
    {
      id: 23,
      name: "Minimalist Sneakers",
      price: "$85",
      category: "Shoes",
      image: "/public/shop/Minimalist Sneakers 16.jpeg",
    },
    {
      id: 4,
      name: "Minimalist Sneakers",
      price: "$85",
      category: "Shoes",
      image: "/public/shop/Minimalist Sneakers 1.jpeg",
    },
    {
      id: 35,
      name: "Oxford Dress Shoes",
      price: "$95",
      category: "Shoes",
      image: "/public/shop/Oxford Dress Shoes 2.jpeg",
    },
    {
      id: 24,
      name: "Minimalist Sneakers",
      price: "$85",
      category: "Shoes",
      image: "/public/shop/Minimalist Sneakers 17.jpeg",
    },
    {
      id: 9,
      name: "Casual Chinos",
      price: "$60",
      category: "Bottoms",
      image: "/public/shop/Casual Chinos 2.jpeg",
    },
    {
      id: 25,
      name: "Minimalist Sneakers",
      price: "$85",
      category: "Shoes",
      image: "/public/shop/Minimalist Sneakers 18.jpeg",
    },
    {
      id: 15,
      name: "Minimalist Sneakers",
      price: "$85",
      category: "Shoes",
      image: "/public/shop/Minimalist Sneakers 8.jpeg",
    },
    {
      id: 26,
      name: "Minimalist Sneakers",
      price: "$85",
      category: "Shoes",
      image: "/public/shop/Minimalist Sneakers 19.jpeg",
    },
    {
      id: 5,
      name: "Wool Overcoat",
      price: "$140",
      category: "Outerwear",
      image: "/public/shop/Wool Overcoat 1.jpeg",
    },
    {
      id: 16,
      name: "Minimalist Sneakers",
      price: "$85",
      category: "Shoes",
      image: "/public/shop/Minimalist Sneakers 9.jpeg",
    },
    {
      id: 6,
      name: "Leather Belt",
      price: "$35",
      category: "Accessories",
      image: "/public/shop/Leather Belt 1.jpeg",
    },
    {
      id: 17,
      name: "Minimalist Sneakers",
      price: "$85",
      category: "Shoes",
      image: "/public/shop/Minimalist Sneakers 10.jpeg",
    },
    {
      id: 10,
      name: "Casual Chinos",
      price: "$60",
      category: "Bottoms",
      image: "/public/shop/Casual Chinos 3.jpeg",
    },
    {
      id: 18,
      name: "Minimalist Sneakers",
      price: "$85",
      category: "Shoes",
      image: "/public/shop/Minimalist Sneakers 11.jpeg",
    },
    {
      id: 7,
      name: "Classic Jeans",
      price: "$70",
      category: "Bottoms",
      image: "/public/shop/Classic Jeans 1.jpeg",
    },
    {
      id: 19,
      name: "Minimalist Sneakers",
      price: "$85",
      category: "Shoes",
      image: "/public/shop/Minimalist Sneakers 12.jpeg",
    },
    {
      id: 8,
      name: "Oxford Dress Shoes",
      price: "$95",
      category: "Shoes",
      image: "/public/shop/Oxford Dress Shoes 1.jpeg",
    },
    {
      id: 20,
      name: "Minimalist Sneakers",
      price: "$85",
      category: "Shoes",
      image: "/public/shop/Minimalist Sneakers 13.jpeg",
    },
    {
      id: 11,
      name: "Casual Chinos",
      price: "$60",
      category: "Bottoms",
      image: "/public/shop/Casual Chinos 4.jpeg",
    },
    {
      id: 21,
      name: "Minimalist Sneakers",
      price: "$85",
      category: "Shoes",
      image: "/public/shop/Minimalist Sneakers 14.jpeg",
    },
  ];

  // ====== State for Filtering ======
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const categories = ["All", "Tops", "Bottoms", "Shoes", "Outerwear", "Accessories"];

  return (
    <section className="min-h-screen bg-gray-50 py-20 px-8 md:px-16">
      {/* ===== Header ===== */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-emerald-900 mb-2">
          Shop Collection
        </h1>
        <p className="text-gray-600 text-lg mb-4">
          Explore timeless styles designed for everyday confidence.
        </p>
        <button
          onClick={() => navigate("/")}
          className="text-emerald-900 underline hover:text-emerald-700 text-sm"
        >
          ← Back to Home
        </button>
      </motion.div>

      {/* ===== Category Filter Buttons ===== */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((category) => (
          <motion.button
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
          </motion.button>
        ))}
      </div>

      {/* ===== Product Grid ===== */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"
      >
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            layout
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition relative group"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            {/* Product Image */}
            <div className="overflow-hidden">
              <motion.img
                src={product.image}
                alt={product.name}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Text Details */}
            <div className="p-5 flex flex-col items-center">
              <h3 className="text-lg font-semibold text-emerald-900 mb-2 text-center">
                {product.name}
              </h3>
              <p className="text-gray-700 mb-3">{product.price}</p>
              <button className="bg-emerald-900 text-white px-6 py-2 rounded-lg hover:bg-emerald-800 transition">
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* No Products Message */}
      {filteredProducts.length === 0 && (
        <motion.p
          className="text-center text-gray-500 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          No products found in this category.
        </motion.p>
      )}
    </section>
  );
}
