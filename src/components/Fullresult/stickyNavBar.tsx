import React from 'react';
import {Button} from "../ui/button";

const StickyNavBar = () => {
    const scrollToSection = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="sticky lg:top-0 top-[116px]  bg-white shadow-md z-10 item-center border-b-2 border-[#522367] justify-between hidden lg:flex">
            <nav className="flex justify-end  p-4 item-center ml-[50px] justify-between">
                <ul className="flex  mt-[15px] space-x-4 ">
                    <li>
                        <button className="text-[#522367] item-center  text-[16px]  mr-[40px] font-brown-bold" onClick={() => scrollToSection('overview')}>
                            OVERVIEW
                        </button>
                    </li>
                    <li>
                        <button className="text-[#522367] item-center  text-[16px] font-brown-bold"  onClick={() => scrollToSection('result')}>
                            RESULTS
                        </button>
                    </li>
                    <li className="absolute right-4 top-2">

                        <Button className=" md:mx-0 h-[53px]  lg:ml-[450px] xl:ml-[750px] w-full lg:w-[271px] tracking-widest break-words text-lg leading-tight md:ml-[80px] font-brown-bold">
                            MORE ABOUT TREVOSE
                        </Button>


                    </li>

                </ul>

            </nav>
        </div>
    );
};

export default StickyNavBar;
