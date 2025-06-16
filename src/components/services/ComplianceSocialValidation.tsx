
import { Award, Users, Shield, Database } from 'lucide-react';

const ComplianceSocialValidation = () => {
  const testimonials = [
    {
      quote: "Tusdatos compliance solutions transformed our LAFT implementation. Their KYC validation platform reduced our regulatory risks by 95% while ensuring full AML compliance.",
      author: "Fernando Gutierrez",
      position: "Compliance Director, Colombian Bank"
    },
    {
      quote: "Outstanding PTEE compliance support and sanctions screening. Their due diligence platform helped us implement comprehensive compliance frameworks seamlessly.",
      author: "Isabella Morales",
      position: "Risk Officer, Financial Institution"
    },
    {
      quote: "Comprehensive compliance validation services covering all our regulatory needs. Excellent PEPs screening and AML monitoring capabilities.",
      author: "Diego Ramirez",
      position: "Compliance Manager, Insurance Group"
    }
  ];

  const achievements = [
    {
      icon: Shield,
      title: "Full LAFT Compliance",
      description: "Complete anti-money laundering validation"
    },
    {
      icon: Database,
      title: "Global Sanctions Access",
      description: "OFAC, UN, EU restrictive lists coverage"
    },
    {
      icon: Users,
      title: "PEPs Validation",
      description: "Politically Exposed Persons screening"
    },
    {
      icon: Award,
      title: "Regulatory Excellence",
      description: "Industry-leading compliance accuracy"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <achievement.icon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{achievement.title}</h3>
              <p className="text-sm text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted for Compliance Excellence
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Leading financial institutions trust Tusdatos for comprehensive LAFT, KYC, AML compliance, 
            sanctions screening, and regulatory validation services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Shield key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-4 italic">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <div className="font-semibold text-gray-900">{testimonial.author}</div>
                <div className="text-sm text-gray-600">{testimonial.position}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplianceSocialValidation;
