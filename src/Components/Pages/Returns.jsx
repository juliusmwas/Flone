export default function Returns() {
  return (
    <div className="min-h-screen mt-8 bg-gray-50 flex flex-col items-center py-16 px-6">
      <h1 className="text-xl lg:text-3xl font-bold text-emerald-900 mb-8">Returns & Exchanges</h1>

      <div className="max-w-2xl text-gray-700 space-y-4">
        <p className="text-xs lg:text-sm">
          We want you to love your purchase. If you’re not completely satisfied, you can return or exchange any unworn item within 7 days of delivery.
        </p>

        <h3 className="font-semibold text-sm lg:text-lg text-emerald-800">Conditions for Return:</h3>
        <ul className="list-disc text-xs lg:text-sm ml-6">
          <li>Item must be in original condition and packaging.</li>
          <li>Tags and labels must still be attached.</li>
          <li>Proof of purchase (receipt or order number) is required.</li>
        </ul>

        <h3 className="font-semibold text-sm lg:text-lg text-emerald-800 mt-4">How to Request a Return:</h3>
        <p className="text-xs lg:text-sm">
          Contact us at <span className="font-medium text-emerald-800">support@flonewear.com</span> or call us at <span className="font-medium">+254 700 123 456</span>.
        </p>
      </div>
    </div>
  );
}
