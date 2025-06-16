
import { CheckCircle, Users, Shield, Clock, Database, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const HRRecruitmentFeatures = () => {
  const features = [
    {
      icon: Shield,
      title: "Comprehensive Background Verification",
      description: "Complete criminal background checks, employment verification, and identity validation to ensure safe hiring decisions.",
      details: [
        "Criminal history and court record verification",
        "Employment and reference validation",
        "Educational credential verification",
        "Identity document authentication"
      ]
    },
    {
      icon: Users,
      title: "Advanced Due Diligence Screening",
      description: "Thorough candidate evaluation using multiple data sources for comprehensive risk assessment and compliance validation.",
      details: [
        "Multi-source data verification and cross-referencing",
        "Professional history and credential validation",
        "Social media and digital footprint analysis",
        "Reference verification and character assessment"
      ]
    },
    {
      icon: Database,
      title: "Automated HR Compliance Solutions",
      description: "Streamlined compliance processes ensuring regulatory adherence while reducing manual verification workload.",
      details: [
        "Automated regulatory compliance checking",
        "GDPR and data protection compliance",
        "Standardized verification workflows",
        "Comprehensive audit trail maintenance"
      ]
    },
    {
      icon: Clock,
      title: "Real-time Verification Processing",
      description: "Instant background verification results enabling faster hiring decisions without compromising thoroughness.",
      details: [
        "Real-time database access and verification",
        "Instant criminal and employment checks",
        "Automated alert systems for risk factors",
        "24/7 verification processing capabilities"
      ]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Advanced HR Background Verification Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive background screening solutions designed specifically for HR teams and recruitment professionals. 
            Our platform integrates <Link to="/glossary#due-diligence" className="text-blue-600 hover:text-blue-800 underline">due diligence</Link> processes with automated verification workflows for secure and compliant hiring.
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
              Why HR Teams Choose Tusdatos
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
              Our HR background verification platform combines advanced technology with comprehensive data sources 
              to provide reliable, fast, and compliant screening solutions. Essential for maintaining workplace safety 
              and regulatory compliance including <Link to="/glossary#kyc" className="text-blue-600 hover:text-blue-800 underline">KYC</Link> requirements and <Link to="/glossary#aml" className="text-blue-600 hover:text-blue-800 underline">AML</Link> due diligence processes.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FileCheck className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">99.9% Accuracy</h4>
                <p className="text-gray-600 text-sm">Industry-leading verification accuracy rates</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Fast Results</h4>
                <p className="text-gray-600 text-sm">Real-time verification in minutes, not days</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Full Compliance</h4>
                <p className="text-gray-600 text-sm">Complete regulatory and legal compliance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HRRecruitmentFeatures;
