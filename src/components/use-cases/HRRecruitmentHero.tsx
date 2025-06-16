
import { Button } from '@/components/ui/button';
import { Users, CheckCircle } from 'lucide-react';

const HRRecruitmentHero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-4">
              <Users className="w-8 h-8 text-blue-600 mr-3" />
              <span className="text-blue-600 font-semibold">HR & Recruitment</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Hire with Confidence
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Streamline your hiring process with comprehensive background checks 
              and identity verification. Make informed decisions and protect your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Background Checks
              </Button>
              <Button size="lg" variant="outline">
                Schedule Demo
              </Button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits</h3>
            <div className="space-y-3">
              {[
                "Reduce hiring risks by 95%",
                "Complete checks in 24-48 hours",
                "GDPR compliant processes",
                "Integration with HR systems"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HRRecruitmentHero;
