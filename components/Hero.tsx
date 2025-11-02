import React from 'react';

const Hero: React.FC = () => {
  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center text-white">
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url('https://picsum.photos/1920/1080?grayscale&blur=2')` }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
      <div className="relative z-10 p-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-tight leading-tight">
          Experience the <span className="text-yellow-400">Magic</span> of Style
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 font-light text-gray-300">
          At Glossy Magic Unisex Hair Saloon, we believe your hair is your best accessory. Let our expert stylists craft the perfect look for you.
        </p>
        <a 
          href="#services" 
          onClick={(e) => handleScrollClick(e, '#services')}
          className="bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 inline-block"
        >
          Our Services
        </a>
      </div>
    </section>
  );
};

export default Hero;