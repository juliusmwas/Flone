export default function FAQ() {
  return (
    <div className="min-h-screen bg-gray-50 flex mt-8 flex-col items-center py-16 px-6">
      <h1 className="text-xl lg:text-3xl font-bold text-emerald-900 mb-8">Frequently Asked Questions</h1>

      <div className="max-w-2xl space-y-6 text-gray-700">
        <div>
          <h3 className="font-semibold text-sm lg:text-lg text-emerald-800">How long does delivery take?</h3>
          <p className="text-xs lg:text-sm">Orders are processed within 1-2 business days and delivered within 3-5 business days depending on your location.</p>
        </div>

        <div>
          <h3 className="font-semibold text-sm lg:text-lg text-emerald-800">Do you ship internationally?</h3>
          <p className="text-xs lg:text-sm">Currently, we only deliver within Kenya — but international shipping is coming soon!</p>
        </div>

        <div>
          <h3 className="font-semibold text-sm lg:text-lg text-emerald-800">What payment methods do you accept?</h3>
          <p className="text-xs lg:text-sm">We accept M-Pesa, credit/debit cards, and cash on delivery.</p>
        </div>

        <div>
          <h3 className="font-semibold text-sm lg:text-lg text-emerald-800">Can I return a product?</h3>
          <p className="text-xs lg:text-sm">Yes, you can request a return within 7 days of delivery as long as the item is unused and in original packaging.</p>
        </div>
      </div>
    </div>
  );
}
