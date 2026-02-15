import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: 'Home', href: 'home' },
    { title: 'Skills', href: 'skills' },
    { title: 'Projects', href: 'projects' },
    { title: 'Experience', href: 'experience' },
    { title: 'Honors', href: 'achievements' },
    { title: 'Contact', href: 'contact' },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
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

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/90 backdrop-blur-lg border-b border-white/10"
          >
            <div className="flex flex-col items-center py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  to={link.href}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-white text-lg font-medium cursor-pointer"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
