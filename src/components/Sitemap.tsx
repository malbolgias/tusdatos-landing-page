
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Sitemap = () => {
  const siteStructure = {
    'Main Pages': [
      { name: 'Home', href: '/' },
      { name: 'About Us', href: '/about' },
      { name: 'Features', href: '/features' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Contact', href: '/contact' },
      { name: 'Glossary', href: '/glossary' },
    ],
    'Services': [
      { name: 'All Services', href: '/services' },
      { name: 'Background Validation', href: '/services/background-validation' },
      { name: 'Compliance Services', href: '/services/compliance' },
      { name: 'Due Diligence', href: '/services/due-diligence' },
      { name: 'KYC Services', href: '/services/kyc' },
      { name: 'Global Watchlist Screening', href: '/services/global-watchlist-screening' },
    ],
    'Use Cases': [
      { name: 'All Use Cases', href: '/use-cases' },
      { name: 'HR & Recruitment', href: '/use-cases/hr-recruitment' },
      { name: 'Financial Services', href: '/use-cases/financial-services' },
      { name: 'Tenant Screening', href: '/use-cases/tenant-screening' },
    ]
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Sitemap
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Navigate through all pages and services available on Tusdatos. 
                Find everything you need for data validation and compliance.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12">
              {Object.entries(siteStructure).map(([category, links]) => (
                <div key={category} className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-600 pb-2">
                    {category}
                  </h2>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.href}>
                        <Link
                          to={link.href}
                          className="text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center group"
                        >
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Need Help Finding Something?
              </h3>
              <p className="text-gray-600 mb-6">
                Can't find what you're looking for? Our team is here to help you navigate 
                our services and find the perfect solution for your validation and compliance needs.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Sitemap;
