
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of background checks does Tusdatos provide?",
      answer: "Tusdatos offers comprehensive background verification services including employee pre-screening, criminal background checks, employment history validation, education verification, compliance screening (LAFT, KYC, AML), sanctions list checking (OFAC, UN, EU), corporate due diligence, and deceased person validation across 300+ national and international databases."
    },
    {
      question: "How accurate are Tusdatos background check results?",
      answer: "Our background verification platform maintains 99.9% accuracy through access to 300+ verified data sources including official government registries, criminal databases, sanctions lists, and compliance repositories. All background check results are validated through multiple cross-referencing systems to ensure reliability and compliance with regulatory standards."
    },
    {
      question: "What compliance regulations does Tusdatos support for background checks?",
      answer: "Tusdatos provides full compliance support for LAFT (Anti-Money Laundering and Terrorism Financing), KYC (Know Your Customer), AML (Anti-Money Laundering), PTEE implementation, OFAC sanctions screening, UN restrictive lists, EU sanctions, PEPs (Politically Exposed Persons) validation, and Colombian/Ecuadorian national compliance requirements for background verification."
    },
    {
      question: "How quickly can I receive background check results?",
      answer: "Most background checks are completed within minutes through our real-time data validation system. Complex due diligence reports and enhanced background screenings may require 24-48 hours. Our automated platform ensures rapid processing while maintaining comprehensive verification standards for all background check services."
    },
    {
      question: "Which countries and databases does Tusdatos access for background checks?",
      answer: "Tusdatos operates primarily in Colombia and Ecuador with access to 300+ national and international databases. Our background check coverage includes Latin American criminal records, global sanctions lists, international compliance databases, corporate registries, educational institutions, and employment verification sources across multiple jurisdictions."
    },
    {
      question: "Can Tusdatos help implement LAFT and compliance systems for our organization?",
      answer: "Yes, we provide comprehensive LAFT and PTEE system implementation consulting services. Our compliance experts help organizations establish background check protocols, due diligence procedures, risk management frameworks, and ongoing compliance monitoring systems that meet Colombian and international regulatory requirements for financial institutions and regulated industries."
    },
    {
      question: "What is the cost structure for background check services?",
      answer: "Tusdatos offers flexible pricing models for background verification services including per-check pricing, monthly subscriptions for regular screening needs, and enterprise packages for large-scale background check operations. Contact our team for customized pricing based on your specific verification requirements and volume needs."
    },
    {
      question: "How secure is the background check data and personal information?",
      answer: "Data security is our top priority. All background check information is processed through encrypted systems, stored in secure databases with restricted access, and handled in full compliance with data protection regulations. We maintain strict confidentiality protocols and provide secure data transmission for all verification services and background check results."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions About Background Checks
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about our background verification services, 
            compliance solutions, and data validation processes.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
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

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions about our background check services?
          </p>
          <a 
            href="/contact" 
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            Contact our background verification experts →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
