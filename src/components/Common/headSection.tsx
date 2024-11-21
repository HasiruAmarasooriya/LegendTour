import * as React from "react";
import Image from 'next/image';
import HeaderImg from '../../../public/img/schedule/headerimg.png';

function HeadSection() {
    return (
        <div className="bg-[#f2f2f2] flex justify-center items-center overflow-hidden xl:mr-[570px] lg:mr-[355px] md:mr-[60px]">
            <div className="pt-4  md:pt-[60px]    ">
                <div className="font-browallia">
                    <Image src={HeaderImg} alt="HeaderImage" />
                </div>

                <button className="ml-[30px] md:ml-0 bg-white border-b-[3px] border-[#31153D] text-[#31153D] font-bold mt-8 md:w-[200px]  w-[130px] pt-4 pb-[20px] mx-auto">
                    PROS
                </button>
            </div>
            <hr className="bg-[#b9b9b9] h-[5px]" />
        </div>
    );
}

export default HeadSection;
