
import { Search, Shield, Database, Eye } from 'lucide-react';

const BackgroundValidationFeatures = () => {
  const features = [
    {
      icon: Search,
      title: "Advanced Criminal Background Checks",
      description: "Comprehensive criminal history validation through national and international databases, including court records, arrest records, and conviction histories for thorough employee screening."
    },
    {
      icon: Database,
      title: "Employment History Verification",
      description: "Complete work history validation including previous employers, job titles, employment dates, salary verification, and performance records for accurate pre-employment screening."
    },
    {
      icon: Shield,
      title: "Education Background Validation",
      description: "Academic credential verification including degrees, certifications, professional licenses, and educational institution validation to ensure candidate qualifications are authentic."
    },
    {
      icon: Eye,
      title: "Real-time Background Screening",
      description: "Instant background check processing with real-time database access, providing immediate results for urgent hiring decisions and streamlined recruitment processes."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Background Validation Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our background validation platform provides complete employee screening capabilities 
            with access to 300+ databases for criminal checks, employment verification, and education validation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BackgroundValidationFeatures;
