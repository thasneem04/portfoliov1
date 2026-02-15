import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects" className="w-full py-20 relative overflow-hidden bg-black/50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 z-10 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Notable <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work, featuring full-stack applications and creative experiments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                zIndex: 10,
              }}
              className="group relative h-96 w-full perspective-rotate-y-12 bg-gray-900 border border-white/10 rounded-2xl p-6 flex flex-col justify-between shadow-2xl hover:shadow-pink-500/20 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
              
              <div className="relative z-10 space-y-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-pink-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 line-clamp-3 text-sm md:text-base">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-4">
                  {project.tech.split(", ").map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded-md text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative z-10 pt-6 mt-auto">
                <a
                  href={project.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-2 rounded-lg font-medium transition-transform shadow-lg ${
                    project.link 
                      ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:scale-105 active:scale-95 hover:shadow-pink-500/50 cursor-pointer" 
                      : "bg-gray-700 text-gray-400 cursor-not-allowed"
                  }`}
                  onClick={(e) => !project.link && e.preventDefault()}
                >
                  {project.link ? "View Details" : "Coming Soon"}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
