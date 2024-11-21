"use client";

import React, { useRef, RefObject } from 'react';
import Legends from '../Legends/Legends';
import Overview from '../Overview/Overview';
import Partner from '../Partner/Partner';

const AboutUs: React.FC = () => {
  const overviewRef = useRef<HTMLDivElement>(null);
  const legendsRef = useRef<HTMLDivElement>(null);
  const partnersRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionRef: RefObject<HTMLDivElement>) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/*<div className="overflow-hidden ">*/}
      {/*  <div className="relative overflow-hidden">*/}
      {/*    <img*/}
      {/*      className="w-full h-[605px] object-cover"*/}
      {/*      src="https://d1j6ra8qdo17fv.cloudfront.net/wp-content/uploads/2022/01/Broadhurst-Winsmaller-e1641548331674.jpg"*/}
      {/*      alt=""*/}
      {/*    />*/}
      {/*    <div className="absolute inset-0 w-3/2 h-full bg-gradient-to-r from-[#232323] to-transparent opacity-75"></div>*/}
      {/*    <div className="md:ml-[94px] min-w-full text-center lg:text-left 2xl:ml-[660px]">*/}
      {/*      <h1 className="md:mb-[18px] absolute bottom-[115px] w-full font-bold text-white text-5xl md:text-8xl  ">*/}
      {/*        About Legends Tour*/}
      {/*      </h1>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}

      <div className=' tracking-wider overflow-hidden'>
        <div className="relative w-full">
          <img
              src="https://d1j6ra8qdo17fv.cloudfront.net/wp-content/uploads/2022/01/Broadhurst-Winsmaller-e1641548331674.jpg"
              alt=""
              className="w-full h-[240px] md:h-[540px] object-cover opacity-80 bg-custom-gradient"
          />
          <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center"></div>
          <div className="absolute bottom-0 left-0 p-4 text-white text-[24px] md:text-[58px] font-brown-bold font-bold mb-[2rem] flex items-center justify-center w-full">
            <h1 className='xl:mr-[650px] lg:mr-[330px] md:mr-[70px] '>About Legends Tour</h1>
          </div>
        </div>
      </div>

      <div className="pt-[30px] lg:sticky lg:top-0 z-10 bg-white border-b-2 border-[#522367] hidden lg:block ">
        <div className="  flex space-x-10  font-brown-regular flex items-center justify-center">
          <div className=" xl:mr-[920px] lg:mr-[580px] md:mr-[330px]  flex space-x-10  font-brown-regular">
          <a href="#overview" className="text-[#522367] md:mb-[25px]" onClick={() => scrollToSection(overviewRef)}>
            OVERVIEW
          </a>
          <a href="#legends" className="text-[#522367]" onClick={() => scrollToSection(legendsRef)}>
            LEGENDS
          </a>
          <a href="#partners" className="text-[#522367]" onClick={() => scrollToSection(partnersRef)}>
            PARTNERS
          </a>
          </div>
        </div>
      </div>

      <div className='overflow-hidden'> 
        <div className="bg-[#f2f2f2]" ref={overviewRef}>
          <Overview />
        </div>
        <div ref={legendsRef}>
          <Legends />
        </div>
        <div className="bg-gray-100" ref={partnersRef}>
          <Partner />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
