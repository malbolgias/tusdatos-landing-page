
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Globe, Users } from 'lucide-react';

const GlobalWatchlistHero = () => {
  return (
    <section className="bg-gradient-to-br from-red-50 to-orange-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-red-600">
                <Shield className="w-5 h-5" />
                <span className="font-semibold text-sm uppercase tracking-wide">Global Protection</span>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                Global Watchlist 
                <span className="text-red-600"> Screening</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Instantly verify individuals and companies against hundreds of national and international 
                sanctions lists, criminal databases, and high-risk profiles to protect your business 
                from financial and reputational damage.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-blue-accessible">
                Start Screening Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                View Demo
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">300+</div>
                <div className="text-sm text-gray-600">Global Sources</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">24/7</div>
                <div className="text-sm text-gray-600">Real-time Updates</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">100%</div>
                <div className="text-sm text-gray-600">Compliance Coverage</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Screening Dashboard</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-green-600" />
                      <span className="text-sm font-medium text-gray-900">Individual Screening</span>
                    </div>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Clear</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200">
                    <div className="flex items-center space-x-3">
                      <Globe className="w-5 h-5 text-red-600" />
                      <span className="text-sm font-medium text-gray-900">OFAC Sanctions</span>
                    </div>
                    <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Match Found</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <div className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-yellow-600" />
                      <span className="text-sm font-medium text-gray-900">PEP Screening</span>
                    </div>
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Under Review</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <div className="text-xs text-gray-500 text-center">
                    Last updated: {new Date().toLocaleTimeString()}
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

export default GlobalWatchlistHero;
