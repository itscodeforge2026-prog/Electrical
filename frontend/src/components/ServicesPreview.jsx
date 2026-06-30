import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Briefcase } from 'lucide-react';
import controlPanelImg from '../assets/control_panel.png';
import automationDevImg from '../assets/automation_dev.png';

const ServicesPreview = () => {
  const previews = [
    {
      title: 'Electrical Services',
      image: controlPanelImg,
      description: 'Comprehensive electrical engineering services for industrial, commercial, and residential facilities, ensuring high-efficiency operations.',
      bullets: [
        'Industrial Electrical Design',
        'Testing & Commissioning',
        'Preventive Maintenance',
        'Electrical Installations',
        'Skilled Manpower Supply',
      ],
      link: '/services',
    },
    {
      title: 'Automation Services',
      image: automationDevImg,
      description: 'Advanced industrial automation and computer-based services, empowering businesses with software engineering and digital marketing.',
      bullets: [
        'Website Development',
        'App Development',
        'Database Management',
        'Social Media & Digital Marketing',
        'PLC & SCADA Integrations',
      ],
      link: '/services',
    },
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-secondary/10 text-brand-secondary dark:bg-brand-secondary/20 mb-3">
            <Briefcase className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase tracking-wider">Our Focus</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-primary dark:text-white">
            Services Preview
          </h2>
          <div className="w-16 h-1 bg-brand-secondary mx-auto mt-4 rounded-full" />
        </div>

        {/* Preview Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12">
          {previews.map((service, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-white dark:bg-slate-900 rounded-[24px] border border-slate-200/50 dark:border-slate-800/50 shadow-lg overflow-hidden group hover-lift"
            >
              
              {/* Image Section */}
              <div className="h-64 sm:h-72 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10 opacity-70" />
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 z-0"
                  loading="lazy"
                />
                <h3 className="absolute bottom-6 left-6 font-display font-extrabold text-2xl sm:text-3xl text-white z-20">
                  {service.title}
                </h3>
              </div>

              {/* Content Section */}
              <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <p className="font-sans font-normal text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Bullets List */}
                  <ul className="space-y-2.5 pt-2">
                    {service.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-center space-x-3 text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="h-4.5 w-4.5 text-brand-secondary shrink-0" />
                        <span className="font-medium">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <div className="pt-4">
                  <Link
                    to={service.link}
                    className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-secondary to-blue-500 text-white font-semibold shadow-md shadow-brand-secondary/15 hover:shadow-lg hover:shadow-brand-secondary/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                  >
                    <span>Explore Services</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesPreview;
