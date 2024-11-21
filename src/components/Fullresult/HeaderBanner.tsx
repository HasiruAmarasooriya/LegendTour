'use client'

import Image from 'next/image';
import HeaderBanner from '../../../public/img/news/fullresult-banner.jpg'


function ScheduleComponent() {

    return (
        <div  className=' tracking-wider overflow-hidden'>
            <div className="relative w-full">
                <img
                    src="https://d1j6ra8qdo17fv.cloudfront.net/wp-content/uploads/2021/04/4thgreen5.jpg"
                    alt=""
                    className="w-full h-[240px] md:h-[540px] object-cover opacity-80 bg-custom-gradient"
                />
                <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white text-[24px] md:text-[58px] font-brown-bold font-bold mb-[2rem] ml-[20px] md:ml-[80px] flex items-center justify-center w-full">
                    <h1 className='mr-[860px] '>2024 Schedule</h1>
                </div>
            </div>
        </div>


    );
}

export default ScheduleComponent;
