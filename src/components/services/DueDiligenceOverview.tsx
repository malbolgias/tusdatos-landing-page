
import { FileSearch, Shield, AlertTriangle, CheckCircle } from 'lucide-react';

const DueDiligenceOverview = () => {
  const services = [
    {
      icon: FileSearch,
      title: "Standard Due Diligence",
      description: "Comprehensive counterparty evaluation to identify potential red flags related to fraud, corruption, or money laundering.",
      features: [
        "Public and private information analysis",
        "Corporate structure evaluation",
        "Legal history assessment",
        "Basic sanctions screening",
        "Media monitoring",
        "Business risk evaluation"
      ]
    },
    {
      icon: Shield,
      title: "Enhanced Due Diligence",
      description: "Deep, personalized analysis for high-risk counterparties and complex transactions requiring maximum assurance.",
      features: [
        "Detailed corporate structure analysis",
        "Comprehensive legal histories",
        "Advanced sanctions screening",
        "In-depth media exposure analysis",
        "PEPs verification",
        "Detailed supporting documentation"
      ]
    }
  ];

  const useCases = [
    {
      icon: AlertTriangle,
      title: "Investment Processes",
      description: "Critical evaluation for major investment decisions"
    },
    {
      icon: CheckCircle,
      title: "Mergers & Acquisitions",
      description: "Comprehensive risk assessment for M&A transactions"
    },
    {
      icon: Shield,
      title: "Strategic Alliances",
      description: "Partner evaluation for business partnerships"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Due Diligence Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From standard evaluations to enhanced scrutiny, our due diligence services provide 
            the intelligence needed for informed, low-risk business decisions.
          </p>
        </div>

        {/* Service Types */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 text-lg">Key Components:</h4>
                <div className="grid gap-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Use Cases */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Ideal for High-Stakes Business Scenarios
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-lg">{useCase.title}</h4>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DueDiligenceOverview;
