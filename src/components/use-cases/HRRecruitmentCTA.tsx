
import { Button } from '@/components/ui/button';
import { ArrowRight, Users } from 'lucide-react';

const HRRecruitmentCTA = () => {
  return (
    <section className="bg-blue-700 py-20"> {/* Darker blue for better contrast */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Users className="w-16 h-16 text-white mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Transform Your Hiring Process?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Join thousands of HR professionals who trust Tusdatos for their background verification needs. 
          Start making safer, smarter hiring decisions today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="bg-white text-blue-700 hover:bg-gray-100 font-semibold">
            Start Free Trial
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-700 font-semibold transition-all duration-200">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HRRecruitmentCTA;
