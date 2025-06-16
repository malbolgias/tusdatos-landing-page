
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GlobalWatchlistHero from '@/components/services/GlobalWatchlistHero';
import GlobalWatchlistSocialValidation from '@/components/services/GlobalWatchlistSocialValidation';
import GlobalWatchlistOverview from '@/components/services/GlobalWatchlistOverview';
import GlobalWatchlistFeatures from '@/components/services/GlobalWatchlistFeatures';
import GlobalWatchlistBenefits from '@/components/services/GlobalWatchlistBenefits';
import GlobalWatchlistFAQ from '@/components/services/GlobalWatchlistFAQ';
import GlobalWatchlistCTA from '@/components/services/GlobalWatchlistCTA';
import ContrastTestRunner from '@/components/ContrastTestRunner';

const GlobalWatchlistScreeningPage = () => {
  return (
    <div className="min-h-screen">
      <ContrastTestRunner />
      <Header />
      <main className="pt-16">
        <GlobalWatchlistHero />
        <GlobalWatchlistSocialValidation />
        <GlobalWatchlistOverview />
        <GlobalWatchlistFeatures />
        <GlobalWatchlistBenefits />
        <GlobalWatchlistFAQ />
        <GlobalWatchlistCTA />
      </main>
      <Footer />
    </div>
  );
};

export default GlobalWatchlistScreeningPage;
