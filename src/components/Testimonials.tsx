import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    company: 'TechVision Solutions',
    role: 'Marketing Director',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'Naik Media Ads transformed our brand presence. Their strategic approach and creative execution delivered results beyond our expectations.',
  },
  {
    name: 'Priya Sharma',
    company: 'Fashion Forward Retail',
    role: 'CEO',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'The LED screen campaigns alone increased our foot traffic by 40%. Their team is professional, creative, and results-driven.',
  },
  {
    name: 'Amit Patel',
    company: 'Digital Innovations Inc',
    role: 'Business Owner',
    image: 'https://images.pexels.com/photos/1587014/pexels-photo-1587014.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'Working with Naik Media was a game-changer. Their video production quality and digital marketing expertise are unmatched.',
  },
  {
    name: 'Neha Gupta',
    company: 'Wellness & Spa',
    role: 'Operations Manager',
    image: 'https://images.pexels.com/photos/1181216/pexels-photo-1181216.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'Professional, timely, and effective. Their campaigns brought consistent growth to our business. Highly recommended!',
  },
  {
    name: 'Vikram Singh',
    company: 'Real Estate Ventures',
    role: 'Marketing Head',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'The ROI on our advertising spend improved significantly. Their data-driven approach ensures every campaign counts.',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Real feedback from satisfied clients who trusted us with their brand
          </p>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8">
            {[0, 1, 2].map((offset) => {
              const index = (currentIndex + offset) % testimonials.length;
              const testimonial = testimonials[index];
              return (
                <div
                  key={offset}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp"
                  style={{ animationDelay: `${offset * 0.1}s` }}
                >
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                    ))}
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-3 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-full hover:scale-110 transition duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-full hover:scale-110 transition duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition duration-300 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-red-600 to-orange-500 w-8'
                    : 'bg-gray-300 dark:bg-slate-600'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
