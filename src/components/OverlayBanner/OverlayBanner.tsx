import React from "react";
import {Button} from "../ui/button";

interface OverlayBannerProps {
  title: string;
  description: string;
  imageUrl: string;
  button: string;
  overlayPosition?: 'left' | 'right'; // New prop for overlay position
}

const OverlayBanner: React.FC<OverlayBannerProps> = ({
  title,
  description,
  imageUrl,
  button,
  overlayPosition = 'left',
}) => {

  // Conditional classes for the overlay and content container
  const overlayClasses = overlayPosition === 'left' ? 'left-0' : 'right-0';

  const contentContainerClasses = overlayPosition === 'left'
    ? 'md:pr-20 justify-end'
    : 'md:pl-20 right-0';

  return (
    <div className="relative  bg-white">

      <h1 className="mb-[20px]  block lg:hidden ml-[30px] text-[#522367] font-bold text-[24px] pt-[40px] lg:text-[40px] leading-tight sm:leading-snug md:leading-[1em] font-brown-regular">
        {title}
      </h1>
      <div
        className="relative w-full h-[200px] sm:h-[600px] lg:mb-[180px] md:h-[400px] lg:h-[700px] mb-[30px]  bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className={`absolute hidden lg:block  top-0 h-full w-full sm:w-1/2 bg-[rgba(0,0,0,0.3)] ${overlayClasses}`}></div>
        <div className={`absolute top-0 h-full w-full sm:w-1/2 flex items-center p-6 sm:pl-[50px] ${contentContainerClasses}`}>
          <div className="max-w-[530px] hidden lg:block  ">
            <div>
            <h1 className="mb-4 text-white font-bold text-3xl sm:text-4xl md:text-[40px] leading-tight sm:leading-snug md:leading-[1em] mb-[24px] sm:mb-[48px] font-brown-regular">
              {title}
            </h1>
            <p className="text-white font-brown-light text-lg sm:text-xl md:text-[26px] mb-4 sm:mb-[30px]">
              {description}
            </p>
              {(button &&
            <button className="px-6 py-3 bg-white text-[#522367] font-bold text-base sm:text-lg md:text-[18px] uppercase font-brown-regular tracking-wide">
              {button}
            </button>
              )}
            </div>
          </div>
        </div>

      </div>
      <div className="mx-[20px] block lg:hidden mt-4">
        <div className="font-brown-light text-lg md:ml-[10px] mb-[40px] mt-4">
          {description}
        </div>
        <Button className="mt-4  h-[53px] md:ml-[10px] md:w-[283px] w-full mb-[50px] tracking-widest break-words text-lg leading-tight bg-[#522367] font-brown-bold text-white">
          PLAYING EXPERIENCES
        </Button>
      </div>
    </div>
  );
};

export default OverlayBanner;
