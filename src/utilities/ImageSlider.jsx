import React, { useState, useEffect } from 'react';
import policeBadge from '../assets/Police_badge-removebg-preview.png';
import roadSafetyBadge from '../assets/road_Safety_badge-removebg-preview.png';
import policeVan from '../assets/Police Van 2.jpeg';
import roadSafetySearch from '../assets/ROAD SAFETY ROAD SEARCH.jpeg';

const images = [
  { src: policeBadge, alt: 'Police Badge' },
  { src: roadSafetyBadge, alt: 'Road Safety Badge' },
  { src: policeVan, alt: 'Police Van' },
  { src: roadSafetySearch, alt: 'Road Safety Search' },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change the slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section className="relative w-full h-60 bg-gray-400 flex items-center justify-center overflow-hidden rounded-lg shadow-lg">
      {/* Images */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className={`absolute transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          } w-auto h-full object-contain`}
        />
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-4 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-500'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default ImageSlider;
