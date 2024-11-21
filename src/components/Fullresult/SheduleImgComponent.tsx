import React from 'react';
import { Button } from "../ui/button";


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
        <div className="xl:mb-[180px] lg:mb-[120px] md:mb-[80px] mb-[50px] flex item-center justify-center flex-col md:flex-row">
            <div className='flex flex-col-reverse lg:flex-row bg-white'>
                <div className='xl:w-[676px] lg:w-[456px] md:h-[651px] md:w-[676px] md:h-[651px]'>
                    <p className='text-[26px] md:text-[26px]  text-[#232323]  md:mx-[80px] mx-[20px] mt-[80px] mb-[24px] font-brown-regular'>
                        {mainText}
                    </p>
                    <p className='text-md md:text-lg md:mx-[80px] mx-[20px] mb-[96px] xl:mb-[96px] lg:mb-[56px] font-brown-light font-200'>
                        {smallText}
                    </p>

                    <Button className="md:mx-[20px] md:mx-0 h-[53px] w-full md:w-[208px] tracking-widest break-words text-lg leading-tight md:ml-[80px] font-brown-bold">
                        {button}
                    </Button>
                </div>
                <div className=''>
                    <img className='w-full  h-auto lg:w-[356px] lg:h-[614px] lg:w-[483px] lg:h-[651px]' src={image} alt="Schedule Image" />
                </div>
            </div>
        </div>
    );
}

export default SheduleImageComponent;
