'use client'

import React from 'react';
import Image, {StaticImageData} from 'next/image';
import Link from 'next/link';
import {useRouter} from "next/navigation";

interface CardProps {
    imageSrc: StaticImageData; // or 'string' if you're using URLs instead of imported images
    title: string;
    date: string;
    link: string;
    description: string;
    buttonText: string;
    buttonLink: string;


}

const Card: React.FC<CardProps> = ({ imageSrc, title, date, link,description,buttonText,buttonLink }) => {
    const router = useRouter();

    const handleNavigation = (buttonLink:any) => {
        router.push(buttonLink);
    };
    return (
        <div className='font-brown-regular '>
            <div className="flex flex-col items-center">

                    <div className="relative flex flex-col justify-center items-center ">
                        <Link href={link}>
                        <Image
                            src={imageSrc}
                            alt={title}
                            className="xl:w-[355px] lg:h-[270px] lg:w-[300px] md:w-[200px] md:h-[220px] cursor-pointer"
                        />
                        </Link>
                        <div className="bg-white lg:h-[250px] md:h-[300px] xl:w-[355px] lg:w-[300px] md:w-[200px]  flex flex-col mb-[50px]">
                            <h4 className="text-center text-[18px] mt-2 mb-4 mr-2 ml-2 uppercase font-semibold">{title}</h4>
                            <p className="text-center mb-[50px] md:mb-0">{date}</p>
                            <p className="text-center">{description}</p>
                            {buttonText && buttonLink &&(
                            <button className="bg-[#522367] lg:ml-[60px] lg:mr-[60px] ml-[10px] mr-[10px] text-white px-8 py-3 mt-4 mb-4 md:mt-[20px] lg:mb-[150px] " onClick={() => handleNavigation(buttonLink)}>
                                {buttonText}
                            </button>
                            )}
                        </div>
                    </div>

            </div>
        </div>
    );
};

export default Card;
