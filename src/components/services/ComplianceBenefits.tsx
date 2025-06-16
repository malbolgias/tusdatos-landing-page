
import { Shield, TrendingUp, Clock, Users, CheckCircle, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ComplianceBenefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Regulatory Compliance Assurance",
      description: "Ensure full compliance with SARLAFT (Sistema de Administración del Riesgo de Lavado de Activos y Financiación del Terrorismo), AML, KYC, and PTEE regulations. Our platform helps you meet all Colombian and international regulatory requirements with automated monitoring and reporting.",
      metrics: "99.9% compliance accuracy",
      iconColor: "bg-green-500"
    },
    {
      icon: TrendingUp,
      title: "Risk Reduction & Management",
      description: "Significantly reduce financial crime risks through comprehensive sanctions screening, PEP validation, and enhanced due diligence processes across all customer interactions.",
      metrics: "85% risk reduction average",
      iconColor: "bg-blue-500"
    },
    {
      icon: Clock,
      title: "Streamlined Operations",
      description: "Automate compliance processes and reduce manual work with our intelligent platform. Fast validation times and real-time screening help accelerate business operations while maintaining compliance.",
      metrics: "75% faster processing",
      iconColor: "bg-purple-500"
    },
    {
      icon: Users,
      title: "Expert Compliance Support",
      description: "Access to dedicated compliance experts and consultants who understand Colombian regulations and international standards. Get guidance on implementation, policies, and best practices.",
      metrics: "24/7 expert support",
      iconColor: "bg-orange-500"
    },
    {
      icon: CheckCircle,
      title: "Audit-Ready Documentation",
      description: "Maintain comprehensive audit trails and documentation for all compliance activities. Generate regulatory reports and maintain records that meet audit requirements and regulatory standards.",
      metrics: "100% audit compliance",
      iconColor: "bg-emerald-500"
    },
    {
      icon: Database,
      title: "Comprehensive Data Coverage",
      description: "Access to 300+ global data sources including sanctions lists, PEP databases, government records, and regulatory information for complete compliance validation coverage.",
      metrics: "300+ data sources",
      iconColor: "bg-indigo-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-gray-900">
            Why Choose Our Compliance Solutions?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive compliance platform delivers measurable benefits for financial institutions, 
            regulated businesses, and organizations requiring SARLAFT, KYC, and AML compliance validation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 h-full">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 ${benefit.iconColor} rounded-xl flex items-center justify-center mr-4`}>
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {benefit.metrics}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-700 to-emerald-700 rounded-2xl p-8 md:p-12 text-white text-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">
              Ready to Transform Your Compliance Operations?
            </h3>
            <p className="text-green-100 text-lg max-w-2xl mx-auto leading-relaxed">
              Join leading financial institutions who trust Tusdatos for comprehensive SARLAFT, 
              KYC, AML, and regulatory compliance solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="green-on-dark">
                Get Compliance Assessment
              </Button>
              <Button size="lg" variant="green-outline-on-dark">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceBenefits;
