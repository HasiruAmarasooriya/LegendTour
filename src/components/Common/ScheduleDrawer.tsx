"use client";

import { useState, useEffect } from "react";
import Image from 'next/image';
import LEG from '../../../public/img/schedule/legends-exp-white.svg';
import CEL from '../../../public/img/schedule/celebrity-proam-white.svg';
import IRE from '../../../public/img/schedule/IRELAND.png'; 
import AMR from '../../../public/img/schedule/USA.png'; 
import SWI from '../../../public/img/schedule/SWITZERLAND.png';
import {useRouter} from "next/navigation";

export default function ScheduleDrawer() {
  const [scrolled, setScrolled] = useState(false);

  const router = useRouter();

  const handleNavigation = () => {
    router.push('/schedule');
  };

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
      className={`fixed left-0 w-screen  h-[320px] bg-[#522367] font-brown-light justify-around z-50 ${
        scrolled ? "mt-[13px]" : "mt-[13px]"
      }`}
    >
      <div className="flex flex-row items-start flex  justify-center xl:mr-[75px] ml-[10px]">
        <div className="flex flex-col mt-[30px]">
          <a href="/schedule" className="text-white  hover:font-semibold">
            FULL SCHEDULE
          </a>
          <a href="/past-matches" className="text-white hover:font-semibold">
            QUALIFYING
          </a>
          <a href="/full-schedule" className="text-white hover:font-semibold">
            VOLUNTEERING
          </a>
        </div>
        <div className="flex flex-col items-center xl:pl-[160px] lg:pl-[100px]">
          <div className="flex space-x-4">
            <Image src={LEG} className="w-[80px] h-[80px]" alt="Legends Exp" />
            <Image src={CEL} className="w-[80px] h-[80px]" alt="Celebrity Pro-Am" />
          </div>
          <Image src={IRE} className="w-[50px] h-[50px] mt-[-15px]" alt="New Image" />
          <div className="mt-2 flex flex-col items-center space-y-1">
            <span className="text-white">19 - 22 June 2024</span>
            <span className="text-white font-bold pt-[6px]">OFX Irish Legends</span>
            <span className="text-white text-[13px] pt-[6px]">Seapoint Golf Links, Co Louth</span>
          </div>
          <div className="pt-[10px]">
          <button className="text-white font-bold text-[15px]">RESULTS</button>
            <hr className="bg-white h-[3px] w-[65px]" />
          </div>
        </div>
        <div className="xl:ml-8 ml-4 mr-4 h-[230px] w-[1.5px] bg-white mt-[26px] xl:ml-[40px]"></div>
        <div className="flex flex-col items-center xl:pl-[40px]">
          <div className="flex space-x-4">
            <Image src={LEG} className="w-[80px] h-[80px]" alt="Legends Exp" />
            
          </div>
          <Image src={AMR} className="w-[50px] h-[50px] mt-[-15px]" alt="New Image" />
          <div className="mt-2 flex flex-col items-center space-y-1">
            <span className="text-white">27 - 30 June 2024</span>
            <span className="text-white font-bold pt-[6px]">US Senior Open</span>
            <span className="text-white text-[13px] pt-[6px]">Newport Country Club, Rhode</span>
            <span className="text-white text-[13px]">Island</span>
          </div>
          <div className="pt-[6px] ">
            <button className="text-white bg-[#c42727] w-[85px]">LIVE</button>
      
            
          </div>
          <hr className="bg-white h-[3px] w-[85px]" />
        </div>
        <div className="xl:ml-8 ml-4 mr-4 h-[230px] w-[1.5px] bg-white mt-[26px] xl:ml-[40px]"></div>
        <div className="flex flex-col items-center xl:pl-[40px]">
          <div className="flex ">
            <Image src={LEG} className="w-[80px] h-[80px]" alt="Legends Exp" />
            
          </div>
          <Image src={SWI} className="w-[50px] h-[50px] mt-[-15px]" alt="New Image" />
          <div className="mt-2 flex flex-col items-center space-y-1">
            <span className="text-white">12 - 14 July 2024</span>
            <span className="text-white font-bold pt-[6px]">Swiss Seniors Open</span>
            <span className="text-white text-[13px] pt-[6px]">Golf Club Bad Ragaz</span>
          </div>
          <div className="pt-[10px]">
            <button className="text-white font-bold text-[15px]">View</button>
           
            <hr className="bg-white h-[3px] w-[35px]" />
          </div>
        </div>
        <div className="pt-[125px] pl-[80px]">
          <button className="text-white pb-[5px] text-[19px]"
                  onClick={handleNavigation}
          >VIEW MORE</button>
            <hr className="bg-white h-[3px] w-[110px] pt-10px]" />
          </div>
      </div>
    </div>
  );
}
