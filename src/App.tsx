import Header from './components/Header';
import { HeroOdyssey } from './components/ui/hero-odyssey';
import PillarCards from './components/PillarCards';
import ProductsSection from './components/ProductsSection';
import VideoShowcase from './components/VideoShowcase';
import GlobalPresence from './components/GlobalPresence';
import CorporateOverview from './components/CorporateOverview';
import Industries from './components/Industries';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#041524]">
      <Header />
      <HeroOdyssey />
      <PillarCards />
      <ProductsSection />
      <VideoShowcase />
      <GlobalPresence />
      <CorporateOverview />
      <Industries />
      <CTABanner />
      <Footer />
    </div>
  );
}

export default App;
