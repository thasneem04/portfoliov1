import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Briefcase, Award, Mail, MoreHorizontal, SquareTerminal } from 'lucide-react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [showMore, setShowMore] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const navLinks = [
    { title: 'Home', href: 'home', icon: Home },
    { title: 'Skills', href: 'skills', icon: SquareTerminal },
    { title: 'Projects', href: 'projects', icon: Briefcase },
    { title: 'Experience', href: 'experience', icon: User },
    { title: 'Honors', href: 'achievements', icon: Award },
    { title: 'Contact', href: 'contact', icon: Mail },
  ];

  const primaryLinks = navLinks.slice(0, 4);
  const moreLinks = navLinks.slice(4);

  return (
    <>
      {/* Top Navbar (Logo Only on Mobile) */}
      <nav className="fixed w-full top-0 left-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent cursor-pointer"
          >
            THASNEEM
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={link.href}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer relative group"
                >
                  {link.title}
                  <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-purple-500 transition-all group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm">
        <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-2 flex items-center justify-around shadow-2xl relative">
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              smooth={true}
              offset={-80}
              duration={500}
              onSetActive={() => setActiveTab(link.href)}
              spy={true}
              className="flex flex-col items-center p-2 rounded-xl transition-all cursor-pointer group"
            >
              <link.icon 
                size={22} 
                className={`transition-colors ${activeTab === link.href ? 'text-purple-400' : 'text-gray-400 group-hover:text-white'}`} 
              />
            </Link>
          ))}

          {/* More Toggle */}
          <button 
            onClick={() => setShowMore(!showMore)}
            className="flex flex-col items-center p-2 rounded-xl transition-all group"
          >
            <MoreHorizontal 
              size={22} 
              className={`transition-colors ${showMore ? 'text-pink-400' : 'text-gray-400 group-hover:text-white'}`} 
            />
          </button>

          {/* More Links Popover */}
          <AnimatePresence>
            {showMore && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                className="absolute bottom-full mb-4 left-0 right-0 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden p-2 grid grid-cols-2 gap-2 shadow-2xl"
              >
                {moreLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    onClick={() => setShowMore(false)}
                    className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group"
                  >
                    <link.icon size={18} className="text-gray-400 group-hover:text-white" />
                    <span className="text-sm text-gray-300 font-medium group-hover:text-white">
                      {link.title}
                    </span>
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Navbar;
