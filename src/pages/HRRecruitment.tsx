
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HRRecruitmentHero from '@/components/use-cases/HRRecruitmentHero';
import HRRecruitmentFeatures from '@/components/use-cases/HRRecruitmentFeatures';
import HRRecruitmentBenefits from '@/components/use-cases/HRRecruitmentBenefits';
import HRRecruitmentCTA from '@/components/use-cases/HRRecruitmentCTA';

const HRRecruitmentPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <HRRecruitmentHero />
        <HRRecruitmentFeatures />
        <HRRecruitmentBenefits />
        <HRRecruitmentCTA />
      </main>
      <Footer />
    </div>
  );
};

export default HRRecruitmentPage;
