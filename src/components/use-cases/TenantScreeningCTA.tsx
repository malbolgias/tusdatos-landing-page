
import { Button } from '@/components/ui/button';
import { ArrowRight, Building } from 'lucide-react';

const TenantScreeningCTA = () => {
  return (
    <section className="bg-purple-600 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Building className="w-16 h-16 text-white mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Protect Your Properties?
        </h2>
        <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
          Join thousands of property managers and landlords who trust Tusdatos 
          for comprehensive tenant screening. Start protecting your investment today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
            Start Screening Process
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
            Contact Property Expert
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TenantScreeningCTA;
