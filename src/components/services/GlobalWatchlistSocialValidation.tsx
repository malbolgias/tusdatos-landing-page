
import { Award, Users, Shield, CheckCircle } from 'lucide-react';

const GlobalWatchlistSocialValidation = () => {
  const testimonials = [
    {
      quote: "Tusdatos' global watchlist screening has transformed our compliance operations. The real-time alerts and comprehensive coverage across international sanctions lists give us confidence in every business relationship we establish.",
      author: "María Elena Rodríguez",
      position: "Compliance Director, Colombian Banking Corporation"
    },
    {
      quote: "The depth of their screening database is impressive. From OFAC to UN sanctions lists, PEPs identification, and local judicial records - everything we need for comprehensive risk assessment in one platform.",
      author: "Diego Morales",
      position: "Risk Manager, International Trade Company"
    },
    {
      quote: "Outstanding performance in detecting high-risk individuals and entities. Their screening service has prevented several potentially damaging business relationships and kept us fully compliant with AML regulations.",
      author: "Carmen Vásquez",
      position: "Legal Director, Financial Services Group"
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Global Coverage",
      description: "300+ international and national screening sources"
    },
    {
      icon: Shield,
      title: "Real-time Updates",
      description: "Continuous monitoring and instant alerts"
    },
    {
      icon: Users,
      title: "Comprehensive Screening",
      description: "Individuals, companies, and beneficial ownership"
    },
    {
      icon: CheckCircle,
      title: "Regulatory Compliance",
      description: "Full AML, LAFT, and international standards"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <achievement.icon className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{achievement.title}</h3>
              <p className="text-sm text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted for Global Risk Prevention
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Leading organizations worldwide rely on Tusdatos for comprehensive watchlist screening, 
            sanctions compliance, and risk assessment across all business relationships.
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

export default GlobalWatchlistSocialValidation;
