import React, { useRef, useState } from "react";
import { PERSON } from "../constants";
import { Mail, Phone, MapPin, Github, Linkedin, Globe, Send, CheckCircle, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: null, message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const formData = new FormData(formRef.current);
      const data = Object.fromEntries(formData.entries());

      const response = await fetch(`https://formsubmit.co/ajax/${PERSON.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setLoading(false);
        setStatus({ 
          type: "success", 
          message: "Thank you! Your message has been sent successfully. I'll get back to you soon." 
        });
        formRef.current.reset();
      } else {
        throw new Error(result.message || "Failed to send");
      }
    } catch (error) {
      setLoading(false);
      console.error("Form error:", error);
      setStatus({ 
        type: "error", 
        message: "Oops! Something went wrong. Please try again or email me directly at " + PERSON.email
      });
    }
  };

  return (
    <footer id="contact" className="w-full bg-black py-16 text-white border-t border-white/10 relative overflow-hidden">
      
      {/* Background Blurs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 blur-[128px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 blur-[128px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
        
        {/* Contact Info */}
        <div className="space-y-8">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          >
            Let's Connect
          </motion.h2>

          <p className="text-gray-400 max-w-md">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="space-y-4 text-sm md:text-base">
            <div className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors">
              <div className="p-2 bg-purple-500/10 rounded-lg">
                <Mail className="w-5 h-5 text-purple-500" />
              </div>
              <span>{PERSON.email}</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors">
              <div className="p-2 bg-pink-500/10 rounded-lg">
                <Phone className="w-5 h-5 text-pink-500" />
              </div>
              <span>{PERSON.phone}</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors">
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <MapPin className="w-5 h-5 text-blue-500" />
              </div>
              <span>{PERSON.location}</span>
            </div>
          </div>

          <div className="flex space-x-4 pt-4">
            <a href={PERSON.links.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-xl hover:bg-white/10 hover:scale-110 transition-all border border-white/10">
              <Github className="w-5 h-5" />
            </a>
            <a href={PERSON.links.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-xl hover:bg-white/10 hover:scale-110 transition-all border border-white/10">
              <Linkedin className="w-5 h-5 text-blue-400" />
            </a>
            <a href={PERSON.links.leetcode} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-xl hover:bg-white/10 hover:scale-110 transition-all border border-white/10">
              <Globe className="w-5 h-5 text-yellow-500" /> 
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-5 bg-white/5 p-8 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-md"
          >
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
              <input 
                name="user_name"
                required
                type="text" 
                className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white placeholder-gray-600 transition-all" 
                placeholder="Your Name" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
              <input 
                name="user_email"
                required
                type="email" 
                className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white placeholder-gray-600 transition-all" 
                placeholder="your@email.com" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea 
                name="message"
                required
                rows={4} 
                className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white placeholder-gray-600 transition-all resize-none" 
                placeholder="Your message..." 
              />
            </div>
            
            <button 
              disabled={loading}
              className={`w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-purple-500/20 flex items-center justify-center gap-2 ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90 active:scale-[0.98]'}`}
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>

            {/* Success/Error Feedback */}
            {status.message && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex items-center gap-2 p-4 rounded-xl text-sm ${status.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}
              >
                {status.type === 'success' ? <CheckCircle className="w-5 h-5 shrink-0" /> : <AlertCircle className="w-5 h-5 shrink-0" />}
                {status.message}
              </motion.div>
            )}
          </form>
        </motion.div>

      </div>
      
      <div className="text-center text-gray-600 text-sm mt-16 pb-4">
        &copy; {new Date().getFullYear()} {PERSON.name}. All rights reserved.
      </div>
    </footer>
  );
};

export default Contact;
