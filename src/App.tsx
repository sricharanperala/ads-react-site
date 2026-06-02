import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
// import TvAds from './components/TvAds';
import TrustChoose from './components/TrustChoose';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  const [isDark, setIsDark] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDark(false);
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-slate-950 text-gray-900 dark:text-white transition-colors duration-300">
        <Navigation
          isDark={isDark}
          setIsDark={setIsDark}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
        <Hero />
        <Services />
        {/* <TvAds /> */}
        <TrustChoose />
        <AboutUs />
        {/* <Testimonials /> */}
        {/* <Pricing /> */}
        <Contact />

        <footer className="bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-bold mb-4">Naik Media Ads</h3>
                <p className="text-gray-400">Transforming brands through innovative digital advertising solutions.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#services" className="hover:text-white transition">Digital Ads</a></li>
                  <li><a href="#services" className="hover:text-white transition">Video Production</a></li>
                  <li><a href="#services" className="hover:text-white transition">Branding</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#about-us" className="hover:text-white transition">About</a></li>
                  <li><a href="#" className="hover:text-white transition">Blog</a></li>
                  <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <p className="text-gray-400">31-3-821 Waddepally, Hanamkonda</p>
                <p className="text-gray-400">98491 38850 | 70135 54415</p>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
              <p>&copy; 2026 Naik Media Ads. All rights reserved. | Digital Screens & Advertisement Solutions</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
