import React from 'react';
import Image from 'next/image';
import ScottImg from '../../../public/img/schedule/SPGA24.jpg';
import Header from "../../../public/img/news/LT-Webpage-Header-Image-15.png";

const HomeImageSection: React.FC = () => {
  return (
    <div className="relative bg-[#f2f2f2] mb-8 md:mb-[140px]">
      {/*<div className="relative min-w-full px-0 inset-0 w-full h-[465px] mb-[30px] bg-cover bg-center  md:min-w-[1200px] ">*/}
      {/*  <Image className="relative min-w-full px-0 inset-0 w-full h-[465px] mb-[30px] bg-cover bg-center  md:min-w-[1200px]" src={ScottImg} alt="HeaderImage" />*/}
      {/*  <div className="absolute inset-0 bg-custom-gradient opacity-20"></div>*/}
      {/*  <div className="min-w-full px-0 md:px-4 md:mx-[78px] text-center lg:text-left md:min-w-[1200px] ">*/}
      {/*    <h1 className="mb-[6px] absolute bottom-[115px] w-full font-bold text-white text-[36px] md:text-[60px] leading-tight tracking-tighter flex items-center justify-center">*/}
      {/*      World Class <br /> Destinations*/}
      {/*    </h1>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="relative mt-[-134px]">*/}
      {/*  <div className="absolute left-0 right-0 bg-[#f2f2f2] h-[125px] md:w-[62%]"></div>*/}
      {/*  <div className="relative min-w-full px-0 md:px-4 md:mx-[78px] md:min-w-[1200px]">*/}
      {/*    <div className=" md:w-[80%] py-10 md:py-[60px] mb-6 md:mb-[48px] text-center md:text-left w-full flex items-center justify-center mr-[500px]">*/}
      {/*      <p className="text-2xl md:text-3xl lg:text-[25px] text-black relative leading-10 md:w-[80%] font-brown mx-auto md:mx-0" style={{ maxWidth: '800px', lineHeight: '1.5', wordBreak: 'break-word' }}>*/}
      {/*        The Legends Tour will visit 17 different countries in a record-breaking 2024 season – including nine new events – and an eye-watering €18million prize pool.*/}
      {/*      </p>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
        <div className="relative w-full">
            <Image
                src={ScottImg}
                alt=""
                className="w-full md:h-[240px] lg:h-[465px] object-cover opacity-80 bg-custom-gradient"
            />
            <div className="absolute inset-0 bg-black opacity-40 "></div>
            <div className="absolute bottom-0 left-0 flex  text-white text-[24px] md:text-[38px] lg:text-[58px] font-brown-bold font-bold w-full items-center justify-center">
                <h1 className='ml-[20px] md:ml-[40px] lg:mb-[7.5rem] mb-[1rem]  xl:max-w-[600px] lg:max-w-[500px] xl:mr-[650px]  lg:mr-[450px] md:mr-[300px]  text-left'>World Class Destinations</h1>
            </div>
        </div>
        <div className=" relative bottom-0 left-0 p-4   text-[18px] lg:text-[26px] font-brown-light lg:mt-[-60px] md:mt-[20px] ">
            <div className="absolute left-0 lg:w-[62%]  h-[225px] flex   bg-[#f2f2f2] mt-[-50px]  lg:flex"></div>
            <div className="flex items-center justify-center">
            <h1 className=' relative xl:max-w-[700px] md:ml-[30px] lg:ml-0 lg:max-w-[580px]  flex ml-[5px] xl:mr-[500px] lg:mr-[330px] w-full  text-black '>
                The Legends Tour will visit 17 different countries in a record- breaking 2024 season – including nine new events – and  an incredible €18million prize pool.
            </h1>
            </div>
        </div>
    </div>
  );
};

export default HomeImageSection;
