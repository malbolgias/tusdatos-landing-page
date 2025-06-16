
import { Button } from '@/components/ui/button';
import { ArrowRight, FileSearch } from 'lucide-react';

const DueDiligenceCTA = () => {
  return (
    <section className="bg-purple-700 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <FileSearch className="w-16 h-16 text-white mx-auto" />
          
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready for Comprehensive Due Diligence?
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Make informed business decisions with confidence. Start your due diligence assessment 
              today and protect your organization from potential risks.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="blue-on-dark">
              Start Due Diligence Assessment
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="blue-outline-on-dark">
              Contact Due Diligence Expert
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DueDiligenceCTA;
