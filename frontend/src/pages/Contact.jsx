import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, CheckCircle, Headphones, Map } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactDetails = [
    {
      icon: <Phone className="h-6 w-6 text-brand-secondary" />,
      title: 'Call Us Now',
      text: '+91 9265808905',
      href: 'tel:+919265808905',
      sub: 'Mon - Sat: 9am - 7pm'
    },
    {
      icon: <Mail className="h-6 w-6 text-brand-secondary" />,
      title: 'Email Queries',
      text: 'chandnanikaran5@gmail.com',
      href: 'mailto:chandnanikaran5@gmail.com',
      sub: 'Response within 24 hours'
    },
    {
      icon: <MapPin className="h-6 w-6 text-brand-secondary" />,
      title: 'Office Location',
      text: '102 Sunrise Complex, Near City Mall, Ahmedabad, Gujarat, 380015',
      href: 'https://maps.google.com',
      sub: 'Main Corporate Office'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full pt-24 pb-20 bg-slate-50 dark:bg-slate-900/20 transition-colors duration-300"
    >
      {/* Contact Banner Header */}
      <div className="bg-brand-primary text-white py-16 md:py-24 relative overflow-hidden mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-slate-900 to-brand-secondary opacity-80 z-0" />
        <div className="absolute -top-10 -right-10 w-80 h-80 rounded-full bg-brand-secondary/15 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-80 h-80 rounded-full bg-brand-accent/10 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-4"
          >
            <Headphones className="h-4 w-4 text-brand-accent animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider">Contact & Support</span>
          </motion.div>
          
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight">
            Contact Us
          </h1>
          <p className="font-sans text-slate-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mt-4 leading-relaxed">
            Have a project in mind or need electrical auditing? Send us an inquiry or reach out directly.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* LEFT: Contact Details & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-primary dark:text-white leading-tight">
                Get in Touch
              </h2>
              <p className="font-sans text-slate-500 dark:text-slate-400 text-sm mt-1.5 leading-relaxed">
                Connect with Virat Kohli for expert consultations in electrical systems and engineering software solutions.
              </p>
            </div>

            {/* Quick Cards Info */}
            <div className="space-y-5">
              {contactDetails.map((detail, idx) => (
                <div
                  key={idx}
                  className="flex p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="p-3 w-fit h-fit rounded-xl bg-brand-secondary/10 dark:bg-slate-800 text-brand-secondary shrink-0 mr-4">
                    {detail.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-slate-400 uppercase tracking-widest">
                      {detail.title}
                    </h3>
                    <p className="font-sans font-semibold text-slate-800 dark:text-white mt-1 text-base">
                      {detail.href.startsWith('http') ? (
                        detail.text
                      ) : (
                        <a href={detail.href} className="hover:text-brand-secondary transition-colors">
                          {detail.text}
                        </a>
                      )}
                    </p>
                    <p className="font-sans text-xs text-slate-400 mt-0.5">
                      {detail.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-300">
                <Map className="h-5 w-5 text-brand-secondary" />
                <span className="font-display font-semibold text-sm">Interactive Route Map</span>
              </div>
              
              <div className="rounded-2xl border border-slate-200/60 dark:border-slate-800/80 shadow-md overflow-hidden h-64 bg-slate-100 dark:bg-slate-900 relative">
                {/* Embedded Iframe Google Map (Ahmedabad location) */}
                <iframe
                  title="Office Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.697915712173!2d72.53818621500366!3d23.03485638494747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f686616b7b%3A0x3b664dcf3ec1ef07!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1625060000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="w-full h-full filter grayscale dark:invert-[0.9] dark:hue-rotate-[180deg] transition-all duration-300"
                />
              </div>
            </div>

          </motion.div>

          {/* RIGHT: Inquiry Form Container */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <ContactForm />
          </motion.div>
          
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
