// import React from "react";
// import { motion } from "framer-motion";
// import { CheckCircle, Clock, Zap, Smartphone, Laptop, Star } from "lucide-react";

// const AboutSection = () => {
//   return (
//     <section className="relative bg-black text-white py-24 px-6 md:px-20 overflow-hidden">
//       {/* Gradient Glow Background */}
//       <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 via-black to-indigo-900/40 animate-gradient" />

//       {/* Floating Lights */}
//       {[...Array(15)].map((_, i) => (
//         <span
//           key={i}
//           className="absolute rounded-full opacity-30 blur-3xl"
//           style={{
//             width: `${Math.random() * 120 + 50}px`,
//             height: `${Math.random() * 120 + 50}px`,
//             top: `${Math.random() * 100}%`,
//             left: `${Math.random() * 100}%`,
//             background: `radial-gradient(circle, hsl(${Math.random() * 360}, 70%, 60%), transparent 70%)`,
//             animation: `floatBubble ${12 + Math.random() * 10}s linear infinite`,
//             animationDelay: `${Math.random() * 10}s`,
//           }}
//         ></span>
//       ))}

//       <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
//         {/* Text Side */}
//         <motion.div
//           initial={{ x: -50, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="mb-4 inline-block px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-sm font-semibold">
//             ABOUT APPPOST
//           </div>
//           <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
//             Your Trusted Partner for <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
//               Complete Digital Transformation
//             </span>
//           </h2>
//           <p className="mt-6 text-gray-300 leading-relaxed">
//             Founded in 2025, AppPost is a full-service IT solution provider delivering exceptional software, mobile, and web products.
//             We combine innovation, scalability, and aesthetics to turn your ideas into digital excellence.
//           </p>

//           {/* Feature Bullets */}
//           <div className="mt-8 space-y-3">
//             <div className="flex items-center gap-3">
//               <CheckCircle className="text-blue-500" /> User-Centric Design with intuitive UX/UI
//             </div>
//             <div className="flex items-center gap-3">
//               <Zap className="text-yellow-500" /> Cutting-edge technologies for scalable results
//             </div>
//             <div className="flex items-center gap-3">
//               <Clock className="text-pink-500" /> Fast, transparent, and client-focused approach
//             </div>
//           </div>

//           {/* Button */}
//           <motion.a
//             href="#services"
//             whileHover={{ scale: 1.08 }}
//             className="inline-block mt-10 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 font-semibold shadow-lg hover:shadow-indigo-700 transition"
//           >
//             Discover Our Services →
//           </motion.a>
//         </motion.div>

//         {/* Stats Side */}
//         <motion.div
//           initial={{ x: 50, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="grid grid-cols-2 gap-6 text-center"
//         >
//           {[
//             { icon: <Laptop size={36} />, label: "Web Projects", value: "10+" },
//             { icon: <Smartphone size={36} />, label: "Android Apps", value: "4+" },
//             { icon: <Star size={36} />, label: "CRM Project", value: "1" },
//             { icon: <Zap size={36} />, label: "Founded Year", value: "2025" },
//           ].map((stat, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.05 }}
//               className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/70 to-gray-900/80 shadow-lg border border-gray-700 hover:border-indigo-500 transition"
//             >
//               <div className="flex justify-center mb-2 text-indigo-400">{stat.icon}</div>
//               <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
//               <p className="text-gray-400 mt-1">{stat.label}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Zap, Headphones, Trophy } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="relative bg-black text-white py-24 px-6 md:px-20 overflow-hidden">
      {/* Gradient Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 via-black to-indigo-900/40 animate-gradient" />

      {/* Floating Lights */}
      {[...Array(15)].map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full opacity-30 blur-3xl"
          style={{
            width: `${Math.random() * 120 + 50}px`,
            height: `${Math.random() * 120 + 50}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            background: `radial-gradient(circle, hsl(${Math.random() * 360}, 70%, 60%), transparent 70%)`,
            animation: `floatBubble ${12 + Math.random() * 10}s linear infinite`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        ></span>
      ))}

      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Side */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4 inline-block px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-sm font-semibold">
            ABOUT APPPOST
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Your Trusted Partner for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Complete Digital Transformation
            </span>
          </h2>
          <p className="mt-6 text-gray-300 leading-relaxed">
            Founded in 2025, AppPost is a full-service IT solution provider delivering exceptional software, mobile, and web products.
            We combine innovation, scalability, and aesthetics to turn your ideas into digital excellence.
          </p>

          {/* Feature Bullets */}
          <div className="mt-8 space-y-3">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-blue-500" /> User-Centric Design with intuitive UX/UI
            </div>
            <div className="flex items-center gap-3">
              <Zap className="text-yellow-500" /> Cutting-edge technologies for scalable results
            </div>
            <div className="flex items-center gap-3">
              <Clock className="text-pink-500" /> Fast, transparent, and client-focused approach
            </div>
          </div>

          {/* Button */}
          <motion.a
            href="#services"
            whileHover={{ scale: 1.08 }}
            className="inline-block mt-10 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 font-semibold shadow-lg hover:shadow-indigo-700 transition"
          >
            Discover Our Services →
          </motion.a>
        </motion.div>

        {/* ✅ Updated Stats Side */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-2 gap-6 text-center"
        >
          {[
            { icon: <CheckCircle size={36} />, label: "Client Satisfaction", value: "100%" },
            { icon: <Trophy size={36} />, label: "Projects Delivered", value: "15+" },
            { icon: <Headphones size={36} />, label: "Support Available", value: "24/7" },
            { icon: <Zap size={36} />, label: "Turnaround Time", value: "Fast" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.07 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/70 to-gray-900/80 shadow-xl border border-gray-700 hover:border-purple-500 transition-all duration-300"
            >
              <div className="flex justify-center mb-2 text-indigo-400">{stat.icon}</div>
              <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
              <p className="text-gray-400 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
