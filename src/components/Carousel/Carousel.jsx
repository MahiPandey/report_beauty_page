import React, { useState, useEffect } from 'react';

const images = [
  'https://i.postimg.cc/28rNP03w/Screenshot-2025-07-22-120523.png',
  'https://i.postimg.cc/nV6RwgqL/Screenshot-2025-07-28-160354.png',
  'https://i.postimg.cc/Kzj3mDPZ/IMG-0016.jpg',
  'https://i.postimg.cc/fRsHMd2n/Screenshot-2025-07-28-160508.png',
];

const ImageCarousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  // Autoplay logic
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, [current]);

  return (
    <div className="relative w-full flex justify-center  items-center">
      {/* <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-black/10 hover:bg-black/50 p-2 rounded-full z-10 transition"
      >
        <img src="https://cdn-icons-png.flaticon.com/512/271/271220.png" alt=""  className='h-5 opacity-20 hover:opacity-90 lg:h-10'/>
      </button> */}

      <img
        key={images[current]}
        src={images[current]}
        alt="Carousel Image"
        className="rounded-lg shadow-xl max-w-full w-[90%] md:w-[75%] lg:w-[95%]"
      />

      {/* <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-black/10 hover:bg-black/50 p-2 rounded-full z-10 transition"
      >
        <img src="https://cdn-icons-png.flaticon.com/512/271/271228.png" alt="" className='h-5 opacity-20 hover:opacity-90 lg:h-10' />
      </button> */}
    </div>
  );
};

export default ImageCarousel;
