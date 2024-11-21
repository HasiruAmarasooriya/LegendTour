import LegendsTourMembership from '@/components/Join/Join';
import JoinCard from '@/components/Join/JoinCard';
import Partners from '@/components/Partners/Partners';
import TicketsCards from '@/components/TicketsCards/TicketsCards';
import SocialSection from '@/components/Rankings/SocialSection';
import Image from "next/image";
import Header from "../../../public/img/Join/GettyImage.jpg";
import React from 'react';

export default function Players() {
    return (
      <div className='bg-[#f2f2f2] '>
        {/*<LegendsTourMembership */}
        {/*  title="Legends Tour Membership" */}
        {/*  description="There are various membership options that allow you to engage with the Legends of the game:" */}
        {/*  imageUrl='/img/Join/GettyImage.jpg'*/}
        {/*/>*/}
          <div className='font-brown-regular overflow-hidden bg-[#f2f2f2] '>
              <div className="relative w-full">
                  <Image
                      src={Header}
                      alt=""
                      className="w-full h-[240px] md:h-[600px] object-cover opacity-75 bg-custom-gradientImg"
                  />
                  <div className="absolute inset-0 bg-black opacity-50 "></div>
                  <div className="absolute bottom-0 left-0 flex items-center justify-center text-white text-[30px] lg:text-[58px] md:text-[40px] sm:text-[35px] font-brown-bold font-bold w-full ">
                      <h1 className='lg:mb-[10.5rem] md:mb-[3rem] mb-[2rem]  md:max-w-[700px] sm:max-w-[573px] max-w-[550px]  xl:mr-[490px] lg:mr-[250px] md:mr-[200px] ml-[20px] leading-none text-left'>Legends Tour Membership</h1>
                  </div>
              </div>
              <div className="relative bottom-0 left-0 p-4 text-[#522367] text-[24px] lg:text-[40px] md:text-[27px] font-brown-bold font-bold lg:mt-[-60px] md:mt-[20px] sm:mt-[20px] ">
                  <div className="absolute left-0 lg:w-[62%]  h-[225px] flex items-center justify-center  bg-[#f2f2f2] mt-[-50px] "></div>
                  <div className="flex items-center justify-center">
                      <h1 className='relative leading-none   xl:max-w-[800px] lg:max-w-[600px] md:max-w-[730px] sm:max-w-[550px] xl:mr-[400px] lg:mr-[360px] md:ml-[20px] text-left  mb-[6.5rem] text-[#522367]'>
                          There are various membership options that allow you to engage with the Legends of the game:
                      </h1>
                  </div>

              </div>
          </div>
        <JoinCard/>

        <Partners />
      </div>
    );
}
