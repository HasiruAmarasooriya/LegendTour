import React from 'react';
import Image from 'next/image';
import Header from '../../../public/img/news/LT-Webpage-Header-Image-15.png';
import L1IMG1 from '../../../public/img/news/hpimg1.jpg';
import L1IMG2 from '../../../public/img/news/hpimg2.jpg';
import L1IMG3 from '../../../public/img/news/hpimg3.jpg';

const Card = () => {
    return (
        <div className='mt-[200px] font-brown-regular  bg-[#f2f2f2] '>
            <div className=" bottom-0 left-0 flex items-center justify-center text-[#522367]  text-[24px] md:text-[58px] font-brown-bold font-bold w-full  ">
                <h1 className='mb-[6.5rem] md:pr-[1000px]  leading-none text-left'>News</h1>
            </div>


            <div className="flex flex-wrap justify-center space-x-[40px] p-[20px] ">

                <div className="flex flex-col items-center ">

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
                        <h4 className="text-center text-[18px] mt-2 mb-4 ml-2 mr- 2 uppercase font-semibold">Senior Open Monday Qualifiers</h4>
                        <p className="text-center">22 July 2024</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Card;
