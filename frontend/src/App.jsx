import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import LoadingScreen from './components/LoadingScreen';
import FloatingActions from './components/FloatingActions';

import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';

import { ThemeProvider } from './hooks/useDarkMode';

// Wrapper to enable AnimatePresence route changes
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial asset preloading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <Router>
        {/* Loading preloader with exit fade */}
        <AnimatePresence>
          {isLoading && <LoadingScreen key="preloader" />}
        </AnimatePresence>

        {/* App Frame */}
        <div className="flex flex-col min-h-screen">
          {/* Scroll progress bar */}
          <ScrollProgress />
          
          {/* Sticky responsive Navbar */}
          <Navbar />
          
          {/* Main content route wrapper */}
          <main className="flex-grow">
            <AnimatedRoutes />
          </main>
          
          {/* Footer content */}
          <Footer />
          
          {/* Floating actions: Call now, WhatsApp, Back to top */}
          <FloatingActions />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
