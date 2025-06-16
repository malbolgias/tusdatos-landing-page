
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GlossaryHero from '@/components/GlossaryHero';
import GlossaryTerms from '@/components/GlossaryTerms';
import GlossaryCTA from '@/components/GlossaryCTA';

const Glossary = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <GlossaryHero />
        <GlossaryTerms />
        <GlossaryCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Glossary;
