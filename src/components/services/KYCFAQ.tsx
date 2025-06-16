
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const KYCFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the difference between KYC and KYB?",
      answer: "KYC (Know Your Customer) focuses on verifying individual customer identities, including identity documents, address verification, and background screening. KYB (Know Your Business) involves verifying business entities, including corporate structure, beneficial ownership, business registration, and regulatory compliance. Both are essential for comprehensive risk management and regulatory compliance."
    },
    {
      question: "How long does the KYC/KYB verification process take?",
      answer: "Our automated KYC verification typically takes 2-5 minutes for standard cases. KYB verification usually takes 15-30 minutes depending on the complexity of the business structure. Enhanced due diligence cases may require additional time for thorough analysis, but we provide real-time updates throughout the process."
    },
    {
      question: "What documents are required for KYC verification?",
      answer: "For individuals, we typically require government-issued photo ID (passport, national ID card, or driver's license), proof of address (utility bill, bank statement), and sometimes additional documentation depending on risk level. For businesses, we need business registration documents, articles of incorporation, beneficial ownership information, and authorized representative identification."
    },
    {
      question: "Is your KYC/KYB process compliant with Colombian regulations?",
      answer: "Yes, our KYC/KYB processes are fully compliant with Colombian LAFT (Ley Anti-Lavado de Activos y Financiación del Terrorismo) regulations, as well as international AML and CTF standards. We maintain up-to-date compliance with all regulatory requirements and provide comprehensive documentation for audit purposes."
    },
    {
      question: "What databases do you check during verification?",
      answer: "We access over 300 verified data sources including government registries, criminal databases, sanctions lists (OFAC, UN, EU), PEPs databases, adverse media monitoring, financial intelligence databases, and specialized compliance databases across Colombia, Ecuador, and international jurisdictions for comprehensive risk assessment."
    },
    {
      question: "Can you handle high-volume KYC/KYB processing?",
      answer: "Yes, our platform is designed to handle high-volume processing with automated workflows and real-time verification capabilities. We can process thousands of verifications daily while maintaining accuracy and compliance standards. We offer bulk processing options and API integration for seamless system integration."
    },
    {
      question: "What happens if a customer fails KYC/KYB verification?",
      answer: "If verification fails, we provide detailed reporting on the specific issues identified, such as document discrepancies, sanctions matches, or adverse findings. We offer enhanced review processes and can provide recommendations for risk mitigation or additional documentation requirements depending on your risk appetite and regulatory obligations."
    },
    {
      question: "Do you provide ongoing monitoring after initial verification?",
      answer: "Yes, we offer continuous monitoring services that track changes in customer or business status, including new sanctions listings, adverse media coverage, regulatory actions, or changes in risk profile. This ensures ongoing compliance and helps identify emerging risks in your customer base throughout the business relationship lifecycle."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            KYC/KYB Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about our Know Your Customer and 
            Know Your Business verification services and compliance processes.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors rounded-lg"
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
            Need specific information about our KYC/KYB services?
          </p>
          <a 
            href="/contact" 
            className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
          >
            Contact our compliance experts →
          </a>
        </div>
      </div>
    </section>
  );
};

export default KYCFAQ;
