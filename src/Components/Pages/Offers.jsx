export default function Offers() {
  return (
    <div className="min-h-screen bg-gray-50 mt-8 flex flex-col items-center py-16 px-6">
      <h1 className="text-xl lg:text-3xl font-bold text-emerald-900 mb-8">Current Offers & Promotions</h1>

      <div className="max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Offer 1 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-lg lg:text-xl font-semibold text-emerald-800 mb-2">🧥 Buy 2 Get 1 Free</h2>
          <p className="text-xs lg:text-sm text-gray-600">Mix and match any shirts or trousers — get the third item free!</p>
        </div>

        {/* Offer 2 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-lg lg:text-xl font-semibold text-emerald-800 mb-2">🚚 Free Delivery</h2>
          <p className="text-xs lg:text-sm text-gray-600">Enjoy free delivery on orders above Ksh 5,000.</p>
        </div>

        {/* Offer 3 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-lg lg:text-xl font-semibold text-emerald-800 mb-2">💳 10% Off First Purchase</h2>
          <p className="text-xs lg:text-sm text-gray-600">Sign up for our newsletter and get 10% off your first order.</p>
        </div>
      </div>
    </div>
  );
}
