
import { Search, Shield, Database, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const BackgroundValidationOverview = () => {
  const stats = [
    { number: "300+", label: "Criminal & Employment Databases" },
    { number: "5+", label: "Years Background Check Experience" },
    { number: "99.9%", label: "Validation Accuracy Rate" },
    { number: "24/7", label: "Background Screening Support" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
                <Search className="w-4 h-4 text-blue-600" />
                <span className="text-blue-800 text-sm font-medium">Leading Background Validation Platform</span>
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Background Validation & Employee Screening Services
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Tusdatos provides industry-leading background validation services including criminal background checks, 
                employment verification, education screening, and comprehensive pre-hire validation. Our advanced platform 
                accesses 300+ databases to ensure accurate and reliable background screening results.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                From criminal history validation to employment background checks, our comprehensive screening solutions 
                help organizations make informed hiring decisions while maintaining compliance with data protection regulations.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Learn more about key terms: <Link to="/glossary#due-diligence" className="text-blue-600 hover:text-blue-800 underline">Due Diligence</Link>, <Link to="/glossary#enhanced-due-diligence" className="text-blue-600 hover:text-blue-800 underline">Enhanced Due Diligence</Link>, and <Link to="/glossary#api" className="text-blue-600 hover:text-blue-800 underline">API Integration</Link>.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Background Validation
              </Button>
              <Button variant="outline" size="lg">
                View Screening Options
              </Button>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Background Validation Services Include:</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Search className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Criminal background checks and history validation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Database className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700">Employment verification and work history screening</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-purple-500" />
                  <span className="text-gray-700">Education background checks and credential verification</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">Reference validation and character assessment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackgroundValidationOverview;
