
import { Search, Shield, Users, Building, FileText, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const BackgroundChecksShowcase = () => {
  const backgroundCheckServices = [
    {
      icon: Search,
      title: "Employee Background Verification",
      description: "Comprehensive pre-employment background checks including criminal records, employment history, education verification, and professional reference validation.",
      features: ["Criminal background screening", "Employment history verification", "Education credential validation", "Professional reference checks"]
    },
    {
      icon: Shield,
      title: "Compliance Background Screening",
      description: "LAFT, KYC, and AML compliance background checks with access to OFAC, UN sanctions lists, PEPs databases, and national restrictive registries.",
      features: ["OFAC sanctions screening", "PEPs database validation", "AML compliance checks", "International watchlist screening"]
    },
    {
      icon: Building,
      title: "Corporate Due Diligence",
      description: "Business background verification for companies, suppliers, and partners including financial risk assessment and corporate compliance validation.",
      features: ["Corporate background analysis", "Financial risk assessment", "Supplier due diligence", "Business partner verification"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Advanced Background Check Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive background verification services powered by 300+ data sources. 
            From employee screening to corporate due diligence, we deliver reliable background checks 
            that reduce risk and ensure compliance across all your verification needs.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {backgroundCheckServices.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300 bg-white border-0">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Background Check Process */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              How Our Background Check Process Works
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our streamlined background verification process ensures fast, accurate, and compliant results for all your screening needs.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">1. Submit Request</h4>
              <p className="text-sm text-gray-600">Provide candidate or entity information for background verification</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">2. Comprehensive Screening</h4>
              <p className="text-sm text-gray-600">Our system searches 300+ databases for complete background validation</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">3. Compliance Validation</h4>
              <p className="text-sm text-gray-600">Verify against compliance lists and regulatory requirements</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">4. Detailed Report</h4>
              <p className="text-sm text-gray-600">Receive comprehensive background check results and risk assessment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackgroundChecksShowcase;
