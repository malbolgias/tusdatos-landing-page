
import { Shield, Search, Users, Building, FileText, Eye, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Background Validation",
      description: "Quick and secure background checks for individuals, companies, and vehicles to reduce hiring risks.",
      color: "text-blue-500"
    },
    {
      icon: Shield,
      title: "Restrictive List Checks",
      description: "Access to OFAC, UN, EU sanctions, PEPs, and national databases for compliance requirements.",
      color: "text-green-500"
    },
    {
      icon: Users,
      title: "Deceased Person Validation",
      description: "Verify deceased individuals in official registries to maintain accurate records and reduce fraud.",
      color: "text-purple-500"
    },
    {
      icon: Building,
      title: "LAFT & PTEE Implementation",
      description: "Consulting services for companies subject to Colombian and international regulations.",
      color: "text-orange-500"
    },
    {
      icon: FileText,
      title: "Tusdatos Empresas Platform",
      description: "Business intelligence platform with public data on Colombian companies and financial insights.",
      color: "text-indigo-500"
    },
    {
      icon: Eye,
      title: "Due Diligence",
      description: "Complete evaluation service for counterparties based on public and private data analysis.",
      color: "text-teal-500"
    },
    {
      icon: AlertTriangle,
      title: "Enhanced Due Diligence",
      description: "Deeper risk analysis for high-risk clients, PEPs, and cross-border transactions.",
      color: "text-red-500"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Service Offerings
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Automated data retrieval from over 300 national and international sources 
            to deliver a wide range of validation and compliance services.
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
                  <services[6].icon className={`w-6 h-6 ${services[6].color}`} />
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
