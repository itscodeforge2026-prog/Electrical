import React from 'react';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-900 text-white"
    >
      <div className="relative flex flex-col items-center">
        {/* Animated outer glowing ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
          className="w-24 h-24 rounded-full border-2 border-slate-700 border-t-brand-secondary border-r-brand-accent shadow-[0_0_20px_rgba(37,99,235,0.4)]"
        />
        
        {/* Centered Icon with pulse */}
        <motion.div
          animate={{ scale: [0.9, 1.1, 0.9] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-7 flex items-center justify-center text-brand-secondary"
        >
          <Cpu className="w-10 h-10 text-brand-secondary" />
        </motion.div>
        
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-center"
        >
          <h2 className="font-display font-bold text-xl tracking-wider text-white">
            VK ELECTRICAL
          </h2>
          <p className="text-xs text-slate-400 mt-1.5 uppercase tracking-widest">
            Engineering & Automation
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
