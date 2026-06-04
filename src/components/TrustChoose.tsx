import { BadgeCheck, BarChart3, Clock, MapPin, MonitorPlay, ShieldCheck } from 'lucide-react';
import netflix from "../assets/clientIcons/netflix.png"
import prime from "../assets/clientIcons/prime.png"
import hotstar from "../assets/clientIcons/jiohotstar.png"

const trustedBy = [
  { name: 'Amazon Prime', logo: prime },
  { name: 'Netflix', logo: netflix },
  { name: 'Disney Hotstar', logo: hotstar },
  { name: 'Retail Stores' },
  { name: 'Restaurants' },
  { name: 'Real Estate' },
];

const marqueeBrands = [...trustedBy, ...trustedBy];

const whyChooseUs = [
  {
    title: 'High-visibility screens',
    description: 'Place your brand on TV-style displays where customers naturally look.',
    icon: MonitorPlay,
    accent: 'from-red-600 to-orange-500',
    ring: 'hover:border-red-200',
  },
  {
    title: 'Local audience targeting',
    description: 'Choose nearby retail, food, and outdoor spots that match your audience.',
    icon: MapPin,
    accent: 'from-blue-600 to-cyan-500',
    ring: 'hover:border-blue-200',
  },
  {
    title: 'Fast campaign launch',
    description: 'Get creatives ready, scheduled, and playing without long production delays.',
    icon: Clock,
    accent: 'from-teal-600 to-emerald-500',
    ring: 'hover:border-teal-200',
  },
  {
    title: 'Clear performance focus',
    description: 'Campaigns are planned around reach, recall, footfall, and business enquiries.',
    icon: BarChart3,
    accent: 'from-amber-500 to-yellow-500',
    ring: 'hover:border-amber-200',
  },
];

export default function TrustChoose() {
  return (
    <>
      <section id="trusted-by" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="animate-fadeInUp">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600 ring-1 ring-blue-100">
                <BadgeCheck className="h-4 w-4" />
                Trusted By
              </div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Brands and local businesses choose our screen network.
              </h2>
            </div>
          </div>

          <div className="trusted-marquee overflow-hidden">
            <div className="trusted-marquee-track flex w-max gap-4">
              {marqueeBrands.map((brand, index) => (
                <div
                  key={`${brand.name}-${index}`}
                  className="flex h-20 w-44 shrink-0 items-center justify-center px-4 text-center text-sm font-bold text-gray-700 transition duration-300 hover:-translate-y-1"
                >
                  {'logo' in brand ? (
                    <span className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-white p-2 shadow-sm ring-1 ring-gray-200">
                      <img
                        className="h-full w-full rounded-full object-contain"
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                      />
                    </span>
                  ) : (
                    <span className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-white p-2 shadow-sm ring-1 ring-gray-200">{brand.name}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="why-choose-us" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl animate-fadeInUp">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-600 ring-1 ring-teal-100">
              <ShieldCheck className="h-4 w-4" />
              Why Choose Us
            </div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Smart advertising support from screen planning to final playback.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className={`animate-fadeInUp rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg ${item.ring}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${item.accent} text-white`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
