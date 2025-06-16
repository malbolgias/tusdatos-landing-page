
import { TrendingUp, Shield, Clock, DollarSign } from 'lucide-react';

const HRRecruitmentBenefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Risk Reduction",
      stat: "95%",
      description: "Reduce hiring risks and workplace incidents through thorough background screening."
    },
    {
      icon: Clock,
      title: "Time Savings",
      stat: "70%",
      description: "Automate verification processes and reduce time-to-hire significantly."
    },
    {
      icon: DollarSign,
      title: "Cost Efficiency",
      stat: "60%",
      description: "Lower recruitment costs and avoid expensive hiring mistakes."
    },
    {
      icon: TrendingUp,
      title: "Quality Hires",
      stat: "85%",
      description: "Improve employee retention and performance with better screening."
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Measurable Impact on Your Hiring
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the tangible benefits that our HR screening solutions deliver to your organization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white text-center p-8 rounded-lg shadow-lg">
              <benefit.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-blue-600 mb-2">
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

export default HRRecruitmentBenefits;
