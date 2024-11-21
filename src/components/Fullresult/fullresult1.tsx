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
import StickyNavbar from '@/components/Fullresult/stickyNew';
import Paragraph from '@/components/Fullresult/paragraphSection2';
import Banner from '@/components/Fullresult/overlayBanner1';
import SheduleImgComponent from '../Fullresult/SheduleImgComponent';
import BGImage from '../../../public/img/news/EFR-Travel_Agency_PartnerBanner.png'



function ScheduleComponent() {
    return (
        <div className="bg-[#f2f2f2] ">
            <div className='tracking-wider overflow-hidden'>
                <div className="relative w-full">
                    <img
                        src="https://d1j6ra8qdo17fv.cloudfront.net/wp-content/uploads/2021/08/GettyImages-1331814144.jpg"
                        alt=""
                        className="w-full h-[340px] md:h-[540px] object-cover opacity-80 bg-custom-gradient"
                    />
                    <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center"></div>

                    <div className="absolute bottom-0 left-0 p-4 text-white text-[35px] md:text-[40px] lg:text-[58px] font-brown-bold font-bold mb-[10rem] mobile-lg:mb-[7rem] sm:mb-[5rem] md:mb-[10rem] lg:mb-[14rem] flex items-center justify-center w-full">
                        <h1 className='lg:max-w-[800px] md:max-w-[800px] sm:max-w-[600px] xl:mr-[440px] lg:mr-[150px] ml-[20px] md:mr-[10px] leading-none text-left'>
                            Staysure PGA Seniors Championship
                        </h1>
                    </div>

                    <div className="absolute bottom-0 left-0 p-4 text-white text-[24px] md:text-[28px] lg:text-[38px] font-brown-bold font-bold mb-[1rem] mobile-lg:mb- md:mb-[2rem] lg:mb-[3rem]   flex md:items-center justify-center w-full">
                        <h3 className='lg:max-w-[568px] md:max-w-[500px] sm:max-w-[500px] xl:mr-[650px] lg:mr-[380px] ml-[20px] md:mr-[230px]  mt-[20px] md:mt-[40px] lg:mt-[60px] leading-none  md:text-left'>
                            29 July - 1 August 2021
                            Formby Golf Club and Formby  Ladies Golf Club
                            England
                        </h3>
                    </div>
                </div>
            </div>

            <StickyNavbar />
            <div id="overview">
                <Paragraph />
            </div>
            <Banner />
            <div id="result">
                <PlayerTable2 />
            </div>
            <HeadSection />
            <MiddleSection />
            <CardContainer />
            <CardCarousel />
            <ButtomSection />
            <SheduleImgComponent
                mainText="Our Official Travel Services Partner"
            smallText="As the Official Travel Services Partner for the Legends Tour, Elegant Golf Resorts will be producing an extensive range of bucket-list experiences around these events as well as bespoke holidays surrounding the tournaments."
            button="FIND OUT MORE"
            image="https://d1j6ra8qdo17fv.cloudfront.net/wp-content/uploads/2021/08/EFR-Travel_Agency_PartnerBanner.png"/>
            <div className=" w-full mb-[50px]">


                <div className=" bottom-0 left-0 p-4 text-[#522367] text-[30px] md:text-[30px] lg:text-[60px] font-brown-bold font-bold mb-[2rem]  flex items-center justify-center w-full">
                    <h1 className='xl:max-w-[1000px] md:max-w-[800px] sm:max-w-[600px] xl:mr-[300px] lg:mr-[150px]   md:mr-[220px] leading-none text-left'>
                        More upcoming Tournaments
                    </h1>
                </div>

                <div className=" bottom-0 left-0  text-[#232323] text-[18px] md:text-[18px] lg:text-[26px] font-brown-light  flex items-center justify-center w-full">
                    <h3 className='xl:max-w-[650px] lg:max-w-[568px] md:max-w-[400px]  xl:mr-[480px] lg:mr-[380px] ml-[25px] md:ml-0 md:mr-[240px]  text-left'>
                        From winter sun destinations to iconic links, creating memorable golfing experiences across the globe…be part of the action
                    </h3>
                </div>
            </div>
            <Cards />
            {/*<div className="overflow-hidden ">*/}
            {/*<SocialSection/>*/}
            {/*</div>*/}
            <Partners />
        </div>
    );
}

export default ScheduleComponent;
