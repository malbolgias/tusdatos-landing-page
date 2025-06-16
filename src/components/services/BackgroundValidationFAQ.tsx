
import { useState } from 'react';
import { Search, Shield } from 'lucide-react';

const BackgroundValidationFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of background checks are included in your validation services?",
      answer: "Our comprehensive background validation includes criminal history checks, employment verification, education screening, reference validation, credit checks (where permitted), driving record verification, and professional license validation. We access 300+ databases for complete screening coverage."
    },
    {
      question: "How accurate are your background validation results?",
      answer: "Our background validation platform maintains 99.9% accuracy through access to verified databases and cross-referencing multiple sources. All criminal background checks and employment verification results undergo quality assurance processes to ensure reliability."
    },
    {
      question: "How quickly can background validation be completed?",
      answer: "Most background checks are completed within minutes for basic screenings. Comprehensive employment verification and education background checks may require 24-48 hours. Complex criminal history validation can take up to 5 business days depending on jurisdiction requirements."
    },
    {
      question: "What criminal background check databases do you access?",
      answer: "We access national criminal databases, county court records, federal criminal records, international criminal databases, sex offender registries, terrorist watch lists, and local law enforcement databases across Colombia, Ecuador, and international jurisdictions."
    },
    {
      question: "Can you verify employment history from previous employers?",
      answer: "Yes, our employment verification services include contacting previous employers to validate job titles, employment dates, salary information (where permitted), reason for leaving, and eligibility for rehire. We maintain professional relationships with HR departments for efficient verification."
    },
    {
      question: "Do you provide education background checks and credential verification?",
      answer: "Our education validation services verify degrees, certifications, professional licenses, academic transcripts, graduation dates, and institutional accreditation. We work directly with educational institutions and licensing boards for accurate credential verification."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
            <Search className="w-4 h-4 text-blue-600" />
            <span className="text-blue-800 text-sm font-medium">Background Validation FAQ</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions About Background Validation
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about our criminal background checks, 
            employment verification, and comprehensive screening services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <Shield className={`w-5 h-5 text-gray-500 flex-shrink-0 transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BackgroundValidationFAQ;
