
import products from "../data/products"; 
import { Link } from "react-router-dom";

export default function SaleItems() {
  // Filter only products with a "sale" or "discount" property
  const saleProducts = products.filter((item) => item.sale === true);

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 md:px-16">
      <h1 className="text-3xl font-bold text-emerald-900 mb-10 text-center">
        Sale Items
      </h1>

      {saleProducts.length === 0 ? (
        <p className="text-center text-gray-600">
          No items are currently on sale. Check back soon!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {saleProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow rounded-2xl overflow-hidden hover:shadow-lg transition relative"
            >
              <div className="relative group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
                />
                {/* Sale badge */}
                <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                  SALE
                </span>
              </div>

              <div className="p-5 space-y-2">
                <h3 className="font-semibold text-lg text-gray-800">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500">{product.category}</p>

                <div className="flex items-center gap-2">
                  <p className="text-emerald-900 font-bold text-lg">
                    ${product.salePrice ?? product.price}
                  </p>
                  {product.salePrice && (
                    <p className="text-gray-400 line-through text-sm">
                      ${product.price}
                    </p>
                  )}
                </div>

                <Link
                  to="/checkout"
                  className="block mt-3 text-center bg-emerald-900 text-white py-2 rounded-md hover:bg-emerald-800 transition"
                >
                  Add to Cart
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
