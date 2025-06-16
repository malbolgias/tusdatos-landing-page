
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ComplianceHero from '@/components/services/ComplianceHero';
import ComplianceSocialValidation from '@/components/services/ComplianceSocialValidation';
import ComplianceFeatures from '@/components/services/ComplianceFeatures';
import ComplianceFAQ from '@/components/services/ComplianceFAQ';
import ComplianceCTA from '@/components/services/ComplianceCTA';
import ComplianceOverview from '@/components/services/ComplianceOverview';
import ComplianceBenefits from '@/components/services/ComplianceBenefits';
import ContrastTestRunner from '@/components/ContrastTestRunner';

const ComplianceServicesPage = () => {
  return (
    <div className="min-h-screen">
      <ContrastTestRunner />
      <Header />
      <main className="pt-16">
        <ComplianceHero />
        <ComplianceSocialValidation />
        <ComplianceOverview />
        <ComplianceFeatures />
        <ComplianceBenefits />
        <ComplianceFAQ />
        <ComplianceCTA />
      </main>
      <Footer />
    </div>
  );
};

export default ComplianceServicesPage;
