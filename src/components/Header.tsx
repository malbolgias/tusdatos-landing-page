
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ];

  const serviceLinks = [
    { name: 'All Services', href: '/services' },
    { name: 'Background Validation', href: '/services/background-validation' },
    { name: 'Compliance Services', href: '/services/compliance' },
  ];

  const useCaseLinks = [
    { name: 'All Use Cases', href: '/use-cases' },
    { name: 'HR & Recruitment', href: '/use-cases/hr-recruitment' },
    { name: 'Financial Services', href: '/use-cases/financial-services' },
    { name: 'Tenant Screening', href: '/use-cases/tenant-screening' },
  ];

  const isActive = (href: string) => location.pathname === href;
  const isServicesActive = () => location.pathname.startsWith('/services');
  const isUseCasesActive = () => location.pathname.startsWith('/use-cases');

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 group-hover:scale-105 transition-transform duration-200">
              <img 
                src="/lovable-uploads/8fb82d0c-d108-4c4e-ba95-5a9abbe63e9d.png" 
                alt="Tusdatos Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Tusdatos
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 relative ${
                  isActive(item.href)
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full" />
                )}
              </Link>
            ))}
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                    isServicesActive()
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}>
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-2 p-6 w-[420px] bg-white rounded-xl shadow-lg border border-gray-100">
                      {serviceLinks.map((service) => (
                        <NavigationMenuLink key={service.name} asChild>
                          <Link
                            to={service.href}
                            className="block select-none space-y-2 rounded-lg p-4 leading-none no-underline outline-none transition-all duration-200 hover:bg-gray-50 hover:shadow-sm group"
                          >
                            <div className="text-sm font-semibold leading-none text-gray-900 group-hover:text-blue-600 transition-colors">
                              {service.name}
                            </div>
                            <p className="line-clamp-2 text-sm leading-relaxed text-gray-500">
                              {service.name === 'All Services' && 'Overview of all our validation and compliance services'}
                              {service.name === 'Background Validation' && 'Comprehensive background checks and identity verification'}
                              {service.name === 'Compliance Services' && 'SARLAFT, KYC, AML and regulatory compliance solutions'}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                    isUseCasesActive()
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}>
                    Use Cases
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-2 p-6 w-[420px] bg-white rounded-xl shadow-lg border border-gray-100">
                      {useCaseLinks.map((useCase) => (
                        <NavigationMenuLink key={useCase.name} asChild>
                          <Link
                            to={useCase.href}
                            className="block select-none space-y-2 rounded-lg p-4 leading-none no-underline outline-none transition-all duration-200 hover:bg-gray-50 hover:shadow-sm group"
                          >
                            <div className="text-sm font-semibold leading-none text-gray-900 group-hover:text-blue-600 transition-colors">
                              {useCase.name}
                            </div>
                            <p className="line-clamp-2 text-sm leading-relaxed text-gray-500">
                              {useCase.name === 'All Use Cases' && 'Explore validation solutions across different industries'}
                              {useCase.name === 'HR & Recruitment' && 'Background screening and verification for hiring decisions'}
                              {useCase.name === 'Financial Services' && 'KYC, AML, and compliance solutions for financial institutions'}
                              {useCase.name === 'Tenant Screening' && 'Comprehensive tenant verification for property management'}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* CTA Buttons with improved contrast */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button 
              variant="ghost" 
              className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 font-medium px-6 transition-all duration-200"
            >
              Log In
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 shadow-sm hover:shadow-md transition-all duration-200 border-0">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-4 pb-6 space-y-2 bg-white border-t border-gray-100 rounded-b-xl shadow-lg">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-3 rounded-lg font-medium text-sm transition-all duration-200 ${
                    isActive(item.href)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-2 border-t border-gray-100 mt-4">
                <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Services
                </div>
                {serviceLinks.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              <div className="pt-2 border-t border-gray-100 mt-4">
                <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Use Cases
                </div>
                {useCaseLinks.map((useCase) => (
                  <Link
                    key={useCase.name}
                    to={useCase.href}
                    className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {useCase.name}
                  </Link>
                ))}
              </div>
              
              <div className="pt-4 border-t border-gray-100 mt-4 space-y-3">
                <Button variant="ghost" className="w-full justify-center text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200">
                  Log In
                </Button>
                <Button className="w-full justify-center bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 border-0">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
