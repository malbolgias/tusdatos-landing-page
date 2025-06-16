
import { Shield, Users, Award, Target, Eye, Clock, Globe, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "We prioritize data security and compliance in everything we do, ensuring your information is always protected.",
      color: "text-blue-500"
    },
    {
      icon: Clock,
      title: "Innovation & Agility",
      description: "Continuous technological advancement and rapid deployment of cutting-edge validation solutions.",
      color: "text-green-500"
    },
    {
      icon: Users,
      title: "Customer-Centric",
      description: "Warm, responsive customer service that builds lasting relationships with our clients.",
      color: "text-purple-500"
    },
    {
      icon: CheckCircle,
      title: "Legal Compliance",
      description: "Building a culture of compliance with comprehensive regulatory framework support.",
      color: "text-orange-500"
    }
  ];

  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description: "Santiago Hernández Zambrano establishes Tusdatos in Colombia with a vision to transform data validation."
    },
    {
      year: "2020",
      title: "Platform Launch",
      description: "Launch of Tusdatos Empresas platform, providing business intelligence for Colombian companies."
    },
    {
      year: "2021",
      title: "Regional Expansion",
      description: "Extended operations to Ecuador, broadening our validation services across Latin America."
    },
    {
      year: "2022",
      title: "Forbes Recognition",
      description: "Named among Forbes Top 100 Startups, recognizing our innovation in the fintech sector."
    },
    {
      year: "2023",
      title: "Award Winner",
      description: "Received LatamDigital Awards for excellence in technological innovation and compliance solutions."
    }
  ];

  const stats = [
    { number: "300+", label: "Data Sources", description: "National and international databases" },
    { number: "5+", label: "Years", description: "Of industry experience" },
    { number: "2", label: "Countries", description: "Colombia and Ecuador operations" },
    { number: "100+", label: "Recognition", description: "Forbes Top Startups ranking" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About Tusdatos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your strategic ally in validation and compliance, transforming the field of data validation 
            through innovation, agility, and advanced technology since 2018.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Build secure relationships using data and technology. We empower businesses to make 
              informed decisions through comprehensive validation services that reduce risk and 
              ensure compliance.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Create an essential ecosystem for knowledge and validation services. We strive to be 
              the leading platform that connects businesses with trusted, verified information 
              across Latin America.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and define our commitment to excellence in data validation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                    <value.icon className={`w-8 h-8 ${value.color}`} />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key milestones in our growth and evolution as a leading validation technology company.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-blue-200 h-full"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
                  <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex items-center space-x-4">
                          <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                            {milestone.year}
                          </div>
                        </div>
                        <CardTitle className="text-xl font-semibold text-gray-900">
                          {milestone.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-600 leading-relaxed">
                          {milestone.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recognition */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Award className="w-12 h-12 text-yellow-500" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Industry Recognition</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our commitment to innovation and excellence has been recognized by leading industry organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Forbes Top 100 Startups</h4>
                  <p className="text-sm text-gray-600">2022</p>
                </div>
              </div>
              <p className="text-gray-600">
                Recognized among the most promising startups in Latin America for our innovative 
                approach to data validation and compliance technology.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">LatamDigital Awards</h4>
                  <p className="text-sm text-gray-600">2023</p>
                </div>
              </div>
              <p className="text-gray-600">
                Winner for excellence in technological innovation, highlighting our contributions 
                to digital transformation in the financial services sector.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
