
import { Award, Users, Shield, CheckCircle } from 'lucide-react';

const KYCSocialValidation = () => {
  const testimonials = [
    {
      quote: "Tusdatos' KYC processes have streamlined our customer onboarding while ensuring full regulatory compliance. Their automated verification saves us hours of manual work and reduces operational risk significantly.",
      author: "Ana María González",
      position: "Compliance Director, Digital Bank Colombia"
    },
    {
      quote: "The KYB verification service is exceptional for our B2B partnerships. Comprehensive business verification with detailed documentation that exceeds regulatory requirements and builds trust with our stakeholders.",
      author: "Carlos Mendoza",
      position: "Risk Manager, FinTech Solutions"
    },
    {
      quote: "Outstanding customer identity verification with real-time results. Their KYC platform integrates seamlessly with our systems and provides the detailed reporting we need for audit compliance.",
      author: "Sofía Herrera",
      position: "Operations Manager, Payment Services"
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Regulatory Compliance",
      description: "Full LAFT and international AML standards compliance"
    },
    {
      icon: Shield,
      title: "Risk Prevention",
      description: "Advanced fraud and money laundering detection"
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Seamless onboarding experience for clients"
    },
    {
      icon: CheckCircle,
      title: "Automated Processing",
      description: "Real-time verification and instant results"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <achievement.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{achievement.title}</h3>
              <p className="text-sm text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted for Essential Compliance
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Leading financial institutions and businesses rely on Tusdatos for comprehensive 
            KYC and KYB verification services that ensure regulatory compliance and prevent illicit activities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <CheckCircle key={i} className="w-4 h-4 text-yellow-400 fill-current" />
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

export default KYCSocialValidation;
