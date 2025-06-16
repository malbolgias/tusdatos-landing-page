
import { Shield, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTA = () => {
  const benefits = [
    "Instant background check results from 300+ databases",
    "Full LAFT, KYC, AML compliance validation",
    "99.9% accuracy in background verification",
    "Expert customer support and implementation guidance"
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blue-500/20 rounded-full px-4 py-2 border border-blue-400/30 mb-6">
                <Shield className="w-4 h-4 text-blue-300" />
                <span className="text-blue-200 text-sm font-medium">Trusted by Leading Organizations</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Start Your Background Check Journey Today
              </h2>
              
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                Join hundreds of companies across Colombia and Ecuador who trust Tusdatos 
                for comprehensive background verification, compliance validation, and due diligence services. 
                Reduce hiring risks and ensure regulatory compliance with our advanced data validation platform.
              </p>
            </div>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-blue-100">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 font-semibold">
                Start Background Verification
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-blue-300 text-blue-100 hover:bg-blue-800 px-8 py-3 font-semibold">
                Schedule Consultation
              </Button>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Contact Our Experts</h4>
                  <p className="text-blue-100 text-sm">Speak with our background check specialists to understand your verification needs</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Custom Implementation</h4>
                  <p className="text-blue-100 text-sm">We'll configure the perfect background check solution for your organization</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Start Verification</h4>
                  <p className="text-blue-100 text-sm">Begin conducting reliable background checks with ongoing support</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-blue-100 text-sm">
                <strong>Need immediate help?</strong> Call us at{' '}
                <a href="tel:+57-300-123-4567" className="text-white hover:underline">
                  +57 300 123 4567
                </a>{' '}
                or email{' '}
                <a href="mailto:info@tusdatos.co" className="text-white hover:underline">
                  info@tusdatos.co
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
