
import { Shield, TrendingUp, Clock, CheckCircle, AlertTriangle, FileCheck } from 'lucide-react';

const GlobalWatchlistBenefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Complete Compliance Protection",
      description: "Meet all AML, LAFT, and international regulatory requirements with comprehensive sanctions screening and detailed audit documentation.",
      metrics: ["100% Regulatory Coverage", "Real-time Updates", "Audit-Ready Reports"]
    },
    {
      icon: TrendingUp,
      title: "Enhanced Business Security",
      description: "Protect your organization from financial crime, reputational damage, and regulatory penalties through proactive risk identification.",
      metrics: ["Risk Prevention", "Brand Protection", "Financial Safety"]
    },
    {
      icon: Clock,
      title: "Operational Efficiency",
      description: "Streamline compliance processes with automated screening, instant results, and integrated workflows that reduce manual oversight.",
      metrics: ["Instant Results", "Automated Processes", "Reduced Manual Work"]
    }
  ];

  const complianceFeatures = [
    {
      icon: AlertTriangle,
      title: "Sanctions Compliance",
      description: "Avoid violations and penalties with comprehensive sanctions screening"
    },
    {
      icon: FileCheck,
      title: "Regulatory Reporting",
      description: "Generate detailed compliance reports for regulatory submissions"
    },
    {
      icon: CheckCircle,
      title: "Risk Mitigation",
      description: "Proactive identification and management of high-risk relationships"
    }
  ];

  const riskCategories = [
    "Money Laundering Prevention",
    "Terrorism Financing Detection", 
    "Corruption Risk Assessment",
    "Sanctions Violations Prevention",
    "PEP Relationship Management",
    "Adverse Media Monitoring"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Strategic Benefits for Your Organization
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your compliance operations with comprehensive global screening that 
            protects your business while ensuring regulatory adherence and operational efficiency.
          </p>
        </div>

        {/* Main Benefits */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-red-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 mb-6">{benefit.description}</p>
              
              <div className="space-y-2">
                {benefit.metrics.map((metric, idx) => (
                  <div key={idx} className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-medium text-gray-700">{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Compliance Features */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Compliance & Risk Management
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {complianceFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-4 text-center">Risk Categories Covered</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {riskCategories.map((category, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{category}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ROI Section */}
        <div className="text-center bg-gray-900 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Measurable Impact on Your Business</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold text-red-400">95%</div>
              <div className="text-gray-300">Reduction in Compliance Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400">100%</div>
              <div className="text-gray-300">Regulatory Coverage</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400">24/7</div>
              <div className="text-gray-300">Continuous Monitoring</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400">300+</div>
              <div className="text-gray-300">Database Sources</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalWatchlistBenefits;
