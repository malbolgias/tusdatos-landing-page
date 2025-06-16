
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TenantScreeningHero from '@/components/use-cases/TenantScreeningHero';
import TenantScreeningFeatures from '@/components/use-cases/TenantScreeningFeatures';
import TenantScreeningBenefits from '@/components/use-cases/TenantScreeningBenefits';
import TenantScreeningCTA from '@/components/use-cases/TenantScreeningCTA';

const TenantScreeningPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <TenantScreeningHero />
        <TenantScreeningFeatures />
        <TenantScreeningBenefits />
        <TenantScreeningCTA />
      </main>
      <Footer />
    </div>
  );
};

export default TenantScreeningPage;
