'use client'

import * as React from "react";
import ScottImg from '../../../public/img/schedule/scott.jpg';
import Flag from '../../../public/img/schedule/AUSTRALIA.png';
import CLOSE from "../../../public/img/news/icons8-close-50.png";
import ALEX from "../../../public/img/news/alex-popup.jpg";
import L1IMG1 from "../../../public/img/news/hpimg1.jpg";
import L1IMG2 from "../../../public/img/news/hpimg2.jpg";
import L1IMG3 from "../../../public/img/news/scottdrawer.jpg";
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

const HeadSection: React.FC<CardViewProps> = ({
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
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
    const [isConciergeDrawerOpen, setIsConciergeDrawerOpen] = React.useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
        if (!isDrawerOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    const toggleConciergeDrawer = () => {
        setIsConciergeDrawerOpen(!isConciergeDrawerOpen);
        if (!isConciergeDrawerOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    React.useEffect(() => {
        // Cleanup on component unmount
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div className="p-4 md:p-8 bg-[#f2f2f2] justify-center items-center flex font-brown-bold">
            <div className="hidden lg:block">
                <div className="flex flex-col md:flex-row items-start font-brown-bold">
                    <div className="relative">
                        <div className="absolute top-0 left-0 w-16 h-16 bg-[#522367] xl:ml-[60px] mt-[20px] flex justify-center items-center">
                            <p className='text-white text-[38px] justify-center pb-[2]'>1</p>
                        </div>
                        <Image className="pt-[20px] xl:pl-[60px] xl:pr-[20px] lg:pr-[10px] xl:w-[950px] h-auto xl:h-[470px] lg:w-[720px] lg:h-[430px] " src={imageSrc} alt="HeaderImage" />
                    </div>

                    <div className="ml-0 md:ml-10 mt-8 md:mt-0 w-full md:w-auto md:mr-[20px]">
                        <div className="pt-[50px]">
                            <p className="text-black text-[25px]">{name}</p>
                            <p className="text-black text-[25px]">{surname}</p>
                        </div>

                        <div className="flex items-start mt-[15px]">
                            <div>
                                <Image className="w-[23px] h-[23px]" src={flagSrc} alt="FlagImage" />
                            </div>
                            <div className="ml-[10px]">
                                <p className="text-[#522367] font-bold text-[18px]">{country}</p>
                            </div>
                        </div>
                        <div className="flex items-start ">
                            <div className="pt-[30px]">
                                <p className="text-black font-brown-regular  font-bold text-[14px]">{year}</p>
                                <p className="text-black font-brown-regular font-bold  text-[14px]">Points</p>
                            </div>
                            <div className=" xl:ml-[150px] lg:ml-[100px] pt-[32px]">
                                <p className="text-black font-bold text-[25px]">{points}</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="pt-[20px] w-full">
                                <hr className="bg-[#b9b9b9] h-[3px] w-full xl:w-[265px] lg:w-[210px] " />
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="pt-[32px]">
                                <p className="text-black font-bold font-brown-regular text-[14px]">Tournaments</p>
                            </div>
                            <div className="ml-[80px] xl:ml-[175px] lg:ml-[110px] pt-[25px]">
                                <p className="text-black font-bold text-[26px]">{tournaments}</p>
                            </div>
                        </div>


                        <div className="flex items-start">
                            <div className="pt-[20px] w-full">
                                <hr className="bg-[#b9b9b9] h-[3px] w-full xl:w-[265px] lg:w-[210px]" />
                            </div>
                        </div>



                        <div className="flex items-start ">
                            <div className="pt-[25px]">
                                <p className="text-black font-bold font-brown-regular text-[14px]">Tournaments results</p>
                            </div>
                        </div>

                        {/*<div className="flex items-start flex-wrap md:flex-nowrap">*/}
                        {/*    <div className="pt-[15px] flex items-start">*/}
                        {/*        <p className="text-black font-bold text-[25px]">0</p>*/}
                        {/*        <p className="text-custom-color-hr text-[8px] mt-4">1ST</p>*/}
                        {/*    </div>*/}

                        {/*    <div className="pt-[15px] xl:pl-[40px] lg:pl-[30px] flex items-start">*/}
                        {/*        <p className="text-black font-bold text-[25px]">1</p>*/}
                        {/*        <p className="text-custom-color-hr text-[8px] mt-4">2ND</p>*/}
                        {/*    </div>*/}

                        {/*    <div className="pt-[15px] xl:pl-[40px] lg:pl-[30px] flex items-start">*/}
                        {/*        <p className="text-black font-bold text-[25px]">0</p>*/}
                        {/*        <p className="text-custom-color-hr text-[8px] mt-4">3RD</p>*/}
                        {/*    </div>*/}

                        {/*    <div className="pt-[15px] xl:pl-[40px] lg:pl-[30px] flex items-start">*/}
                        {/*        <p className="text-black font-bold text-[25px]">0</p>*/}
                        {/*        <p className="text-custom-color-hr text-[8px] mt-2">TOP <br /> TEN</p>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        <div className="flex items-start flex-wrap md:flex-nowrap">
                            {results.map((result, index) => (
                                <div key={index} className={`pt-[15px] ${index > 0 ? 'xl:pl-[40px] lg:pl-[30px]' : ''} flex items-start`}>
                                    <p className="text-black font-bold text-[25px]">{result.count}</p>
                                    <p className="text-custom-color-hr text-[8px] mt-2">{result.label}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-start mt-4">
                            <div className="pt-[20px] w-full">
                                <hr className="bg-[#b9b9b9] h-[3px] w-full xl:w-[265px] lg:w-[210px]" />
                            </div>
                        </div>

                        <div className="flex items-start">
                            <button  className="pt-[25px]">
                                <p className="text-custom-color text-[18px]">VIEW PROFILE</p>
                                <hr className="bg-[#522367] h-[3px] w-[125px]" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:hidden hidden md:block font-brown-bold">
                <div className="relative">
                    <div className="absolute top-0 left-0 w-16 h-16 bg-[#522367] xl:ml-[60px] mt-[20px] flex justify-center items-center">
                        <p className='text-white text-[38px] justify-center pb-[2]'>1</p>
                    </div>
                    <Image className="pt-[20px] xl:pl-[60px] xl:pr-[20px] lg:pr-[10px] xl:w-[950px] h-auto xl:h-[470px] lg:w-[720px] lg:h-[430px] md:w-[650px] md:h-[300px] " src={imageSrc} alt="HeaderImage" />
                </div>
                <div className="pt-[50px]">
                    <p className="text-black text-[25px]">{name}</p>
                    <p className="text-black text-[25px]">{surname}</p>
                </div>

                <div className="flex items-start mt-[15px]">
                    <div>
                        <Image className="w-[23px] h-[23px]" src={flagSrc} alt="FlagImage" />
                    </div>
                    <div className="ml-[10px]">
                        <p className="text-[#522367] font-bold text-[18px]">{country}</p>
                    </div>
                </div>
                <div className="flex items-start mt-4">
                    <div className="pt-[30px]">
                        <p className="text-black  text-[14px]">{year}</p>
                        <p className="text-black  text-[14px]">Points</p>
                    </div>
                    <div className="ml-[530px]  pt-[32px]">
                        <p className="text-black  text-[26px]">{points}</p>
                    </div>
                </div>

                <div className="flex items-start">
                    <div className="pt-[20px] w-full">
                        <hr className="bg-[#b9b9b9] h-[3px] w-full md:w-[643px]" />
                    </div>
                </div>

                <div className="flex items-start mt-4">
                    <div className="pt-[15px]">
                        <p className="text-black font-bold text-[14px]">Tournaments</p>
                    </div>
                    <div className="ml-[540px]  pt-[25px]">
                        <p className="text-black font-bold text-[26px]">{tournaments}</p>
                    </div>
                </div>

                <div className="flex items-start">
                    <div className="pt-[5px] w-full">
                        <hr className="bg-[#b9b9b9] h-[3px] w-full md:w-[643px]" />
                    </div>
                </div>

                <div className="flex items-start mt-4">
                    <div className="pt-[5px]">
                        <p className="text-black font-bold text-[14px]">Tournaments results</p>
                    </div>
                </div>

                {/*<div className="flex items-start flex-wrap md:flex-nowrap">*/}
                {/*    <div className="pt-[15px] flex items-start">*/}
                {/*        <p className="text-black font-bold text-[26px]">0</p>*/}
                {/*        <p className="text-custom-color-hr text-[8px] mt-4">1ST</p>*/}
                {/*    </div>*/}

                {/*    <div className="pt-[15px] pl-[180px] flex items-start">*/}
                {/*        <p className="text-black font-bold text-[26px]">2</p>*/}
                {/*        <p className="text-custom-color-hr text-[8px] mt-4">2ND</p>*/}
                {/*    </div>*/}

                {/*    <div className="pt-[15px] pl-[180px] flex items-start">*/}
                {/*        <p className="text-black font-bold text-[26px]">0</p>*/}
                {/*        <p className="text-custom-color-hr text-[8px] mt-4">3RD</p>*/}
                {/*    </div>*/}

                {/*    <div className="pt-[15px] pl-[180px] flex items-start">*/}
                {/*        <p className="text-black font-bold text-[26px]">1</p>*/}
                {/*        <p className="text-custom-color-hr text-[8px] mt-2">TOP <br /> TEN</p>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div className="flex items-start flex-wrap md:flex-nowrap">
                    {results.map((result, index) => (
                        <div key={index} className={`pt-[15px] ${index > 0 ? 'pl-[180px]' : ''} flex items-start`}>
                            <p className="text-black font-bold text-[25px]">{result.count}</p>
                            <p className="text-custom-color-hr text-[8px] mt-2">{result.label}</p>
                        </div>
                    ))}
                </div>

                <div className="flex items-start ">
                    <div className="pt-[20px] w-full">
                        <hr className="bg-[#b9b9b9] h-[3px] w-full md:w-[643px]" />
                    </div>
                </div>

                <div className="flex items-start">
                    <button  className="pt-[25px]">
                        <p className="text-custom-color text-[18px]">VIEW PROFILE</p>
                        <hr className="bg-[#522367] h-[3px] w-[125px]" />
                    </button>
                </div>
            </div>


            {/* Drawer */}
            {isDrawerOpen && (
                <div className="fixed inset-0 z-50 flex justify-center bg-black bg-opacity-80 overflow-y-auto">
                    <div className="bg-white w-[2100px] mt-[60px] mb-[60px] md:max-w-6xl h-[900px] overflow-hidden relative">
                        <div className="absolute top-[20px] right-[20px]">
                            <button onClick={toggleDrawer} className="text-black text-lg">
                                <Image
                                    src={CLOSE}
                                    alt=""
                                    className="w-[50px] h-[50px]"
                                />
                            </button>
                        </div>
                        <div className="bg-[#f2f2f2] w-[2100px] h-[175px] ">
                            <h2 className="text-[40px]  text-[#522367] pl-[6.25rem] pr-[6.25rem] pt-[4rem] pb-[1rem] mb-4">{name} {surname}</h2>
                        </div>
                        <div className="flex justify-between ">
                            <p className="pl-[6.25rem] mt-[25px] mb-[20px] font-brown-regular text-[#232323]  text-[18px] uppercase">Introducing Scott...</p>
                            <button className="bg-[#522367] text-[18px] text-white px-8 py-3 mr-[100px] mt-[15px] mb-[15px] uppercase ">
                                Contact our Concierge
                            </button>
                        </div>
                        <div className="bg-[#f2f2f2] flex justify-between">
                            <div className="mt-[65px]">
                                <p className="pl-[6.25rem] text-[18px] mb-[35px] font-brown-regular text-[#232323]">The Australian made his Legends Tour debut in 2023 and won <br />his very first event, the WINSTONgolf Senior Open! Two rounds <br />of 70 followed by a final day 66 was enough to see him win by <br />a single shot ahead of Peter Baker and Phillip Archer.</p>
                                <button className="bg-[#522367] ml-[6.25rem] text-[18px] text-white px-8 py-3 mr-[100px] mt-[15px] mb-[15px] uppercase ">
                                    View full profile
                                </button>
                            </div>
                            <div className="mr-[100px] mt-[65px] mb-[99px]">
                                <Image
                                    src={imageSrc}
                                    alt=""
                                    className="w-[396.66px] h-[480px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Concierge Drawer */}
            {isConciergeDrawerOpen && (
                <div className="fixed inset-0 z-50 flex justify-center bg-black bg-opacity-80 overflow-y-auto">
                    <div className="bg-white w-[2100px] mt-[60px] mb-[60px] md:max-w-6xl h-[900px] overflow-hidden relative">
                        <div className="absolute top-[20px] right-[20px]">
                            <button onClick={toggleConciergeDrawer} className="text-black text-lg">
                                <Image
                                    src={CLOSE}
                                    alt=""
                                    className="w-[50px] h-[50px]"
                                />
                            </button>
                        </div>
                        <div className="bg-[#f2f2f2] w-[2100px] h-[175px] ">
                            <h2 className="text-[40px]  text-[#522367] pl-[6.25rem] pr-[6.25rem] pt-[4rem] pb-[1rem] mb-4">Legends Tour Head Concierge</h2>
                        </div>

                        <div className="bg-[#f2f2f2] flex justify-between">
                            <div className=" ml-[6.25rem] mt-[65px] mb-[99px]">
                                <Image
                                    src={ALEX}
                                    alt=""
                                    className="w-[376.66px] h-[480px]"
                                />
                            </div>
                            <div className="mt-[65px]">
                                <p className=" mr-[100px] align-left text-[26px] mb-[48px] font-brown-regular text-[#232323]">Each membership can be customised to your own <br/>requirements and Alex is on hand to offer a <br/>consultation to define and advise.</p>
                                <button className="bg-[#522367] text-[18px] text-white px-8 py-3 mr-[100px] mt-[15px] mb-[15px] uppercase ">
                                    View full profile
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );

};


const playerData = {
    imageSrc: ScottImg,
    name: 'Scott',
    number: 1,
    surname: 'HEND',
    country: 'AUSTRALIA',
    flagSrc: Flag,
    year: 2024,
    points: 1581.5,
    tournaments: 3,
    results: [
        { count: 0, label: '1ST' },
        { count: 2, label: '2ND' },
        { count: 0, label: '3RD' },
        { count: 1, label: 'TOP TEN' },
    ],
};


const PlayerData = () => {
    return (
        <HeadSection
            imageSrc={playerData.imageSrc}
            name={playerData.name}
            number={playerData.number}
            surname={playerData.surname}
            country={playerData.country}
            flagSrc={playerData.flagSrc}
            year={playerData.year}
            points={playerData.points}
            tournaments={playerData.tournaments}
            results={playerData.results}
        />
    );
};

export default PlayerData;
