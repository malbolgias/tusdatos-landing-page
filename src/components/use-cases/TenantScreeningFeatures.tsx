
import { CheckCircle, Home, CreditCard, Shield, FileText, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const TenantScreeningFeatures = () => {
  const features = [
    {
      icon: Shield,
      title: "Comprehensive Tenant Background Verification",
      description: "Complete criminal background checks, identity verification, and rental history validation to ensure reliable and trustworthy tenants.",
      details: [
        "Criminal history and court record verification",
        "Identity document authentication and validation",
        "Previous rental history and reference checks",
        "Employment and income verification"
      ]
    },
    {
      icon: CreditCard,
      title: "Financial Stability Assessment",
      description: "Thorough financial evaluation including credit history, income verification, and debt-to-income ratio analysis for rental decisions.",
      details: [
        "Credit score and history analysis",
        "Income verification and employment validation",
        "Debt-to-income ratio assessment",
        "Financial stability risk scoring"
      ]
    },
    {
      icon: FileText,
      title: "Legal Compliance & Documentation",
      description: "Automated compliance with rental laws, fair housing regulations, and proper documentation for legal protection.",
      details: [
        "Fair housing regulation compliance",
        "Automated legal documentation generation",
        "Privacy and data protection compliance",
        "Comprehensive audit trail maintenance"
      ]
    },
    {
      icon: Users,
      title: "Multi-Property Management Solutions",
      description: "Scalable tenant screening solutions designed for property managers handling multiple properties and rental applications.",
      details: [
        "Bulk application processing capabilities",
        "Centralized dashboard for multiple properties",
        "Automated screening workflow management",
        "Comprehensive reporting and analytics"
      ]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Advanced Tenant Screening & Verification Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive tenant verification solutions for property managers and landlords. 
            Our platform combines thorough <Link to="/glossary#due-diligence" className="text-blue-600 hover:text-blue-800 underline">due diligence</Link> processes with automated screening workflows 
            to help you find reliable tenants while maintaining legal compliance and data protection standards.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why Property Managers Choose Tusdatos
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
              Our tenant screening platform provides property managers with comprehensive verification tools 
              while ensuring compliance with <Link to="/glossary#habeas-data" className="text-blue-600 hover:text-blue-800 underline">Habeas Data</Link> regulations and privacy laws. 
              Essential for maintaining secure rental operations and protecting property investments.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Home className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Property Protection</h4>
                <p className="text-gray-600 text-sm">Comprehensive screening for property security</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FileText className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Legal Compliance</h4>
                <p className="text-gray-600 text-sm">Full compliance with rental and privacy laws</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Risk Mitigation</h4>
                <p className="text-gray-600 text-sm">Advanced risk assessment and prevention</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TenantScreeningFeatures;
