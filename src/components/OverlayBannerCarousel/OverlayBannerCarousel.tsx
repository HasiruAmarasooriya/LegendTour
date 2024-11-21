import React, { useState, useEffect } from "react";
import '../../styles/globals.css';

interface OverlayBannerProps {
  titles: string[];
  descriptions: string[];
  images: string[];
  overlayPosition?: 'left' | 'right';
}

const OverlayBannerCarousel: React.FC<OverlayBannerProps> = ({
                                                               titles,
                                                               descriptions,
                                                               images,
                                                               overlayPosition = 'left',
                                                             }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [animationClass, setAnimationClass] = useState<string>('');

  const goToPrevious = () => {
    setDirection('prev');
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setAnimationClass('slide-in-left');
  };

  const goToNext = () => {
    setDirection('next');
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setAnimationClass('slide-in-right');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationClass('');
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const handleButtonClick = (index: number) => {
    if (index > currentIndex) {
      setDirection('next');
      setAnimationClass('slide-in-right');
    } else {
      setDirection('prev');
      setAnimationClass('slide-in-left');
    }
    setCurrentIndex(index);
  };

  const overlayClasses = overlayPosition === 'left' ? 'left-0' : 'right-0';
  const contentContainerClasses = overlayPosition === 'left' ? 'md:mx-[70px] left-0' : 'pl-20 right-0';

  return (
      <div>

        <div className=" bg-[#f2f2f2] hidden xl:flex">
          <div
              className={`relative  w-full h-[200px]  md:h-[400px] lg:h-[700px]  xl:mb-[180px] bg-cover  transition-all duration-500 ${animationClass}`}
              style={{ backgroundImage: `url(${images[currentIndex]})` }}
          >
            <div className={`xl:absolute top-0 h-full xl:w-1/2 xl:bg-[rgba(0,0,0,0.3)] ${overlayClasses}`}></div>
            <div className={`xl:absolute hidden xl:flex top-0 h-full xl:w-[1000px]  w-full flex items-center large-xl:justify-end xl:justify-start  ${contentContainerClasses}`}>
              <div className="xl:w-[600px]">
                <p className="xl:text-white text-[#232323] font-brown-light xl:text-[26px] text-[12px] mb-[30px]">
                  {descriptions[currentIndex]}
                </p>
                <h1 className="mb-4 xl:text-white text-[#232323] font-bold xl:text-[26px] text-[12px] leading-[1em] mb-[48px] font-brown-regular">
                  {titles[currentIndex]}
                </h1>
              </div>
            </div>
            <div className="absolute inset-y-0 left-0 flex items-center">
              <button onClick={goToPrevious} className="bg-white p-2 shadow-md square-button">
                <svg className="md:w-12 md:h-12 w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button onClick={goToNext} className="bg-white p-2 shadow-md square-button">
                <svg className="md:w-12 md:h-12 w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>


        <div className="relative min-h-screen bg-[#f2f2f2] block xl:hidden">
          <div className={` transition-all duration-500 ${animationClass}`}>
          <div
              className="relative  w-full h-[200px]  md:h-[400px] lg:h-[700px] xl:mb-[180px] bg-cover bg-center "
              style={{ backgroundImage: `url(${images[currentIndex]})` }}
          >

            <div className={`xl:absolute top-0 h-full xl:w-1/2 xl:bg-[rgba(0,0,0,0.3)] ${overlayClasses}`}></div>
            <div className={`xl:absolute hidden xl:flex top-0 h-full xl:w-1/2 w-full flex items-center xl:pl-[100px] ${contentContainerClasses}`}>
              <div className="xl:w-1/2">
                <p className="xl:text-white text-[#232323] font-brown-light xl:text-[26px] text-[12px] mb-[30px]">
                  {descriptions[currentIndex]}
                </p>
                <h1 className="mb-4 xl:text-white text-[#232323] font-bold xl:text-[26px] text-[12px] leading-[1em] mb-[48px] font-brown-regular">
                  {titles[currentIndex]}
                </h1>
              </div>
            </div>
          </div>

          <div className="xl:w-1/2 ml-[35px] mr-[35px] mt-[50px] block xl:hidden ">
            <p className="xl:text-white text-[#232323] font-brown-light md:text-[26px] text-[18px] mb-[30px]">
              {descriptions[currentIndex]}
            </p>
            <h1 className="mb-4 xl:text-white text-[#232323] font-bold md:text-[26px] text-[18px] leading-[1em] mb-[48px] font-brown-regular">
              {titles[currentIndex]}
            </h1>
          </div>
          </div>

          <div className="flex justify-center space-x-4 mt-6">
            {images.map((_, index) => (
                <button
                    key={index}
                    className={`p-[6px] border-2 border-gray-300 ${currentIndex === index ? 'bg-gray-300' : 'bg-white'} rounded-full`}
                    onClick={() => handleButtonClick(index)}
                ></button>
            ))}
          </div>
        </div>
      </div>
  );
};

export default OverlayBannerCarousel;
