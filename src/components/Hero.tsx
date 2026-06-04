// import { ArrowRight, Play } from 'lucide-react';
import Heropic from '../assets/hero1.jpeg';

export default function Hero() {
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
              <div className="border-l-2 border-red-500 pl-4">
                <p className="text-3xl font-bold text-red-600">
                  20+
                </p>
                <p className="text-gray-600">Active Campaigns</p>
              </div>
              <div className="border-l-2 border-blue-500 pl-4">
                <p className="text-3xl font-bold text-blue-600">
                  100+
                </p>
                <p className="text-gray-600">Satisfied Clients</p>
              </div>
              <div className="border-l-2 border-teal-500 pl-4">
                <p className="text-3xl font-bold text-teal-600">
                  10+
                </p>
                <p className="text-gray-600">Years Experience</p>
              </div>
               <div className="border-l-2 border-amber-500 pl-4">
                <p className="text-3xl font-bold text-amber-600">
                  5.7L+
                </p>
                <p className="text-gray-600">Daily Reach</p>
              </div>
               <div className="border-l-2 border-fuchsia-500 pl-4">
                <p className="text-3xl font-bold text-fuchsia-600">
                  60
                </p>
                <p className="text-gray-600">Digital Screens</p>
              </div>
               <div className="border-l-2 border-emerald-500 pl-4">
                <p className="text-3xl font-bold text-emerald-600">
                  24
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
