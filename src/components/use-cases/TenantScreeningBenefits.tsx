
import { TrendingDown, Clock, Shield, DollarSign } from 'lucide-react';

const TenantScreeningBenefits = () => {
  const benefits = [
    {
      icon: TrendingDown,
      title: "Default Risk",
      stat: "80%",
      description: "Reduce tenant default and eviction rates through thorough screening."
    },
    {
      icon: Clock,
      title: "Vacancy Time",
      stat: "50%",
      description: "Reduce property vacancy periods with faster, reliable tenant approval."
    },
    {
      icon: DollarSign,
      title: "Revenue Protection",
      stat: "95%",
      description: "Protect rental income with qualified, financially stable tenants."
    },
    {
      icon: Shield,
      title: "Property Safety",
      stat: "99%",
      description: "Ensure property and community safety with comprehensive background checks."
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Protect Your Investment
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the measurable impact of comprehensive tenant screening on 
            your property management success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white text-center p-8 rounded-lg shadow-lg">
              <benefit.icon className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-purple-600 mb-2">
                {benefit.stat}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TenantScreeningBenefits;
