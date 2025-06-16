
import { Search, Shield, Database, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const KYCOverview = () => {
  const stats = [
    { number: "200+", label: "KYC Verification Sources" },
    { number: "8+", label: "Years KYC Experience" },
    { number: "99.9%", label: "Identity Verification Accuracy" },
    { number: "24/7", label: "KYC Support & Monitoring" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-indigo-100 rounded-full px-4 py-2 mb-4">
                <Search className="w-4 h-4 text-indigo-600" />
                <span className="text-indigo-800 text-sm font-medium">Advanced KYC Solutions</span>
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Complete KYC & Customer Verification Services
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Tusdatos provides comprehensive <Link to="/glossary#kyc" className="text-blue-600 hover:text-blue-800 underline">KYC (Know Your Customer)</Link> and <Link to="/glossary#kyb" className="text-blue-600 hover:text-blue-800 underline">KYB (Know Your Business)</Link> verification 
                services for complete customer due diligence. Our advanced platform ensures regulatory compliance 
                while streamlining customer onboarding and identity verification processes.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                From basic identity verification to comprehensive <Link to="/glossary#pep" className="text-blue-600 hover:text-blue-800 underline">PEP</Link> screening and <Link to="/glossary#aml" className="text-blue-600 hover:text-blue-800 underline">AML</Link> compliance, 
                our KYC solutions help <Link to="/glossary#fintech" className="text-blue-600 hover:text-blue-800 underline">fintech</Link> companies and financial institutions meet regulatory requirements 
                while providing seamless customer experiences.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Essential compliance frameworks: <Link to="/glossary#sarlaft" className="text-blue-600 hover:text-blue-800 underline">SARLAFT</Link>, <Link to="/glossary#laft" className="text-blue-600 hover:text-blue-800 underline">LAFT</Link>, and <Link to="/glossary#due-diligence" className="text-blue-600 hover:text-blue-800 underline">due diligence</Link> requirements.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                Start KYC Implementation
              </Button>
              <Button variant="outline" size="lg">
                Schedule KYC Demo
              </Button>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">KYC Services Include:</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Search className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Customer identity verification and validation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Database className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700">Business verification and KYB compliance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-purple-500" />
                  <span className="text-gray-700">PEP screening and sanctions list checking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">Ongoing customer monitoring and compliance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KYCOverview;
