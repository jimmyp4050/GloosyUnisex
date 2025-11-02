import React from 'react';

const Contact: React.FC = () => {
  const location = "Shyam Enclave Jahangirabad, Surat, Gujarat";
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(location)}`;
  const embedMapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(location)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="contact" className="py-20 bg-gray-800 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white">Get in Touch</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">We're ready to make some magic happen. Visit us or give us a call!</p>
          <div className="mt-4 w-24 h-1 bg-yellow-400 mx-auto rounded"></div>
        </div>
        <div className="max-w-4xl mx-auto bg-gray-900 rounded-lg shadow-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="flex flex-col justify-center space-y-8">
              <div className="flex items-center">
                <div className="bg-yellow-400 text-gray-900 rounded-full p-4 mr-5">
                  <i className="fas fa-user text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Owner</h3>
                  <p className="text-gray-300 text-lg">Ranabhai</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-yellow-400 text-gray-900 rounded-full p-4 mr-5">
                  <i className="fas fa-phone text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Contact No</h3>
                  <a href="tel:7302931301" className="text-gray-300 text-lg hover:text-yellow-400 transition">7302931301</a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-yellow-400 text-gray-900 rounded-full p-4 mr-5">
                  <i className="fas fa-map-marker-alt text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Location</h3>
                  <p className="text-gray-300 text-lg">{location}</p>
                   <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-yellow-400 hover:text-yellow-500 transition-colors">
                    View on Google Maps <i className="fas fa-external-link-alt ml-1 text-xs"></i>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="rounded-lg overflow-hidden h-64 md:h-full">
              <iframe
                src={embedMapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map of Saloon Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;