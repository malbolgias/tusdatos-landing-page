
import { Shield, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ComplianceCTA = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:comercial@tusdatos.co';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+573054362276';
  };

  return (
    <section className="py-24 bg-gradient-to-br from-green-700 to-emerald-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">LAFT & Compliance Experts</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Ready to Ensure Full Compliance?
            </h2>
            
            <p className="text-xl text-green-100 leading-relaxed">
              Start your LAFT, KYC, and AML compliance validation today. Our experts will help you 
              implement comprehensive compliance solutions tailored to your business needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-green-700 hover:bg-gray-100 px-8 py-3 font-semibold text-lg"
              >
                Start Compliance Validation
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-green-700 px-8 py-3 font-semibold text-lg"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-semibold mb-6">Get Started Today</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Compliance Assessment</h4>
                  <p className="text-green-100">We evaluate your current compliance status and identify areas for improvement.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">System Implementation</h4>
                  <p className="text-green-100">Our team implements LAFT, KYC, and AML compliance systems tailored to your needs.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Ongoing Monitoring</h4>
                  <p className="text-green-100">Continuous compliance monitoring and regulatory updates to maintain full compliance.</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-white/20 mt-8 pt-6">
              <p className="text-green-100 mb-4">Ready to get started? Contact our compliance experts:</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={handleEmailClick}
                  className="flex items-center justify-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">comercial@tusdatos.co</span>
                </button>
                <button 
                  onClick={handlePhoneClick}
                  className="flex items-center justify-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+57 305 436 2276</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceCTA;
