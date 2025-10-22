const processSteps = [
  {
    title: "Discovery",
    description: "We dive deep into understanding your requirements, business goals, and target audience. A strategic roadmap ensures every detail is captured for successful project planning.",
    icon: "🎨",
  },
  {
    title: "Design",
    description: "Our designers craft intuitive and beautiful interfaces that enhance user experience. Wireframes, prototypes, and UI mockups align perfectly with your brand identity.",
    icon: "⚙️",
  },
  {
    title: "Development",
    description: "Expert developers bring your ideas to life using modern technologies. Clean, scalable, and maintainable code is the standard we follow.",
    icon: "🧪",
  },
  {
    title: "Testing",
    description: "Thorough functional, performance, and security testing ensures your product is reliable, smooth, and bug-free before launch.",
    icon: "🚀",
  },
  {
    title: "Deployment",
    description: "We handle smooth deployment, server setup, performance optimization, and production readiness with zero downtime.",
    icon: "🔧",
  },
  {
    title: "Support",
    description: "Ongoing maintenance, bug fixes, and feature updates ensure your solution keeps running seamlessly.",
    icon: "🛠️",
  },
];

export default function DevelopmentProcess() {
  return (
    <div className="bg-black py-20 px-6 md:px-16">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">Our Development Process</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {processSteps.map((step, idx) => (
          <div
            key={idx}
            className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900
                       rounded-3xl p-10 shadow-xl backdrop-blur-sm border border-white/10
                       hover:scale-105 hover:shadow-2xl transition-transform duration-500
                       overflow-hidden min-h-[420px] flex flex-col"
          >
            {/* Step number */}
            <div className="absolute top-5 left-5 w-12 h-12 flex items-center justify-center
                            rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg">
              {idx + 1}
            </div>

            {/* Floating icon */}
            <div className="text-6xl mb-6 text-center animate-bounce">{step.icon}</div>

            {/* Title */}
            <h3 className="text-2xl font-bold mb-4 text-center">{step.title}</h3>

            {/* Description */}
            <p className="text-white/80 text-center flex-1">{step.description}</p>

            {/* Soft glow accent */}
            <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          </div>
        ))}
      </div>
    </div>
  );
}


