import { ExternalLink, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import { useState } from 'react';
// import locationPic from '../assets/location.jpeg';
import locationPic from '../assets/locationNew.jpeg';
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const primaryPhone = '+919849138850';
const secondaryPhone = '+917013554415';
const whatsappNumber = '919849138850';
const instagramUrl = 'https://www.instagram.com/naikmediaads/';
const mapUrl = 'https://www.google.com/maps/search/?api=1&query=31-3-821%20Waddepally%2C%20Hanamkonda%2C%20Telangana';

const contactActions = [
  {
    icon: Phone,
    label: 'Call Us',
    description: 'Speak directly with our team',
    value: '+91 98491 38850',
    supporting: secondaryPhone,
    href: `tel:${primaryPhone}`,
    accent: 'from-red-600 to-orange-500',
    hover: 'hover:border-red-200',
    text: 'text-red-600',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    description: 'Open location in Google Maps',
    value: '31-3-821 Waddepally',
    supporting: 'Hanamkonda, Telangana',
    href: mapUrl,
    external: true,
    accent: 'from-blue-600 to-cyan-500',
    hover: 'hover:border-blue-200',
    text: 'text-blue-600',
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    description: 'Start a quick chat',
    value: '+91 98491 38850',
    supporting: 'Fast response for enquiries',
    href: `https://wa.me/${whatsappNumber}`,
    external: true,
    accent: 'from-teal-600 to-emerald-500',
    hover: 'hover:border-teal-200',
    text: 'text-teal-600',
  },
  {
    icon: FaInstagram,
    label: 'Instagram',
    description: 'View our latest work',
    value: '@naikmediaads',
    supporting: 'Campaign photos and updates',
    href: instagramUrl,
    external: true,
    accent: 'from-fuchsia-600 to-pink-500',
    hover: 'hover:border-fuchsia-200',
    text: 'text-fuchsia-600',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.message) {
      return;
    }

    const enquiry = [
      'Hello Naik Media Ads, I want to discuss an advertising campaign.',
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Message: ${formData.message}`,
    ].join('\n');

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(enquiry)}`,
      '_blank',
      'noopener,noreferrer'
    );

    setSubmitted(true);
    setFormData({ name: '', phone: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl animate-fadeInUp">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-fuchsia-50 px-4 py-2 text-sm font-semibold text-fuchsia-600 ring-1 ring-fuchsia-100">
            <MessageCircle className="h-4 w-4" />
            Contact Us
          </div>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
            Ready to put your brand in front of the right local audience?
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Call, visit, message, or send a quick enquiry. Every contact icon below opens the right action.
          </p>
        </div>

        <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactActions.map((item, index) => {
            const Icon = item.icon;

            return (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noreferrer' : undefined}
                className={`group animate-fadeInUp rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg ${item.hover}`}
                style={{ animationDelay: `${index * 0.08}s` }}
                aria-label={`${item.label}: ${item.value}`}
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r ${item.accent} text-white shadow-sm transition duration-300 group-hover:scale-105`}>
                    <Icon className="h-6 w-6" />
                  </span>
                  {item.external && (
                    <ExternalLink className="h-4 w-4 text-gray-400 transition group-hover:text-gray-700" />
                  )}
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  {item.label}
                </h3>
                <p className="mb-4 text-sm leading-6 text-gray-600">
                  {item.description}
                </p>
                <p className={`font-semibold ${item.text}`}>
                  {item.value}
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  {item.supporting}
                </p>
              </a>
            );
          })}
        </div>

        <div className="grid overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xl shadow-gray-200/80 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900">
                Send a WhatsApp Enquiry
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
                Fill out the form and it will open WhatsApp with your details ready to send.
              </p>
            </div>

            {submitted && (
              <div className="mb-6 rounded-lg border border-green-300 bg-green-50 p-4">
                <p className="text-sm font-semibold text-green-800">
                  Your enquiry is ready in WhatsApp.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-900">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 transition focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-900">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    placeholder="+91 12345 67890"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-900">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full resize-none rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 transition focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                  placeholder="Tell us about your campaign..."
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-red-600 via-orange-500 to-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-orange-500/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/30"
              >
                Open WhatsApp
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>

          <div className="relative min-h-[320px] bg-gray-950 lg:min-h-full">
            <img
              src={locationPic}
              alt="Naik Media Ads office location"
              className="h-full w-full object-cover opacity-90"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-950/90 to-transparent p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase text-orange-300">Office Location</p>
              <h3 className="mt-2 text-2xl font-bold text-white">Waddepally, Hanamkonda</h3>
              <a
                href={mapUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-bold text-gray-900 transition hover:bg-orange-500 hover:text-white"
              >
                View Map
                <MapPin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
