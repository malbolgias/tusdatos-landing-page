
const GlossaryTerms = () => {
  const terms = [
    {
      term: "AML (Anti-Money Laundering)",
      definition: "A set of laws, regulations, and procedures intended to prevent criminals from disguising illegally obtained funds as legitimate income."
    },
    {
      term: "API (Application Programming Interface)",
      definition: "A set of rules and tools that allows different software applications to communicate with each other. In this context, it enables a client's system to automatically request checks from Tusdatos' platform."
    },
    {
      term: "BASC (Business Alliance for Secure Commerce)",
      definition: "An international business alliance that promotes secure international trade in cooperation with governments and international organizations."
    },
    {
      term: "Due Diligence",
      definition: "The process of investigation and verification performed by a business to assess the risks of a potential transaction or relationship with a counterparty."
    },
    {
      term: "Enhanced Due Diligence",
      definition: "A more profound level of scrutiny applied to high-risk clients or transactions to gain a deeper understanding of their background and associated risks."
    },
    {
      term: "Fintech",
      definition: "A term combining \"financial\" and \"technology,\" referring to any business that uses technology to enhance or automate financial services and processes."
    },
    {
      term: "Habeas Data",
      definition: "A legal right that allows individuals to know, update, and rectify the information that is held about them in databases or archives of public or private entities."
    },
    {
      term: "KYB (Know Your Business)",
      definition: "The process of verifying the identity and legitimacy of a business to assess its risk profile before entering into a professional relationship. It is the business-to-business equivalent of KYC."
    },
    {
      term: "KYC (Know Your Customer)",
      definition: "A mandatory process for financial institutions and other regulated companies to verify the identity of their clients to prevent fraud, money laundering, and other illicit activities."
    },
    {
      term: "LAFT (Lavado de Activos y Financiación del Terrorismo)",
      definition: "Spanish for \"Money Laundering and Terrorism Financing.\" It refers to the set of policies and procedures aimed at preventing these crimes."
    },
    {
      term: "OEA (Operador Económico Autorizado)",
      definition: "Spanish for \"Authorized Economic Operator,\" a status granted to businesses involved in international trade that comply with World Customs Organization or equivalent supply chain security standards."
    },
    {
      term: "OFAC (Office of Foreign Assets Control)",
      definition: "An agency of the U.S. Department of the Treasury that administers and enforces economic and trade sanctions against targeted foreign countries and regimes, terrorists, international narcotics traffickers, and others. The \"OFAC list\" is a key sanctions list."
    },
    {
      term: "PEP (Politically Exposed Person)",
      definition: "An individual who is or has been entrusted with a prominent public function. PEPs present a higher risk for potential involvement in bribery and corruption by virtue of their position and influence."
    },
    {
      term: "PTEE (Programa de Transparencia y Ética Empresarial)",
      definition: "Spanish for \"Business Transparency and Ethics Program.\" A mandatory program in Colombia for certain companies, designed to prevent corporate corruption and transnational bribery."
    },
    {
      term: "SAGRILAFT (Sistema de Autocontrol y Gestión del Riesgo Integral de LAFT)",
      definition: "A risk management system that obligated entities in Colombia must implement to control and manage the risks of Money Laundering and Terrorism Financing."
    },
    {
      term: "SARLAFT (Sistema de Administración del Riesgo de Lavado de Activos y Financiación del Terrorismo)",
      definition: "A risk management system specifically for entities supervised by the Colombian Financial Superintendency to prevent LAFT."
    },
    {
      term: "White Label",
      definition: "A product or service produced by one company that other companies rebrand to make it appear as if they had made it. In this context, a company could integrate Tusdatos' services into its own platform under its own brand."
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {terms.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.term}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.definition}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlossaryTerms;
