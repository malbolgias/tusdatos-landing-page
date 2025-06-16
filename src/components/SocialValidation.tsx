
import { Award, Users, Shield, CheckCircle } from 'lucide-react';

const SocialValidation = () => {
  const testimonials = [
    {
      quote: "Tusdatos transformed our background check processes. Their data validation platform reduced our hiring risks by 85% while ensuring full compliance with LAFT regulations.",
      author: "María González",
      position: "HR Director, Colombian Banking Group"
    },
    {
      quote: "The most comprehensive due diligence platform in Latin America. Background checks, KYC validation, and AML compliance - all in one solution.",
      author: "Carlos Mendoza",
      position: "Compliance Officer, FinTech Leader"
    },
    {
      quote: "Outstanding customer service and reliable background verification. Tusdatos helped us implement PTEE compliance seamlessly.",
      author: "Ana Rodríguez",
      position: "Risk Manager, Insurance Company"
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Forbes Top 100 Startups",
      description: "Recognized for innovation in background check technology"
    },
    {
      icon: Shield,
      title: "300+ Data Sources",
      description: "Comprehensive background validation database"
    },
    {
      icon: Users,
      title: "Trusted by Leaders",
      description: "Financial institutions across Colombia & Ecuador"
    },
    {
      icon: CheckCircle,
      title: "99.9% Accuracy",
      description: "Verified background check reliability"
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
            Trusted for Background Checks & Data Validation
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Leading companies trust Tusdatos for comprehensive background verification, 
            compliance validation, and due diligence services across Latin America.
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

export default SocialValidation;
