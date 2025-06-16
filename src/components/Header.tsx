import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X, ChevronDown } from 'lucide-react';
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
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">Tusdatos</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`font-medium transition-colors duration-200 ${
                    isServicesActive()
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}>
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[400px]">
                      {serviceLinks.map((service) => (
                        <NavigationMenuLink key={service.name} asChild>
                          <Link
                            to={service.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{service.name}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {service.name === 'All Services' && 'Overview of all our validation and compliance services'}
                              {service.name === 'Background Validation' && 'Comprehensive background checks and identity verification'}
                              {service.name === 'Compliance Services' && 'LAFT, KYC, AML and regulatory compliance solutions'}
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
                  <NavigationMenuTrigger className={`font-medium transition-colors duration-200 ${
                    isUseCasesActive()
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}>
                    Use Cases
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[400px]">
                      {useCaseLinks.map((useCase) => (
                        <NavigationMenuLink key={useCase.name} asChild>
                          <Link
                            to={useCase.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{useCase.name}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
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

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline">
              Log In
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 font-medium ${
                    isActive(item.href)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="px-3 py-2">
                <div className="font-medium text-gray-900 mb-2">Services</div>
                {serviceLinks.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="block px-3 py-1 text-sm text-gray-600 hover:text-blue-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              <div className="px-3 py-2">
                <div className="font-medium text-gray-900 mb-2">Use Cases</div>
                {useCaseLinks.map((useCase) => (
                  <Link
                    key={useCase.name}
                    to={useCase.href}
                    className="block px-3 py-1 text-sm text-gray-600 hover:text-blue-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {useCase.name}
                  </Link>
                ))}
              </div>
              
              <div className="px-3 py-2 space-y-2">
                <Button variant="outline" className="w-full">
                  Log In
                </Button>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
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
