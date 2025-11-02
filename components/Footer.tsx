import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const whatsAppNumber = "7302931301";
  const whatsappUrl = `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent("Hello! I'd like to book an appointment at Glossy Magic Saloon.")}`;


  return (
    <footer className="bg-black text-gray-400 py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-4">
          <a href="#" onClick={(e) => e.preventDefault()} title="Facebook coming soon" className="text-gray-400 hover:text-yellow-400 mx-3 text-2xl transition-colors duration-300 opacity-50 cursor-not-allowed"><i className="fab fa-facebook-f"></i></a>
          <a href="#" onClick={(e) => e.preventDefault()} title="Instagram coming soon" className="text-gray-400 hover:text-yellow-400 mx-3 text-2xl transition-colors duration-300 opacity-50 cursor-not-allowed"><i className="fab fa-instagram"></i></a>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" title="Chat on WhatsApp" className="text-gray-400 hover:text-yellow-400 mx-3 text-2xl transition-colors duration-300"><i className="fab fa-whatsapp"></i></a>
        </div>
        <p className="font-medium">Glossy Magic Unisex Hair Saloon</p>
        <p className="text-sm mt-2">&copy; {currentYear} All Rights Reserved. </p>
      </div>
    </footer>
  );
};

export default Footer;