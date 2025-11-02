import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-gray-200 font-sans">
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;
