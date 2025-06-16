
import Header from '@/components/Header';
import About from '@/components/About';
import Team from '@/components/Team';
import Footer from '@/components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <About />
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
