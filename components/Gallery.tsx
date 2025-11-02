import React, { useState, useEffect, useRef } from 'react';

const galleryImages = [
  'https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  'https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  'https://images.pexels.com/photos/3998414/pexels-photo-3998414.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  'https://images.pexels.com/photos/3764567/pexels-photo-3764567.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  'https://images.pexels.com/photos/3998421/pexels-photo-3998421.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  'https://images.pexels.com/photos/3065090/pexels-photo-3065090.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
];

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<number | null>(null);
  const AUTOPLAY_DELAY = 4000; // 4 seconds

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === galleryImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = window.setTimeout(goToNext, AUTOPLAY_DELAY);
    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? galleryImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section id="gallery" className="py-20 bg-gray-800 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white">Our Masterpieces</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">A glimpse into the transformations we create every day.</p>
          <div className="mt-4 w-24 h-1 bg-yellow-400 mx-auto rounded"></div>
        </div>

        <div
          className="max-w-4xl mx-auto relative h-[60vh] overflow-hidden rounded-lg shadow-2xl group"
          onMouseEnter={resetTimeout}
          onMouseLeave={() => {
            timeoutRef.current = window.setTimeout(goToNext, AUTOPLAY_DELAY);
          }}
        >
          {/* Image Slider Container */}
          <div
            className="h-full whitespace-nowrap transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(${-currentIndex * 100}%)` }}
          >
            {galleryImages.map((src, index) => (
              <div key={index} className="inline-block w-full h-full align-top">
                <div className="relative w-full h-full overflow-hidden group/item">
                  <img
                    src={src}
                    alt={`Salon work example ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover/item:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover/item:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <i className="fas fa-search-plus text-white text-4xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-40 text-white p-3 rounded-full hover:bg-opacity-60 transition-all z-10 opacity-0 group-hover:opacity-100 focus:opacity-100"
            aria-label="Previous image"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            onClick={goToNext}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-40 text-white p-3 rounded-full hover:bg-opacity-60 transition-all z-10 opacity-0 group-hover:opacity-100 focus:opacity-100"
            aria-label="Next image"
          >
            <i className="fas fa-chevron-right"></i>
          </button>

          {/* Navigation Dots */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
            {galleryImages.map((_, slideIndex) => (
              <button
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === slideIndex ? 'bg-yellow-400 scale-125' : 'bg-gray-300 bg-opacity-50 hover:bg-opacity-75'
                }`}
                aria-label={`Go to slide ${slideIndex + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;