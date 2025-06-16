
import { Shield, Search, Users, Database } from 'lucide-react';

const BackgroundValidationBenefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Reduce Hiring Risks",
      description: "Minimize bad hires and workplace incidents through comprehensive criminal background checks and employment verification, protecting your organization's reputation and safety."
    },
    {
      icon: Search,
      title: "Faster Hiring Decisions", 
      description: "Streamline recruitment with instant background validation results, reducing time-to-hire while maintaining thorough screening standards for all candidates."
    },
    {
      icon: Users,
      title: "Enhanced Workplace Security",
      description: "Create safer work environments through thorough background screening, criminal history validation, and comprehensive pre-employment verification processes."
    },
    {
      icon: Database,
      title: "Comprehensive Database Access",
      description: "Access 300+ national and international databases for complete background validation coverage, ensuring no critical information is missed during screening."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Background Validation Benefits for Your Organization
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how comprehensive background checks and employee screening can transform 
            your hiring process and protect your business from potential risks.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BackgroundValidationBenefits;
