import { MonitorPlay, RadioTower } from 'lucide-react';
// import { Volume2 } from 'lucide-react';
import netflix from "../assets/clientIcons/netflix.png"
import prime from "../assets/clientIcons/prime.png"
import hotstar from "../assets/clientIcons/jiohotstar.png"
import video1 from "../assets/videos/childnero.mp4"


const tvAds = [
  {
    title: 'Restaurant Offer Loop',
    location: 'Food courts & cafes',
    duration: '12 sec',
    src: video1,
    ottLogo: prime
  },
  {
    title: 'City Screen Impact',
    location: 'Outdoor LED spots',
    duration: '20 sec',
    src: 'https://www.pexels.com/download/video/5402116/',
    ott: 'Netflix',
    ottLogo: netflix
  },
  {
    title: 'Neon Brand Motion',
    location: 'Retail counters',
    duration: '10 sec',
    src: 'https://www.pexels.com/download/video/8058351/',
    ottLogo: hotstar
  }
];

export default function TvAds() {
  return (
    <section id="tv-ads" className="overflow-hidden bg-white py-16 transition-colors duration-300 dark:bg-slate-950 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid items-end gap-6 md:grid-cols-[1fr_auto]">
          <div className="animate-fadeInUp">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
              <MonitorPlay className="h-4 w-4" />
              TV Style Video Ads
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
              Ads Playing Inside{' '}
              <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                Digital TVs
              </span>
            </h2>
          </div>

          <div className="flex w-full max-w-sm items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4 text-gray-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-gray-300 md:w-80">
            <RadioTower className="h-8 w-8 shrink-0 text-orange-500" />
            <p className="text-sm">
              Videos run muted, looped, and ready for TV display promotions.
            </p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {tvAds.map((ad, index) => (
            <article
              key={ad.title}
              className="group animate-fadeInUp"
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <div className="relative mx-auto max-w-xl">
                <div className="rounded-[2rem] border-[10px] border-slate-950 bg-slate-950 p-2 shadow-2xl shadow-slate-950/20 dark:border-slate-800 dark:bg-slate-900">
                  <div className="relative aspect-video overflow-hidden rounded-xl bg-slate-900">
                    <video
                      className="h-full w-full object-cover"
                      src={ad.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    >
                      Your browser does not support the video tag.
                    </video>
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.22),transparent_38%,transparent_62%,rgba(255,255,255,0.08))]" />
                    <div className="pointer-events-none absolute top-2 flex h-9 min-w-20 rounded-full px-3">
                      <img
                        className="max-h-5 max-w-24 object-contain"
                        src={ad.ottLogo}
                        alt={`${ad.ott} logo`}
                      />
                    </div>
                  </div>
                </div>

                <div className="mx-auto h-5 w-24 bg-slate-950 dark:bg-slate-800" />
                <div className="mx-auto h-3 w-44 rounded-t-lg bg-slate-900 dark:bg-slate-700" />
              </div>

              <div className="mt-5 rounded-lg border border-gray-200 bg-gray-50 p-5 dark:border-slate-800 dark:bg-slate-900">
                <div className="mb-3 flex items-center justify-between gap-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{ad.title}</h3>
                  <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
                    {ad.duration}
                  </span>
                </div>
                {/* <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Volume2 className="h-4 w-4 text-orange-500" />
                  <span>{ad.location}</span>
                </div> */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
