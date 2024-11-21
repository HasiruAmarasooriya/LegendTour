'use client'

import React, { useState, ChangeEvent } from 'react';
import PlayerTable2024 from '@/components/Ranking/rankTable2024';
import PlayerTable2022 from '@/components/Ranking/rankTable2022';
import PlayerTable2023 from '@/components/Ranking/rankTable2023';
import PlayerTable2021 from '@/components/Ranking/rankTable2021';
import Partners from '@/components/Partners/Partners';
import SocialSection from '@/components/Rankings/SocialSection';

function Ranking() {
    const [selectedYear, setSelectedYear] = useState('2024');

    const handleYearChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedYear(event.target.value);
    };

    return (
        <div className=' tracking-wider overflow-hidden  bg-[#f2f2f2]'>
            <div className="relative w-full hidden md:block">
                <img
                    src="https://d1j6ra8qdo17fv.cloudfront.net/wp-content/uploads/2023/12/Peter-Baker-3.png"
                    alt=""
                    className="w-full h-[240px] md:h-[540px] object-cover opacity-80 bg-custom-gradient"
                />
                <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center"></div>

                {/*<div className="lg:max-w-[800px]  absolute bottom-0 left-0 p-4 text-white text-[24px] md:text-[38px] lg:text-[58px] font-brown-bold font-bold lg:mb-[6rem] md:mb-[3rem] flex items-center justify-center w-full">*/}
                {/*    <h1 className=' md:mr-[100px] leading-none '>MCB Road to Mauritius rankings</h1>*/}
                {/*</div>*/}

                <div className="absolute bottom-0 left-0 flex items-center justify-center text-white text-[30px] lg:text-[58px] md:text-[40px] sm:text-[35px] font-brown-bold font-bold w-full ">
                    <h1 className='lg:mb-[10.5rem] md:mb-[3rem] mb-[2rem]  md:max-w-[800px] sm:max-w-[573px] max-w-[550px]  xl:mr-[390px] lg:mr-[150px] md:mr-[50px] leading-none text-left'>MCB Road to Mauritius rankings</h1>
                </div>

            </div>

            <div className="relative w-full block md:hidden">
                <img
                    src="https://d1j6ra8qdo17fv.cloudfront.net/wp-content/uploads/2023/12/Peter-Baker-2-e1712851052204-1024x699.png"
                    alt=""
                    className="w-full h-[240px] md:h-[540px] object-cover opacity-80 bg-custom-gradient"
                />


                <div className="lg:max-w-[800px]  absolute bottom-0  p-4 text-white text-[24px] md:text-[38px] lg:text-[58px] font-brown-bold font-bold lg:mb-[6rem] md:mb-[3rem] mb-[2rem] flex items-center justify-center w-full">
                    <h1 className=' lg:ml-[60px] leading-none '>MCB Road to Mauritius rankings</h1>
                </div>

            </div>

            <div className="bg-white border-b-2 flex item-center justify-center border-[#522367] p-4 hidden lg:flex">
                <button className="bg-white font-brown-bold text-[#522367] px-8 py-3 rounded-none  text-[16px] xl:mr-[980px] lg:mr-[725px] font-bold lg:max-w-[800px] ">BACK TO TOURNAMENT
                </button>
            </div>
            <div className=" bottom-0 left-0 flex items-center justify-center text-[#522367]  text-[24px] md:text-[38px] lg:text-[58px] font-brown-bold mt-[40px] font-bold w-full ">
                <h1 className='xl:pr-[950px] lg:pr-[730px] md:pr-[540px] sm:pr-[500px]  leading-none text-left'>Ranking</h1>
            </div>

            <div className="flex items-center justify-center font-brown-bold lg:mt-4">
                <div className="h-[10px]  max-w-[1150px] md:mr-[450px] xl:mr-[950px] lg:mr-[750px]  flex flex-col mt-[60px] items-start justify-center">
                    <select
                        className="p-3 rounded-full w-[280px] md:w-[230px] bg-white text-[18px] text-black font-bold border-2 border-gray-400 focus:outline "
                        value={selectedYear}
                        onChange={handleYearChange}
                    >
                        <option className="text-black" value="2021">2021</option>
                        <option className="text-black" value="2022">2022</option>
                        <option className="text-black" value="2023">2023</option>
                        <option className="text-black" value="2024">2024</option>
                    </select>
                </div>
            </div>


            <div className="content sm:p-4 md:p-0 ">
                {selectedYear === '2021' && <div><PlayerTable2021 /></div>}
                {selectedYear === '2022' && <div><PlayerTable2022 /></div>}
                {selectedYear === '2023' && <div><PlayerTable2023 /></div>}
                {selectedYear === '2024' && <div><PlayerTable2024 /></div>}
            </div>
            <div className="flex items-center mt-[230px] justify-center bg-[#522367]   text-white px-8  py-10">
                <div className="bg-[#522367] text-white   mt-auto  rounded-none flex flex-col md:flex-row mobile-lg:flex-row mobile-md:flex-row mobile-sm:flex-row items-center justify-between  md:text-left md:justify-center md:space-x-8 xl:space-x-[150px]">
                    <div className="font-brown-bold">
                        <h1 className=" text-[21px] md:text-2xl xl:text-[36px] lg:text-[30px] md:text-[24px] pb-2">
                            Join My Legends Tour
                        </h1>
                        <p className="text-[12px] xl:text-[24px] lg:text-[21px] md:text-[14px]">
                            Sign up for the latest tournament and ticket news, offers and discounts
                        </p>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <button className="bg-white text-[#522367] px-4 py-2 md:px-4 md:py-3 rounded-none font-brown-regular text-14px lg:text-[24px] md:text-[18px] font-bold">
                            SIGN UP
                        </button>
                    </div>
                </div>
            </div>

            <Partners />
        </div>



    );
}

export default Ranking;
