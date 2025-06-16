
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const DueDiligenceFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the difference between standard and enhanced due diligence?",
      answer: "Standard due diligence provides comprehensive counterparty evaluation using public and private databases to identify basic red flags related to fraud, corruption, or money laundering. Enhanced due diligence offers deeper, personalized analysis for high-risk scenarios, including detailed corporate structure analysis, comprehensive legal histories, advanced sanctions screening, and in-depth media exposure analysis with extensive supporting documentation."
    },
    {
      question: "How long does a due diligence assessment take?",
      answer: "Standard due diligence reports are typically delivered within 24-48 hours. Enhanced due diligence for complex cases may require 3-5 business days depending on the scope and depth of analysis required. We also offer expedited services for urgent business needs with same-day delivery options available."
    },
    {
      question: "What information sources do you use for due diligence?",
      answer: "We access over 300 verified data sources including corporate registries, legal databases, criminal records, sanctions lists (OFAC, UN, EU), media monitoring, PEPs databases, court records, bankruptcy filings, regulatory actions, and specialized compliance databases across Colombia, Ecuador, and international jurisdictions."
    },
    {
      question: "Is your due diligence process compliant with LAFT and international regulations?",
      answer: "Yes, our due diligence services are fully compliant with Colombian LAFT regulations, PTEE requirements, and international standards including AML, KYC guidelines, and sanctions screening protocols. All reports include comprehensive documentation to support regulatory compliance and audit requirements."
    },
    {
      question: "What types of red flags can due diligence identify?",
      answer: "Our analysis can identify various risk factors including criminal backgrounds, sanctions list appearances, PEPs connections, adverse media coverage, litigation history, bankruptcy records, regulatory violations, suspicious corporate structures, money laundering indicators, corruption allegations, and reputational risks that could impact business relationships."
    },
    {
      question: "Can you perform due diligence on international entities?",
      answer: "Yes, we conduct due diligence on entities across multiple jurisdictions. While our primary focus is Colombia and Ecuador, we have access to international databases, global sanctions lists, and can coordinate with international partners for comprehensive cross-border due diligence when required."
    },
    {
      question: "What level of detail is included in due diligence reports?",
      answer: "Our reports include executive summaries, detailed findings, risk assessments, supporting documentation, source verification, and clear recommendations. Enhanced due diligence reports provide additional depth with corporate structure diagrams, timeline analysis, comprehensive media coverage review, and detailed risk scoring with mitigation strategies."
    },
    {
      question: "How do you ensure the accuracy and reliability of due diligence information?",
      answer: "We employ multiple verification methods including cross-referencing across multiple databases, source authentication, data validation protocols, and expert review processes. Our team validates information through official registries and maintains a 99.9% accuracy rate through rigorous quality control procedures."
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
            Due Diligence Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about our due diligence services, 
            assessment processes, and risk evaluation methodologies.
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
            Need specific information about our due diligence services?
          </p>
          <a 
            href="/contact" 
            className="text-purple-600 hover:text-purple-700 font-semibold transition-colors"
          >
            Contact our due diligence experts →
          </a>
        </div>
      </div>
    </section>
  );
};

export default DueDiligenceFAQ;
