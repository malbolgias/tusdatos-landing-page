
import { Shield, Search, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const BackgroundValidationCTA = () => {
  const benefits = [
    "Access 300+ criminal and employment databases instantly",
    "99.9% accuracy in background validation results",
    "Complete criminal history and employment verification",
    "Expert support for all background screening needs"
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-500/20 rounded-full px-4 py-2 border border-blue-400/30 mb-6">
            <Search className="w-4 h-4 text-blue-300" />
            <span className="text-blue-200 text-sm font-medium">Start Background Validation Today</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Ready to Transform Your Background Screening Process?
          </h2>
          
          <p className="text-xl text-blue-100 leading-relaxed mb-8 max-w-3xl mx-auto">
            Join hundreds of organizations who trust Tusdatos for comprehensive background validation, 
            criminal screening, employment verification, and pre-hire validation services.
          </p>

          <p className="text-lg text-blue-100 mb-8">
            Understand key terms like <Link to="/glossary#due-diligence" className="text-white hover:text-blue-200 underline">Due Diligence</Link>, <Link to="/glossary#kyc" className="text-white hover:text-blue-200 underline">KYC</Link>, and <Link to="/glossary#pep" className="text-white hover:text-blue-200 underline">PEP</Link> screening in our comprehensive glossary.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-blue-100">{benefit}</span>
              </div>
            ))}
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 font-semibold">
                Start Background Validation
              </Button>
              <Button variant="outline" size="lg" className="border-blue-300 text-blue-100 hover:bg-blue-800 px-8 py-3 font-semibold">
                Request Demo
              </Button>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6">Background Validation Process</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">1</div>
                <div>
                  <h4 className="font-semibold mb-2">Submit Background Check Request</h4>
                  <p className="text-blue-100 text-sm">Provide candidate information for comprehensive validation</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">2</div>
                <div>
                  <h4 className="font-semibold mb-2">Database Screening</h4>
                  <p className="text-blue-100 text-sm">Access 300+ databases for criminal and employment verification</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">3</div>
                <div>
                  <h4 className="font-semibold mb-2">Receive Validation Results</h4>
                  <p className="text-blue-100 text-sm">Get comprehensive background check reports instantly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackgroundValidationCTA;
