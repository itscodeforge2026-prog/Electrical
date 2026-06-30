import React from 'react';
import { Phone, Mail, MapPin, Award } from 'lucide-react';
import ownerPortrait from '../assets/owner_portrait.png';

const AboutOwner = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-brand-secondary" />,
      label: 'Phone',
      value: '+91 9876543210',
      href: 'tel:+919876543210',
    },
    {
      icon: <Mail className="h-5 w-5 text-brand-secondary" />,
      label: 'Email',
      value: 'viratkohli@gmail.com',
      href: 'mailto:viratkohli@gmail.com',
    },
    {
      icon: <MapPin className="h-5 w-5 text-brand-secondary" />,
      label: 'Address',
      value: '102 Sunrise Complex, Near City Mall, Ahmedabad, Gujarat, 380015',
      href: '#',
    },
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-secondary/10 text-brand-secondary dark:bg-brand-secondary/20 mb-3">
            <Award className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase tracking-wider">Leadership</span>
          </div>
          
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-primary dark:text-white">
            About the Owner
          </h2>
          <div className="w-16 h-1 bg-brand-secondary mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image */}
          <div className="lg:col-span-5 relative">
            {/* Background design elements */}
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-tr from-brand-secondary to-blue-400 rounded-2xl opacity-20 blur-xl z-0" />
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-gradient-to-br from-brand-accent to-amber-300 rounded-2xl opacity-15 blur-xl z-0" />
            
            {/* Styled border around the image wrapper */}
            <div className="relative p-3 rounded-[32px] bg-white dark:bg-slate-800 shadow-xl border border-slate-200/50 dark:border-slate-700/50 z-10">
              <div className="overflow-hidden rounded-[24px] aspect-[4/5] bg-slate-100 dark:bg-slate-900">
                <img
                  src={ownerPortrait}
                  alt="Virat Kohli"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Bio Details */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h3 className="font-display font-extrabold text-3xl text-brand-primary dark:text-white leading-tight">
                Virat Kohli
              </h3>
              <p className="font-sans font-semibold text-lg text-brand-secondary mt-1">
                Electrical Engineer & Automation Consultant
              </p>
            </div>

            <p className="font-sans font-normal text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              Virat Kohli is an experienced Electrical Engineer providing professional electrical engineering services, industrial automation solutions, equipment testing, website development, application development, database management and digital marketing solutions for businesses.
            </p>

            <div className="border-t border-slate-200 dark:border-slate-800/80 pt-6 space-y-4">
              {contactInfo.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/40 shadow-sm shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                      {item.label}
                    </h4>
                    {item.href !== '#' ? (
                      <a
                        href={item.href}
                        className="font-sans font-medium text-slate-800 dark:text-white hover:text-brand-secondary dark:hover:text-brand-secondary transition-colors text-base"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="font-sans font-medium text-slate-800 dark:text-white text-base">
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutOwner;
