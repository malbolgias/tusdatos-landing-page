
import { Button } from '@/components/ui/button';
import { CreditCard, CheckCircle } from 'lucide-react';

const FinancialServicesHero = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-4">
              <CreditCard className="w-8 h-8 text-green-600 mr-3" />
              <span className="text-green-600 font-semibold">Financial Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Regulatory Compliance Made Simple
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Ensure full compliance with KYC, AML, and LAFT requirements. 
              Streamline onboarding while meeting all regulatory standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Start KYC Process
              </Button>
              <Button size="lg" variant="outline">
                View Compliance Guide
              </Button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Compliance Features</h3>
            <div className="space-y-3">
              {[
                "LAFT implementation support",
                "Real-time AML monitoring",
                "Automated KYC workflows",
                "Regulatory reporting tools"
              ].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialServicesHero;
