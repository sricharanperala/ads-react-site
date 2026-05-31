import { Check, ArrowRight } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses',
    price: '₹25,000',
    period: '/month',
    features: [
      'Basic digital advertising',
      'Social media management',
      'Monthly analytics report',
      'Email support',
      'Up to 2 campaigns',
    ],
    highlighted: false,
  },
  {
    name: 'Professional',
    description: 'Ideal for growing brands',
    price: '₹60,000',
    period: '/month',
    features: [
      'Everything in Starter',
      'LED screen advertising',
      'Video production (2 videos/month)',
      'Priority support',
      'Unlimited campaigns',
      'Advanced analytics',
      'Brand strategy consultation',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    description: 'For large-scale operations',
    price: 'Custom',
    period: 'Based on needs',
    features: [
      'Everything in Professional',
      'Custom video production',
      'Dedicated account manager',
      '24/7 support',
      'Multi-channel integration',
      'Custom analytics dashboard',
      'Quarterly strategy reviews',
      'Creative consultation',
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-red-600 to-orange-500 text-white shadow-2xl scale-105 md:scale-110'
                  : 'bg-gray-50 dark:bg-slate-800 shadow-lg hover:shadow-xl'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-8">
                {plan.highlighted && (
                  <div className="inline-block px-4 py-1 bg-white/20 text-white rounded-full text-sm font-semibold mb-4">
                    Most Popular
                  </div>
                )}

                <h3 className={`text-2xl font-bold mb-2 ${!plan.highlighted ? 'text-gray-900 dark:text-white' : ''}`}>
                  {plan.name}
                </h3>

                <p className={`text-sm mb-6 ${plan.highlighted ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'}`}>
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span className={`text-5xl font-bold ${!plan.highlighted ? 'text-gray-900 dark:text-white' : ''}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.highlighted ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'}`}>
                    {plan.period}
                  </span>
                </div>

                <button
                  className={`w-full py-3 rounded-lg font-semibold transition duration-300 flex items-center justify-center gap-2 mb-8 ${
                    plan.highlighted
                      ? 'bg-white text-orange-600 hover:bg-gray-100'
                      : 'bg-gradient-to-r from-red-600 to-orange-500 text-white hover:shadow-lg'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </button>

                <div className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 ${plan.highlighted ? 'text-white' : 'text-orange-500'}`} />
                      <span className={`text-sm ${plan.highlighted ? 'text-white/90' : 'text-gray-700 dark:text-gray-300'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-orange-50 to-red-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 text-center animate-fadeInUp">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Need a Custom Plan?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Let's discuss your unique requirements and create a tailored solution for your business
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-lg font-semibold hover:shadow-lg transition duration-300">
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
