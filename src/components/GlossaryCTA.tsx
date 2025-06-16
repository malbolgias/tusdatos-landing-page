
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const GlossaryCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Now that you understand the terminology, discover how Tusdatos can help 
          you implement these compliance and validation solutions in your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild
            variant="blue-on-dark"
            size="lg"
            className="font-semibold"
          >
            <Link to="/services">
              Explore Our Services
            </Link>
          </Button>
          <Button 
            asChild
            variant="blue-outline-on-dark"
            size="lg"
            className="font-semibold"
          >
            <Link to="/contact">
              Contact Us
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GlossaryCTA;
