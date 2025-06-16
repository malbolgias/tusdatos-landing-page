
import { Shield, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:comercial@tusdatos.co';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+573054362276';
  };

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
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Background Validation
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Compliance Checks
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Due Diligence
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  LAFT Implementation
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Recognition
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Coverage
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Use Cases
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <button 
                  onClick={handleEmailClick}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  comercial@tusdatos.co
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <button 
                  onClick={handlePhoneClick}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  +57 305 436 2276
                </button>
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
