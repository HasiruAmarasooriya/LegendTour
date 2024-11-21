import React from 'react';
import Image from 'next/image';
import ScottImg from '../../../public/img/news/Legends_Tour_RGB_White.png';
const EagleRareClub = () => {
    return (
        <div className="bg-[#522367] text-white lg:py-8 md:py-8 py-8 px-4 md:px-8">
            <div className="max-w-7xl mx-auto md:flex flex-col md:flex-row justify-center items-center text-center md:text-start xl:space-x-[120px] ">
                {/* Left Content */}
                <div>
                    <h2 className="xl:text-[36px] lg:text-[30px] md:text-[24px] text-[21px] font-brown-bold">Become a Partner</h2>
                    <p className="mt-2 xl:text-[24px] lg:text-[21px] md:text-[14px] text-[12px] font-brown-bold">
                        We partner with select businesses who share our passion for golf.
                    </p>
                </div>

                {/* Right Content */}
                <div className="mt-4 md:mt-0  items-center justify-center  text-center md:flex-row  space-x-4">
                    {/* Logos */}

                    <div className="flex space-x-2 items-center justify-center mb-[10px] ">
                        <Image src={ScottImg} alt="Movember Logo"  className="xl:w-[130px] lg:w-[120px] md:w-[95px] w-[140px] xl:h-[76px] lg:h-[70px] md:h-[57px] h-[80px] " />
                        {/*<Image src="/eagle-rare-logo.png" alt="Eagle Rare Logo" className="h-6 md:h-8" />*/}
                    </div>

                    {/* Donation Info */}
                    <div className="bg-white text-[#522367] py-2 xl:w-[260px]  lg:w-[290px]  text-center">
                        <p className="font-brown-bold xl:text-[16px] lg:text-[14px] hover:text-black ">Speak to us to find out more: <br/> press@legendstour.com</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default EagleRareClub;
