import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import products from "../data/products";

export default function SingleProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === Number(id));

  const [mainImage, setMainImage] = useState(product?.image || "");
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || "M");
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || "Black");
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700">
        Product not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 px-5 md:px-20 bg-white text-gray-800">
      <button
        onClick={() => navigate(-1)}
        className="text-emerald-700 mb-6 underline hover:text-emerald-900"
      >
        ← Back
      </button>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Image Gallery */}
        <div className="flex flex-col items-center">
          <img
            src={mainImage}
            alt={product.name}
            className="w-full max-w-md rounded-2xl object-cover shadow-lg transition-transform duration-300 hover:scale-105"
          />

          {/* Thumbnail Carousel */}
          <div className="flex gap-3 mt-4">
            {[product.image, ...(product.images || [])].map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`product-${idx}`}
                onClick={() => setMainImage(img)}
                className={`w-20 h-20 object-cover rounded-xl cursor-pointer border-2 ${
                  mainImage === img ? "border-emerald-600" : "border-transparent"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-semibold mb-2">{product.name}</h2>
          <p className="text-2xl font-bold text-emerald-700 mb-4">{product.price}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>

          {/* Size Selector */}
          <div className="mb-4">
            <h4 className="font-medium mb-2">Size</h4>
            <div className="flex gap-3">
              {product.sizes?.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`border rounded-md px-4 py-2 ${
                    selectedSize === size
                      ? "bg-emerald-700 text-white border-emerald-700"
                      : "border-gray-300"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selector */}
          <div className="mb-6">
            <h4 className="font-medium mb-2">Color</h4>
            <div className="flex gap-3">
              {product.colors?.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`border rounded-md px-4 py-2 ${
                    selectedColor === color
                      ? "bg-emerald-700 text-white border-emerald-700"
                      : "border-gray-300"
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button className="bg-emerald-700 text-white py-3 rounded-lg font-medium hover:bg-emerald-800 transition mb-6">
            Add to Cart
          </button>

          {/* Shipping & Returns Accordion */}
          <div className="border-t border-gray-300 pt-4">
            <button
              className="w-full flex justify-between items-center font-medium"
              onClick={() => setIsAccordionOpen(!isAccordionOpen)}
            >
              <span>Shipping & Returns</span>
              {isAccordionOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {isAccordionOpen && (
              <div className="mt-3 text-gray-600 text-sm leading-relaxed">
                <p>• Free shipping on orders over $50</p>
                <p>• Returns accepted within 30 days of purchase</p>
                <p>• Estimated delivery: 3–5 business days</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
