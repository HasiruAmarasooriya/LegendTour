"use client";

import { useState, useEffect } from "react";
import Image from 'next/image';
import LEG from '../../../public/img/schedule/legends-exp-white.svg';
import CEL from '../../../public/img/schedule/celebrity-proam-white.svg';
import SCO from '../../../public/img/schedule/SCOTLAND.png'; 
 

export default function PlayerExperienceDrawer() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed left-0 w-screen h-[320px] font-brown-light bg-[#522367] justify-around z-50 ${
        scrolled ? "mt-[13px]" : "mt-[13px]"
      }`}
    >
      <div className="flex flex-row items-start justify-center xl:mr-[745px] lg:mr-[460px]">
        <div className="flex flex-col mt-[30px]">
          <a href="/upcoming-matches" className="text-white hover:font-semibold">
            CHAMPIONSHIP PRO-AM
          </a>
          <a href="/past-matches" className="text-white hover:font-semibold">
            CELEBRITY PRO-AM
          </a>
          <a href="/full-schedule" className="text-white hover:font-semibold">
            THE LEGENDS EXPERIENCE
          </a>
          <a href="/full-schedule" className="text-white hover:font-semibold">
             LEGENDS CLUB
          </a>
        </div>
        <div className="flex flex-col items-center pl-[100px]">
          <div className="flex space-x-4">
            <Image src={LEG} className="w-[80px] h-[80px]" alt="Legends Exp" />
            <Image src={CEL} className="w-[80px] h-[80px]" alt="Celebrity Pro-Am" />
          </div>
          <Image src={SCO} className="w-[50px] h-[50px] mt-[-15px]" alt="New Image" />
          <div className="mt-2 flex flex-col items-center space-y-1">
            <span className="text-white">31July - 4August 2024</span>
            <span className="text-white font-bold pt-[6px]">Staysure PGA Seniors</span>
            <span className="text-white font-bold pt-[1px]">Championship hosted by</span>
            <span className="text-white font-bold pt-[1px]">Colin Montgomerie</span>
            <span className="text-white text-[13px] pt-[6px]">Trump international Golf Links</span>
          </div>
          <div className="pt-[10px]">
          <button className="text-white font-bold text-[15px]">View More</button>
            <hr className="bg-white h-[3px] w-[75px]" />
          </div>
        </div>
       
      </div>
    </div>
  );
}
