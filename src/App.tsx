import Header from './components/Header';
import Hero from './components/Hero';
import PricingCards from './components/PricingCards';
import MobilePlansSection from './components/MobilePlansSection';
import WhatsAppCTA from './components/WhatsAppCTA';
import Footer from './components/Footer';

const App = () => {
  const currentUrl = "http://192.168.0.18:5173/";

  return (
    <div className="font-sans text-slate-900 overflow-x-hidden">
      <Header />
      <Hero />
      <PricingCards />
      <MobilePlansSection />
      <WhatsAppCTA />
      <Footer currentUrl={currentUrl} />
    </div>
  );
};

export default App;
