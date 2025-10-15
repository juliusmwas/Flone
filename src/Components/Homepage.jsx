

export default function Homepage() {
  return (
    <section
      id="home"
      className="bg-emerald-900 text-white flex items-center justify-center h-[90vh] px-6 sm:px-12"
    >
      <div className="flex items-center justify-between w-full  gap-2">
        {/* ===== Hero Text ===== */}
        <div className="text-center md:text-left ml-15 space-y-4">
          <h1 className="text-5xl  font-bold">
            Modern Essentials <br /> for the Modern Man.
          </h1>

          <p className="text-gray-200 text-base md:text-lg">
            Elevate your wardrobe with timeless quality and effortless style.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
            <button className="bg-white text-emerald-900 font-medium text-sm md:text-base px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition">
              Shop Now
            </button>
            <button className="border border-white text-white font-medium text-sm md:text-base px-6 py-3 rounded-xl hover:bg-white/10 transition">
              New Arrivals
            </button>
          </div>
        </div>

       
        <div className="relative w-[300px] sm:w-[400px] md:w-[450px] h-[350px] sm:h-[400px] md:h-[450px]">
          {/* Back (smaller) image */}
          <img
            src="/public/download (9).jpeg"
            alt="Small product"
            className="absolute bottom-5 left-5 w-28 sm:w-32 md:w-40 h-36 sm:h-40 md:h-48 object-cover rounded-2xl shadow-lg z-0"
          />

          
          <img
            src="/public/Hero.jpeg"
            alt="Main hero"
            className="absolute top-0 right-0 w-56 sm:w-64 md:w-72 h-72 sm:h-80 object-cover rounded-2xl shadow-2xl z-10"
          />
        

        </div>
      </div>
    </section>
  );
}
