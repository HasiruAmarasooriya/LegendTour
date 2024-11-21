"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import React from "react";

const Header: React.FC = () => {
    return (

        <div className=" flex flex-col relative">
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 5000,
                    }),
                ]}
                className="relative"
            >
                <CarouselContent className=" flex">
                    <CarouselItem className="w-full flex-shrink-0  relative">

                        <div
                            className="absolute inset-0 bg-gradient-to-r from-[#333] via-[rgba(51,51,51,.2)] to-[rgba(51,51,51,0)]"></div>
                        <div className="absolute md:px-[40px] ml-[10px] md:ml-0 mx-auto w-[100%] ">
                            <div className=" w-full">

                                <div className=" inset-0 bg-black opacity-50 flex items-center justify-center"></div>
                                <div className=" bottom-0 left-0 p-4 text-white font-brown-bold font-bold mt-[1rem] mb-[5rem] md:mt-[10rem] md:mb-[6rem] md:mb-[8rem]  flex items-center justify-center w-full">
                                    <div>
                                    <h1 className='xl:mr-[600px] lg:mr-[350px] lg:max-w-[600px] md:max-w-[650px] max-w-[250px] md:mr-[100px] max-w-[450px] sm:mr-[200px] text-[32px] md:text-[38px] lg:text-[60px]  md:leading-[60px] leading-none mb-[2rem] mr-[50px] '>Marbella Legends Playing Experiences</h1>

                                    <h1 className='xl:mr-[600px] lg:mr-[140px] lg:max-w-[600px] md:max-w-[650px] md:mr-[100px] max-w-[450px] sm:mr-[200px] text-[24px]  lg:text-[40px]  md:leading-[50px] leading-none'>Ever wanted to walk in the shoes of a pro golfer?</h1>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 md:p-4 text-white text-[18px] pr-[40px] md:mr-0 font-brown-bold font-bold  flex items-center justify-center w-full">

                                    <button className="bg-[#522367] lg:mt-[6rem] text-white px-4 py-3 md:w-[150px] mt-0 md:ml-[18px]  xl:mr-[1080px] lg:mr-[790px] md:mr-[540px] w-full ">
                                        LEARN MORE
                                    </button>

                                </div>
                            </div>
                        </div>
                        <img
                            src="/img/carousel/Aloha-Golf-Club-CS-Photo-2.jpg"
                            alt="Image 1"
                            className=" object-cover md:h-[605px] h-[325px] w-full"
                        />
                    </CarouselItem>
                    <CarouselItem className="w-full flex-shrink-0  relative">

                        <div
                            className="absolute inset-0 bg-gradient-to-r from-[#333] via-[rgba(51,51,51,.2)] to-[rgba(51,51,51,0)]"></div>
                        <div className="absolute  z-10 px-[40px] mx-auto w-[100%]">
                            {/*<div className=" absolute left-[6%] top-[250px] w-full flex flex-col space-y-4 flex items-center justify-center ">*/}
                            {/*    <div*/}
                            {/*        className="mr-[40px]  md:ml-[18px] font-bold text-[60px] leading-[1em] tracking-[-1px] text-white mb-12 xl:mr-[650px] lg:mr-[200px]">*/}
                            {/*        Da Silva wins OFX Irish Legends*/}
                            {/*    </div>*/}
                            {/*    <button className="md:ml-[18px] bg-[#522367] text-white px-4 py-3 w-[150px] mt-0 xl:mr-[1280px] lg:mr-[880px] md:mr-[600px] ">*/}
                            {/*        READ MORE*/}
                            {/*    </button>*/}
                            {/*</div>*/}
                            <div className=" w-full">

                                <div className=" inset-0 bg-black opacity-50 flex items-center justify-center"></div>
                                <div className=" bottom-0 left-0 p-4 text-white text-[30px] md:text-[40px] lg:text-[58px] font-brown-bold font-bold md:mt-[20rem] mt-[17rem] md:mb-[12rem]   flex items-center justify-center w-full">
                                    {/*<h1 className='xl:mr-[350px] lg:mr-[140px] lg:max-w-[1000px] md:max-w-[650px] md:mr-[100px] max-w-[450px] sm:mr-[200px]   leading-none'>Da Silva wins OFX Irish Legends</h1>*/}


                                </div>
                                <div className="absolute bottom-0 left-0 pr-[40px] md:mr-0 p-4 text-white text-[18px]  font-brown-bold font-bold  flex items-center justify-center w-full">

                                    <button className="bg-[#522367] lg:mt-[12rem] text-white px-4 py-3 md:w-[150px] mt-0 md:ml-[18px]  xl:mr-[1050px] lg:mr-[790px] md:mr-[540px] w-full ">
                                        LEARN MORE
                                    </button>

                                </div>
                            </div>
                        </div>
                        <img
                            src="/img/carousel/Untitled.jpeg"
                            alt="Image 2"
                            className="object-cover md:h-[605px] h-[325px] w-full "
                        />
                    </CarouselItem>
                </CarouselContent>
            </Carousel>

            {/* Uncomment if needed for larger screens */}
            {/* <Card className="hidden md:block absolute top-40 right-20 bg-white p-4 shadow-lg rounded-none w-[300px] lg:w-[400px] text-left">
                <CardHeader>
                    <CardTitle className="font-bold text-md mb-2 p-5">TEE TIMES</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                    <ul>
                        <li>08:50 - Marc FARRY, José COCERES, Carlos BALMASEDA</li>
                        <li>09:00 - Mikael LUNDBERG, Michael LONG, Paul EALES</li>
                        <li>09:10 - Andrew OLDCORN, Scott DRUMMOND, Simon KHAN</li>
                    </ul>
                </CardContent>
                <CardFooter>
                    <button className="mt-2 bg-[#522367] text-white px-4 py-2">
                        VIEW ALL TEE TIMES
                    </button>
                </CardFooter>
            </Card> */}



            {/*<div className="flex items-center  justify-center bg-[#522367]  mb-20 text-white px-8  py-10">*/}
            {/*    <div className="bg-[#522367] text-white p-6 md:p-8 mt-auto  rounded-none flex flex-col md:flex-row   ">*/}
            {/*        <div className="font-brown-bold">*/}
            {/*            <h1 className=" text-xl md:text-2xl lg:text-4xl pb-2 xl:mr-[380px]">*/}
            {/*                Join My Legends Tour*/}
            {/*            </h1>*/}
            {/*            <p className="font-bold text-lg md:text-xl">*/}
            {/*                Receive priority ticket access, exclusive content and*/}
            {/*                enter competitions.*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*        <div className="mt-4 md:mt-0">*/}
            {/*            <button className="bg-white text-[#522367] px-6 py-2 md:px-8 md:py-3 rounded-none text-lg md:text-xl font-bold xl:mr-[35px]">*/}
            {/*                JOIN*/}
            {/*            </button>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className="bg-[#522367] text-white md:p-8 mt-auto mb-20 rounded-none flex flex-col md:flex-row items-center justify-between text-center md:text-left md:justify-center md:space-x-8 xl:space-x-[370px]">*/}
            {/*    <div className="font-bold">*/}
            {/*        <h1 className="font-brown-bold text-xl md:text-2xl lg:text-4xl pb-2">*/}
            {/*            Join My Legends Tour*/}
            {/*        </h1>*/}
            {/*        <p className="font-brown-bold text-lg md:text-xl">*/}
            {/*            Receive priority ticket access, exclusive content and*/}
            {/*            enter competitions.*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*    <div className="mt-4 md:mt-0">*/}
            {/*        <button className="bg-white text-[#522367] px-6 py-2 md:px-8 md:py-3 rounded-none text-lg md:text-xl font-brown-bold">*/}
            {/*            JOIN*/}
            {/*        </button>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="flex items-center  justify-center bg-[#522367]  text-white px-8  md:py-8 py-4 mb-[80px]">
                <div className="bg-[#522367] text-white  xl:mr-[30px]  mt-auto  rounded-none flex flex-col md:flex-row mobile-lg:flex-row mobile-md:flex-row mobile-sm:flex-row items-center justify-between  md:text-left md:justify-center md:space-x-[70px] xl:space-x-[200px]">
                    <div className="font-brown-bold">
                        <h1 className=" text-[21px] xl:text-[36px] lg:text-[30px] md:text-[24px] pb-2">
                            Join My Legends Tour
                        </h1>
                        <p className="text-[12px] xl:text-[24px] lg:text-[21px] md:text-[14px]">
                            Receive priority ticket access, exclusive content and
                            enter competitions.
                        </p>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <button className="bg-white text-[#522367] px-6 py-2 md:px-8 md:py-3 rounded-none font-brown-regular text-14px lg:text-[24px] md:text-[18px] font-bold">
                            JOIN
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
