
import { Users, Building, CreditCard, Shield } from 'lucide-react';

const UseCasesOverview = () => {
  const industries = [
    {
      icon: Users,
      title: "HR & Recruitment",
      description: "Streamline hiring with comprehensive background checks and identity verification."
    },
    {
      icon: CreditCard,
      title: "Financial Services",
      description: "Ensure regulatory compliance with KYC, AML, and LAFT requirements."
    },
    {
      icon: Building,
      title: "Tenant Screening",
      description: "Verify tenant backgrounds and financial stability for property management."
    },
    {
      icon: Shield,
      title: "Compliance & Risk",
      description: "Mitigate risks with thorough validation and monitoring solutions."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted Across Industries
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From startups to Fortune 500 companies, organizations trust Tusdatos 
            for their validation and verification needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <industry.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {industry.title}
              </h3>
              <p className="text-gray-600">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesOverview;
