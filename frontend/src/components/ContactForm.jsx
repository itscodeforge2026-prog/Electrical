import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    companyName: '',
    city: '',
    pincode: '',
    serviceRequired: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const services = [
    { value: 'Electrical Services', label: 'Electrical Services' },
    { value: 'Automation Services', label: 'Automation Services' },
    { value: 'Website Development', label: 'Website Development' },
    { value: 'App Development', label: 'App Development' },
    { value: 'Database Management', label: 'Database Management' },
    { value: 'Digital Marketing', label: 'Digital Marketing' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const tempErrors = {};
    
    if (!formData.fullName.trim()) tempErrors.fullName = 'Full Name is required';
    
    // Indian phone number basic validation (10 digits)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      tempErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.city.trim()) tempErrors.city = 'City is required';
    
    // Pincode validation (6 digits)
    const pincodeRegex = /^\d{6}$/;
    if (!formData.pincode.trim()) {
      tempErrors.pincode = 'Pincode is required';
    } else if (!pincodeRegex.test(formData.pincode)) {
      tempErrors.pincode = 'Please enter a valid 6-digit pincode';
    }
    
    if (!formData.serviceRequired) tempErrors.serviceRequired = 'Please select a service';
    if (!formData.message.trim()) tempErrors.message = 'Message is required';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setErrors({});

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'https://vk-electrical-backend.onrender.com';
      const response = await fetch(`${apiUrl}/api/inquiry`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        // Reset form
        setFormData({
          fullName: '',
          phone: '',
          email: '',
          companyName: '',
          city: '',
          pincode: '',
          serviceRequired: '',
          message: '',
        });
      } else {
        // Server validation error or general message
        if (data.errors) {
          setErrors(data.errors);
        } else {
          alert(data.message || 'Something went wrong. Please try again.');
        }
      }
    } catch (err) {
      console.error('Network Error:', err);
      alert('Unable to connect to the server. Please check if the backend is running.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-6 sm:p-10 shadow-lg relative overflow-hidden transition-colors duration-300">
      
      {isSuccess ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center text-center py-12 space-y-4"
        >
          <div className="p-4 bg-green-100 dark:bg-green-950/40 text-green-500 rounded-full animate-bounce">
            <CheckCircle className="h-12 w-12" />
          </div>
          <h3 className="font-display font-bold text-2xl text-brand-primary dark:text-white">
            Inquiry Submitted!
          </h3>
          <p className="font-sans text-slate-500 dark:text-slate-400 max-w-sm">
            Thank you! We have received your inquiry. Virat Kohli or a representative will get in touch with you shortly.
          </p>
          <button
            onClick={() => setIsSuccess(false)}
            className="mt-6 px-5 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-white font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Submit Another Inquiry
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Full Name */}
            <div className="space-y-1.5">
              <label htmlFor="fullName" className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-950/50 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-secondary transition-all ${
                  errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-800'
                }`}
                placeholder="e.g. John Doe"
              />
              {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
            </div>

            {/* Phone */}
            <div className="space-y-1.5">
              <label htmlFor="phone" className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-950/50 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-secondary transition-all ${
                  errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-800'
                }`}
                placeholder="e.g. 9876543210"
              />
              {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Email */}
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-950/50 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-secondary transition-all ${
                  errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-800'
                }`}
                placeholder="e.g. john@example.com"
              />
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
            </div>

            {/* Company Name */}
            <div className="space-y-1.5">
              <label htmlFor="companyName" className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-secondary transition-all"
                placeholder="e.g. Acme Corporation"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* City */}
            <div className="space-y-1.5">
              <label htmlFor="city" className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                City *
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-950/50 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-secondary transition-all ${
                  errors.city ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-800'
                }`}
                placeholder="e.g. Ahmedabad"
              />
              {errors.city && <p className="text-xs text-red-500 mt-1">{errors.city}</p>}
            </div>

            {/* Pincode */}
            <div className="space-y-1.5">
              <label htmlFor="pincode" className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Pincode *
              </label>
              <input
                type="text"
                id="pincode"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-950/50 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-secondary transition-all ${
                  errors.pincode ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-800'
                }`}
                placeholder="e.g. 380015"
                maxLength={6}
              />
              {errors.pincode && <p className="text-xs text-red-500 mt-1">{errors.pincode}</p>}
            </div>
          </div>

          {/* Service Dropdown */}
          <div className="space-y-1.5">
            <label htmlFor="serviceRequired" className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Service Required *
            </label>
            <div className="relative">
              <select
                id="serviceRequired"
                name="serviceRequired"
                value={formData.serviceRequired}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-950/50 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-secondary appearance-none transition-all ${
                  errors.serviceRequired ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-800'
                }`}
              >
                <option value="">-- Select Service --</option>
                {services.map((srv) => (
                  <option key={srv.value} value={srv.value} className="dark:bg-slate-900">
                    {srv.label}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 dark:text-white">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
              </div>
            </div>
            {errors.serviceRequired && <p className="text-xs text-red-500 mt-1">{errors.serviceRequired}</p>}
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <label htmlFor="message" className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Message / Project Description *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-950/50 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-secondary transition-all resize-none ${
                errors.message ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-800'
              }`}
              placeholder="Provide a brief explanation of your engineering or development requirements..."
            />
            {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 px-6 bg-gradient-to-r from-brand-secondary to-blue-500 hover:from-blue-600 hover:to-brand-secondary text-white font-sans font-semibold rounded-xl shadow-md shadow-brand-secondary/20 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:pointer-events-none transition-all duration-200 flex items-center justify-center space-x-2.5 cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Submitting Inquiry...</span>
              </>
            ) : (
              <>
                <span>Submit Inquiry</span>
                <Send className="h-4.5 w-4.5" />
              </>
            )}
          </button>
        </form>
      )}

    </div>
  );
};

export default ContactForm;
