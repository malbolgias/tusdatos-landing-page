
import { Button } from '@/components/ui/button';
import { ArrowRight, CreditCard } from 'lucide-react';

const FinancialServicesCTA = () => {
  return (
    <section className="bg-green-700 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <CreditCard className="w-16 h-16 text-white mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Achieve Full Compliance?
        </h2>
        <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
          Join leading financial institutions who trust Tusdatos for their compliance needs. 
          Start your journey to seamless regulatory compliance today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="bg-white text-green-700 hover:bg-gray-100">
            Start Compliance Assessment
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-700">
            Contact Compliance Expert
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinancialServicesCTA;
