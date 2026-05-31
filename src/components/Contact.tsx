import { Phone, MapPin, Mail, Send } from 'lucide-react';
import { useState } from 'react';
import locationPic from '../assets/location.jpeg';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Work <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Get in touch with us to discuss your advertising needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slideInLeft">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Call Us</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">We're here to help</p>
            <a href="tel:+919849138850" className="text-orange-600 dark:text-orange-400 font-semibold hover:underline">
              +91 98491 38850
            </a>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              <a href="tel:+917013554415" className="hover:text-orange-600 dark:hover:text-orange-400">
                +91 70135 54415
              </a>
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Visit Us</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Our office location</p>
            <p className="font-semibold text-gray-900 dark:text-white">
              31-3-821 Waddepally
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Hanamkonda, Telangana
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slideInRight">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Email Us</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Send us a message</p>
            <a href="mailto:info@naikmediaads.com" className="text-orange-600 dark:text-orange-400 font-semibold hover:underline">
              info@naikmediaads.com
            </a>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 md:p-12 animate-fadeInUp">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Send us a Message
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Fill out the form and we'll get back to you within 24 hours
              </p>

              {submitted && (
                <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-400 rounded-lg">
                  <p className="text-green-800 dark:text-green-300 font-semibold">
                    Thank you! We'll contact you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-white border border-gray-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-white border border-gray-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-white border border-gray-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                    placeholder="+91 98491 38850"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-white border border-gray-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-white border border-gray-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500 transition resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-lg font-semibold hover:shadow-lg transition duration-300 flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>

            <div className="hidden md:block">
              <img
                src={locationPic}
                alt="Contact"
                className="rounded-2xl w-full h-full object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
