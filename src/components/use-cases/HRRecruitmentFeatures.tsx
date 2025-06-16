
import { Shield, Clock, FileText, Users } from 'lucide-react';

const HRRecruitmentFeatures = () => {
  const features = [
    {
      icon: Shield,
      title: "Criminal Background Checks",
      description: "Comprehensive criminal history verification across national and international databases."
    },
    {
      icon: FileText,
      title: "Employment Verification",
      description: "Verify previous employment history, job titles, and employment dates."
    },
    {
      icon: Users,
      title: "Reference Validation",
      description: "Professional reference checks with structured questionnaires and reporting."
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Get results in 24-48 hours with real-time status updates and notifications."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive HR Screening
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our HR recruitment solutions provide everything you need to make safe, 
            informed hiring decisions while maintaining compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <feature.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
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

export default HRRecruitmentFeatures;
