
import { Shield, CheckCircle, AlertTriangle, TrendingUp, Users, FileText } from 'lucide-react';

const DueDiligenceBenefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Identify potential fraud, corruption, and money laundering risks before making critical business decisions."
    },
    {
      icon: CheckCircle,
      title: "Informed Decision Making",
      description: "Access comprehensive intelligence to make confident choices in partnerships, investments, and acquisitions."
    },
    {
      icon: AlertTriangle,
      title: "Regulatory Compliance", 
      description: "Ensure full compliance with LAFT, AML, and international regulations through thorough documentation."
    },
    {
      icon: TrendingUp,
      title: "Business Growth Protection",
      description: "Safeguard your organization's reputation and financial interests through proactive risk assessment."
    },
    {
      icon: Users,
      title: "Expert Analysis",
      description: "Benefit from specialized expertise in complex corporate structures and cross-border transactions."
    },
    {
      icon: FileText,
      title: "Comprehensive Documentation",
      description: "Receive detailed reports with supporting evidence for audit trails and regulatory requirements."
    }
  ];

  const industries = [
    "Financial Services & Banking",
    "Investment Firms & Private Equity", 
    "Multinational Corporations",
    "Legal & Professional Services",
    "Real Estate & Construction",
    "Import/Export Companies",
    "Government Contractors",
    "Insurance Companies"
  ];

  const complianceFrameworks = [
    "LAFT (Anti-Money Laundering)",
    "KYC (Know Your Customer)",
    "PTEE Implementation",
    "OFAC Sanctions Screening",
    "UN Security Council Lists",
    "EU Restrictive Measures",
    "PEPs Verification",
    "Corporate Due Diligence"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Strategic Benefits of Due Diligence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Protect your organization and enable confident business growth through comprehensive 
            counterparty evaluation and risk assessment services.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Industries and Compliance */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Industries We Serve
            </h3>
            <div className="space-y-3">
              {industries.map((industry, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{industry}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Compliance Coverage
            </h3>
            <div className="space-y-3">
              {complianceFrameworks.map((framework, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span className="text-gray-700">{framework}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DueDiligenceBenefits;
