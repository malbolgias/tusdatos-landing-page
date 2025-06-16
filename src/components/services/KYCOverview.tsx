
import { Users, Building, Shield, CheckCircle } from 'lucide-react';

const KYCOverview = () => {
  const services = [
    {
      icon: Users,
      title: "Know Your Customer (KYC)",
      description: "Comprehensive individual identity verification to prevent money laundering and terrorism financing while ensuring seamless customer onboarding.",
      features: [
        "Identity document verification",
        "Biometric authentication",
        "Address verification",
        "Background screening",
        "Sanctions list checking",
        "PEPs identification"
      ]
    },
    {
      icon: Building,
      title: "Know Your Business (KYB)",
      description: "Thorough business entity verification and compliance checking for corporate clients, partnerships, and B2B relationships.",
      features: [
        "Business registration verification",
        "Corporate structure analysis",
        "Beneficial ownership identification",
        "Financial standing assessment",
        "Regulatory compliance checking",
        "Risk assessment and scoring"
      ]
    }
  ];

  const complianceAreas = [
    {
      icon: Shield,
      title: "Anti-Money Laundering",
      description: "Comprehensive AML compliance and monitoring"
    },
    {
      icon: CheckCircle,
      title: "Counter-Terrorism Financing",
      description: "CTF screening and prevention measures"
    },
    {
      icon: Users,
      title: "Customer Due Diligence",
      description: "Enhanced CDD for high-risk relationships"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Essential KYC & KYB Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cornerstone compliance processes that verify customer and business partner identities, 
            preventing illicit activities while enabling secure, compliant business relationships.
          </p>
        </div>

        {/* Service Types */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
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

        {/* Compliance Areas */}
        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Core Compliance Areas
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {complianceAreas.map((area, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <area.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-lg">{area.title}</h4>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KYCOverview;
