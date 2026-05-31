import { Tv, Video, Palette, BarChart3, Smartphone, Zap } from 'lucide-react';

const services = [
  {
    icon: Tv,
    title: 'Premium Apartment Screens',
    description: '32-inch high-definition digital screens strategically placed in high-end residential lift areas for maximum daily visibility.',
    features: ['32" LED Screens', '30-day rotations', 'Video support'],
  },
  {
    icon: Video,
    title: 'Cinema & OTT',
    description: 'Captivate a captive audience. Dominate the big screen in cinema theaters and targeted advertisements on leading OTT platforms.',
    features: ['4K Recording', 'Professional editing', 'Motion graphics'],
  },
  {
    icon: Palette,
    title: 'Road Show Mobile Vans',
    description: 'Take your brand to the streets. High-impact mobile advertising that drives your message directly to your target demographics.',
    features: ['Logo design', 'Brand guidelines', 'Visual identity'],
  },
  {
    icon: BarChart3,
    title: 'FM Radio & Cable TV',
    description: 'Broad audio-visual reach through trusted local cable networks and top FM radio stations.',
    features: ['Social media', 'SEO optimization', 'Analytics'],
  },
  {
    icon: Smartphone,
    title: 'Outdoor LED & Hoardings',
    description: 'Massive 10x20 highway hoarding boards and outdoor LED screens to capture high-traffic commute zones.',
    features: ['SMS campaigns', 'App advertising', 'Location targeting'],
  },
  {
    icon: Zap,
    title: 'Performance Marketing',
    description: 'Establish authority by placing your brand alongside breaking news on major regional satellite channels.',
    features: ['Conversion tracking', 'A/B testing', 'ROI optimization'],
  },
];

export default function Services() {
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

                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                      {feature}
                    </div>
                  ))}
                </div>

                <button className="mt-6 w-full px-4 py-2 bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500 transition duration-300 font-semibold">
                  Learn More
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
