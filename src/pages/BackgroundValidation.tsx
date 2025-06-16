
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackgroundValidationHero from '@/components/services/BackgroundValidationHero';
import BackgroundValidationSocialValidation from '@/components/services/BackgroundValidationSocialValidation';
import BackgroundValidationFeatures from '@/components/services/BackgroundValidationFeatures';
import BackgroundValidationFAQ from '@/components/services/BackgroundValidationFAQ';
import BackgroundValidationCTA from '@/components/services/BackgroundValidationCTA';
import BackgroundValidationOverview from '@/components/services/BackgroundValidationOverview';
import BackgroundValidationBenefits from '@/components/services/BackgroundValidationBenefits';

const BackgroundValidationPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <BackgroundValidationHero />
        <BackgroundValidationSocialValidation />
        <BackgroundValidationOverview />
        <BackgroundValidationFeatures />
        <BackgroundValidationBenefits />
        <BackgroundValidationFAQ />
        <BackgroundValidationCTA />
      </main>
      <Footer />
    </div>
  );
};

export default BackgroundValidationPage;
