
import { Shield, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold">Tusdatos</span>
            </div>
            <p className="text-gray-400">
              Your strategic ally in validation and compliance since 2018.
            </p>
            <div className="flex space-x-4">
              <div className="text-sm text-gray-400">
                🏆 Forbes Top 100 Startups<br/>
                🏆 LatamDigital Awards Winner
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Background Validation</li>
              <li>Compliance Checks</li>
              <li>Due Diligence</li>
              <li>LAFT Implementation</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>About Us</li>
              <li>Recognition</li>
              <li>Coverage</li>
              <li>Use Cases</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>comercial@tusdatos.co</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+57 305 436 2276</span>
              </div>
              <div className="text-sm">
                Bogotá, Colombia<br/>
                Mon-Fri: 8am-6pm
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2024 Tusdatos. All rights reserved.
          </div>
          <div className="text-gray-400 text-sm mt-4 md:mt-0">
            Data validation and compliance services
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
