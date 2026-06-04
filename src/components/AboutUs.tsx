import { Building2, MapPin, MonitorPlay, Users } from 'lucide-react';

const highlights = [
  {
    icon: MonitorPlay,
    title: 'Screen-first advertising',
    description: 'We plan ads for digital screens, TV-style displays, and busy customer-facing locations.',
    accent: 'from-red-600 to-orange-500',
  },
  {
    icon: MapPin,
    title: 'Local market reach',
    description: 'Our campaigns help brands stay visible in Hanamkonda, Warangal, and nearby business areas.',
    accent: 'from-blue-600 to-cyan-500',
  },
  {
    icon: Users,
    title: 'Practical campaign support',
    description: 'From creative guidance to slot planning, we help businesses launch clean, visible campaigns.',
    accent: 'from-teal-600 to-emerald-500',
  },
];

export default function AboutUs() {
  return (
    <section id="about-us" className="overflow-hidden bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.85fr]">
          <div className="animate-fadeInUp">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700 ring-1 ring-amber-100">
              <Building2 className="h-4 w-4" />
              About Us
            </div>
            <h2 className="mb-5 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
              Helping local brands get noticed through smart screen advertising.
            </h2>
            <p className="max-w-3xl text-base leading-7 text-gray-600 sm:text-lg">
              Naik Media Ads creates and places high-impact advertisements across digital screens,
              TV ad slots, and customer-facing media spaces. We focus on visibility, clear messaging,
              and practical campaign execution for businesses that want stronger local reach.
            </p>
          </div>

          <div className="animate-fadeInUp rounded-lg border border-gray-200 bg-white p-6 shadow-lg shadow-gray-200/70 sm:p-8">
            <div className="grid gap-5">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex gap-4"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r ${item.accent} text-white`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-base font-bold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-6 text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
