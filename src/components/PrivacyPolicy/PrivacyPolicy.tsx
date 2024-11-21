import React from 'react';
import Image from 'next/image';
import Header from '../../../public/img/Privacy/news-hero-2-1.jpg';
import Paragraph from '../PrivacyPolicy/privacyParagraphSection'
import Partners from '@/components/Partners/Partners';
import Link from "next/link";

function PrivacyPolicy() {
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
                    <div className="absolute bottom-0 flex items-center justify-center text-white text-[32px] md:text-[38px] lg:text-[60px] font-brown-bold font-bold w-full ">
                        <h1 className='lg:mb-[10.5rem] mb-[2.5rem]  xl:max-w-[830px] lg:max-w-[800px] xl:mr-[430px]  lg:mr-[160px] ml-[40px] lg:ml-0 leading-none '>Privacy Policy – The European Legends Tour</h1>
                    </div>
                </div>
                <div className="relative bottom-0 left-0 p-4  flex items-center justify-center mt-[-60px] ">
                    <div className="absolute left-0 lg:w-[62%]   h-[225px] bg-[#f2f2f2] mt-[-50px]"></div>
                    <h1 className='relative xl:max-w-[600px] lg:max-w-[580px] xl:mr-[630px] lg:mr-[360px]  md:max-w-[730px] sm:max-w-[550px] md:ml-[30px] ml-[20px] lg:ml-0 text-left flex items-center  leading-none font-brown-bold  justify-center  text-[24px] lg:text-[40px] mt-[80px] lg:mt-0 mb-[1.5rem] text-[#522367]'>
                        Understanding your rights to privacy and how The European Legends Tour protects them.               </h1>


                </div>
                <div className="flex items-center justify-center  xl:mr-[470px] lg:mr-[330px] md:mr-[220px] p-4 ">
                    <div className="max-w-full lg:max-w-[820px] md:max-w-[520px] p-4 md:p-8 items-center justify-center lg:mt-[50px]  mt-[30px]">
                        <h1 className="text-[18px] lg:text-[26px] text-[#232323] mb-[15px] md:mb-[26px] font-brown-light">
                            Who we are
                        </h1>

                        <p className="text-[18px] lg:text-[26px] text-[#232323] mb-[15px] md:mb-[186px] font-brown-light ">
                            The European Legends Tour, (“TELT” “we”, “us” or “our”) is committed to data protection and data privacy. We would like to provide users of our website (“you”) with information regarding the way that we use the information that is collected on our website or over the phone. We recommend that you read this Privacy Policy (“Privacy Policy”) so that you have a clear understanding of the data that we collect and how we use this information.
                        </p>



                    </div>
                </div>
            </div>
            <div className="bg-white">
                <Paragraph/>
            </div>

            <Partners/>
        </div>
    );
}

export default PrivacyPolicy;
