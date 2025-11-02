import React from 'react';

interface Testimonial {
  quote: string;
  name: string;
  avatar: string;
}

const testimonialsData: Testimonial[] = [
  {
    quote: "Absolutely amazing! I walked out feeling like a new person. The staff is incredibly talented and friendly. Best haircut I've ever had!",
    name: 'Priya Sharma',
    avatar: 'https://picsum.photos/seed/avatar1/100/100',
  },
  {
    quote: "The hair color service is top-notch. They listened to exactly what I wanted and the result was beyond my expectations. Highly recommended!",
    name: 'Amit Patel',
    avatar: 'https://picsum.photos/seed/avatar2/100/100',
  },
  {
    quote: 'A truly relaxing experience. The hair spa treatment was divine. Glossy Magic is my go-to salon in Surat from now on.',
    name: 'Anjali Desai',
    avatar: 'https://picsum.photos/seed/avatar3/100/100',
  },
];

const TestimonialCard: React.FC<Testimonial> = ({ quote, name, avatar }) => (
  <div className="bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
    <img src={avatar} alt={name} className="w-20 h-20 rounded-full mb-4 border-4 border-yellow-400" />
    <p className="text-gray-300 italic mb-6">"{quote}"</p>
    <div className="w-12 h-0.5 bg-yellow-400 mb-4"></div>
    <h4 className="text-lg font-bold text-white">{name}</h4>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-900 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white">What Our Clients Say</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">Your satisfaction is our greatest achievement.</p>
          <div className="mt-4 w-24 h-1 bg-yellow-400 mx-auto rounded"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;