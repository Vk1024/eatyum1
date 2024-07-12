import React, { useState, useEffect } from 'react';
import img1 from '../resources/1.jpg';
import img2 from '../resources/burger.jpg';
import img3 from '../resources/healthy-breakfast.jpg';
import { BsChevronCompactRight, BsChevronCompactLeft } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Features = () => {
  // Array of image objects for the slider
  const sliders = [
    { imageUrl: img1 },
    { imageUrl: img2 },
    { imageUrl: img3 },
  ];

  // State to keep track of the current slide index
  const [current, setCurrent] = useState(0);

  // Function to move to the previous slide
  const prevSlider = () => {
    const isFirstSlide = current === 0;
    const newIndex = isFirstSlide ? sliders.length - 1 : current - 1;
    setCurrent(newIndex);
  };

  // Function to move to the next slide
  const forwardSlider = () => {
    const isLastSlide = current === sliders.length - 1;
    const newIndex = isLastSlide ? 0 : current + 1;
    setCurrent(newIndex);
  };

  // Function to move to a specific slide
  const moveToSlide = (slideIndex) => {
    setCurrent(slideIndex);
  };

  // Set up auto-slide functionality
  useEffect(() => {
    const autoSlide = setInterval(() => {
      forwardSlider();
    }, 3000); // Change slide every 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(autoSlide);
  }, [current]);

  return (
    <div className='max-w-[1520px] h-[500px] w-full py-4 px-4 relative group'>
      {/* Display the current slide as a background image */}
      <div
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        style={{ backgroundImage: `url(${sliders[current].imageUrl})` }}
      >
      </div>

      {/* Left arrow button to move to the previous slide */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-x-[10%] left-5 text-2xl rounded-full p-2 bg-orange-700'>
        <BsChevronCompactLeft onClick={prevSlider} />
      </div>

      {/* Right arrow button to move to the next slide */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-x-[-10%] right-5 text-2xl rounded-full p-2 bg-orange-700'>
        <BsChevronCompactRight onClick={forwardSlider} />
      </div>

      {/* Dots for navigating to specific slides */}
      <div className='flex top-4 justify-center py-2'>
        {sliders.map((sliderItems, sliderIndex) => (
          <div
            key={sliderIndex}
            onClick={() => moveToSlide(sliderIndex)}
            className={`text-2xl cursor-pointer ${current === sliderIndex ? 'text-orange-700' : 'text-gray-500'}`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
