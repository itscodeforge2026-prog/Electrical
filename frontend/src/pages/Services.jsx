import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  DraftingCompass, 
  ShieldCheck, 
  Code, 
  Smartphone, 
  Database, 
  TrendingUp, 
  Zap, 
  Laptop
} from 'lucide-react';

const Services = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const electricalServices = [
    {
      title: 'Manpower Supply',
      description: 'Reliable deployment of technical staff for temporary or long-term operational needs.',
      details: [
        'Skilled Industrial Electricians',
        'Certified Maintenance Engineers',
        'Technical Supervised Manpower',
        'Expert Testing & Installation Crews'
      ],
      icon: <Users className="h-6 w-6 text-brand-secondary" />
    },
    {
      title: 'Electrical Design',
      description: 'Comprehensive architectural and electrical drafting for layout and regulatory clearances.',
      details: [
        'Residential & Commercial Planning',
        'Industrial Electrical Layouts',
        'Professional CAD Drafting',
        'Load Calculations & Panel Schedules'
      ],
      icon: <DraftingCompass className="h-6 w-6 text-brand-secondary" />
    },
    {
      title: 'Testing of Electrical Equipment',
      description: 'Pre-commissioning and routine checks to safeguard power infrastructure.',
      details: [
        'Power & Distribution Transformer Testing',
        'HV & LV Motor Performance Tests',
        'Insulation & Cable Integrity Scans',
        'Panel Inspections & Preventive Relays',
        'Electrical Safety Audits & Compliance'
      ],
      icon: <ShieldCheck className="h-6 w-6 text-brand-secondary" />
    }
  ];

  const automationServices = [
    {
      title: 'Website Development',
      description: 'Custom, blazing-fast web applications optimized for desktop and mobile devices.',
      details: [
        'Responsive Corporate Websites',
        'Custom Business Applications',
        'Interactive Portfolio Pages',
        'High-Converting Landing Pages',
        'SEO-First Web Architectures'
      ],
      icon: <Code className="h-6 w-6 text-brand-secondary" />
    },
    {
      title: 'App Development',
      description: 'Native and cross-platform mobile solutions to elevate client engagement.',
      details: [
        'Android Business Applications',
        'E-Commerce & Retail Apps',
        'Inventory & Logistics Software',
        'Custom Cross-Platform Apps'
      ],
      icon: <Smartphone className="h-6 w-6 text-brand-secondary" />
    },
    {
      title: 'Database Management',
      description: 'Secure and optimized data architectures ensuring seamless transactional performance.',
      details: [
        'Relational (MySQL, PostgreSQL)',
        'NoSQL Databases (MongoDB)',
        'Query Performance Tuning',
        'Automated Backup & Disaster Recovery',
        'End-to-End Data Security'
      ],
      icon: <Database className="h-6 w-6 text-brand-secondary" />
    },
    {
      title: 'Social Media & Digital Marketing',
      description: 'Comprehensive outreach strategies to scale brand presence and drive lead generation.',
      details: [
        'Instagram & Facebook Campaign Operations',
        'ROI-Driven Google Ad Management',
        'Organic Search Engine Optimization (SEO)',
        'Content Creation & Brand Marketing'
      ],
      icon: <TrendingUp className="h-6 w-6 text-brand-secondary" />
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full pt-24 pb-20 bg-slate-50 dark:bg-slate-900/20 transition-colors duration-300"
    >
      {/* Page Header Banner */}
      <div className="bg-brand-primary text-white py-16 md:py-24 relative overflow-hidden mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-slate-900 to-brand-secondary opacity-80 z-0" />
        {/* Glow rings */}
        <div className="absolute -top-10 -right-10 w-80 h-80 rounded-full bg-brand-secondary/15 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-80 h-80 rounded-full bg-brand-accent/10 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-4"
          >
            <Zap className="h-4 w-4 text-brand-accent animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider">End-to-End Integration</span>
          </motion.div>
          
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight">
            Our Professional Services
          </h1>
          <p className="font-sans text-slate-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mt-4 leading-relaxed">
            From critical electrical infrastructure testing and designs to modern custom web architectures, we engineer results with precision.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* SECTION 1: Electrical Services */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 dark:border-slate-800 pb-5 mb-10">
            <div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-primary dark:text-white">
                Electrical Engineering Services
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1.5 font-sans">
                Professional electrical contracting, equipment inspections, and design certifications.
              </p>
            </div>
            <div className="mt-3 md:mt-0 px-3 py-1 rounded-md bg-brand-secondary/10 dark:bg-brand-secondary/20 text-brand-secondary text-xs font-semibold tracking-wider uppercase font-sans">
              Section 01
            </div>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {electricalServices.map((service, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="p-8 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-[16px] shadow-sm hover-lift flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 w-fit rounded-xl bg-brand-secondary/10 text-brand-secondary dark:bg-slate-800 mb-6">
                    {service.icon}
                  </div>
                  <h3 className="font-display font-bold text-xl text-brand-primary dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="font-sans text-xs text-slate-400 mb-5 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start text-sm text-slate-600 dark:text-slate-300">
                        <span className="text-brand-secondary font-bold mr-2.5 shrink-0 select-none">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* SECTION 2: Automation & Computer-Based Services */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 dark:border-slate-800 pb-5 mb-10">
            <div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-primary dark:text-white">
                Automation & Computer-Based Services
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1.5 font-sans">
                Elevating business growth with web, native software development, and digital marketing.
              </p>
            </div>
            <div className="mt-3 md:mt-0 px-3 py-1 rounded-md bg-brand-accent/10 dark:bg-brand-accent/20 text-brand-accent text-xs font-semibold tracking-wider uppercase font-sans">
              Section 02
            </div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {automationServices.map((service, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="p-6 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-[16px] shadow-sm hover-lift flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 w-fit rounded-xl bg-brand-secondary/10 text-brand-secondary dark:bg-slate-800 mb-5">
                    {service.icon}
                  </div>
                  <h3 className="font-display font-bold text-lg text-brand-primary dark:text-white mb-2.5">
                    {service.title}
                  </h3>
                  <p className="font-sans text-xs text-slate-400 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start text-xs text-slate-600 dark:text-slate-300">
                        <span className="text-brand-secondary font-bold mr-2 shrink-0 select-none">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
};

export default Services;
