
import { Shield, Database, Search, Eye, CheckCircle, Globe } from 'lucide-react';

const ComplianceFeatures = () => {
  const features = [
    {
      icon: Shield,
      title: "SARLAFT & AML Compliance",
      description: "Complete anti-money laundering validation and SARLAFT (Sistema de Administración del Riesgo de Lavado de Activos y Financiación del Terrorismo) implementation services with real-time monitoring and reporting.",
      benefits: ["Real-time AML screening", "SARLAFT regulatory compliance", "Automated risk assessment"]
    },
    {
      icon: Database,
      title: "Global Sanctions Screening",
      description: "Access to OFAC, UN, EU, and other international sanctions lists with comprehensive PEP database validation.",
      benefits: ["300+ global sanctions lists", "PEP database access", "Real-time list updates"]
    },
    {
      icon: Search,
      title: "KYC & Due Diligence",
      description: "Know Your Customer validation with comprehensive due diligence services and identity verification.",
      benefits: ["Identity verification", "Enhanced due diligence", "Risk profiling"]
    },
    {
      icon: Eye,
      title: "PTEE Compliance Support",
      description: "Complete PTEE (Plan de transparencia y ética empresarial) compliance consulting and implementation.",
      benefits: ["PTEE identification", "Compliance consulting", "Policy implementation"]
    },
    {
      icon: CheckCircle,
      title: "Regulatory Reporting",
      description: "Automated compliance reporting and regulatory filing assistance with audit trail maintenance.",
      benefits: ["Automated reporting", "Audit trail tracking", "Regulatory filing support"]
    },
    {
      icon: Globe,
      title: "Multi-Jurisdiction Coverage",
      description: "Compliance validation across Colombian, Ecuadorian, and international regulatory frameworks.",
      benefits: ["Multi-country coverage", "Local regulations", "International standards"]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Compliance Features
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our compliance platform provides complete SARLAFT, KYC, AML, and regulatory validation services 
            with access to global databases and real-time monitoring capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {feature.description}
              </p>
              
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplianceFeatures;
