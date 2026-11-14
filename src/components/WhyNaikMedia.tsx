import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { SiMeta, SiOpenai, SiSnapchat, SiSpotify, SiYoutube } from 'react-icons/si';
import apartmentImage from '../assets/services/apartment/apartment2.jpeg';
import ottSocialImage from '../assets/services/all_ott.jpeg';
import creativeImage from '../assets/services/creative-development.svg';
import targetingImage from '../assets/services/smart-targeting.svg';
import jioHotstarLogo from '../assets/clientIcons/jiohotstar.png';

type Platform = {
  name: string;
  logo: ReactNode;
  tile: string;
};

const platforms: Platform[] = [
  {
    name: 'YouTube',
    logo: <SiYoutube className="h-8 w-8 text-[#FF0000]" aria-hidden="true" />,
    tile: 'bg-white',
  },
  {
    name: 'JioHotstar',
    logo: (
      <img
        src={jioHotstarLogo}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="h-9 w-9 rounded-lg object-cover"
      />
    ),
    tile: 'bg-white',
  },
  {
    name: 'Meta Ads',
    logo: <SiMeta className="h-8 w-8 text-[#0081FB]" aria-hidden="true" />,
    tile: 'bg-white',
  },
  {
    name: 'Spotify',
    logo: (
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-black">
        <SiSpotify className="h-7 w-7 text-[#1ED760]" aria-hidden="true" />
      </span>
    ),
    tile: 'bg-white',
  },
  {
    name: 'ChatGPT',
    logo: <SiOpenai className="h-8 w-8 text-black" aria-hidden="true" />,
    tile: 'bg-white',
  },
  {
    name: 'Snapchat',
    logo: (
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FFFC00]">
        <SiSnapchat
          className="h-6 w-6 overflow-visible text-white"
          stroke="black"
          strokeWidth={1.6}
          strokeLinejoin="round"
          aria-hidden="true"
        />
      </span>
    ),
    tile: 'bg-white',
  },
];

type Reason = {
  number: string;
  title: string;
  image: string;
  imageAlt: string;
  description?: string;
  showPlatforms?: boolean;
  accent: string;
  tint: string;
};

const reasons: Reason[] = [
  {
    number: '01',
    title: 'Premium Apartment Digital Screen Network',
    description: 'Reach premium residents and decision-makers across Warangal and Khammam.',
    image: apartmentImage,
    imageAlt: 'Digital advertising screen inside a premium apartment lift area',
    accent: 'from-red-600 to-orange-500',
    tint: 'bg-red-50',
  },
  {
    number: '02',
    title: 'Six Powerful Advertising Platforms',
    image: ottSocialImage,
    imageAlt: 'Social media and OTT advertising platforms',
    showPlatforms: true,
    accent: 'from-blue-600 to-cyan-500',
    tint: 'bg-blue-50',
  },
  {
    number: '03',
    title: 'Creative Development & Campaign Execution',
    description:
      'We create powerful ad creatives and execute campaigns that make your brand stand out and reach the right audience.',
    image: creativeImage,
    imageAlt: 'Ad creative being designed on a design canvas',
    accent: 'from-teal-600 to-emerald-500',
    tint: 'bg-teal-50',
  },
  {
    number: '04',
    title: 'Smart Targeting & Performance Optimization',
    description:
      'Targeted campaigns, real-time insights and measurable results that grow your brand and generate leads.',
    image: targetingImage,
    imageAlt: 'Map with targeted location pins and a rising performance chart',
    accent: 'from-amber-500 to-orange-500',
    tint: 'bg-amber-50',
  },
];

export default function WhyNaikMedia() {
  return (
    <section id="why-naik-media" className="bg-white py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
        {/* Left: sticky intro */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600 ring-1 ring-orange-100">
            Why Choose Us
          </p>
          <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Why choose Naik Media Ads?
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
            <span className="font-bold text-gray-900">One Brand. Multiple Platforms.</span>{' '}
            Limitless advertising opportunities — from{' '}
            <span className="font-semibold text-gray-900">premium apartment screens</span> to{' '}
            <span className="font-semibold text-gray-900">digital, social and OTT platforms</span>, all
            planned, created and optimized by{' '}
            <span className="font-semibold text-gray-900">one team</span>.
          </p>
          <a
            href="#contact"
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-orange-500 px-8 py-4 font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Join Us Now
            <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Right: stacking numbered cards */}
        <div className="flex flex-col gap-10 lg:gap-24">
          {reasons.map((reason, index) => (
            <div
              key={reason.number}
              className="border-t border-gray-200 bg-white lg:sticky lg:top-20"
              style={{ zIndex: index + 1 }}
            >
              <div
                className="h-12 overflow-hidden pl-8 text-[5.5rem] font-extrabold leading-none tracking-tight sm:pl-14"
                aria-hidden="true"
              >
                <span className={`inline-block bg-gradient-to-r ${reason.accent} bg-clip-text text-transparent`}>
                  {reason.number}
                </span>
              </div>

              <article className={`flex flex-col gap-6 rounded-3xl ${reason.tint} p-6 sm:flex-row sm:gap-10 sm:p-11`}>
                <div className="h-44 w-full shrink-0 overflow-hidden rounded-2xl shadow-sm sm:h-44 sm:w-44">
                  <img
                    src={reason.image}
                    alt={reason.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-2xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-3xl">
                    <span className="sr-only">{reason.number}. </span>
                    {reason.title}
                  </h3>
                  <div className={`my-6 h-1 w-16 rounded-full bg-gradient-to-r ${reason.accent}`} />

                  {reason.description && (
                    <p className="text-lg leading-8 text-gray-600">{reason.description}</p>
                  )}

                  {reason.showPlatforms && (
                    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {platforms.map((platform) => (
                        <li
                          key={platform.name}
                          className={`flex flex-col items-center justify-center gap-2 rounded-xl ${platform.tile} p-3 text-center shadow-sm ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-md`}
                        >
                          {platform.logo}
                          <span className="text-xs font-bold text-gray-800">{platform.name}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
