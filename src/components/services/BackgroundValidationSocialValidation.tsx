
import { Award, Users, Shield, Search } from 'lucide-react';

const BackgroundValidationSocialValidation = () => {
  const testimonials = [
    {
      quote: "Tusdatos background validation services transformed our hiring process. We reduced bad hires by 90% with their comprehensive employee screening platform.",
      author: "Patricia Silva",
      position: "HR Director, Colombian Manufacturing"
    },
    {
      quote: "Outstanding criminal background checks and employment verification. Their background validation accuracy helped us maintain workplace security standards.",
      author: "Roberto Martinez",
      position: "Security Manager, Retail Chain"
    },
    {
      quote: "Comprehensive background screening solution that covers all our pre-employment validation needs. Excellent customer service and reliable results.",
      author: "Carmen Lopez",
      position: "Talent Acquisition Lead, Tech Company"
    }
  ];

  const achievements = [
    {
      icon: Shield,
      title: "300+ Background Data Sources",
      description: "Comprehensive criminal and employment databases"
    },
    {
      icon: Users,
      title: "50,000+ Background Checks",
      description: "Successfully completed validation processes"
    },
    {
      icon: Award,
      title: "99.9% Validation Accuracy",
      description: "Verified background screening reliability"
    },
    {
      icon: Search,
      title: "Real-time Processing",
      description: "Instant background check results"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted for Background Validation Excellence
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Leading organizations rely on Tusdatos for comprehensive background checks, 
            criminal screening, employment verification, and pre-hire validation services.
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

export default BackgroundValidationSocialValidation;
