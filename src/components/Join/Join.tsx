import React from 'react';

interface LegendsTourMembershipProps {
  title: string;
  description: string;
  imageUrl: string;
  additionalText?: string;
  useFixedBackground?: boolean; 
  useGradientOverlay?: boolean; 
  useTallImage?: boolean;
}

const LegendsTourMembership: React.FC<LegendsTourMembershipProps> = ({
  title,
  description,
  imageUrl,
  additionalText,
  useFixedBackground = false,
  useGradientOverlay = false,
  useTallImage = false,
}) => {
  const heightClasses = useTallImage ? 'h-[605px] md:h-[464px] lg:h-[605px]' : 'h-[464px]';

  return (
    <div className="relative  bg-[#f2f2f2]">
      <div
        className={`relative w-full h-[400px] md:h-[700px] lg:h-[600px] mb-[30px] bg-cover bg-center ${useFixedBackground ? 'bg-fixed' : ''}`}
        style={{ backgroundImage: `url(${imageUrl})` }}>
        {useGradientOverlay && <div className="absolute inset-0 bg-custom-gradient opacity-70"></div>}
        <div className="px-4 md:mx-auto w-full  lg:max-w-7xl text-center lg:text-left ">
          <h1 className="mb-12 md:mb-[16px] ml-[20px] font-brown-bold absolute bottom-16 md:bottom-[160px] w-[50%] text-left lg:w-[800px] md:w-[700px] w-[300px] font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-[60px] leading-tight lg:leading-[1em]">
            {title}
          </h1>
        </div>
      </div>
      <div className="relative mt-[-100px] md:mt-[-134px]">
        <div className="absolute left-0 right-0 bg-[#f2f2f2] h-[125px] w-full lg:md:w-[62%]"></div>
        <div className="relative px-4 md:px-4 md:mx-auto w-full lg:max-w-7xl">
          <div className="w-full lg:w-[62%] md:max-w-[700px] md:pt-[63px] ">
            {description && (
              <h2 className="text-2xl sm:text-3xl ml-[20px] pt-[30px] mb-[20px]  lg:text-4xl font-bold text-[#522367] relative font-brown-regular">
                {description}
              </h2>
            )}
            {additionalText && (
              <p className="mt-4 text-lg sm:text-xl pt-[30px] md:pt-0 ml-[20px] lg:text-[25px] text-[#232323] w-full font-brown-light mb-[100px] lg:mb-[200px]">
                {additionalText}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegendsTourMembership;
