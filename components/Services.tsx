import React from 'react';

interface Service {
  icon: string;
  title: string;
  description: string;
}

const servicesData: Service[] = [
  {
    icon: 'fas fa-cut',
    title: 'Precision Haircuts',
    description: 'Modern and classic cuts for men, women, and children, tailored to your unique style.',
  },
  {
    icon: 'fas fa-palette',
    title: 'Vibrant Coloring',
    description: 'From subtle highlights to bold new colors, our experts use premium products for stunning results.',
  },
  {
    icon: 'fas fa-spa',
    title: 'Hair Spa & Treatments',
    description: 'Rejuvenate your hair with our deep conditioning, keratin, and revitalizing spa treatments.',
  },
  {
    icon: 'fas fa-ring',
    title: 'Bridal & Special Occasions',
    description: 'Look your absolute best with our elegant styling for weddings and special events.',
  },
   {
    icon: 'fas fa-hand-sparkles',
    title: 'Manicure & Pedicure',
    description: 'Complete your look with our professional nail care services, leaving you feeling polished.',
  },
  {
    icon: 'fas fa-magic',
    title: 'Stylish Shaves & Beard Trim',
    description: 'Expert grooming services for men, including hot towel shaves and precise beard styling.',
  },
];

const ServiceCard: React.FC<Service> = ({ icon, title, description }) => (
  <div className="bg-gray-800 p-8 rounded-lg text-center transform transition-all duration-500 hover:scale-105 hover:bg-yellow-400 hover:text-gray-900 group">
    <div className="text-yellow-400 group-hover:text-gray-900 text-5xl mb-6 inline-block">
      <i className={icon}></i>
    </div>
    <h3 className="text-2xl font-bold mb-3">{title}</h3>
    <p className="text-gray-400 group-hover:text-gray-800">{description}</p>
  </div>
);


const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-900 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white">Our Signature Services</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">Crafted with passion, executed with precision. Find the perfect service for you.</p>
          <div className="mt-4 w-24 h-1 bg-yellow-400 mx-auto rounded"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;