
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CompanyOverview from '@/components/CompanyOverview';
import SocialValidation from '@/components/SocialValidation';
import BackgroundChecksShowcase from '@/components/BackgroundChecksShowcase';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <SocialValidation />
        <CompanyOverview />
        <BackgroundChecksShowcase />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
