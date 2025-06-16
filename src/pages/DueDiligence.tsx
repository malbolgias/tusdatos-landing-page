
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DueDiligenceHero from '@/components/services/DueDiligenceHero';
import DueDiligenceSocialValidation from '@/components/services/DueDiligenceSocialValidation';
import DueDiligenceOverview from '@/components/services/DueDiligenceOverview';
import DueDiligenceFeatures from '@/components/services/DueDiligenceFeatures';
import DueDiligenceBenefits from '@/components/services/DueDiligenceBenefits';
import DueDiligenceFAQ from '@/components/services/DueDiligenceFAQ';
import DueDiligenceCTA from '@/components/services/DueDiligenceCTA';
import ContrastTestRunner from '@/components/ContrastTestRunner';

const DueDiligencePage = () => {
  return (
    <div className="min-h-screen">
      <ContrastTestRunner />
      <Header />
      <main className="pt-16">
        <DueDiligenceHero />
        <DueDiligenceSocialValidation />
        <DueDiligenceOverview />
        <DueDiligenceFeatures />
        <DueDiligenceBenefits />
        <DueDiligenceFAQ />
        <DueDiligenceCTA />
      </main>
      <Footer />
    </div>
  );
};

export default DueDiligencePage;
