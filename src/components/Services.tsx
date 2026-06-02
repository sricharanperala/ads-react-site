import { useState } from 'react';
import { BarChart3, CheckCircle2, Palette, Smartphone, Tv, Video, X, Zap } from 'lucide-react';
import heroImage from '../assets/hero.png';
import heroPic from '../assets/HeroPic.jpeg';
import locationImage from '../assets/location.jpeg';
import TvAds from './TvAds';

const services = [
  {
    icon: Tv,
    title: 'Premium Apartment Screens',
    description: '32-inch high-definition digital screens strategically placed in premium residential lift areas for maximum daily visibility.',
    features: ['32" LED Screen', '30-day rotations', 'Video support'],
    images: [heroImage, locationImage],
  },
  {
    icon: Video,
    title: 'OTT Platform',
    description: 'Captivate a captive audience. Dominate the big screen in cinema theaters and targeted advertisements on leading OTT platforms.',
    features: ['4K Recording', 'Professional editing', 'Motion graphics'],
    images: [heroPic, heroImage],
  },
  {
    icon: Palette,
    title: 'Road Show Mobile Vans',
    description: 'Take your brand to the streets. High-impact mobile advertising that drives your message directly to your target demographics.',
    features: ['Logo design', 'Brand guidelines', 'Visual identity'],
    images: [locationImage, heroPic],
  },
  {
    icon: BarChart3,
    title: 'FM Radio & Cable TV',
    description: 'Broad audio-visual reach through trusted local cable networks and top FM radio stations.',
    features: ['Social media', 'SEO optimization', 'Analytics'],
    images: [heroImage, heroPic],
  },
  {
    icon: Smartphone,
    title: 'Outdoor LED & Hoardings',
    description: 'Massive 10x20 highway hoarding boards and outdoor LED screens to capture high-traffic commute zones.',
    features: ['SMS campaigns', 'App advertising', 'Location targeting'],
    images: [locationImage, heroImage],
  },
  {
    icon: Zap,
    title: 'Performance Marketing',
    description: 'Establish authority by placing your brand alongside breaking news on major regional satellite channels.',
    features: ['Conversion tracking', 'A/B testing', 'ROI optimization'],
    images: [heroPic, locationImage],
  },
];

const allowedIcons = ["Premium Apartment Screens","OTT Platform"];

export default function Services() {
  const [selectedService, setSelectedService] = useState<(typeof services)[number] | null>(null);
  const SelectedIcon = selectedService?.icon;
  console.log(selectedService,"selectedService")

  const handleOpenModal = (service: any) => {
    if (allowedIcons.includes(service.title)) {
      setSelectedService(service)
    }
  }

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive advertising solutions designed to elevate your brand and maximize your reach
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl dark:shadow-xl dark:hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-5">
                  {service.description}
                </p>

                {/* <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                      {feature}
                    </div>
                  ))}
                </div> */}

                <button
                  type="button"
                  onClick={() => handleOpenModal(service)}
                  className={`mt-6 w-full px-4 py-2 bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg transition duration-300 font-semibold ${allowedIcons.includes(service.title)
                      ? "hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500"
                      : ""
                    }`}
                >
                  Learn More
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <TvAds />

      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white shadow-2xl dark:bg-slate-900"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-lg transition hover:bg-orange-500 hover:text-white dark:bg-slate-800/90 dark:text-gray-200"
              aria-label="Close service details"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid gap-0 lg:grid-cols-[1fr_1.1fr]">
              <div className="grid grid-cols-2 gap-2 bg-slate-100 p-3 dark:bg-slate-950 sm:p-4 lg:grid-cols-1">
                {selectedService.images.map((image, index) => (
                  <img
                    key={`${selectedService.title}-${index}`}
                    src={image}
                    alt={`${selectedService.title} sample ${index + 1}`}
                    className="h-44 w-full rounded-xl object-cover sm:h-56 lg:h-64"
                  />
                ))}
              </div>

              <div className="p-6 sm:p-8">
                <div className="mb-5 flex items-center gap-4">
                  {SelectedIcon && (
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-600">
                      <SelectedIcon className="h-7 w-7 text-white" />
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-semibold uppercase text-orange-500">Service Details</p>
                    <h3 id="service-modal-title" className="text-2xl font-bold text-gray-900 dark:text-white">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>

                <p className="mb-6 text-base leading-7 text-gray-600 dark:text-gray-300">
                  {selectedService.description}
                </p>

                <div className="mb-8">
                  <h4 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">
                    Included Features
                  </h4>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {selectedService.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 p-3 text-sm font-medium text-gray-700 dark:border-slate-700 dark:bg-slate-800 dark:text-gray-200"
                      >
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-orange-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl bg-orange-50 p-5 dark:bg-orange-950/25">
                  <h4 className="mb-2 font-bold text-gray-900 dark:text-white">Why it works</h4>
                  <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
                    This option gives your campaign repeated visibility in high-attention spaces,
                    making it easier for customers to notice, remember, and respond to your brand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
