
import { Shield, Database, Search, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ComplianceOverview = () => {
  const stats = [
    { number: "300+", label: "Compliance Data Sources" },
    { number: "100%", label: "SARLAFT Regulatory Coverage" },
    { number: "24/7", label: "Compliance Monitoring" },
    { number: "99.9%", label: "Sanctions Screening Accuracy" }
  ];

  const features = [
    {
      icon: Shield,
      text: "SARLAFT & AML compliance implementation and monitoring",
      color: "text-green-500"
    },
    {
      icon: Database,
      text: "Global sanctions lists and PEP validation screening",
      color: "text-blue-500"
    },
    {
      icon: Search,
      text: "KYC validation and customer due diligence services",
      color: "text-purple-500"
    },
    {
      icon: Eye,
      text: "PTEE compliance consulting and system implementation",
      color: "text-orange-500"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-4 py-2">
                <Shield className="w-4 h-4 text-green-600" />
                <span className="text-green-800 text-sm font-medium">Leading Compliance Solutions Provider</span>
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900">
                Complete Compliance & Regulatory Validation Services
              </h2>
              
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Tusdatos provides comprehensive compliance solutions including SARLAFT implementation, KYC validation, 
                  AML screening, PTEE compliance, and due diligence services. Our platform accesses global sanctions lists, 
                  PEP databases, and regulatory compliance sources to ensure full adherence to Colombian and international regulations.
                </p>

                <p>
                  From OFAC sanctions screening to comprehensive due diligence validation, our compliance platform 
                  helps financial institutions and regulated businesses maintain regulatory compliance while managing risk effectively.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="default" className="bg-green-700 hover:bg-green-800 text-white">
                Start Compliance Validation
              </Button>
              <Button variant="outline" size="lg" className="border-green-700 text-green-700 hover:bg-green-700 hover:text-white">
                View Compliance Solutions
              </Button>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 text-center border border-green-100">
                  <div className="text-3xl font-bold text-green-600 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Compliance Services Include:</h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <feature.icon className={`w-5 h-5 ${feature.color}`} />
                    <span className="text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceOverview;
