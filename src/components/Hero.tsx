// import { ArrowRight, Play } from 'lucide-react';
import Heropic from '../assets/hero1.jpeg';
import { useState, useEffect, useRef } from 'react';

function useCounter(end: number, duration: number = 1000) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return { count, ref };
}

export default function Hero() {
  const campaigns = useCounter(20);
  const clients = useCounter(100);
  const years = useCounter(10);
  const reach = useCounter(570000);
  const screens = useCounter(60);
  const locations = useCounter(24);

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 bg-white overflow-hidden relative">
      <div className="absolute inset-x-0 top-16 h-px bg-gradient-to-r from-transparent via-red-200 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slideInLeft">
            <div className="inline-block px-4 py-2 bg-red-50 ring-1 ring-red-100 rounded-full mb-6">
              <span className="text-red-600 font-semibold text-sm">
                Digital Excellence Awaits
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-red-600 via-orange-500 to-blue-600 bg-clip-text text-transparent">
                Transform Your Brand
              </span>
              <br />
              with Premium Advertising
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We create stunning digital solutions and engaging multimedia content that captures attention and drives results. From LED screens to targeted campaigns, we bring your vision to life.
            </p>

            {/* <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition duration-300 flex items-center justify-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </div> */}

            <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3">
              <div className="border-l-2 border-red-500 pl-4" ref={campaigns.ref}>
                <p className="text-3xl font-bold text-red-600">
                  {campaigns.count}+
                </p>
                <p className="text-gray-600">Active Campaigns</p>
              </div>
              <div className="border-l-2 border-blue-500 pl-4" ref={clients.ref}>
                <p className="text-3xl font-bold text-blue-600">
                  {clients.count}+
                </p>
                <p className="text-gray-600">Satisfied Clients</p>
              </div>
              <div className="border-l-2 border-teal-500 pl-4" ref={years.ref}>
                <p className="text-3xl font-bold text-teal-600">
                  {years.count}+
                </p>
                <p className="text-gray-600">Years Experience</p>
              </div>
               <div className="border-l-2 border-amber-500 pl-4" ref={reach.ref}>
                <p className="text-3xl font-bold text-amber-600">
                  {(reach.count / 100000).toFixed(1)}L+
                </p>
                <p className="text-gray-600">Daily Reach</p>
              </div>
               <div className="border-l-2 border-fuchsia-500 pl-4" ref={screens.ref}>
                <p className="text-3xl font-bold text-fuchsia-600">
                  {screens.count}
                </p>
                <p className="text-gray-600">Digital Screens</p>
              </div>
               <div className="border-l-2 border-emerald-500 pl-4" ref={locations.ref}>
                <p className="text-3xl font-bold text-emerald-600">
                  {locations.count}
                </p>
                <p className="text-gray-600">Prime Locations</p>
              </div>
            </div>
          </div>

          <div className="animate-slideInRight">
            <div className="relative h-[430px] rounded-3xl border border-gray-200 bg-white shadow-2xl shadow-gray-200/70">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-red-500 via-amber-400 to-blue-500 opacity-20 blur-xl"></div>
              <img
                src={Heropic}
                alt="Digital Advertising"
                className="relative w-full h-full rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
