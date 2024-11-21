import React from 'react';
import Image from 'next/image';
import Header from '../../../public/img/Cookie/about-hero.jpg';
import Paragraph from '../CookiePolicy/cookieParagrapghSection'
import Partners from '@/components/Partners/Partners';

function CookiePolicy() {
    return (
        <div>
            <div className='font-brown-regular overflow-hidden bg-[#f2f2f2] '>
                <div className="relative w-full">
                    <Image
                        src={Header}

                        alt=""
                        className="w-full h-[240px] md:h-[600px] object-cover opacity-75 bg-custom-gradientImg"
                    />
                    <div className="absolute inset-0 bg-black opacity-50 "></div>
                    <div className="absolute bottom-0 left-0 flex items-center justify-center text-white text-[32px] md:text-[38px] lg:text-[60px] font-brown-bold font-bold w-full ">
                        <h1 className='lg:mb-[10.5rem] mb-[2.5rem]  xl:max-w-[800px] lg:max-w-[800px] xl:mr-[850px]  lg:mr-[570px] md:mr-[470px] mobile-lg:mr-[170px] mobile-md:mr-[120px] mobile-sm:mr-[70px] leading-none text-left'>Cookie Policy</h1>
                    </div>
                </div>
                <div className="relative bottom-0 left-0 p-4  flex items-center justify-center    mt-[-60px] ">
                    <div className="absolute left-0 lg:w-[62%]   h-[225px] bg-[#f2f2f2] mt-[-50px]"></div>
                    <h1 className='relative xl:max-w-[600px] lg:max-w-[580px] xl:mr-[630px] lg:mr-[390px]  md:max-w-[730px] sm:max-w-[550px] ml-[15px] md:ml-0 text-left flex items-center  leading-none font-brown-bold  justify-center  text-[24px] lg:text-[40px] mt-[80px] lg:mt-0 mb-[2.5rem] text-[#522367]'>
                        Please read the Cookie Policy carefully before using this site               </h1>


                </div>
            </div>
            <div className="bg-white">
                <Paragraph/>
            </div>

            <Partners/>
        </div>
    );
}

export default CookiePolicy;
