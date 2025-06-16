
import { CheckCircle, Globe, Award, Clock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Legal-First Compliance Approach",
      description: "Building comprehensive compliance culture with robust regulatory framework support for LAFT, KYC, AML, and international data protection standards."
    },
    {
      icon: Clock,
      title: "Advanced Technological Agility",
      description: "Continuous innovation in data validation technology with rapid deployment of cutting-edge background verification and compliance validation solutions."
    },
    {
      icon: Globe,
      title: "Extensive Global Data Coverage",
      description: "Operating across Colombia and Ecuador with comprehensive access to international validation databases, sanctions lists, and compliance registries worldwide."
    },
    {
      icon: Award,
      title: "Industry-Leading Recognition",
      description: "Forbes Top 100 Startups and LatamDigital Awards winner, recognized for excellence in data validation innovation and compliance technology solutions."
    }
  ];

  const useCases = [
    "Pre-employment background screening and validation",
    "International compliance certifications (BASC, OEA)",
    "Third-party supplier due diligence validation",
    "User onboarding KYC for digital platforms and apps",
    "Driver and field staff background verification",
    "Strategic business alliance partnership validation",
    "Regulated industry compliance and risk management",
    "Mass hiring process security and background checks",
    "Financial services KYC, AML, and compliance validation"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Key Data Validation Differentiators
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Tusdatos leads the Latin American data validation market through exceptional customer service, 
                comprehensive legal-first compliance approach, continuous technological innovation, and advanced background verification capabilities.
              </p>
            </div>
            
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Real-World Data Validation Use Cases</h3>
            <div className="grid gap-3">
              {useCases.map((useCase, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{useCase}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
