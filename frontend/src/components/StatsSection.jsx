import React from "react";
import { motion } from "framer-motion";
import { Laptop, Smartphone, Star, Zap } from "lucide-react";

const stats = [
  { icon: <Laptop size={36} />, label: "Web Projects", value: "10+" },
  { icon: <Smartphone size={36} />, label: "Android Apps", value: "4+" },
  { icon: <Star size={36} />, label: "CRM Project", value: "1" },
  { icon: <Zap size={36} />, label: "Founded Year", value: "2025" },
];

const StatsSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-black via-gray-900 to-black py-20 overflow-hidden">
      {/* Floating Glow Bubbles */}
      {[...Array(10)].map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full blur-3xl opacity-20"
          style={{
            width: `${Math.random() * 100 + 60}px`,
            height: `${Math.random() * 100 + 60}px`,
            background: `radial-gradient(circle, hsl(${Math.random() * 360}, 70%, 60%), transparent 70%)`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `floatBubble ${12 + Math.random() * 10}s linear infinite`,
            animationDelay: `${Math.random() * 8}s`,
          }}
        ></span>
      ))}

      {/* Stats Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            whileHover={{ scale: 1.08 }}
            className="bg-gradient-to-br from-gray-800/70 to-gray-900/80 p-8 rounded-2xl shadow-lg border border-gray-700 hover:border-indigo-500 transition transform"
          >
            <div className="flex justify-center mb-3 text-indigo-400">{item.icon}</div>
            <h3 className="text-3xl font-extrabold text-white">{item.value}</h3>
            <p className="mt-2 text-gray-400 font-medium">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
