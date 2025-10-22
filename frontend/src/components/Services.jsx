import { FaAndroid, FaLaptopCode, FaCloud, FaMobileAlt, FaPaintBrush, FaSearch, FaBullhorn, FaRobot } from "react-icons/fa";

const services = [
  {
    title: "Android App Development",
    icon: <FaAndroid className="text-green-400 text-5xl" />,
    features: ["Native & Hybrid Apps", "Play Store Deployment", "App Maintenance & Support"],
  },
  {
    title: "Web Development",
    icon: <FaLaptopCode className="text-blue-400 text-5xl" />,
    features: ["Responsive Websites", "Full-Stack Development", "UI/UX Focused Design"],
  },
  {
    title: "Cloud Services",
    icon: <FaCloud className="text-purple-400 text-5xl" />,
    features: ["AWS & Azure Deployment", "Serverless Architecture", "24/7 Monitoring & Support"],
  },
  {
    title: "Mobile App Development",
    icon: <FaMobileAlt className="text-yellow-400 text-5xl" />,
    features: ["iOS & Android Apps", "Performance Optimization", "App Analytics Integration"],
  },
  {
    title: "UI/UX Design",
    icon: <FaPaintBrush className="text-pink-400 text-5xl" />,
    features: ["Wireframing & Prototyping", "User-Centered Design", "Responsive Interfaces"],
  },
  {
    title: "SEO Optimization",
    icon: <FaSearch className="text-green-300 text-5xl" />,
    features: ["Keyword Research", "On-Page SEO", "Performance Monitoring"],
  },
  {
    title: "Digital Marketing",
    icon: <FaBullhorn className="text-orange-400 text-5xl" />,
    features: ["Social Media Marketing", "Email Campaigns", "Content Strategy"],
  },
  {
    title: "AI Solutions",
    icon: <FaRobot className="text-purple-300 text-5xl" />,
    features: ["Predictive Analytics", "Automation & Chatbots", "AI-Driven Insights"],
  },
];

export default function UniqueGlassyCards() {
  return (
    <div className="bg-black min-h-screen py-16 px-6 md:px-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="relative group rounded-3xl p-6 overflow-hidden border border-white/20
                       bg-gradient-to-tr from-white/5 to-white/10 backdrop-blur-xl shadow-2xl
                       hover:scale-105 transition-transform duration-300"
          >
            {/* Glow border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500
                            rounded-3xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
            
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <ul className="space-y-2 text-white/90">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-pink-400">•</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



