
import { Search, Database, Shield, FileText, Globe, Clock } from 'lucide-react';

const DueDiligenceFeatures = () => {
  const features = [
    {
      icon: Search,
      title: "Comprehensive Data Collection",
      description: "Access to 300+ public and private databases for thorough counterparty analysis and risk assessment."
    },
    {
      icon: Database,
      title: "Multi-Source Intelligence",
      description: "Integration of corporate registries, legal databases, sanctions lists, and media monitoring for complete visibility."
    },
    {
      icon: Shield,
      title: "Fraud & Corruption Detection",
      description: "Advanced algorithms and expert analysis to identify potential red flags and suspicious activities."
    },
    {
      icon: FileText,
      title: "Detailed Documentation",
      description: "Comprehensive reports with supporting evidence and documentation for regulatory compliance."
    },
    {
      icon: Globe,
      title: "International Coverage",
      description: "Global database access including Colombia, Ecuador, and international sanctions and compliance lists."
    },
    {
      icon: Clock,
      title: "Flexible Delivery Times",
      description: "Standard reports in 24-48 hours, with expedited options available for urgent business needs."
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Initial Assessment",
      description: "Define scope and risk level of the counterparty evaluation"
    },
    {
      step: "2", 
      title: "Data Collection",
      description: "Comprehensive information gathering from multiple verified sources"
    },
    {
      step: "3",
      title: "Analysis & Evaluation",
      description: "Expert analysis of collected data to identify potential risks"
    },
    {
      step: "4",
      title: "Report Delivery",
      description: "Detailed documentation with findings and recommendations"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Advanced Due Diligence Capabilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leveraging cutting-edge technology and expert analysis to deliver comprehensive 
            counterparty evaluations for informed business decisions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Our Due Diligence Process
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-lg">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DueDiligenceFeatures;
