
import { Shield, Globe, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CompanyOverview = () => {
  const stats = [
    { number: "300+", label: "Background Check Data Sources" },
    { number: "5+", label: "Years Leading Data Validation" },
    { number: "2", label: "Countries Serving Compliance Needs" },
    { number: "99.9%", label: "Background Verification Accuracy" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
                <Shield className="w-4 h-4 text-blue-600" />
                <span className="text-blue-800 text-sm font-medium">Leading Background Check Innovation Since 2018</span>
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Your Strategic Partner in Background Verification & Data Validation
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Tusdatos is Colombia's premier data validation and background check technology company, 
                founded by Santiago Hernández Zambrano. We specialize in comprehensive background verification, 
                due diligence services, and regulatory compliance solutions including LAFT, KYC, and AML validation.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Our advanced background check platform leverages 300+ national and international data sources 
                to provide real-time verification services, helping organizations make secure hiring decisions 
                and maintain regulatory compliance across Colombia and Ecuador.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Learn About Our Background Checks
              </Button>
              <Button variant="outline" size="lg">
                View Compliance Solutions
              </Button>
            </div>
          </div>
          
          <div className="space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Key Features */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Why Choose Tusdatos for Background Checks?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Comprehensive international background database access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700">Full LAFT, KYC, AML compliance validation services</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-purple-500" />
                  <span className="text-gray-700">Expert customer support and implementation guidance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">Forbes-recognized innovation in background verification</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
