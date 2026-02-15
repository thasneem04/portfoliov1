import React from "react";
import { ACHIEVEMENTS, CERTIFICATES } from "../constants";
import { motion } from "framer-motion";
import { Trophy, Award } from "lucide-react";

const Achievements = () => {
  return (
    <section id="achievements" className="w-full py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Honors & <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Certifications</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Recognitions and qualifications that validation my journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Achievements Column */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <Trophy className="text-yellow-500 w-8 h-8" />
              Achievements
            </h3>
            <div className="space-y-4">
              {ACHIEVEMENTS.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors flex items-start gap-4"
                >
                  <span className="text-yellow-500 text-xl font-bold">#</span>
                  <p className="text-gray-300">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certificates Column */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <Award className="text-orange-500 w-8 h-8" />
              Certifications
            </h3>
            <div className="space-y-4">
              {CERTIFICATES.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors flex items-start gap-4"
                >
                  <div className="min-w-[8px] h-[8px] mt-2 rounded-full bg-orange-500" />
                  <p className="text-gray-300">{cert}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Achievements;
