import React from 'react';
import { Button } from "../ui/button";


interface SheduleImageComponentProps {
    mainText: string;
    smallText: string;
    smallText1: string;
    smallText2: string;
    smallText3: string;
    button: string;
    image: string;
}

const SheduleImageComponent: React.FC<SheduleImageComponentProps> = ({
                                                                         mainText,
                                                                         smallText,
                                                                         smallText1 ,
                                                                         smallText2 ,
                                                                         smallText3,
                                                                         button,
                                                                         image
                                                                     }) => {
    return (
        <div className="xl:mb-[180px] lg:mb-[120px] md:mb-[80px] mb-[50px] flex item-center justify-center flex-col md:flex-row">
            <div className='flex flex-col-reverse lg:flex-row bg-white'>
                <div className='xl:w-[676px] lg:w-[556px] md:h-[651px] md:w-[676px] md:h-[651px]'>
                    <p className='text-[26px] md:text-[26px]  text-[#232323]  md:mx-[80px] mx-[20px] mt-[30px] xl:mt-[80px] mb-[24px] font-brown-regular'>
                        {mainText}
                    </p>
                    <p className='text-md md:text-lg md:mx-[80px] mx-[20px] mb-[24px]  font-brown-light font-200'>
                        {smallText}
                    </p>
                    <p className='text-md md:text-lg md:mx-[80px] mx-[20px] mb-[30px]  font-brown-light font-200'>
                        {smallText1}
                    </p>
                    <p className='text-md md:text-lg md:mx-[80px] mx-[20px] mb-[30px]  font-brown-light font-200'>
                        {smallText2}
                    </p>
                    <p className='text-md md:text-lg md:mx-[80px] mx-[20px] mb-[24px]  font-brown-light font-200'>
                        {smallText3}
                    </p>
                    <Button className="md:mx-[20px] md:mx-0 h-[53px] w-full md:w-[208px] tracking-widest break-words text-lg leading-tight md:ml-[80px] font-brown-bold">
                        {button}
                    </Button>
                </div>
                <div className=''>
                    <img className='w-full  h-auto lg:w-[356px] lg:h-[650px] xl:w-[483px] xl:h-[651px]' src={image} alt="Schedule Image" />
                </div>
            </div>
        </div>
    );
}

export default SheduleImageComponent;
