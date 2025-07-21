import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BibliotecaSection from './components/BibliotecaSection';
import PortfolioSection from './components/PortfolioSection';
import EventosSection from './components/EventosSection';
import FAQSection from './components/FAQSection';
import ParceriasSection from './components/ParceriasSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import TermosDeUso from './components/TermosDeUso';
import PoliticaPrivacidade from './components/PoliticaPrivacidade';
import Acessibilidade from './components/Acessibilidade';

const HomePage = () => (
  <>
    <Header />
    <HeroSection />
    <BibliotecaSection />
    <PortfolioSection />
    <EventosSection />
    <FAQSection />
    <ParceriasSection />
    <Footer />
    <ScrollToTop />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/termos-de-uso" element={<TermosDeUso />} />
          <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
          <Route path="/acessibilidade" element={<Acessibilidade />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;