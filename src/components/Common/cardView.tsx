'use client'

import * as React from 'react';
import Image, { StaticImageData } from 'next/image';

interface CardViewProps {
  imageSrc: StaticImageData;
  name: string;
  number: number;
  surname: string;
  country: string;
  flagSrc: StaticImageData;
  year: number;
  points: number;
  tournaments: number;
  results: { count: number; label: string }[];
}

const CardView: React.FC<CardViewProps> = ({
  imageSrc,
  name,
  number,
  surname,
  country,
  flagSrc,
  year,
  points,
  tournaments,
  results
}) => {
  return (

    <div className="hidden md:block ">
      <div className='ml-[10px] xl:ml-[20px] '>
        <div className="flex-item-start font-brown-bold ">
          <div className="relative">
            <div className="absolute top-0 left-0 w-16 h-16 bg-[#522367] ml-[20px] mt-[50px] font-brown-bold flex justify-center items-center">
              <p className='text-white text-[27px] '>{number}</p>
            </div>
            <Image className="pt-[50px] pl-[20px] w-[280px] h-[400px]" src={imageSrc} alt="HeaderImage" />
          </div>

          <div className="flex items-start ">
            <div className="ml-[20px]">
              <div className="pt-[20px] " >
                <p className="text-black text-[26px]">{name}</p>
                <p className="text-black text-[26px]">{surname}</p>
              </div>

              <div className="flex items-start mt-[15px]">
                <div>
                  <Image className="w-[23px] h-[23px]" src={flagSrc} alt="FlagImage" />
                </div>
                <div className="ml-4 ">
                  <p className="text-[#522367] font-bold text-[18px]">{country}</p>
                </div>
              </div>

              <div className="flex items-start mt-4">
                <div className="pt-[30px]">
                  <p className="text-black font-bold text-[14px]">{year}</p>
                  <p className="text-black font-bold text-[14px]">Points</p>
                </div>
                <div className="ml-[160px] pt-[32px]">
                  <p className="text-black font-bold text-[26px]">{points}</p>
                </div>
              </div>

              <div className="flex items-start ">
                <div className="pt-[20px]">
                  <hr className="bg-[#b9b9b9] h-[3px] w-[265px]" />
                </div>
              </div>

              <div className="flex items-start ">
                <div className="pt-[32px]">
                  <p className="text-black font-bold text-[14px]">Tournaments</p>
                </div>
                <div className="ml-[165px] pt-[25px]">
                  <p className="text-black font-bold text-[26px]">{tournaments}</p>
                </div>
              </div>

              <div className="flex items-start ">
                <div className="pt-[20px]">
                  <hr className="bg-[#b9b9b9] h-[3px] w-[265px]" />
                </div>
              </div>

              <div className="flex items-start ">
                <div className="pt-[25px]">
                  <p className="text-black font-bold text-[14px]">Tournaments results</p>
                </div>
              </div>
              <div className="flex items-start ">
                {results.map((result, index) => (
                  <div key={index} className={`pt-[15px] ${index > 0 ? 'pl-[40px]' : ''} flex items-start`}>
                    <p className="text-black font-bold text-[26px]">{result.count}</p>
                    <p className="text-custom-color-hr text-[8px] mt-4">{result.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-start ">
                <div className="pt-[20px]">
                  <hr className="bg-[#b9b9b9] h-[3px] w-[265px]" />
                </div>
              </div>

              <div className="flex items-start ">
                <div className="pt-[25px]">
                  <p className="text-custom-color text-brown-regular text-[18px]">VIEW PROFILE</p>
                  <hr className="bg-[#522367] h-[3px] w-[125px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardView;