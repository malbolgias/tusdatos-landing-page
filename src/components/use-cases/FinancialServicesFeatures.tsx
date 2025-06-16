
import { Shield, FileCheck, AlertTriangle, BarChart } from 'lucide-react';

const FinancialServicesFeatures = () => {
  const features = [
    {
      icon: Shield,
      title: "KYC Compliance",
      description: "Comprehensive Know Your Customer processes with automated identity verification."
    },
    {
      icon: AlertTriangle,
      title: "AML Monitoring",
      description: "Anti-Money Laundering screening against global watchlists and sanctions databases."
    },
    {
      icon: FileCheck,
      title: "LAFT Implementation",
      description: "Complete LAFT (Anti-Money Laundering and Terrorism Financing) framework setup."
    },
    {
      icon: BarChart,
      title: "Risk Assessment",
      description: "Advanced risk scoring and continuous monitoring for ongoing compliance."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete Financial Compliance Suite
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to meet regulatory requirements and maintain 
            compliance in the financial services sector.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <feature.icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinancialServicesFeatures;
