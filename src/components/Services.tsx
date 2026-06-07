import { useEffect, useState } from 'react';
import { BarChart3, CheckCircle2, ChevronLeft, ChevronRight, Palette, Smartphone, Tv, Video, X, Zap } from 'lucide-react';
import heroImage from '../assets/hero.png';
// import heroPic from '../assets/HeroPic.jpeg';
import locationImage from '../assets/location.jpeg';
import TvAds from './TvAds';
// import apartmentImage1 from "../assets/services/apartment/apartment1.jpeg"
import apartmentImage2 from "../assets/services/apartment/apartment2.jpeg"
import apartmentImage3 from "../assets/services/apartment/apartment3.jpeg"
import roadvan from "../assets/services/roadvan.jpeg"
import hoarding from "../assets/services/hoarding.jpeg"
import hotstart from "../assets/services/OTT/jiohotstar.jpeg"
import prime from "../assets/services/OTT/prime.jpeg"
import netflix from "../assets/services/OTT/netflix.jpeg" 
import youtube from "../assets/services/OTT/youtube.jpeg"


const services = [
  {
    icon: Tv,
    title: 'Premium Apartment Screens',
    description: '32-inch high-definition digital screens strategically placed in premium residential lift areas for maximum daily visibility.',
    features: ['32" LED Screen', '⁠Daily 300+ slots \u00A0\u00A0\u00A0 in 1 screen', '⁠10 seconds  \u00A0\u00A0\u00A0\u00A0\u00A0  video / image', '⁠Every 3 minutes \u00A0\u00A0\u00A0\u00A0\u00A0\ 1 slot', '⁠7am to 10pm'],
    images: [apartmentImage2, apartmentImage3],
    imageAspect: 'portrait',
    accent: 'from-red-600 to-orange-500',
    tint: 'bg-red-50',
    text: 'text-red-600',
    border: 'hover:border-red-200',
  },
  {
    icon: Video,
    title: 'OTT Platform',
    description: 'Captivate a captive audience. Dominate the big screen in cinema theaters and targeted advertisements on leading OTT platforms.',
    features: ['YouTube', 'Jio Hotstar', 'Prime Video', 'Netflix'],
    images: [hotstart,prime,netflix,youtube],
    imageAspect: 'landscape',
    accent: 'from-blue-600 to-cyan-500',
    tint: 'bg-blue-50',
    text: 'text-blue-600',
    border: 'hover:border-blue-200',
  },
  {
    icon: Palette,
    title: 'Road Show Mobile Vans',
    description: 'Take your brand to the streets. High-impact mobile advertising that drives your message directly to your target demographics.',
    features: ['Logo design', 'Brand guidelines', 'Visual identity'],
    images: [roadvan],
    imageAspect: 'landscape',
    accent: 'from-teal-600 to-emerald-500',
    tint: 'bg-teal-50',
    text: 'text-teal-600',
    border: 'hover:border-teal-200',
  },
  {
    icon: BarChart3,
    title: 'FM Radio & Cable TV',
    description: 'Broad audio-visual reach through trusted local cable networks and top FM radio stations.',
    features: ['Social media', 'SEO optimization', 'Analytics'],
    images: [heroImage],
    imageAspect: 'landscape',
    accent: 'from-amber-500 to-yellow-500',
    tint: 'bg-amber-50',
    text: 'text-amber-600',
    border: 'hover:border-amber-200',
  },
  {
    icon: Smartphone,
    title: 'Outdoor LED & Hoardings',
    description: 'Massive 10x20 highway hoarding boards and outdoor LED screens to capture high-traffic commute zones.',
    features: ['SMS campaigns', 'App advertising', 'Location targeting'],
    images: [hoarding],
    imageAspect: 'landscape',
    accent: 'from-fuchsia-600 to-pink-500',
    tint: 'bg-fuchsia-50',
    text: 'text-fuchsia-600',
    border: 'hover:border-fuchsia-200',
  },
  {
    icon: Zap,
    title: 'Performance Marketing',
    description: 'Establish authority by placing your brand alongside breaking news on major regional satellite channels.',
    features: ['Conversion tracking', 'A/B testing', 'ROI optimization'],
    images: [locationImage],
    imageAspect: 'landscape',
    accent: 'from-violet-600 to-blue-500',
    tint: 'bg-violet-50',
    text: 'text-violet-600',
    border: 'hover:border-violet-200',
  },
];

const allowedIcons = ["Premium Apartment Screens","OTT Platform","Road Show Mobile Vans","Outdoor LED & Hoardings"];
type Service = (typeof services)[number];

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalImageLoading, setIsModalImageLoading] = useState(false);
  const SelectedIcon = selectedService?.icon;
  const modalImages = selectedService?.images ?? [];
  const hasSingleModalImage = modalImages.length === 1;
  const hasMultipleModalImages = modalImages.length > 1;
  const isPortraitModalImage = selectedService?.imageAspect === 'portrait';
  const currentModalImage = modalImages[currentImageIndex] ?? modalImages[0];

  useEffect(() => {
    if (!currentModalImage) {
      setIsModalImageLoading(false);
      return;
    }

    let isActive = true;
    const image = new Image();

    setIsModalImageLoading(true);
    image.onload = () => {
      if (isActive) {
        setIsModalImageLoading(false);
      }
    };
    image.onerror = () => {
      if (isActive) {
        setIsModalImageLoading(false);
      }
    };
    image.src = currentModalImage;

    return () => {
      isActive = false;
    };
  }, [currentModalImage]);

  const handleOpenModal = (service: Service) => {
    if (allowedIcons.includes(service.title)) {
      setCurrentImageIndex(0);
      setIsModalImageLoading(true);
      setSelectedService(service)
    }
  }

  const showPreviousImage = () => {
    setCurrentImageIndex((index) => (index === 0 ? modalImages.length - 1 : index - 1));
  };

  const showNextImage = () => {
    setCurrentImageIndex((index) => (index === modalImages.length - 1 ? 0 : index + 1));
  };
  

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-red-600 via-orange-500 to-blue-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive advertising solutions designed to elevate your brand and maximize your reach
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl ${service.border} animate-fadeInUp`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${service.accent} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-5">
                  {service.description}
                </p>

                {/* <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                      {feature}
                    </div>
                  ))}
                </div> */}

                <button
                  type="button"
                  onClick={() => handleOpenModal(service)}
                  className={`mt-6 w-full rounded-lg px-4 py-2 font-semibold transition duration-300 ${service.tint} ${service.text} ${allowedIcons.includes(service.title)
                      ? "hover:bg-gray-950 hover:text-white"
                      : ""
                    }`}
                >
                  Learn More
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <TvAds />

      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/70 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-lg transition hover:bg-red-600 hover:text-white"
              aria-label="Close service details"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid gap-0 lg:grid-cols-[minmax(280px,0.85fr)_1fr]">
              <div className="flex items-center justify-center bg-gray-50 p-3 sm:p-4">
                <div
                  className={`relative flex w-full items-center justify-center rounded-xl bg-white ${
                    isPortraitModalImage ? 'min-h-[60vh]' : 'min-h-[260px] sm:min-h-[360px]'
                  }`}
                  aria-busy={isModalImageLoading}
                >
                  {isModalImageLoading && (
                    <div className="absolute inset-0 z-[1] flex items-center justify-center rounded-xl bg-gray-100">
                      <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-orange-500" />
                    </div>
                  )}

                  {currentModalImage && (
                  <img
                    src={currentModalImage}
                    alt={`${selectedService.title} sample ${currentImageIndex + 1}`}
                    onLoad={() => setIsModalImageLoading(false)}
                    onError={() => setIsModalImageLoading(false)}
                    className={`rounded-xl object-contain shadow-sm transition-opacity duration-300 ${
                      isModalImageLoading ? 'opacity-0' : 'opacity-100'
                    } ${
                      hasSingleModalImage
                        ? isPortraitModalImage
                          ? 'h-auto max-h-[72vh] w-auto max-w-full aspect-[9/16]'
                          : 'h-auto max-h-[70vh] w-full max-w-full aspect-[3/2]'
                        : isPortraitModalImage
                          ? 'h-auto max-h-[72vh] w-auto max-w-full aspect-[9/16]'
                          : 'h-auto max-h-[70vh] w-full max-w-full aspect-[3/2]'
                    }`}
                  />
                  )}

                  {hasMultipleModalImages && (
                    <>
                      <button
                        type="button"
                        onClick={showPreviousImage}
                        className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-lg transition hover:bg-gray-950 hover:text-white"
                        aria-label="Show previous image"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        type="button"
                        onClick={showNextImage}
                        className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-lg transition hover:bg-gray-950 hover:text-white"
                        aria-label="Show next image"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>

                      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-white/90 px-3 py-2 shadow-lg">
                        {modalImages.map((_, index) => (
                          <button
                            key={`${selectedService.title}-dot-${index}`}
                            type="button"
                            onClick={() => setCurrentImageIndex(index)}
                            className={`h-2.5 w-2.5 rounded-full transition ${
                              index === currentImageIndex ? 'bg-gray-950' : 'bg-gray-300 hover:bg-gray-500'
                            }`}
                            aria-label={`Show image ${index + 1}`}
                            aria-current={index === currentImageIndex ? 'true' : undefined}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="mb-5 flex items-center gap-4">
                  {SelectedIcon && (
                    <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${selectedService.accent}`}>
                      <SelectedIcon className="h-7 w-7 text-white" />
                    </div>
                  )}
                  <div>
                    <p className={`text-sm font-semibold uppercase ${selectedService.text}`}>Service Details</p>
                    <h3 id="service-modal-title" className="text-2xl font-bold text-gray-900">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>

                <p className="mb-6 text-base leading-7 text-gray-600">
                  {selectedService.description}
                </p>

                <div className="mb-8">
                  {/* <h4 className="mb-4 text-lg font-bold text-gray-900">
                    Included Features
                  </h4> */}
                  <div className="grid gap-3 sm:grid-cols-2">
                    {selectedService.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-3 text-sm font-medium text-gray-700"
                      >
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-orange-500" />
                        <span>{feature.toUpperCase()}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`rounded-xl ${selectedService.tint} p-5`}>
                  <h4 className="mb-2 font-bold text-gray-900">Why it works</h4>
                  <p className="text-sm leading-6 text-gray-600">
                    This option gives your campaign repeated visibility in high-attention spaces,
                    making it easier for customers to notice, remember, and respond to your brand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
