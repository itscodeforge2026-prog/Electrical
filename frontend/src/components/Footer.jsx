import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Phone, Mail, MapPin, Cpu } from 'lucide-react';

const FacebookIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Facebook', icon: <FacebookIcon className="h-5 w-5" />, href: 'https://facebook.com' },
    { name: 'Instagram', icon: <InstagramIcon className="h-5 w-5" />, href: 'https://instagram.com' },
    { name: 'LinkedIn', icon: <LinkedinIcon className="h-5 w-5" />, href: 'https://linkedin.com' },
    { name: 'WhatsApp', icon: <MessageSquare className="h-5 w-5" />, href: 'https://wa.me/919265808905' },
  ];

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-400 border-t border-slate-800 transition-colors duration-300">
      {/* Upper Footer: Branding & Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          
          {/* Column 1: Brand Intro */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 text-white">
              <div className="p-2 rounded-xl bg-brand-secondary text-white">
                <Cpu className="h-5 w-5" />
              </div>
              <span className="font-display font-bold text-lg md:text-xl">
                VK <span className="text-brand-secondary">Electrical</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Virat Kohli Electrical & Automation Solutions delivers premium electrical design, industrial automation engineering, and custom software systems tailored for forward-thinking enterprises.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-slate-800 hover:bg-brand-secondary text-slate-400 hover:text-white transition-all duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-display font-semibold text-base mb-4 tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-brand-secondary hover:underline transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-secondary hover:underline transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-secondary hover:underline transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white font-display font-semibold text-base mb-4 tracking-wider uppercase">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services" className="hover:text-brand-secondary hover:underline transition-colors">
                  Electrical Services
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-secondary hover:underline transition-colors">
                  Automation Engineering
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-secondary hover:underline transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-secondary hover:underline transition-colors">
                  App Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-secondary hover:underline transition-colors">
                  Database Management
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-secondary hover:underline transition-colors">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact info */}
          <div className="space-y-3.5 text-sm">
            <h3 className="text-white font-display font-semibold text-base mb-4 tracking-wider uppercase">
              Contact Us
            </h3>
            <div className="flex items-start space-x-3">
              <Phone className="h-5 w-5 text-brand-secondary shrink-0 mt-0.5" />
              <span>+91 9265808905</span>
            </div>
            <div className="flex items-start space-x-3">
              <Mail className="h-5 w-5 text-brand-secondary shrink-0 mt-0.5" />
              <a href="mailto:chandnanikaran5@gmail.com" className="hover:text-white transition-colors">
                chandnanikaran5@gmail.com
              </a>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-brand-secondary shrink-0 mt-0.5" />
              <span>
                102 Sunrise Complex<br />
                Near City Mall, Ahmedabad<br />
                Gujarat, 380015
              </span>
            </div>
          </div>
          
        </div>
      </div>

      {/* Bottom Footer: Copyright */}
      <div className="border-t border-slate-800/80 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between text-xs space-y-3 md:space-y-0">
          <p>
            &copy; {currentYear} Virat Kohli Electrical & Automation Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
