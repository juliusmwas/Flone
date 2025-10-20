
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function About() {

    const Navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* 🏞️ Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/about-bg.png')", 
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6 md:px-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Our Story
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto">
            Redefining modern fashion with timeless craftsmanship and purpose.
          </p>
        </motion.div>
      </section>

      {/* ✨ Brand Story */}
      <section className="py-16 px-6 md:px-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold mb-6"
        >
          The Flone Vision
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-600"
        >
          Founded with a passion for redefining everyday style, <strong>Flone</strong> brings
          together refined classics and contemporary design. We believe in
          creating apparel that tells a story — timeless pieces crafted for the
          confident, modern man who values comfort, detail, and expression.
        </motion.p>
      </section>

      {/* 🧵 Our Craft */}
      <section className="py-16 bg-white px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          src="/Hero.jpeg" 
          alt="Our Craft"
          className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        />
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Our Craft</h2>
          <p className="text-gray-600 leading-relaxed">
            Every piece we create is rooted in craftsmanship and detail. From
            hand-selected fabrics to precision tailoring, we merge tradition with
            innovation to deliver enduring quality. Our collections celebrate
            individuality — designed to last, made to inspire.
          </p>
        </motion.div>
      </section>

      {/* 💎 Our Values */}
      <section className="py-20 px-6 md:px-20 bg-gray-100 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold mb-10"
        >
          Our Core Values
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {[
            {
              title: "Sustainability",
              desc: "We prioritize eco-friendly materials and ethical sourcing for a cleaner tomorrow.",
            },
            {
              title: "Quality First",
              desc: "Every stitch, every cut — we focus on durability and timeless appeal.",
            },
            {
              title: "Modern Simplicity",
              desc: "Our designs embrace minimalism, blending comfort with effortless style.",
            },
          ].map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-emerald-900">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🌍 Footer CTA */}
      <section className="py-20 bg-emerald-900 text-white text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Join the Flone Community
        </h2>
        <p className="text-gray-200 max-w-2xl mx-auto mb-8">
          Discover the latest collections, style tips, and exclusive member
          offers. Be part of the journey redefining men’s fashion.
        </p>
        <button 
        onClick={() => Navigate("/Shop")}
        className="bg-white text-emerald-900 px-8 cursor-pointer py-3 rounded-xl font-medium hover:bg-gray-100 transition">
          Shop Now
        </button>
      </section>
    </div>
  );
}
