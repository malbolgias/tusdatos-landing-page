
import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Pricing = () => {
  const validationPlans = [
    {
      name: "Initial Plan",
      price: "490,000",
      currency: "COP",
      period: "12 months",
      checks: "100 checks",
      description: "Perfect for small businesses starting with validation",
      features: [
        "Background checks on individuals",
        "List databases access",
        "PEPs validation",
        "Academic verification",
        "Basic support"
      ],
      popular: false
    },
    {
      name: "Protected Plan",
      price: "960,000",
      currency: "COP", 
      period: "24 months",
      checks: "400 checks",
      description: "Enhanced features for growing companies",
      features: [
        "All Initial Plan features",
        "Driving history checks",
        "API access",
        "Extended validity period",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Armored Plan",
      price: "1,130,000",
      currency: "COP",
      period: "24 months", 
      checks: "400 checks",
      description: "Complete protection with advanced features",
      features: [
        "All Protected Plan features",
        "Parafiscal validations",
        "Reputational checks",
        "Real-time monitoring",
        "Advanced retry functions",
        "Dedicated support"
      ],
      popular: false
    }
  ];

  const compliancePlans = [
    {
      name: "Basic Compliance",
      price: "580,000",
      currency: "COP",
      period: "24 months",
      checks: "1,000 checks",
      description: "Essential compliance for regulated businesses",
      features: [
        "LAFT compliance checks",
        "Basic due diligence",
        "Regulatory reporting",
        "Standard support"
      ]
    },
    {
      name: "Compliance",
      price: "660,000", 
      currency: "COP",
      period: "24 months",
      checks: "400 checks",
      description: "Enhanced compliance with monitoring",
      features: [
        "All Basic features",
        "Online validations",
        "Continuous monitoring",
        "Advanced reporting",
        "Priority support"
      ]
    },
    {
      name: "Compliance 360",
      price: "790,000",
      currency: "COP", 
      period: "24 months",
      checks: "400 checks",
      description: "Complete compliance automation suite",
      features: [
        "All Compliance features",
        "Enhanced validation",
        "Full automation",
        "Custom integrations",
        "Dedicated account manager"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Plans and Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your validation and compliance needs. 
            All plans include access to our comprehensive database network.
          </p>
        </div>

        {/* Validation Plans */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Validation Plans</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {validationPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-2 border-blue-500 shadow-lg' : 'border shadow-md'} hover:shadow-xl transition-shadow duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-xl font-bold text-gray-900">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-gray-900">{plan.currency} {plan.price}</span>
                    <div className="text-sm text-gray-600 mt-1">{plan.checks} • {plan.period}</div>
                  </div>
                  <CardDescription className="mt-4 text-gray-600">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full mt-6 ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-900 hover:bg-gray-800'} text-white`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Compliance Plans */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Compliance Plans</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {compliancePlans.map((plan, index) => (
              <Card key={index} className="border shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-xl font-bold text-gray-900">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-gray-900">{plan.currency} {plan.price}</span>
                    <div className="text-sm text-gray-600 mt-1">{plan.checks} • {plan.period}</div>
                  </div>
                  <CardDescription className="mt-4 text-gray-600">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-gray-900 hover:bg-gray-800 text-white">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12 p-6 bg-blue-50 rounded-lg">
          <p className="text-gray-700 mb-4">
            Plans of up to 1,000 checks can be purchased directly at:{' '}
            <a href="https://www.tusdatos.co/compra-ahora" className="text-blue-600 hover:text-blue-800 font-medium">
              tusdatos.co/compra-ahora
            </a>
          </p>
          <p className="text-gray-600">
            For custom volumes or enterprise consulting, contact our sales team.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
