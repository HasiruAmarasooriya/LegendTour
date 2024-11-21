import React from 'react';
import Image from 'next/image';
import Header from '../../../public/img/news/LT-Webpage-Header-Image-15.png';
import L1IMG1 from '../../../public/img/news/hpimg1.jpg';
import L1IMG2 from '../../../public/img/news/hpimg2.jpg';
import L1IMG3 from '../../../public/img/news/L1-img3.jpeg';

const Card = () => {
    return (
        <div className='font-brown-regular overflow-hidden bg-[#f2f2f2]'>
            <div className="flex flex-wrap justify-center space-x-[40px] p-[20px]">
                <div className="flex flex-col items-center">
                    <div className="relative flex flex-col justify-center items-center">
                        <Image
                            src={L1IMG1}
                            alt=""
                            className="w-[355px] h-[270px]"
                        />
                    </div>
                    <div className="bg-white h-[250px] w-[355px]  flex flex-col items-center">
                        <h4 className="text-center text-[18px] ml-2 mr- 2 mt-2 mb-4 uppercase font-semibold">BAKER - MAKE FLAGSHIP EVENT A MAJOR</h4>
                        <p className="text-center">23 July 2024</p>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <div className="relative flex flex-col justify-center items-center">
                        <Image
                            src={L1IMG2}
                            alt=""
                            className="w-[355px] h-[270px]"
                        />
                    </div>
                    <div className="bg-white h-[250px] w-[355px]  flex flex-col items-center">
                        <h4 className="text-center text-[18px] mt-2 mb-4 ml-2 mr-2 uppercase font-semibold">Micheel means business in Aberdeen</h4>
                        <p className="text-center">23 July 2024</p>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <div className="relative flex flex-col justify-center items-center">
                        <Image
                            src={L1IMG3}
                            alt=""
                            className="w-[355px] h-[270px]"
                        />
                    </div>
                    <div className="bg-white h-[250px] w-[355px]  flex flex-col items-center">
                        <h4 className="text-center text-[18px] mt-2 mb-4 ml-2 mr-2 uppercase font-semibold">Join My Legends Tour</h4>
                        <p className="text-center">Sign up for the latest tournament and ticket news, offers and discounts</p>
                        <button className="bg-[#522367] text-white px-8 py-3 mt-4 mb-4 md:mt-[20px] md:mb-[150px] ">
                            SIGN UP
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
