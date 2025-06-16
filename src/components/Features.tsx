
import { CheckCircle, Globe, Award, Clock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Legal-First Approach",
      description: "Building a culture of compliance with comprehensive regulatory framework support."
    },
    {
      icon: Clock,
      title: "Technological Agility",
      description: "Continuous innovation and rapid deployment of cutting-edge validation solutions."
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Operating in Colombia and Ecuador with access to international validation databases."
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Forbes Top 100 Startups and LatamDigital Awards winner for excellence in innovation."
    }
  ];

  const useCases = [
    "Pre-employment screening",
    "International certifications (BASC, OEA)",
    "Third-party validation for suppliers",
    "User onboarding for apps and platforms",
    "Driver and field staff validation",
    "Strategic alliance partnerships",
    "Regulated industry compliance",
    "Mass hiring process security",
    "Financial services validation"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Key Differentiators
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Tusdatos stands out in the market through warm, responsive customer service, 
                legal-first compliance approach, and continuous technological innovation.
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Real-World Use Cases</h3>
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
