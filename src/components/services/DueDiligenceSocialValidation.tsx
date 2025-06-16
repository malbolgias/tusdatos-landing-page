
import { Award, Users, Shield, CheckCircle } from 'lucide-react';

const DueDiligenceSocialValidation = () => {
  const testimonials = [
    {
      quote: "Tusdatos' enhanced due diligence services provided the comprehensive analysis we needed for our major acquisition. Their detailed reports uncovered critical risk factors that saved us from a potentially damaging business decision.",
      author: "Roberto Silva",
      position: "M&A Director, Colombian Investment Group"
    },
    {
      quote: "The depth of their due diligence analysis is unmatched. From corporate structure evaluation to media monitoring, Tusdatos delivers the intelligence needed for confident business partnerships.",
      author: "Patricia López",
      position: "Risk Manager, International Bank"
    },
    {
      quote: "Outstanding counterparty evaluation services. Their team provided detailed documentation and analysis that exceeded our expectations for regulatory compliance and risk assessment.",
      author: "Fernando García",
      position: "Compliance Officer, Financial Services"
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Regulatory Excellence",
      description: "Full compliance with LAFT and international standards"
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Comprehensive fraud and corruption detection"
    },
    {
      icon: Users,
      title: "Expert Analysis",
      description: "Specialized team for complex evaluations"
    },
    {
      icon: CheckCircle,
      title: "Detailed Reporting",
      description: "Comprehensive documentation and evidence"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <achievement.icon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{achievement.title}</h3>
              <p className="text-sm text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted for Critical Business Decisions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Leading organizations rely on Tusdatos for comprehensive due diligence services, 
            risk assessment, and counterparty evaluation across complex business scenarios.
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

export default DueDiligenceSocialValidation;
