// import { ArrowRight, Play } from 'lucide-react';
import Heropic from '../assets/HeroPic.jpeg';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white to-gray-50 dark:from-slate-950 dark:to-slate-900 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full opacity-5 dark:opacity-10 blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500 rounded-full opacity-5 dark:opacity-10 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slideInLeft">
            <div className="inline-block px-4 py-2 bg-orange-100 dark:bg-orange-900/30 rounded-full mb-6">
              <span className="text-orange-600 dark:text-orange-400 font-semibold text-sm">
                Digital Excellence Awaits
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-red-600 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Transform Your Brand
              </span>
              <br />
              with Premium Advertising
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              We create stunning digital solutions and engaging multimedia content that captures attention and drives results. From LED screens to targeted campaigns, we bring your vision to life.
            </p>

            {/* <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition duration-300 flex items-center justify-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 dark:border-slate-700 text-gray-900 dark:text-white rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-slate-800 transition duration-300 flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </div> */}

            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <p className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                  20+
                </p>
                <p className="text-gray-600 dark:text-gray-400">Active Campaigns</p>
              </div>
              <div>
                <p className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                  100+
                </p>
                <p className="text-gray-600 dark:text-gray-400">Satisfied Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                  10+
                </p>
                <p className="text-gray-600 dark:text-gray-400">Years Experience</p>
              </div>
               <div>
                <p className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                  5.7L+
                </p>
                <p className="text-gray-600 dark:text-gray-400">Daily Reach</p>
              </div>
               <div>
                <p className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                  60
                </p>
                <p className="text-gray-600 dark:text-gray-400">Digital Screens</p>
              </div>
               <div>
                <p className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                  24
                </p>
                <p className="text-gray-600 dark:text-gray-400">Prime Locations</p>
              </div>
            </div>
          </div>

          <div className="animate-slideInRight hidden md:block">
            <div className="relative h-[430px] rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-300 to-red-400 rounded-3xl blur-2xl opacity-30"></div>
              <img
                src={Heropic}
                alt="Digital Advertising"
                className="relative w-full h-full object-contain rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
