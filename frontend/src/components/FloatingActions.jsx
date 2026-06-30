import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingActions = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Bottom Left: Call Now Floating Button */}
      <div className="fixed bottom-6 left-6 z-30">
        <a
          href="tel:+919876543210"
          className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-600 to-brand-secondary text-white rounded-full shadow-lg hover:scale-110 active:scale-95 transition-transform duration-200 group"
          aria-label="Call Now"
        >
          {/* Pulsing outline */}
          <span className="absolute inset-0 rounded-full bg-blue-600 opacity-40 animate-ping" />
          <Phone className="w-6 h-6 relative z-10" />
          
          {/* Tooltip */}
          <span className="absolute left-16 scale-0 group-hover:scale-100 transition-all duration-200 origin-left bg-slate-900 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap shadow-md">
            Call Us: +91 9876543210
          </span>
        </a>
      </div>

      {/* Bottom Right Stack: Back to Top & WhatsApp */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col items-center space-y-3">
        {/* Back to Top */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              onClick={scrollToTop}
              className="p-3 bg-slate-800 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600 text-white rounded-full shadow-md transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* WhatsApp */}
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:scale-110 active:scale-95 transition-transform duration-200 group"
          aria-label="Chat on WhatsApp"
        >
          {/* Pulsing outline */}
          <span className="absolute inset-0 rounded-full bg-green-500 opacity-40 animate-ping" />
          <MessageCircle className="w-6.5 h-6.5 fill-current relative z-10" />

          {/* Tooltip */}
          <span className="absolute right-16 scale-0 group-hover:scale-100 transition-all duration-200 origin-right bg-slate-900 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap shadow-md">
            Chat on WhatsApp
          </span>
        </a>
      </div>
    </>
  );
};

export default FloatingActions;
