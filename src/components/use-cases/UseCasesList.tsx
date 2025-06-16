
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, CreditCard, Building } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const UseCasesList = () => {
  const navigate = useNavigate();

  const useCases = [
    {
      icon: Users,
      title: "HR & Recruitment",
      description: "Comprehensive background verification for safe and compliant hiring decisions.",
      features: ["Criminal background checks", "Employment verification", "Educational credentials", "Reference validation"],
      path: "/use-cases/hr-recruitment"
    },
    {
      icon: CreditCard,
      title: "Financial Services",
      description: "Regulatory compliance solutions for financial institutions and fintech companies.",
      features: ["KYC compliance", "AML monitoring", "LAFT implementation", "Risk assessment"],
      path: "/use-cases/financial-services"
    },
    {
      icon: Building,
      title: "Tenant Screening",
      description: "Thorough tenant verification for property managers and landlords.",
      features: ["Credit history checks", "Income verification", "Rental history", "Criminal background"],
      path: "/use-cases/tenant-screening"
    }
  ];

  const handleLearnMore = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Detailed Use Cases
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore how Tusdatos delivers value across different industries and use cases.
          </p>
        </div>

        <div className="space-y-12">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <useCase.icon className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">
                      {useCase.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {useCase.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {useCase.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <ArrowRight className="w-4 h-4 text-blue-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={() => handleLearnMore(useCase.path)}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-8">
                  <useCase.icon className="w-24 h-24 text-blue-600 mx-auto" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesList;
