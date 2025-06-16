
import { Button } from '@/components/ui/button';
import { Building, CheckCircle } from 'lucide-react';

const TenantScreeningHero = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-4">
              <Building className="w-8 h-8 text-purple-600 mr-3" />
              <span className="text-purple-600 font-semibold">Tenant Screening</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Screen Tenants with Confidence
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive tenant verification to protect your properties and ensure 
              reliable, qualified tenants. Make informed leasing decisions every time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Start Tenant Screening
              </Button>
              <Button size="lg" variant="outline">
                View Sample Report
              </Button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Screening Benefits</h3>
            <div className="space-y-3">
              {[
                "Reduce tenant default risk by 80%",
                "Complete reports in 24 hours",
                "Credit and criminal history",
                "Income and employment verification"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-purple-500 mr-3" />
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

export default TenantScreeningHero;
