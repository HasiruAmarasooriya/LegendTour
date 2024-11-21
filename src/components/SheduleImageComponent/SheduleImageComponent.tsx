import React from 'react';
import { Button } from "../ui/button";

// Define an interface for the props
interface SheduleImageComponentProps {
  mainText: string;
  smallText: string;
  button: string;
  image: string;
}

const SheduleImageComponent: React.FC<SheduleImageComponentProps> = ({
  mainText,
  smallText,
  button,
  image
}) => {
  return (
    <div className="mb-[180px] flex flex-col md:flex-row">
      <div className='flex flex-col-reverse md:flex-row bg-white'>
        <div className='md:w-[676px] md:h-[651px]'>
          <p className='text-2xl md:text-4xl text-[#522367] font-semibold md:mx-[80px] mx-[20px] mt-[80px] mb-[24px] font-brown-regular'>
            {mainText}
          </p>
          <p className='text-md md:text-lg md:mx-[80px] mx-[20px] mb-[96px] font-brown-light font-200'>
            {smallText}
          </p>
          <Button className="mx-[20px] md:mx-0 h-[53px] w-screen md:w-[283px] tracking-widest break-words text-lg leading-tight md:ml-[80px] font-brown-bold">
            {button}
          </Button>
        </div>
        <div className='md:w-[483px] md:h-[651px]'>
          <img className='w-full h-auto md:w-[483px] md:h-[651px]' src={image} alt="Schedule Image" />
        </div>
      </div>
    </div>
  );
}

export default SheduleImageComponent;
