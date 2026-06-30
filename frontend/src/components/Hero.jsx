import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Settings } from 'lucide-react';
import heroBg from '../assets/hero_bg.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-primary pt-24 pb-16">
      
      {/* Background Image with Overlays */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-45 dark:opacity-30 scale-105"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-secondary/20 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-brand-accent/15 blur-3xl" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35 dark:opacity-60 z-0" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        
        {/* Heading */}
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-tight max-w-5xl mx-auto">
          Professional Electrical &<br />
          <span className="bg-gradient-to-r from-blue-400 via-brand-secondary to-brand-accent bg-clip-text text-transparent">
            Automation Solutions
          </span>
        </h1>

        {/* Subheading */}
        <p className="font-sans font-normal text-slate-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mt-6 leading-relaxed">
          Providing Electrical Engineering, Industrial Automation, Website Development, App Development, Database Management, and Digital Marketing Services with Quality and Reliability.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
          <Link
            to="/services"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-secondary to-blue-500 hover:from-blue-600 hover:to-brand-secondary text-white font-sans font-semibold rounded-xl shadow-lg shadow-brand-secondary/25 hover:shadow-xl hover:shadow-brand-secondary/35 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center space-x-2"
          >
            <span>Our Services</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          
          <Link
            to="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-white/10 dark:bg-slate-900/30 hover:bg-white/20 dark:hover:bg-slate-800/40 text-white font-sans font-semibold rounded-xl border border-white/25 dark:border-slate-800/40 backdrop-blur-md hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center space-x-2"
          >
            <span>Contact Us</span>
          </Link>
        </div>

      </div>

      {/* Wave transition spacer bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-bg-light dark:from-brand-bg-dark to-transparent z-1" />
    </section>
  );
};

export default Hero;
