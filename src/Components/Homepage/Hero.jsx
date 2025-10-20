import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const Navigate = useNavigate();


  return (
    <section
      id="hero"
      className="bg-emerald-900 text-white flex items-center mt-15 lg:mt-20 justify-center h-auto md:h-[90vh] px-6 sm:px-12 py-10 md:py-0 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row items-center justify-between  w-full gap-8">
        {/* ===== Hero Text ===== */}
        <motion.div
          className="text-center md:text-left ml-0 md:ml-15 space-y-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-2xl lg:pb-4 lg:text-4xl md:text-5xl font-bold">
            Modern Essentials <br /> for the Modern Man.
          </h1>

          <p className="text-gray-200 lg:pb-4 text-base md:text-lg">
            Elevate your wardrobe with timeless quality and effortless style.
          </p>

          <div className=" grid grid-cols-1 lg:flex lg:flex-wrap justify-center md:justify-start gap-4 pt-2">
            <motion.button
              className="bg-white cursor-pointer text-emerald-900 font-medium text-sm md:text-base px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => Navigate("/Shop")}
            >
              Shop Now
            </motion.button>

            <motion.button
              className="border cursor-pointer border-white text-white font-medium text-sm md:text-base px-6 py-3 rounded-xl hover:bg-white/10 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const section =document.getElementById("newarrivals");
                section?.scrollIntoView({ behavior: "smooth"})
              }}
            >
              New Arrivals
            </motion.button>
          </div>
        </motion.div>

        {/* ===== Hero Images ===== */}
        <motion.div
          className="relative w-[300px] sm:w-[400px] md:w-[450px] h-[350px] sm:h-[400px] md:h-[450px] flex justify-center mt-10 md:mt-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          {/* Hide small image on mobile */}
          <motion.img
            src="/download (9).jpeg"
            alt="Small product"
            className="hidden md:block absolute bottom-5 left-5 w-28 sm:w-32 md:w-40 h-36 sm:h-40 md:h-48 object-cover rounded-2xl shadow-lg z-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          />

          {/* Main image */}
          <motion.img
            src="/download (16).jpeg"
            alt="Main hero"
            className="relative md:absolute top-0 right-0 w-56 sm:w-64 md:w-72 h-72 sm:h-80 object-cover rounded-2xl shadow-2xl z-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
