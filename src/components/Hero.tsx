
import { Shield, Database, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-blue-500/20 rounded-full px-4 py-2 border border-blue-400/30">
                <Shield className="w-4 h-4 text-blue-300" />
                <span className="text-blue-200 text-sm font-medium">Data Validation & Compliance</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Your Strategic Ally in 
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Validation</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Transform your data validation processes with advanced technology, innovation, and agility. 
                Build secure relationships through trusted data.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold">
                Start Validation
              </Button>
              <Button variant="outline" size="lg" className="border-gray-300 text-gray-300 hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold">
                Learn More
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">300+</div>
                <div className="text-sm text-gray-400">Data Sources</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">2018</div>
                <div className="text-sm text-gray-400">Founded</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">100+</div>
                <div className="text-sm text-gray-400">Forbes Startup</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Real-time Validation</h3>
                    <p className="text-gray-400 text-sm">Instant background checks</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Compliance Ready</h3>
                    <p className="text-gray-400 text-sm">LAFT, KYC, AML certified</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Risk Prevention</h3>
                    <p className="text-gray-400 text-sm">Advanced fraud detection</p>
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

export default Hero;
