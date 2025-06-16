
import { Globe, Users, AlertTriangle, CheckCircle } from 'lucide-react';

const GlobalWatchlistOverview = () => {
  const screeningSources = [
    {
      icon: Globe,
      title: "International Sanctions Lists",
      description: "Comprehensive screening against major global sanctions bodies including OFAC, UN Security Council, European Union, and UK HMT with continuous updates.",
      features: [
        "OFAC Specially Designated Nationals (SDN)",
        "UN Security Council Sanctions List",
        "EU Consolidated Sanctions List",
        "UK HMT Financial Sanctions",
        "FATF High-Risk Countries",
        "Regional sanctions databases"
      ]
    },
    {
      icon: Users,
      title: "High-Risk Profiles & PEPs",
      description: "Identification of Politically Exposed Persons, their associates, and individuals of special interest to law enforcement agencies worldwide.",
      features: [
        "Politically Exposed Persons (PEPs)",
        "Close associates and family members",
        "Government officials and executives",
        "High-profile business leaders",
        "Law enforcement watch lists",
        "Adverse media monitoring"
      ]
    }
  ];

  const localSources = [
    {
      icon: AlertTriangle,
      title: "National Judicial & Legal Records",
      description: "Deep integration with Colombian and Ecuadorian legal systems"
    },
    {
      icon: CheckCircle,
      title: "Premium Global Databases",
      description: "World-class screening through World-Check and Dow Jones"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Global Screening Coverage
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our extensive database consolidates critical information from hundreds of national and 
            international sources, providing complete visibility into potential risks and ensuring 
            full regulatory compliance.
          </p>
        </div>

        {/* Main Screening Sources */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {screeningSources.map((source, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-red-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mr-4">
                  <source.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{source.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 text-lg">{source.description}</p>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 text-lg">Coverage Includes:</h4>
                <div className="grid gap-2">
                  {source.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Sources */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Specialized Regional & Premium Sources
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {localSources.map((source, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <source.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-lg">{source.title}</h4>
                <p className="text-gray-600">{source.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Colombia Integration:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Judicial Branch records</li>
                  <li>• National Police databases</li>
                  <li>• DIAN tax authority records</li>
                  <li>• Financial Intelligence Unit (UIAF)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Ecuador Coverage:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Judiciary Council records</li>
                  <li>• Civil Registry databases</li>
                  <li>• SRI tax records</li>
                  <li>• Financial Intelligence Unit</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalWatchlistOverview;
