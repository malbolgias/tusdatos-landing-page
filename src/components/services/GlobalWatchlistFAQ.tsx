
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const GlobalWatchlistFAQ = () => {
  const faqs = [
    {
      question: "What databases and lists are included in your global watchlist screening?",
      answer: "Our comprehensive screening covers 300+ sources including OFAC SDN lists, UN Security Council sanctions, EU consolidated lists, UK HMT sanctions, World-Check, Dow Jones databases, PEP lists, and national judicial records from Colombia and Ecuador. We continuously update all sources to ensure real-time accuracy."
    },
    {
      question: "How quickly can you complete a global watchlist screening?",
      answer: "Standard screenings are completed instantly with real-time results. Our automated system provides immediate alerts for matches, while complex cases may require additional analysis within 2-4 hours. Continuous monitoring ensures ongoing protection with instant notifications of new matches."
    },
    {
      question: "Do you provide screening for both individuals and companies?",
      answer: "Yes, we provide comprehensive screening for individuals, companies, and their beneficial ownership structures. This includes corporate entity verification, director screening, ultimate beneficial owner identification, and related party analysis across all global databases."
    },
    {
      question: "What compliance standards does your screening service meet?",
      answer: "Our service fully complies with AML, LAFT, FATF recommendations, OFAC requirements, EU sanctions regulations, and international compliance standards. We provide audit-ready documentation and detailed reporting that meets regulatory requirements across multiple jurisdictions."
    },
    {
      question: "How do you handle false positives and match accuracy?",
      answer: "We use advanced matching algorithms and AI-powered analysis to minimize false positives while ensuring no true matches are missed. Our expert team reviews complex cases, and we provide detailed match reports with confidence scores and supporting evidence for informed decision-making."
    },
    {
      question: "Can I integrate your screening service with my existing systems?",
      answer: "Yes, we offer flexible integration options including API access, batch processing, and custom integrations with existing compliance systems. Our technical team provides full support for seamless implementation and ongoing maintenance."
    },
    {
      question: "What ongoing monitoring do you provide after initial screening?",
      answer: "We provide continuous 24/7 monitoring with automatic re-screening against updated lists. You'll receive instant alerts when new matches are found, list updates occur, or risk profiles change. This ensures ongoing compliance without manual intervention."
    },
    {
      question: "How do you ensure data security and confidentiality?",
      answer: "We maintain the highest security standards with encrypted data transmission, secure storage, access controls, and regular security audits. All data handling complies with international privacy regulations and confidentiality requirements for sensitive compliance information."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about our Global Watchlist Screening service
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border shadow-sm">
              <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:text-red-600">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions about our screening services?</p>
          <a href="/contact" className="text-red-600 hover:text-red-700 font-semibold">
            Contact our compliance experts →
          </a>
        </div>
      </div>
    </section>
  );
};

export default GlobalWatchlistFAQ;
