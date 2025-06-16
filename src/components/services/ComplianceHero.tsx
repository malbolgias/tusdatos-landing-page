import { Shield, Search, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ComplianceHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-green-900 to-slate-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-green-500/20 rounded-full px-4 py-2 border border-green-400/30">
                <Shield className="w-4 h-4 text-green-300" />
                <span className="text-green-200 text-sm font-medium">SARLAFT, KYC & AML Compliance Solutions</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Complete Compliance &
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"> Regulatory Solutions</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Ensure full regulatory compliance with our comprehensive SARLAFT, KYC, AML, and PTEE validation services. 
                Access global sanctions lists, PEP databases, and compliance verification across 300+ sources.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="green-on-dark" className="px-8 py-3 font-semibold">
                Start Compliance Validation
              </Button>
              <Button size="lg" variant="green-outline-on-dark" className="px-8 py-3 font-semibold">
                Compliance Consultation
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">SARLAFT & AML Compliance</h3>
                    <p className="text-gray-400 text-sm">Anti-money laundering validation</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Search className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">KYC & Due Diligence</h3>
                    <p className="text-gray-400 text-sm">Know Your Customer verification</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Sanctions & PEP Screening</h3>
                    <p className="text-gray-400 text-sm">Global restrictive lists validation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceHero;
