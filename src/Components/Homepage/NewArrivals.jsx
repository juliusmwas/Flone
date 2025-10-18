import { Link } from "react-router-dom";
import products from "../data/products";


export default function NewArrivals() {
  // Fetch only the 4 newest arrivals
  const newArrivals = products.filter((p) =>
    [43, 44, 45, 46].includes(p.id)
  );

  return (
    <section id="newarrivals" className="bg-gray-100">
      <div className="grid justify-items-center lg:p-5">
        <h1 className="text-2xl lg:text-4xl font-bold lg:pb-8 mt-3 text-emerald-900">
          NEW ARRIVALS
        </h1>
        <p className="text-xs pb-3 lg:text-xl mt-3 text-emerald-900">
          Discover the latest pieces designed for modern simplicity.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 p-3">
        {newArrivals.map((item) => (
          <div
            key={item.id}
            className="relative group h-70 lg:h-full bg-gray-300 rounded-2xl p-2 overflow-hidden"
          >
            <div className="relative aspect-square bg-gray-300 p-1 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="object-cover rounded-2xl"
              />
            </div>

            <div className="w-full p-3">
              <h3 className="text-sm lg:text-xl font-semibold">{item.name}</h3>
              <p className="text-xs lg:text-sm mt-1">KES {item.price}</p>
            </div>

            <div className="grid grid-cols-1 p-3">
              {/* ✅ Takes user to single product page */}
              <Link
                to={`/product/${item.id}`}
                className="bg-emerald-900 text-xs w-full rounded-lg p-2 text-white font-medium text-center hover:bg-emerald-800"
              >
                View Product
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="grid justify-items-center p-6 pb-10">
        <Link
          to="/shop"
          className="bg-emerald-900 text-sm rounded-lg p-2 text-white font-medium cursor-pointer"
        >
          View More...
        </Link>
      </div>
    </section>
  );
}
