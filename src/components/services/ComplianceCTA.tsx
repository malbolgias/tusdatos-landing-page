
import { Shield, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ComplianceCTA = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:comercial@tusdatos.co';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+573054362276';
  };

  const steps = [
    {
      number: "1",
      title: "Compliance Assessment",
      description: "We evaluate your current compliance status and identify areas for improvement."
    },
    {
      number: "2", 
      title: "System Implementation",
      description: "Our team implements SARLAFT, KYC, and AML compliance systems tailored to your needs."
    },
    {
      number: "3",
      title: "Ongoing Monitoring", 
      description: "Continuous compliance monitoring and regulatory updates to maintain full compliance."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-green-700 to-emerald-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2 border border-white/20">
                <Shield className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">SARLAFT & Compliance Experts</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Ready to Ensure Full Compliance?
              </h2>
              
              <p className="text-xl text-green-100 leading-relaxed">
                Start your <Link to="/glossary#sarlaft" className="text-white hover:text-green-200 underline">SARLAFT</Link>, <Link to="/glossary#kyc" className="text-white hover:text-green-200 underline">KYC</Link>, and <Link to="/glossary#aml" className="text-white hover:text-green-200 underline">AML</Link> compliance validation today. Our experts will help you 
                implement comprehensive compliance solutions tailored to your business needs.
              </p>

              <p className="text-lg text-green-100">
                Learn about <Link to="/glossary#laft" className="text-white hover:text-green-200 underline">LAFT</Link>, <Link to="/glossary#sagrilaft" className="text-white hover:text-green-200 underline">SAGRILAFT</Link>, and <Link to="/glossary#ptee" className="text-white hover:text-green-200 underline">PTEE</Link> requirements in our glossary.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="green-on-dark">
                Start Compliance Validation
              </Button>
              <Button size="lg" variant="green-outline-on-dark">
                Schedule Consultation
              </Button>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-semibold mb-8 text-white">Get Started Today</h3>
            
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 border border-white/30">
                    <span className="text-sm font-bold text-white">{step.number}</span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-white">{step.title}</h4>
                    <p className="text-green-100 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="border-t border-white/20 mt-8 pt-6 space-y-4">
              <p className="text-green-100">Ready to get started? Contact our compliance experts:</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={handleEmailClick}
                  className="flex items-center justify-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors border border-white/20"
                >
                  <Mail className="w-4 h-4 text-white" />
                  <span className="text-sm text-white">comercial@tusdatos.co</span>
                </button>
                <button 
                  onClick={handlePhoneClick}
                  className="flex items-center justify-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors border border-white/20"
                >
                  <Phone className="w-4 h-4 text-white" />
                  <span className="text-sm text-white">+57 305 436 2276</span>
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
