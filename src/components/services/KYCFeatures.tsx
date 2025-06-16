
import { Zap, Database, Shield, FileText, Globe, Clock } from 'lucide-react';

const KYCFeatures = () => {
  const features = [
    {
      icon: Zap,
      title: "Real-Time Verification",
      description: "Instant identity and business verification with automated processing and immediate results for seamless onboarding."
    },
    {
      icon: Database,
      title: "Comprehensive Data Sources",
      description: "Access to 300+ verified databases including government registries, sanctions lists, and financial databases."
    },
    {
      icon: Shield,
      title: "Advanced Risk Screening",
      description: "Multi-layered screening against PEPs, sanctions lists, adverse media, and criminal databases for comprehensive risk assessment."
    },
    {
      icon: FileText,
      title: "Detailed Documentation",
      description: "Complete audit trails and compliance documentation for regulatory requirements and internal reporting."
    },
    {
      icon: Globe,
      title: "International Coverage",
      description: "Global verification capabilities covering Colombia, Ecuador, and international jurisdictions with local expertise."
    },
    {
      icon: Clock,
      title: "24/7 Processing",
      description: "Round-the-clock verification services with automated systems ensuring continuous compliance monitoring."
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Data Collection",
      description: "Secure collection of customer or business information"
    },
    {
      step: "2", 
      title: "Identity Verification",
      description: "Multi-source verification of identity documents and data"
    },
    {
      step: "3",
      title: "Risk Assessment",
      description: "Comprehensive screening against sanctions and risk databases"
    },
    {
      step: "4",
      title: "Compliance Report",
      description: "Detailed documentation and risk scoring delivery"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Advanced KYC/KYB Capabilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge technology and comprehensive data sources deliver reliable, 
            compliant identity verification for individuals and businesses.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            KYC/KYB Verification Process
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
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

export default KYCFeatures;
