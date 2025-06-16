
import { Shield, CheckCircle, AlertTriangle, TrendingUp, Users, FileText } from 'lucide-react';

const KYCBenefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Regulatory Compliance",
      description: "Ensure full compliance with LAFT, AML, and international regulations through comprehensive KYC/KYB processes."
    },
    {
      icon: CheckCircle,
      title: "Fraud Prevention",
      description: "Identify and prevent fraudulent activities, money laundering, and terrorism financing through robust verification."
    },
    {
      icon: AlertTriangle,
      title: "Risk Mitigation", 
      description: "Reduce operational and reputational risks by verifying the identity and legitimacy of all business relationships."
    },
    {
      icon: TrendingUp,
      title: "Business Growth",
      description: "Enable confident business expansion with verified, compliant customer and partner relationships."
    },
    {
      icon: Users,
      title: "Customer Experience",
      description: "Streamline onboarding processes while maintaining security and compliance requirements."
    },
    {
      icon: FileText,
      title: "Audit Readiness",
      description: "Maintain comprehensive documentation and audit trails for regulatory inspections and compliance reviews."
    }
  ];

  const industries = [
    "Banks & Financial Institutions",
    "FinTech & Digital Payments", 
    "Insurance Companies",
    "Investment Firms",
    "Cryptocurrency Exchanges",
    "Money Service Businesses",
    "Real Estate Companies",
    "Gaming & Gambling Operators"
  ];

  const regulations = [
    "LAFT (Colombia Anti-Money Laundering)",
    "AML (Anti-Money Laundering)",
    "CTF (Counter-Terrorism Financing)",
    "KYC (Know Your Customer)",
    "KYB (Know Your Business)",
    "CDD (Customer Due Diligence)",
    "EDD (Enhanced Due Diligence)",
    "FATF Recommendations"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Strategic Benefits of KYC/KYB
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Essential compliance processes that protect your business, ensure regulatory adherence, 
            and enable secure growth in today's digital financial ecosystem.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Industries and Regulations */}
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

          <div className="bg-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Regulatory Compliance
            </h3>
            <div className="space-y-3">
              {regulations.map((regulation, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">{regulation}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KYCBenefits;
