import React from 'react';
import Image from 'next/image';
import Header from '../../../public/img/news/GettyImages-2180736975.jpg';
import Paragraph from '../News/seniorMasterParagraphSection'
import Partners from '@/components/Partners/Partners';

function NewsPage() {
    return (
        <div>
            <div className='font-brown-regular overflow-hidden bg-[#f2f2f2] '>
                <div className="relative w-full">
                    <Image
                        src={Header}

                        alt=""
                        className="w-full h-[240px] md:h-[600px] object-cover opacity-75 bg-custom-gradientImg"
                    />
                    <div className="absolute inset-0 bg-black opacity-50 "></div>
                    <div className="absolute bottom-0 left-0 flex items-center justify-center text-white text-[32px] md:text-[38px] lg:text-[60px] font-brown-bold font-bold w-full ">
                        <h1 className='lg:mb-[10.5rem] mb-[2.5rem]  xl:max-w-[800px] lg:max-w-[800px] xl:mr-[400px]  lg:mr-[130px] md:mr-[30px] ml-[20px] leading-none text-left'>ONES TO WATCH – FARMFOODS EUROPEAN SENIOR MASTERS</h1>
                    </div>
                </div>
                <div className="relative bottom-0 left-0 p-4    mt-[-60px] ">
                    <div className="absolute left-0 lg:w-[62%]   h-[225px]   bg-[#f2f2f2] mt-[-50px]"></div>
                    <div className="flex items-center justify-center ">
                    <h1 className='relative xl:max-w-[650px] lg:max-w-[550px] lg:mr-[370px] xl:mr-[540px] md:ml-[10px] md:max-w-[730px] sm:max-w-[550px]  text-left flex items-center  leading-none font-brown-bold  justify-center  text-[24px] lg:text-[40px] mt-[80px] lg:mt-0 mb-[2.5rem] text-[#522367]'>
                        Three players we expect to be in contention on the South Course at La Manga Club in Murcia, Spain.               </h1>
                    </div>
                    <h3 className="lg:text-[26px] text-[18px] xl:mr-[950px] lg:mr-[700px] md:mr-[570px] flex items-center justify-center  text-[#232323] font-brown-regular mb-[3.5rem]">7 September 2024</h3>

                </div>
            </div>
            <div className="bg-white">
                <Paragraph/>
            </div>

            <Partners/>
        </div>
    );
}

export default NewsPage;
