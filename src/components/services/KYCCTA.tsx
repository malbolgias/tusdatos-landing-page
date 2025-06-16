
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield } from 'lucide-react';

const KYCCTA = () => {
  return (
    <section className="bg-blue-700 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <Shield className="w-16 h-16 text-white mx-auto" />
          
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready for Compliant KYC/KYB Verification?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Ensure regulatory compliance and prevent illicit activities with comprehensive 
              identity verification. Start your KYC/KYB implementation today.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="blue-on-dark">
              Start KYC/KYB Verification
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="blue-outline-on-dark">
              Contact Compliance Expert
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KYCCTA;
