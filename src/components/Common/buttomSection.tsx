"use client";
import React from 'react';

import { useRouter } from 'next/navigation';

function ButtomSection() {
    const router = useRouter();

    const handleNavigation = () => {
        router.push('/rankings');
    };

    return (
        <div className='flex flex-col justify-center items-center md:flex-row'>
            <button
                className="bg-custom-600 text-white px-8 py-3 mt-15px mt-15px ml-[25px] mr-[25px] mt-[100px] mb-[150px] md:mr-4 font-brown-bold text-[18px]"
                onClick={handleNavigation}
            >
                VIEW FULL RANKING
            </button>

            <hr className="bg-[#b9b9b9] h-[3px] w-full md:mb-[150px] md:w-auto" />
        </div>
    );
}

export default ButtomSection;
