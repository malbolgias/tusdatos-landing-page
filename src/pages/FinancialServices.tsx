
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FinancialServicesHero from '@/components/use-cases/FinancialServicesHero';
import FinancialServicesFeatures from '@/components/use-cases/FinancialServicesFeatures';
import FinancialServicesBenefits from '@/components/use-cases/FinancialServicesBenefits';
import FinancialServicesCTA from '@/components/use-cases/FinancialServicesCTA';
import ContrastTestRunner from '@/components/ContrastTestRunner';

const FinancialServicesPage = () => {
  return (
    <div className="min-h-screen">
      <ContrastTestRunner />
      <Header />
      <main className="pt-16">
        <FinancialServicesHero />
        <FinancialServicesFeatures />
        <FinancialServicesBenefits />
        <FinancialServicesCTA />
      </main>
      <Footer />
    </div>
  );
};

export default FinancialServicesPage;
