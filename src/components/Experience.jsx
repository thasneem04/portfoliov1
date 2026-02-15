import React from "react";
import { EXPERIENCE, EDUCATION } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="w-full py-20 bg-black/50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My journey through internships and education.
          </p>
        </motion.div>

        <div className="space-y-12 relative">
           {/* Vertical Line */}
           <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-white/10 md:-translate-x-1/2 rounded-full" />
           
           {EXPERIENCE.map((exp, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, delay: index * 0.2 }}
               viewport={{ once: true }}
               className={`flex flex-col md:flex-row items-center justify-between gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
             >
               <div className="w-full md:w-5/12 ml-12 md:ml-0 md:text-right">
                  <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                  <h4 className="text-xl text-green-400 font-medium">{exp.company}</h4>
               </div>

               <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-green-500 border-4 border-black transform md:-translate-x-1/2 z-10" />

               <div className="w-full md:w-5/12 ml-12 md:ml-0 bg-white/5 p-6 rounded-xl border border-white/10 hover:border-green-500/50 transition-colors shadow-lg">
                  <p className="text-gray-300">{exp.description}</p>
               </div>
             </motion.div>
           ))}

           {/* Education Section */}
           {EDUCATION.map((edu, index) => (
             <motion.div
               key={`edu-${index}`}
               initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, delay: index * 0.2 }}
               viewport={{ once: true }}
               className={`flex flex-col md:flex-row items-center justify-between gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
             >
               <div className="w-full md:w-5/12 ml-12 md:ml-0 md:text-right">
                  <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                  <h4 className="text-xl text-blue-400 font-medium">{edu.institution}</h4>
               </div>

               <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-black transform md:-translate-x-1/2 z-10" />

               <div className="w-full md:w-5/12 ml-12 md:ml-0 bg-white/5 p-6 rounded-xl border border-white/10 hover:border-blue-500/50 transition-colors shadow-lg">
                  <p className="text-gray-400 text-sm">{edu.year}</p>
                  <p className="text-gray-300 mt-2 font-semibold text-lg">{edu.score}</p>
               </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};
export default Experience;
