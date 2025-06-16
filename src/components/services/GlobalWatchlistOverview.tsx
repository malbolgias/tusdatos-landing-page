
import { Search, Shield, Database, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const GlobalWatchlistOverview = () => {
  const stats = [
    { number: "1000+", label: "Global Sanctions Lists" },
    { number: "15+", label: "Years Sanctions Screening Experience" },
    { number: "99.99%", label: "Sanctions Detection Accuracy" },
    { number: "24/7", label: "Real-time Screening Support" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-red-100 rounded-full px-4 py-2 mb-4">
                <AlertTriangle className="w-4 h-4 text-red-600" />
                <span className="text-red-800 text-sm font-medium">Global Sanctions Screening</span>
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Global Watchlist & Sanctions Screening
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Tusdatos provides comprehensive global watchlist screening including <Link to="/glossary#ofac" className="text-blue-600 hover:text-blue-800 underline">OFAC</Link> sanctions lists, 
                UN sanctions, EU restrictive measures, and <Link to="/glossary#pep" className="text-blue-600 hover:text-blue-800 underline">PEP (Politically Exposed Persons)</Link> databases. 
                Our advanced screening platform ensures complete compliance with international sanctions and regulatory requirements.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Essential for <Link to="/glossary#aml" className="text-blue-600 hover:text-blue-800 underline">AML</Link> compliance and <Link to="/glossary#kyc" className="text-blue-600 hover:text-blue-800 underline">KYC</Link> verification, our sanctions screening protects organizations 
                from regulatory violations while enabling secure international business operations and <Link to="/glossary#fintech" className="text-blue-600 hover:text-blue-800 underline">fintech</Link> services.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Comprehensive coverage includes <Link to="/glossary#due-diligence" className="text-blue-600 hover:text-blue-800 underline">due diligence</Link> screening, <Link to="/glossary#enhanced-due-diligence" className="text-blue-600 hover:text-blue-800 underline">enhanced due diligence</Link> for high-risk entities, and real-time monitoring.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Start Sanctions Screening
              </Button>
              <Button variant="outline" size="lg">
                Request Screening Demo
              </Button>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Watchlist Screening Includes:</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700">OFAC and international sanctions list screening</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Database className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700">PEP databases and high-risk individual screening</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-purple-500" />
                  <span className="text-gray-700">Real-time monitoring and alert management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Search className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">Comprehensive adverse media and risk screening</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalWatchlistOverview;
