import React from 'react';
import Card from '../News/NewsCardView';
import L1IMG1 from '../../../public/img/news/PV707836.jpg';
import L1IMG2 from '../../../public/img/news/GettyImages-2180963576.jpg';
import L1IMG3 from '../../../public/img/news/GettyImages-2180736975.jpg';


const NewsSection = () => {
    return (
        <div>
        <div className=" bottom-0 left-0 flex items-center justify-center text-[#522367]  text-[24px] md:text-[38px] lg:text-[58px] font-brown-bold mt-[40px] font-bold w-full ">
            <h1 className='xl:pr-[1000px] md:mb-[50px] lg:pr-[830px] md:pr-[630px] sm:pr-[500px]  leading-none text-left'>News</h1>
        </div>

        <div className="flex flex-row xl:justify-center justify-start items-center p-[20px] xl:space-x-[50px] space-x-[30px] overflow-x-auto">

            <Card
                imageSrc={L1IMG3}
                title="ONES TO WATCH – FARMFOODS EUROPEAN SENIOR MASTERS"
                date="7 November 2024"
                link="/senior-master"
                description=""
                buttonText=""
                buttonLink=""
            />


            <Card
                imageSrc={L1IMG1}
                title="GÖGELE ROMPS TO MAIDEN TITLE IN ITALY"
                date="26 October 2024"
                link="/gogele-romps-to-maiden-title-in-italy"
                description=""
                buttonText=""
                buttonLink=""
            />

            <Card
                imageSrc={L1IMG2}
                title="GÖGELE IN POLE POSITION AT SAN DOMENICO"
                date="25 October 2024"
                link="/new-page"
                description=""
                buttonText=""
                buttonLink=""
            />

        </div>
        </div>
    );
};

export default NewsSection;
