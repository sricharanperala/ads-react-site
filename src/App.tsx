import { useState } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
// import TvAds from './components/TvAds';
import TrustChoose from './components/TrustChoose';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <div className="min-h-screen bg-white text-gray-900">
        <Navigation
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

        <footer className="border-t border-gray-200 bg-white py-12 text-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-bold mb-4 text-gray-950">Naik Media Ads</h3>
                <p className="text-gray-600">Transforming brands through innovative digital advertising solutions.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-gray-950">Services</h4>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#services" className="hover:text-red-600 transition">Digital Ads</a></li>
                  <li><a href="#services" className="hover:text-blue-600 transition">Video Production</a></li>
                  <li><a href="#services" className="hover:text-teal-600 transition">Branding</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-gray-950">Company</h4>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#about-us" className="hover:text-red-600 transition">About</a></li>
                  <li><a href="#" className="hover:text-blue-600 transition">Blog</a></li>
                  <li><a href="#contact" className="hover:text-teal-600 transition">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-gray-950">Contact</h4>
                <p className="text-gray-600">31-3-821 Waddepally, Hanamkonda</p>
                <p className="text-gray-600">98491 38850 | 70135 54415</p>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-8 text-center text-gray-500">
              <p>&copy; 2026 Naik Media Ads. All rights reserved. | Digital Screens & Advertisement Solutions</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
