
import { TrendingDown, Clock, Shield, CheckCircle } from 'lucide-react';

const FinancialServicesBenefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Compliance Rate",
      stat: "99.9%",
      description: "Maintain near-perfect compliance with automated monitoring and reporting."
    },
    {
      icon: Clock,
      title: "Processing Time",
      stat: "90%",
      description: "Reduce customer onboarding time while maintaining thorough verification."
    },
    {
      icon: TrendingDown,
      title: "False Positives",
      stat: "75%",
      description: "Advanced algorithms reduce false positive alerts and improve efficiency."
    },
    {
      icon: CheckCircle,
      title: "Audit Success",
      stat: "100%",
      description: "Complete audit trail and documentation for regulatory examinations."
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Proven Results in Financial Compliance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our financial services solutions deliver measurable improvements 
            in compliance and operational efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white text-center p-8 rounded-lg shadow-lg">
              <benefit.icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-green-600 mb-2">
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

export default FinancialServicesBenefits;
