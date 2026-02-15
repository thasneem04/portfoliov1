import React from "react";
import { motion } from "framer-motion";
import { SKILLS } from "../constants";

const Skills = () => {
  return (
    <section id="skills" className="w-full py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficient tools.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {SKILLS.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotateX: -20 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                rotateX: -5,
                boxShadow: "0px 10px 30px rgba(139, 92, 246, 0.3)"
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-colors"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 relative z-10">
                <span className="w-2 h-8 bg-purple-500 rounded-full" />
                {skillGroup.category}
              </h3>
              
              <div className="flex flex-wrap gap-3 relative z-10">
                {skillGroup.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(139, 92, 246, 0.5)" }}
                    className="px-4 py-2 bg-white/10 rounded-lg text-sm font-medium text-gray-200 cursor-default border border-white/5"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
