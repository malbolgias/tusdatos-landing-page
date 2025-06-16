import { Shield, Mail, Phone } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleEmailClick = () => {
    window.location.href = 'mailto:comercial@tusdatos.co';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+573054362276';
  };

  const handleLinkClick = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="space-y-4">
            <button onClick={() => handleLinkClick('/')} className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold">Tusdatos</span>
            </button>
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
                  onClick={() => handleLinkClick('/services')}
                  className="hover:text-white transition-colors text-left"
                >
                  All Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('/services/background-validation')}
                  className="hover:text-white transition-colors text-left"
                >
                  Background Validation
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('/services/compliance')}
                  className="hover:text-white transition-colors text-left"
                >
                  Compliance Services
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Use Cases</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => handleLinkClick('/use-cases')}
                  className="hover:text-white transition-colors text-left"
                >
                  All Use Cases
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('/use-cases/hr-recruitment')}
                  className="hover:text-white transition-colors text-left"
                >
                  HR & Recruitment
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('/use-cases/financial-services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Financial Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('/use-cases/tenant-screening')}
                  className="hover:text-white transition-colors text-left"
                >
                  Tenant Screening
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => handleLinkClick('/about')}
                  className="hover:text-white transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('/about')}
                  className="hover:text-white transition-colors text-left"
                >
                  Recognition
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('/features')}
                  className="hover:text-white transition-colors text-left"
                >
                  Coverage
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('/features')}
                  className="hover:text-white transition-colors text-left"
                >
                  Features
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
