
import { Search, Shield, Database, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const DueDiligenceOverview = () => {
  const stats = [
    { number: "500+", label: "Data Sources & Databases" },
    { number: "10+", label: "Years Due Diligence Experience" },
    { number: "99.8%", label: "Investigation Accuracy Rate" },
    { number: "24/7", label: "Due Diligence Support" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-4 py-2 mb-4">
                <Search className="w-4 h-4 text-purple-600" />
                <span className="text-purple-800 text-sm font-medium">Comprehensive Investigation Services</span>
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Complete Due Diligence & Enhanced Investigation Services
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Tusdatos provides comprehensive <Link to="/glossary#due-diligence" className="text-blue-600 hover:text-blue-800 underline">due diligence</Link> and <Link to="/glossary#enhanced-due-diligence" className="text-blue-600 hover:text-blue-800 underline">enhanced due diligence</Link> services for complete 
                counterparty evaluation. Our investigations combine public and private data analysis to provide thorough risk assessment 
                and compliance validation for business relationships.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                From basic <Link to="/glossary#kyc" className="text-blue-600 hover:text-blue-800 underline">KYC</Link> verification to comprehensive <Link to="/glossary#pep" className="text-blue-600 hover:text-blue-800 underline">PEP</Link> screening and <Link to="/glossary#kyb" className="text-blue-600 hover:text-blue-800 underline">KYB</Link> validation, 
                our due diligence solutions help organizations make informed decisions while maintaining regulatory compliance 
                and minimizing business risks.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Essential for compliance: <Link to="/glossary#aml" className="text-blue-600 hover:text-blue-800 underline">AML</Link> requirements, <Link to="/glossary#laft" className="text-blue-600 hover:text-blue-800 underline">LAFT</Link> procedures, and <Link to="/glossary#ofac" className="text-blue-600 hover:text-blue-800 underline">OFAC</Link> sanctions screening.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Start Due Diligence Investigation
              </Button>
              <Button variant="outline" size="lg">
                Request Investigation Quote
              </Button>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Due Diligence Services Include:</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Search className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Comprehensive counterparty investigation and analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Database className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700">Enhanced due diligence for high-risk relationships</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-purple-500" />
                  <span className="text-gray-700">PEP screening and sanctions list verification</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">Business relationship risk assessment and monitoring</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DueDiligenceOverview;
