
import { Shield, Users, Building, FileCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ComplianceOverview = () => {
  const stats = [
    { number: "100%", label: "SARLAFT Compliance Achievement" },
    { number: "50+", label: "Regulatory Frameworks Supported" },
    { number: "99.9%", label: "Compliance Accuracy Rate" },
    { number: "24/7", label: "Compliance Monitoring Support" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-4 py-2 mb-4">
                <Shield className="w-4 h-4 text-green-600" />
                <span className="text-green-800 text-sm font-medium">Expert Compliance Solutions</span>
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Complete SARLAFT, KYC & AML Compliance Implementation
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Tusdatos provides comprehensive compliance solutions including <Link to="/glossary#sarlaft" className="text-blue-600 hover:text-blue-800 underline">SARLAFT</Link>, <Link to="/glossary#kyc" className="text-blue-600 hover:text-blue-800 underline">KYC</Link>, <Link to="/glossary#aml" className="text-blue-600 hover:text-blue-800 underline">AML</Link>, and <Link to="/glossary#laft" className="text-blue-600 hover:text-blue-800 underline">LAFT</Link> system 
                implementation. Our expert team ensures full regulatory compliance across Colombian and international frameworks.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                From <Link to="/glossary#sagrilaft" className="text-blue-600 hover:text-blue-800 underline">SAGRILAFT</Link> implementation to <Link to="/glossary#ptee" className="text-blue-600 hover:text-blue-800 underline">PTEE</Link> program establishment, we help organizations maintain 
                full compliance while minimizing operational complexity and regulatory risks.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Understand compliance fundamentals: <Link to="/glossary#due-diligence" className="text-blue-600 hover:text-blue-800 underline">Due Diligence</Link>, <Link to="/glossary#enhanced-due-diligence" className="text-blue-600 hover:text-blue-800 underline">Enhanced Due Diligence</Link>, and <Link to="/glossary#pep" className="text-blue-600 hover:text-blue-800 underline">PEP</Link> screening requirements.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Start Compliance Implementation
              </Button>
              <Button variant="outline" size="lg">
                Schedule Compliance Consultation
              </Button>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Compliance Services Include:</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">SARLAFT and SAGRILAFT system implementation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700">KYC and customer due diligence procedures</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Building className="w-5 h-5 text-purple-500" />
                  <span className="text-gray-700">AML monitoring and transaction screening</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FileCheck className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">PTEE program establishment and monitoring</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceOverview;
