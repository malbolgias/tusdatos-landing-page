
import { Button } from '@/components/ui/button';
import { ArrowRight, CreditCard } from 'lucide-react';

const FinancialServicesCTA = () => {
  return (
    <section className="bg-green-700 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <CreditCard className="w-16 h-16 text-white mx-auto" />
          
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Achieve Full Compliance?
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Join leading financial institutions who trust Tusdatos for their compliance needs. 
              Start your journey to seamless regulatory compliance today.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="green-on-dark">
              Start Compliance Assessment
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="green-outline-on-dark">
              Contact Compliance Expert
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialServicesCTA;
