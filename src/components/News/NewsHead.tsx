import React from 'react';
import Image from 'next/image';
import Header from '../../../public/img/news/LT-Webpage-Header-Image-15.png';

function News() {
    return (
        <div className='font-brown-regular overflow-hidden bg-[#f2f2f2] '>
            <div className="relative w-full">
                <Image
                    src={Header}
                    alt=""
                    className="w-full h-[240px] md:h-[600px] object-cover opacity-75 bg-custom-gradientImg"
                />
                <div className="absolute inset-0 bg-black opacity-50 "></div>
                <div className="absolute bottom-0 left-0 flex items-center justify-center text-white text-[30px] lg:text-[58px] md:text-[40px] sm:text-[35px] font-brown-bold font-bold w-full ">
                    <h1 className='lg:mb-[10.5rem] md:mb-[3rem] mb-[2rem]  md:max-w-[800px] sm:max-w-[573px] max-w-[550px]  xl:mr-[370px] lg:mr-[200px] ml-[20px] md:ml-0 leading-none text-left'>The latest news from the Legends Tour</h1>
                </div>
            </div>
            <div className="relative bottom-0 left-0 p-4 text-[#522367] text-[24px] lg:text-[40px] md:text-[27px] font-brown-bold font-bold lg:mt-[-60px] md:mt-[20px] sm:mt-[20px] ">
                <div className="absolute left-0 lg:w-[62%]  h-[225px] flex items-center justify-center  bg-[#f2f2f2] mt-[-50px] "></div>
                <div className="flex items-center justify-center">
                    <h1 className='relative leading-none   xl:max-w-[800px] lg:max-w-[600px] md:max-w-[730px] sm:max-w-[550px] lg:mr-[370px] text-left  mb-[6.5rem] text-[#522367]'>
                        From breaking stories, tournament updates and player interviews
                    </h1>
                </div>

            </div>
        </div>
    );
}

export default News;
