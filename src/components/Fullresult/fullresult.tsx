"use client";
import Image from 'next/image';
import HeadSection from '@/components/Common/headSection';
import MiddleSection from '@/components/Common/middleSection';
import CardContainer from '@/components/Common/cardContainer';
import CardCarousel from '@/components/Common/cardCarousel';
import ButtomSection from '@/components/Common/buttomSection';
import Partners from '@/components/Partners/Partners';
import Cards from '@/components/cards/page';
import SocialSection from '@/components/Rankings/SocialSection';
import PlayerTable from '@/components/Fullresult/PlayerTable1';
import PlayerTable2 from '@/components/Fullresult/PlayerTable2';
import PlayerTable3 from '@/components/Fullresult/PlayerTable3';
import StickyNavbar from '@/components/Fullresult/stickyNavBar'
import StickyNavbarMiddleSize from '@/components/Fullresult/stickyNavBarMiddleSize'
import Paragraph from '@/components/Fullresult/paragraphSection';
import BannerDetails from '@/components/OverlayBannerCarousel/OverlayBannerCarousel';
import {Button} from "../ui/button";
import React from "react";


function ScheduleComponent() {
    return (
        <div className="bg-[#f2f2f2] ">

            <StickyNavbarMiddleSize />

            <div className='tracking-wider overflow-hidden '>
                <div className="relative w-full">
                    <img
                        src="https://d1j6ra8qdo17fv.cloudfront.net/wp-content/uploads/2021/04/4thgreen5.jpg"
                        alt=""
                        className="w-full h-[240px] md:h-[540px] object-cover opacity-80 bg-custom-gradient"
                    />
                    <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center"></div>
                    <div className="absolute bottom-0 left-0 p-4 text-white text-[30px] md:text-[40px] lg:text-[58px] font-brown-bold font-bold lg:mb-[13rem] md:mb-[12rem] sm:mb-[5rem] mb-[4rem]  flex items-center justify-center w-full">
                        <h1 className='xl:mr-[400px] lg:mr-[170px] lg:max-w-[800px] md:max-w-[650px] md:mr-[20px] max-w-[450px] sm:mr-[200px] ml-[20px] md:ml-0  leading-none'>Farmfoods European Legends Links  Championship</h1>


                    </div>
                    <div className="absolute bottom-0 left-0 p-4 text-white text-[16px] md:text-[30px] lg:text-[38px] font-brown-bold font-bold lg:mb-[3rem] md:mb-[2rem] sm:mb-[1rem] flex items-center justify-center w-full">
                        <h3 className=' xl:mr-[750px] lg:mr-[500px] lg:max-w-[450px] md:max-w-[350px] max-w-[200px] sm:mr-[450px]  ml-[20px] md:ml-0 md:mr-[320px] mobile-sm:mr-[100px] mobile-md:mr-[130px] mobile-lg:mr-[180px] mt-[20px] md:mt-[40px] leading-none '>17 - 20 June 2021
                            Trevose Golf & Country Club
                            England</h3>

                    </div>
                </div>
                <div className="bg-white  flex item-center  block lg:hidden border-b-2 border-[#522367]">
                    <div className="w-full m-4">
                        <Button className="  h-[53px] w-full text-lg font-brown-bold">
                            MORE ABOUT TREVOSE
                        </Button>
                    </div>
                </div>
            </div>

            <StickyNavbar />

            <div id="overview">
            <Paragraph />
            </div>
            <BannerDetails
                titles={[
                    "Paul Lawrie",
                    "Title 2",
                    "Title 3",
                    "Title 4"
                ]}
                descriptions={[
                    "“I’m personally itching to get back out onto the beautiful Championship course next summer. To compete against such talented individuals in a breath-taking location is truly an honour for me, I’m confident this tournament will be one to remember.”",
                    "“Beautiful. The scenery is stunning, the course is magnificent - it’s a great Links Course.”",
                    "“Trevose is very nice. It's my kind of golf – you have to keep the ball on the ground and not in the air, which I like. I was brought up on Links courses in Aberdeen so any time you need to keep the ball down, I enjoy my golf that little bit more.”",
                    "“Trevose is absolutely stunning I have to say – it's amazing. It’s a beautiful golf course – they are all really good golf holes."
                ]}
                images={[
                    "/img/experience/LT-Webpage-Header-Image-2-5.png",
                    "/img/experience/SF1_0066_261472aa-8ff1-43c4-bb7d-f976d323d864.jpg",
                    "/img/experience/GettyImages-1403475817-e1714122004183.jpg",
                    "/img/experience/GettyImages-1403475817-e1714122004183.jpg"
                ]}
                overlayPosition="left"

            />
            <div id="result">
                <PlayerTable />
            </div>

                <HeadSection />


            <MiddleSection />
            <CardContainer />
            <CardCarousel />
            <ButtomSection />
            <Cards />
            {/*<div className="overflow-hidden ">*/}
            {/*    <SocialSection/>*/}
            {/*</div>*/}
            <Partners />
        </div>
    );
}

export default ScheduleComponent;
