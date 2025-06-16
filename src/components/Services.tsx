
import { Shield, Search, Users, Building, FileText, Eye, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Advanced Background Validation",
      description: "Comprehensive background verification checks for individuals, companies, and vehicles. Real-time data validation to minimize hiring risks and enhance due diligence processes.",
      color: "text-blue-500"
    },
    {
      icon: Shield,
      title: "Global Compliance & Restrictive Lists",
      description: "Complete access to OFAC, UN, EU sanctions, PEPs databases, and national compliance registries. Essential for KYC, AML, and anti-money laundering requirements.",
      color: "text-green-500"
    },
    {
      icon: Users,
      title: "Deceased Person Data Validation",
      description: "Verify deceased individuals through official registry validation to maintain accurate records, prevent fraud, and ensure compliance with data protection regulations.",
      color: "text-purple-500"
    },
    {
      icon: Building,
      title: "LAFT & PTEE Compliance Implementation",
      description: "Expert consulting services for companies requiring Colombian and international regulatory compliance. Full LAFT system implementation and ongoing compliance support.",
      color: "text-orange-500"
    },
    {
      icon: FileText,
      title: "Tusdatos Business Intelligence Platform",
      description: "Comprehensive business intelligence platform providing validated public data on Colombian companies, financial risk assessment, and corporate due diligence insights.",
      color: "text-indigo-500"
    },
    {
      icon: Eye,
      title: "Complete Due Diligence Services",
      description: "Thorough counterparty evaluation services combining public and private data analysis for comprehensive risk assessment and compliance validation.",
      color: "text-teal-500"
    },
    {
      icon: AlertTriangle,
      title: "Enhanced Due Diligence & Risk Analysis",
      description: "Advanced risk analysis for high-risk clients, PEPs validation, cross-border transaction monitoring, and enhanced compliance due diligence for complex cases.",
      color: "text-red-500"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Data Validation & Compliance Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Automated data validation and verification services powered by 300+ national and international sources. 
            Complete background checks, compliance verification, due diligence, and risk management solutions for businesses across Latin America.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 6).map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                    <IconComponent className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {services.length > 6 && (
          <div className="mt-8 flex justify-center">
            <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md max-w-md">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                  {(() => {
                    const IconComponent = services[6].icon;
                    return <IconComponent className={`w-6 h-6 ${services[6].color}`} />;
                  })()}
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {services[6].title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {services[6].description}
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
