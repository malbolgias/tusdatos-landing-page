
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ComplianceFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is SARLAFT compliance and why is it important?",
      answer: "SARLAFT (Sistema de Administración del Riesgo de Lavado de Activos y Financiación del Terrorismo) is Colombia's risk management system for money laundering and terrorism financing. It requires businesses to implement compliance systems to prevent money laundering and terrorist financing. Our platform helps you meet all SARLAFT requirements with automated monitoring and reporting."
    },
    {
      question: "How does your KYC validation process work?",
      answer: "Our KYC (Know Your Customer) process includes identity verification, document validation, background checks, and risk assessment. We validate information against multiple databases including government records, sanctions lists, and PEP databases to ensure comprehensive customer due diligence."
    },
    {
      question: "What sanctions lists do you screen against?",
      answer: "We screen against 300+ global sanctions lists including OFAC (US), UN Security Council, EU Consolidated List, UK HM Treasury, and local Colombian regulatory lists. Our database is updated in real-time to ensure you're always screening against the most current information."
    },
    {
      question: "Can you help with PTEE compliance implementation?",
      answer: "Yes, we provide complete PTEE (Plan de transparencia y ética empresarial) compliance consulting and implementation services. This includes policy development, system implementation, ongoing monitoring, and staff training to ensure full regulatory compliance."
    },
    {
      question: "How often is your compliance database updated?",
      answer: "Our compliance database is updated in real-time with new information from sanctions lists, PEP databases, and regulatory sources. We also provide daily, weekly, and monthly batch updates depending on your compliance requirements and risk tolerance."
    },
    {
      question: "Do you provide audit trail and reporting capabilities?",
      answer: "Yes, our platform maintains comprehensive audit trails of all compliance checks, decisions, and actions taken. We provide automated regulatory reporting, customizable compliance reports, and detailed audit logs that meet regulatory requirements for record-keeping."
    },
    {
      question: "Can your platform integrate with existing compliance systems?",
      answer: "Absolutely. Our compliance platform offers APIs and integration capabilities to work with existing compliance management systems, core banking platforms, and risk management tools. We provide technical support for seamless integration."
    },
    {
      question: "What kind of support do you provide for compliance implementation?",
      answer: "We provide comprehensive support including compliance consulting, system implementation, staff training, ongoing technical support, and regulatory updates. Our compliance experts help ensure your implementation meets all regulatory requirements."
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
            Compliance FAQ
          </h2>
          <p className="text-lg text-gray-600">
            Common questions about our SARLAFT, KYC, AML, and compliance validation services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplianceFAQ;
