
import { Zap, Database, Shield, FileText, Globe, Clock } from 'lucide-react';

const GlobalWatchlistFeatures = () => {
  const features = [
    {
      icon: Zap,
      title: "Real-Time Screening",
      description: "Instant verification against 300+ global databases with automated alerts for new matches and list updates."
    },
    {
      icon: Database,
      title: "Comprehensive Database Access",
      description: "Integration with OFAC, UN, EU sanctions lists, World-Check, Dow Jones, and premium local databases."
    },
    {
      icon: Shield,
      title: "Multi-Layer Risk Assessment",
      description: "Advanced screening for sanctions, PEPs, criminal records, adverse media, and corporate ownership structures."
    },
    {
      icon: FileText,
      title: "Detailed Risk Reports",
      description: "Comprehensive documentation with evidence, risk scores, and compliance audit trails for regulatory requirements."
    },
    {
      icon: Globe,
      title: "Global & Local Coverage",
      description: "International sanctions screening combined with deep local intelligence from Colombia and Ecuador."
    },
    {
      icon: Clock,
      title: "Continuous Monitoring",
      description: "24/7 monitoring with automatic re-screening and instant notifications when new risks are identified."
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Data Input",
      description: "Submit individual or entity information for screening"
    },
    {
      step: "2", 
      title: "Multi-Source Check",
      description: "Automated screening across all global and local databases"
    },
    {
      step: "3",
      title: "Risk Analysis",
      description: "AI-powered analysis and risk scoring of matches"
    },
    {
      step: "4",
      title: "Report & Alerts",
      description: "Detailed results with ongoing monitoring alerts"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Advanced Screening Capabilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge technology and comprehensive global coverage deliver 
            reliable sanctions screening and risk assessment for complete compliance protection.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Global Screening Process
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
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

export default GlobalWatchlistFeatures;
