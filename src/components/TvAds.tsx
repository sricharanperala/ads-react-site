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
    ottLogo: prime,
    ott: 'Prime Video'
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
    // <section id="tv-ads" className="overflow-hidden bg-white py-16 transition-colors duration-300 dark:bg-slate-950 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
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
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-orange-500/20 via-transparent to-red-500/20 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

                <div className="relative rounded-[1.9rem] border border-slate-700/80 bg-gradient-to-br from-slate-700 via-slate-950 to-black p-[10px] shadow-[0_28px_70px_rgba(15,23,42,0.30),inset_0_1px_0_rgba(255,255,255,0.14)] transition duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_34px_85px_rgba(15,23,42,0.38)] dark:border-slate-700 dark:shadow-black/40">
                  <div className="pointer-events-none absolute inset-x-8 top-1 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />

                  <div className="flex h-7 items-center justify-between px-4">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-8 rounded-full bg-white/15" />
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.75)]" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
                      Naik TV
                    </span>
                  </div>

                  <div className="relative h-[360px] overflow-hidden rounded-[1.1rem] border border-white/10 bg-black shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06),inset_0_0_45px_rgba(15,23,42,0.85)] sm:h-[440px] lg:h-[520px]">
                    <video
                      className="h-full w-full bg-black object-contain"
                      src={ad.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    >
                      Your browser does not support the video tag.
                    </video>
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(4, 2, 2, 0.14),transparent_34%),linear-gradient(115deg,rgba(255,255,255,0.20),transparent_31%,transparent_70%,rgba(255,255,255,0.08))]" />
                    <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
                    <div className="pointer-events-none absolute left-3 top-3 flex h-10 min-w-24 rounded-full">
                      <img
                        className="max-h-6 max-w-24 object-contain"
                        src={ad.ottLogo}
                        alt={`${ad.ott} logo`}
                      />
                    </div>
                  </div>

                  <div className="flex h-8 items-center justify-between px-5">
                    <div className="flex items-center gap-1">
                      <span className="h-1 w-1 rounded-full bg-white/20" />
                      <span className="h-1 w-1 rounded-full bg-white/20" />
                      <span className="h-1 w-1 rounded-full bg-white/20" />
                      <span className="h-1 w-1 rounded-full bg-white/20" />
                    </div>
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-400 shadow-[0_0_14px_rgba(251,146,60,0.85)]" />
                    <div className="flex items-center gap-1">
                      <span className="h-1 w-1 rounded-full bg-white/20" />
                      <span className="h-1 w-1 rounded-full bg-white/20" />
                      <span className="h-1 w-1 rounded-full bg-white/20" />
                      <span className="h-1 w-1 rounded-full bg-white/20" />
                    </div>
                  </div>
                </div>

                <div className="mx-auto h-6 w-20 bg-gradient-to-b from-slate-800 via-slate-950 to-black shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] dark:from-slate-700 dark:via-slate-900 dark:to-black" />
                <div className="mx-auto h-3 w-52 rounded-t-2xl bg-gradient-to-r from-slate-950 via-slate-700 to-slate-950 shadow-[0_10px_22px_rgba(15,23,42,0.22)] dark:from-black dark:via-slate-700 dark:to-black" />
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
    // </section>
  );
}
