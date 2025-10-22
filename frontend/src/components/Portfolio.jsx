import React, { useState } from "react";
import { motion } from "framer-motion";

const allProjects = [
  {
    title: "Education Portal",
    category: "Web Development",
    image: "/images/image.png",
    description: "A platform for online courses and learning materials.",
    techStack: "React, Node.js, MongoDB",
    link: "#",
  },
  {
    title: "Wedding Planner App",
    category: "Mobile Apps",
    image: "/images/Wedding.png",
    description: "An app to help plan and manage weddings.",
    techStack: "React Native, Firebase",
    link: "#",
  },
  {
    title: "E-Commerce Store",
    category: "E-commerce",
    image: "/images/ecommerce.png",
    description: "An online store with payment gateway integration.",
    techStack: "Shopify, Liquid, HTML, CSS",
    link: "#",
  },
  {
    title: "Portfolio Redesign",
    category: "UI/UX Design",
    image: "/images/portfolio.jpg",
    description: "A redesign of a personal portfolio with a modern look.",
    techStack: "Figma, Adobe XD",
    link: "#",
  },
];

const categories = ["All Projects", "Web Development", "Mobile Apps", "E-commerce", "UI/UX Design"];

const Portfolio = () => {
  const [selected, setSelected] = useState("All Projects");

  const filteredProjects =
    selected === "All Projects"
      ? allProjects
      : allProjects.filter((project) => project.category === selected);

  return (
    <section id="portfolio" className="bg-gray-900 text-white py-20 px-5">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-3">Our Portfolio</h2>
        <p className="text-gray-400 mb-8">
          Real projects. Real results. See how we've helped businesses transform their digital presence.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat, index) => (
            <button
              key={index}
              className={`px-5 py-2 rounded-full font-medium transition-colors ${
                selected === cat
                  ? "bg-blue-500 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white"
              }`}
              onClick={() => setSelected(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative bg-white/5 backdrop-blur-lg border border-white/20
                         rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl cursor-pointer"
            >
              {/* Image */}
              <div className="h-64 w-full overflow-hidden rounded-t-3xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col items-center text-center">
                <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent 
                               bg-gradient-to-r from-purple-400 to-pink-500">
                  {project.title}
                </h3>
                <span className="bg-gradient-to-r from-indigo-500 to-purple-500 
                                 text-white px-3 py-1 rounded-full text-sm mb-4">
                  {project.category}
                </span>

                {/* Description */}
                <p className="text-gray-300 mb-4">{project.description}</p>

                {/* Tech Stack */}
                <p className="text-gray-500 text-sm font-semibold mb-4">Tech Stack: {project.techStack}</p>

                {/* Link */}
                <a
                  href={project.link}
                  className="text-blue-400 hover:text-blue-600 text-sm font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>

              {/* Floating Glow Circle */}
              <div className="absolute -top-5 -right-5 w-16 h-16 rounded-full 
                              bg-purple-500/30 blur-3xl animate-pulse"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
