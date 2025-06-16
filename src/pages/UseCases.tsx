
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import UseCasesHero from '@/components/use-cases/UseCasesHero';
import UseCasesOverview from '@/components/use-cases/UseCasesOverview';
import UseCasesList from '@/components/use-cases/UseCasesList';

const UseCasesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <UseCasesHero />
        <UseCasesOverview />
        <UseCasesList />
      </main>
      <Footer />
    </div>
  );
};

export default UseCasesPage;
