
import { CheckCircle, Shield, Users, Database, AlertTriangle, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const FinancialServicesFeatures = () => {
  const features = [
    {
      icon: Shield,
      title: "Advanced KYC & Customer Verification",
      description: "Comprehensive customer onboarding with automated identity verification, risk assessment, and regulatory compliance for financial institutions.",
      details: [
        "Real-time identity verification and validation",
        "Automated risk scoring and assessment",
        "Document authentication and verification",
        "PEP and sanctions list screening"
      ]
    },
    {
      icon: AlertTriangle,
      title: "AML & LAFT Compliance Solutions",
      description: "Complete anti-money laundering monitoring with transaction screening, suspicious activity detection, and regulatory reporting.",
      details: [
        "Real-time transaction monitoring and analysis",
        "Suspicious activity pattern detection",
        "Automated regulatory reporting and alerts",
        "Cross-border transaction compliance"
      ]
    },
    {
      icon: Database,
      title: "SARLAFT Implementation & Management",
      description: "Full SARLAFT system implementation with ongoing monitoring, risk management, and compliance validation for financial entities.",
      details: [
        "Complete SARLAFT system setup and configuration",
        "Ongoing risk assessment and monitoring",
        "Regulatory compliance validation and reporting",
        "Customer risk profile management"
      ]
    },
    {
      icon: Users,
      title: "Enhanced Due Diligence Services",
      description: "Comprehensive counterparty evaluation and risk assessment for high-value transactions and complex business relationships.",
      details: [
        "Deep background investigation and analysis",
        "Business relationship risk assessment",
        "Beneficial ownership verification",
        "Ongoing monitoring and risk updates"
      ]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Financial Services Compliance Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced compliance solutions designed for <Link to="/glossary#fintech" className="text-blue-600 hover:text-blue-800 underline">fintech</Link> companies and financial institutions. 
            Our platform ensures complete <Link to="/glossary#kyc" className="text-blue-600 hover:text-blue-800 underline">KYC</Link>, <Link to="/glossary#aml" className="text-blue-600 hover:text-blue-800 underline">AML</Link>, and <Link to="/glossary#sarlaft" className="text-blue-600 hover:text-blue-800 underline">SARLAFT</Link> compliance while streamlining customer onboarding and risk management.
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
              Why Financial Institutions Trust Tusdatos
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
              Our financial services compliance platform combines advanced technology with regulatory expertise 
              to provide comprehensive solutions for <Link to="/glossary#laft" className="text-blue-600 hover:text-blue-800 underline">LAFT</Link>, <Link to="/glossary#pep" className="text-blue-600 hover:text-blue-800 underline">PEP</Link> screening, <Link to="/glossary#ofac" className="text-blue-600 hover:text-blue-800 underline">OFAC</Link> sanctions, and <Link to="/glossary#due-diligence" className="text-blue-600 hover:text-blue-800 underline">due diligence</Link> requirements.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FileCheck className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">100% Compliance</h4>
                <p className="text-gray-600 text-sm">Full regulatory compliance across all jurisdictions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Database className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">500+ Data Sources</h4>
                <p className="text-gray-600 text-sm">Comprehensive global database coverage</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Real-time Monitoring</h4>
                <p className="text-gray-600 text-sm">Continuous compliance and risk monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialServicesFeatures;
