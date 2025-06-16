
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import KYCHero from '@/components/services/KYCHero';
import KYCSocialValidation from '@/components/services/KYCSocialValidation';
import KYCOverview from '@/components/services/KYCOverview';
import KYCFeatures from '@/components/services/KYCFeatures';
import KYCBenefits from '@/components/services/KYCBenefits';
import KYCFAQ from '@/components/services/KYCFAQ';
import KYCCTA from '@/components/services/KYCCTA';
import ContrastTestRunner from '@/components/ContrastTestRunner';

const KYCPage = () => {
  return (
    <div className="min-h-screen">
      <ContrastTestRunner />
      <Header />
      <main className="pt-16">
        <KYCHero />
        <KYCSocialValidation />
        <KYCOverview />
        <KYCFeatures />
        <KYCBenefits />
        <KYCFAQ />
        <KYCCTA />
      </main>
      <Footer />
    </div>
  );
};

export default KYCPage;
