import React from 'react';
import Image from 'next/image';
import Header from '../../../public/img/Privacy/about-hero.jpg';
import Paragraph from '../TermsAndConditions/TermsAndConditionParagraph'
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
                        <h1 className='lg:mb-[10.5rem] mb-[2.5rem]  xl:max-w-[800px] lg:max-w-[800px] xl:mr-[620px]  lg:mr-[300px] md:mr-[330px] mobile-lg:ml-[20px] mobile-md:ml-[15px] mobile-sm:ml-[15px] leading-none '>Terms and Conditions</h1>
                    </div>
                </div>
                <div className="relative bottom-0 left-0   flex items-center justify-center mt-[-60px] ">
                    <div className="absolute left-0 lg:w-[62%]   h-[275px] bg-[#f2f2f2] mt-[50px]"></div>
                    <h1 className='relative xl:max-w-[600px] lg:max-w-[580px] xl:mr-[1070px] lg:mr-[730px]  md:max-w-[730px] sm:max-w-[550px] md:mr-[590px] text-left flex items-center  leading-none font-brown-light  justify-center  text-[18px] lg:text-[26px] mt-[250px] lg:mt-[100px] lg:mb-[1.5rem] text-[#232323]'>
                        Legends Tour
                    </h1>


                </div>
                <div className="flex items-center justify-center  xl:mr-[1100px] lg:mr-[760px] md:mr-[600px] p-4 ">
                    <div className="max-w-full lg:max-w-[820px] md:max-w-[520px] items-center justify-center   ">
                        <h1 className=" relative text-[15px] lg:text-[18px] text-[#232323] mb-[55px] lg:mb-[206px] font-brown-bold">
                            Website T&Cs
                        </h1>

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
