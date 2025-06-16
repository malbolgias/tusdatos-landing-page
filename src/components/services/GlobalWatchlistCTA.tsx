
import { Button } from '@/components/ui/button';
import { ArrowRight, Search } from 'lucide-react';

const GlobalWatchlistCTA = () => {
  return (
    <section className="bg-red-700 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <Search className="w-16 h-16 text-white mx-auto" />
          
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready for Complete Global Protection?
            </h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
              Secure your business with comprehensive watchlist screening against global sanctions, 
              criminal databases, and high-risk profiles. Start protecting your organization today.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="blue-on-dark">
              Start Global Screening
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="blue-outline-on-dark">
              Contact Screening Expert
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalWatchlistCTA;
