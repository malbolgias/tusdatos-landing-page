
import { Users, Globe, Lightbulb, Shield, Award, Briefcase } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Team = () => {
  const teamValues = [
    {
      icon: Users,
      title: "Multidisciplinary Excellence",
      description: "Technology, engineering, business, economics, psychology, and design expertise",
      color: "text-blue-500"
    },
    {
      icon: Globe,
      title: "Global Collaboration",
      description: "Distributed team across Colombia and international markets",
      color: "text-green-500"
    },
    {
      icon: Lightbulb,
      title: "Innovation & Creativity",
      description: "Creative problem-solving with precision and technical excellence",
      color: "text-purple-500"
    },
    {
      icon: Shield,
      title: "Security-First Mindset",
      description: "Deep expertise in cybersecurity and risk mitigation",
      color: "text-orange-500"
    }
  ];

  const disciplines = [
    "Industrial Design",
    "User Experience",
    "Robust Engineering",
    "Strategic Business Acumen",
    "Information Security",
    "Data Analytics"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At the heart of Tusdatos is a diverse and dynamic team united by a passion for building 
            trust through technology. Our strength lies in our multidisciplinary approach, with 
            professionals from backgrounds in technology, engineering, business, economics, psychology, 
            and design.
          </p>
        </div>

        {/* Team Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {teamValues.map((value, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                  <value.icon className={`w-8 h-8 ${value.color}`} />
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  {value.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed text-sm">
                  {value.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Founder Profile */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Leadership</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Leading this vision is our founder, whose expertise and insight drive our mission forward.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-none shadow-lg">
              <CardHeader className="text-center pb-6">
                <div className="flex justify-center mb-6">
                  <Avatar className="w-32 h-32 border-4 border-white shadow-lg">
                    <AvatarImage src="/api/placeholder/200/200" alt="Santiago Hernández Zambrano" />
                    <AvatarFallback className="text-2xl font-bold bg-blue-600 text-white">
                      SH
                    </AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  Santiago Hernández Zambrano
                </CardTitle>
                <CardDescription className="text-lg text-blue-600 font-semibold">
                  Founder & CEO
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Shield className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Background</h4>
                        <p className="text-sm text-gray-600">Systems Engineer</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Award className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Education</h4>
                        <p className="text-sm text-gray-600">Master's in Information Security</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <Briefcase className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Founded</h4>
                        <p className="text-sm text-gray-600">Tusdatos in 2018</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      Santiago dedicated his career to solving complex cybersecurity challenges for 
                      public and private companies across the financial and legal sectors. During this 
                      time, he recognized a critical vulnerability shared by many businesses: a lack of 
                      complete knowledge about the partners, clients, and employees they were engaging with.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      This insight, combined with his in-depth research into publicly available data 
                      sources in Colombia, led to the creation of Tusdatos with the goal of building 
                      an essential ecosystem for validation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team Disciplines */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Expertise</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              This unique fusion of diverse disciplines allows us to build intuitive, powerful, 
              and reliable validation services for our clients.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {disciplines.map((discipline, index) => (
              <div key={index} className="bg-white rounded-xl p-4 shadow-sm text-center hover:shadow-md transition-shadow duration-300">
                <div className="text-gray-900 font-semibold text-sm md:text-base">
                  {discipline}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 italic">
              "Guided by Santiago's leadership, this multifaceted team collaborates seamlessly 
              across distances and disciplines to empower organizations with secure, data-driven decisions."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
