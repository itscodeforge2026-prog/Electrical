import React from 'react';
import { Award, ShieldCheck, Clock, Cpu, ThumbsUp, IndianRupee, HelpCircle } from 'lucide-react';

const WhyChooseUs = () => {
  const points = [
    {
      title: 'Experienced Engineers',
      description: 'Our team comprises highly skilled electrical engineers and certified automation consultants with deep industry experience.',
      icon: <Award className="h-6 w-6 text-brand-secondary" />,
    },
    {
      title: 'Quality Service',
      description: 'We follow stringent ISO standards and safety compliance, ensuring premium quality in every project we execute.',
      icon: <ShieldCheck className="h-6 w-6 text-brand-secondary" />,
    },
    {
      title: 'Affordable Pricing',
      description: 'Get industry-grade engineering and advanced software solutions at competitive, business-friendly price structures.',
      icon: <IndianRupee className="h-6 w-6 text-brand-secondary" />,
    },
    {
      title: 'Timely Delivery',
      description: 'We value your business operations and project timelines. We guarantee punctual milestones and on-time commissioning.',
      icon: <Clock className="h-6 w-6 text-brand-secondary" />,
    },
    {
      title: 'Modern Technology',
      description: 'From smart IoT PLC programming to modern web stacks, we utilize cutting-edge technology for future-proof solutions.',
      icon: <Cpu className="h-6 w-6 text-brand-secondary" />,
    },
    {
      title: 'Customer Satisfaction',
      description: 'Our focus is client success. We provide 24/7 dedicated support and maintenance to ensure complete peace of mind.',
      icon: <ThumbsUp className="h-6 w-6 text-brand-secondary" />,
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent dark:bg-brand-accent/25 mb-3">
            <HelpCircle className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase tracking-wider">Features</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-primary dark:text-white">
            Why Choose Us
          </h2>
          <div className="w-16 h-1 bg-brand-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, idx) => (
            <div
              key={idx}
              className="p-8 rounded-[16px] bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 hover-lift relative overflow-hidden group"
            >
              {/* Subtle top decoration */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-secondary to-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              
              <div className="p-4 w-fit rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200/50 dark:border-slate-700/30 mb-6 group-hover:bg-brand-secondary group-hover:text-white transition-colors duration-300">
                <div className="group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  {point.icon}
                </div>
              </div>
              
              <h3 className="font-display font-bold text-xl text-brand-primary dark:text-white mb-3">
                {point.title}
              </h3>
              
              <p className="font-sans font-normal text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
