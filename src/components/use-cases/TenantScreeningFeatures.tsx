
import { CreditCard, DollarSign, Shield, FileText } from 'lucide-react';

const TenantScreeningFeatures = () => {
  const features = [
    {
      icon: CreditCard,
      title: "Credit History Checks",
      description: "Comprehensive credit reports and scoring to assess financial responsibility."
    },
    {
      icon: DollarSign,
      title: "Income Verification",
      description: "Verify employment status, income levels, and financial stability."
    },
    {
      icon: Shield,
      title: "Criminal Background",
      description: "Thorough criminal history screening for safety and security assurance."
    },
    {
      icon: FileText,
      title: "Rental History",
      description: "Previous rental experiences, landlord references, and eviction records."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete Tenant Verification
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive screening process covers all aspects of tenant verification 
            to help you make informed leasing decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <feature.icon className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TenantScreeningFeatures;
