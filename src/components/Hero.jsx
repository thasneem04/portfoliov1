import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Hero3D from "./Hero3D";

const Hero = () => {
  const [textStage, setTextStage] = useState(0);
  const [typedText, setTypedText] = useState("");
  const fullCommand = "npm run details";

  // Typing effect for the command
  useEffect(() => {
    let i = 0;
    const typeCommand = setInterval(() => {
      if (i <= fullCommand.length) {
        setTypedText(fullCommand.slice(0, i));
        i++;
      } else {
        clearInterval(typeCommand);
        setTimeout(() => setTextStage(1), 400); // Small delay after typing finishes
      }
    }, 80);

    return () => clearInterval(typeCommand);
  }, []);

  // Sequence for the output lines
  useEffect(() => {
    if (textStage >= 1 && textStage < 7) {
      const times = [800, 1500, 2300, 3100, 4600, 5800]; // Delays for each stage
      const currentDelay = times[textStage - 1] || 1000;

      const timeout = setTimeout(
        () => {
          setTextStage((prev) => prev + 1);
        },
        currentDelay - (times[textStage - 2] || 0),
      ); // Calculate delta

      return () => clearTimeout(timeout);
    }
  }, [textStage]);

  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center bg-gray-950 relative overflow-hidden px-4 py-20"
    >
      {/* Subtle Background 3D Element */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <Hero3D />
      </div>

      <div className="z-10 w-full max-w-3xl flex flex-col gap-8">
        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full bg-[#1e1e1e] rounded-xl shadow-2xl border border-white/10 overflow-hidden font-mono text-sm md:text-base leading-relaxed"
        >
          {/* Terminal Header */}
          <div className="bg-[#2d2d2d] px-4 py-3 flex gap-2 items-center border-b border-white/5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <div className="ml-4 text-gray-500 text-xs tracking-wider">
              thasneem@portfolio: ~
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-6 md:p-8 text-gray-300 space-y-4 min-h-[400px]">
            {/* Command Line */}
            <div className="flex gap-2 items-center flex-wrap">
              <span className="text-green-400 font-bold">
                thasneem@portfolio:~$
              </span>
              <span className="text-white">{typedText}</span>
              {textStage === 0 && (
                <span className="animate-pulse text-white inline-block w-2 h-5 bg-white align-middle"></span>
              )}
            </div>

            {/* Output Lines */}
            {textStage >= 1 && (
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <span className="text-gray-500 italic">
                    {">"} Initializing portfolio...
                  </span>
                </motion.div>

                {textStage >= 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="text-blue-400 font-bold">
                      {">"} Name:{" "}
                    </span>
                    <span className="text-white font-bold tracking-wide">
                      Thasneem Banu A
                    </span>
                  </motion.div>
                )}

                {textStage >= 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="text-blue-400 font-bold">
                      {">"} Role:{" "}
                    </span>
                    <span className="text-white font-bold tracking-wide">
                      Full Stack Developer | Freelancer
                    </span>
                  </motion.div>
                )}

                {textStage >= 4 && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="text-blue-400 font-bold">
                      {">"} Experience:{" "}
                    </span>
                    <span className="text-white font-bold tracking-wide">
                      Delivered 2 production-ready client projects
                    </span>
                  </motion.div>
                )}

                {textStage >= 5 && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="text-blue-400 font-bold block mb-2">
                      {">"} Objective:{" "}
                    </span>
                    <div className="pl-4 border-l-2 border-gray-700 ml-1 text-gray-300 leading-7">
                      Aspiring Full Stack Developer with hands-on experience in
                      Java, Spring Boot, MERN stack, and REST API development.
                      Strong in problem-solving and clean coding practices.
                    </div>
                  </motion.div>
                )}

                {textStage >= 6 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="pt-6"
                  >
                    <span className="text-green-400 font-bold border border-green-500/30 bg-green-500/10 px-4 py-2 rounded-md inline-block">
                      {">"} Status: Ready for Production 🚀
                    </span>
                  </motion.div>
                )}

                {/* Final Blinking Cursor */}
                {textStage >= 6 && (
                  <div className="flex gap-2 items-center pt-4">
                    <span className="text-green-400 font-bold">
                      thasneem@portfolio:~$
                    </span>
                    <span className="animate-pulse text-white inline-block w-2 h-5 bg-white align-middle"></span>
                  </div>
                )}
              </div>
            )}
          </div>
        </motion.div>

        {/* Action Buttons */}
        {textStage >= 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-6 justify-center"
          >
            <Link
              to="projects"
              smooth={true}
              offset={-80}
              duration={500}
              className="px-8 py-3 rounded-lg bg-white text-black font-bold hover:bg-gray-200 transition-all cursor-pointer shadow-lg hover:shadow-white/20 hover:-translate-y-1"
            >
              View Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              offset={-80}
              duration={500}
              className="px-8 py-3 rounded-lg border border-white/20 text-white font-medium hover:bg-white/10 transition-all cursor-pointer hover:-translate-y-1"
            >
              Contact Me
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Hero;
