import Image from 'next/image';
import React, { useState, useEffect } from 'react';

interface McbRankingProps {
  imageSrc: string;
  mobileImageSrc?: string;
  title: string;
  altText?: string;
  overlayColor?: string;
  overlayOpacity?: number;
}

const FirstPage: React.FC<McbRankingProps> = ({
  imageSrc,
  mobileImageSrc,
  title,
  altText = 'MCB Road to Mauritius rankings',
  overlayColor = 'black',
  overlayOpacity = 0.5,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Tailwind's md breakpoint
    };

    handleResize(); // Check on component mount
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative bg-gray-800 text-white h-[80vh] w-full flex items-center justify-center">
      <Image
        src={isMobile && mobileImageSrc ? mobileImageSrc : imageSrc}
        alt={altText}
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
      <div
        className="absolute inset-0 z-10"
        style={{ backgroundColor: overlayColor, opacity: overlayOpacity }}
      ></div>
      <div className="absolute bottom-10 left-5 md:bottom-20 md:left-20 z-20 flex flex-col items-center w-[90%] md:w-[850px]">
        <h1 className="text-4xl md:text-7xl font-bold sm:text-center lg:text-left">{title}</h1>
      </div>
    </div>
  );
};

export default FirstPage;
