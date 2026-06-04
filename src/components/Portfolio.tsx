import { ExternalLink, Eye } from 'lucide-react';
import { useState } from 'react';

const portfolioItems = [
  {
    title: 'Urban Retail Campaign',
    category: 'Retail',
    image: 'https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Multi-channel retail campaign reaching 50,000+ customers',
    results: '35% increase in foot traffic',
  },
  {
    title: 'Digital Transformation',
    category: 'Corporate',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Comprehensive digital strategy for enterprise client',
    results: '2.5x ROI increase',
  },
  {
    title: 'Product Launch Series',
    category: 'Launch',
    image: 'https://images.pexels.com/photos/3962312/pexels-photo-3962312.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Integrated campaign for new product introduction',
    results: '100,000+ impressions',
  },
  {
    title: 'Social Media Blitz',
    category: 'Social Media',
    image: 'https://images.pexels.com/photos/3808517/pexels-photo-3808517.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Viral content strategy across platforms',
    results: '5M+ engagements',
  },
  {
    title: 'Brand Reposition',
    category: 'Branding',
    image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Complete brand identity refresh and rollout',
    results: 'Brand awareness +78%',
  },
  {
    title: 'Video Marketing Campaign',
    category: 'Video',
    image: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'High-impact video content series',
    results: '2M+ video views',
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Retail', 'Corporate', 'Launch', 'Social Media', 'Branding', 'Video'];

  const filteredItems =
    filter === 'All' ? portfolioItems : portfolioItems.filter((item) => item.category === filter);

  return (
    <section id="portfolio" className="overflow-hidden bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Showcase of our best work and successful campaigns
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12 animate-fadeInUp">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`max-w-full rounded-full px-4 py-2 text-sm font-semibold transition duration-300 sm:px-6 sm:text-base ${
                filter === category
                  ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 sm:aspect-[16/11]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
                  <button
                    type="button"
                    aria-label={`View ${item.title}`}
                    className="rounded-full bg-white p-3 transition hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                  >
                    <Eye className="w-6 h-6 text-gray-900" />
                  </button>
                  <button
                    type="button"
                    aria-label={`Open ${item.title}`}
                    className="rounded-full bg-orange-500 p-3 transition hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-black"
                  >
                    <ExternalLink className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <span className="mb-3 inline-block w-fit max-w-full rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-600 ring-1 ring-blue-100">
                  {item.category}
                </span>

                <h3 className="mb-2 break-words text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mb-4 break-words text-sm text-gray-600">
                  {item.description}
                </p>

                <div className="mt-auto border-t border-gray-200 pt-4">
                  <p className="break-words text-sm font-semibold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                    {item.results}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
