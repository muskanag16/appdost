import React from "react";
import {
  FaRocket,
  FaBolt,
  FaMobileAlt,
  FaLaptopCode,
  FaCheckCircle,
  FaShieldAlt,
  FaHeadset,
} from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-black text-white py-24 px-6 md:px-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600 opacity-30 blur-3xl"></div>

      {/* Floating color bubbles */}
      <div className="absolute w-60 h-60 bg-blue-600 rounded-full mix-blend-screen opacity-30 animate-float-slow"></div>
      <div className="absolute w-72 h-72 bg-purple-700 rounded-full mix-blend-screen opacity-40 animate-float-reverse top-20 right-20"></div>
      <div className="absolute w-64 h-64 bg-pink-500 rounded-full mix-blend-screen opacity-30 animate-float-delay bottom-10 left-1/3"></div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-2 rounded-full text-sm font-medium mb-6">
            <FaRocket />
            <span>Complete IT Solution Provider Since 2025</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Transform Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 animate-gradient-text">
              Ideas
            </span>{" "}
            Into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 animate-gradient-text">
              Digital Reality
            </span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg leading-relaxed">
            Empower your vision with next-gen web & mobile solutions — crafted
            with creativity, innovation, and excellence by our expert team.
          </p>

          <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              Explore Our Services →
            </button>
            <button className="bg-transparent border border-purple-500 text-purple-300 px-6 py-3 rounded-lg hover:bg-purple-600/20 transition-all duration-300">
              Get Free Consultation
            </button>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-10 text-gray-300 text-sm">
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-green-400" />
              100% Client Satisfaction
            </div>
            <div className="flex items-center gap-2">
              <FaShieldAlt className="text-cyan-400" />
              Secure & Scalable
            </div>
            <div className="flex items-center gap-2">
              <FaHeadset className="text-blue-400" />
              24/7 Support
            </div>
          </div>
        </div>

        {/* Right Cards */}
        <div className="md:w-1/2 relative flex flex-col items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: <FaLaptopCode className="text-4xl text-cyan-400 mb-3" />,
                title: "Web Development",
                text: "+15 Projects",
              },
              {
                icon: <FaMobileAlt className="text-4xl text-pink-400 mb-3" />,
                title: "Mobile Apps",
                text: "+8 Apps",
              },
              {
                icon: <FaBolt className="text-4xl text-yellow-400 mb-3" />,
                title: "Fast Delivery",
                text: "On Time",
              },
              {
                icon: <FaRocket className="text-4xl text-purple-400 mb-3" />,
                title: "Innovation",
                text: "Driven by AI",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-gray-900/50 backdrop-blur-md border border-gray-700 rounded-2xl p-6 shadow-lg hover:-translate-y-2 transition-transform duration-300"
              >
                {card.icon}
                <h3 className="font-semibold text-white">{card.title}</h3>
                <p className="text-purple-400 font-bold">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
