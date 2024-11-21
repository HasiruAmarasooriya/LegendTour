'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ParaImg1 from '../../../public/img/news/newsParaImg1.jpg'
import ParaImg2 from '../../../public/img/news/Prize-presentation.jpg'


const NewsArticle = () => {
    return (
        <div className="flex items-center justify-center  xl:mr-[470px] lg:mr-[330px] p-4 ">
            <div className="max-w-full lg:max-w-[820px] bg-white p-4 md:p-8 items-center justify-center lg:mt-[100px] md:mt-[50px] mt-[30px]">

                <h1 className="text-[18px] lg:text-[26px] text-[#232323] mb-[15px] md:mb-[26px] font-brown-regular">
                    Cookie Policy
                </h1>

                <p className="text-[15px] lg:text-[18px] text-[#232323] mb-[15px] md:mb-[26px] font-brown-regular">
                    Cookies identify your computer to a server that then enables information to be stored on the hard drive of your computer. Cookies allow a computer to be identified as corresponding to one that has accessed another website or visited a website previously.                </p>

                <p className="text-[15px] lg:text-[18px] text-[#232323] font-brown-regular">
                    Cookies are commonly used on the Internet and do not harm your computer system.
                </p>

                <p className="text-[15px] lg:text-[18px] text-[#232323] mb-[15px] md:mb-[26px] font-brown-regular">
                    Cookies collect standard internet log information and visitor behaviour information.
                </p>


                <p className="text-[15px] lg:text-[18px] text-[#232323] mb-[15px] mt-[15px] md:mb-[26px] font-brown-regular">
                    This information is used to track visitor use of our website and to compile statistical analysis reports of website activity. Information collected in this way can be used to identify you and to ensure your web journey is as easy and as targeted as possible.                </p>

                <p className="text-[15px] lg:text-[18px] text-[#232323] mb-[15px] md:mb-[26px] font-brown-regular">
                    You can set your internet browser not to accept cookies and remove them from your browser. For further information visit www.aboutcookies.org or www.allaboutcookies.org. To opt out of receiving communications through the following platforms, follow these “opt out” processes:                </p>


                <p className="text-[15px] lg:text-[18px] text-[#232323] mb-[15px] mt-[15px] md:mb-[26px] font-brown-regular">
                    To opt out of receiving communications through the following platforms, follow these “opt out” processes:                </p>

                <div className="space-y-4 text-[15px] lg:text-[18px] font-brown-regular ">
                    <span className=" md:flex">
                        <span>Google –</span>{' '}
                        <Link href=" https://myaccount.google.com/privacy#ads">
                            <p className="text-[#522367] hover:underline mb-[10px] md:mb-0 overflow-x-auto" >https://myaccount.google.com/privacy#ads</p>
                        </Link>
                    </span>
                    <span className="md:flex">
                        <span>Bing –</span>{' '}
                        <Link href="https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads">
                            <p className="text-[#522367] hover:underline mb-[10px] md:mb-0 overflow-x-auto"  >https://advertise.bingads.microsoft.com/en- <br/> us/resources/policies/personalized-ads</p>
                        </Link>
                    </span>
                    <span className=" md:flex">
                        <span>Facebook –</span>{' '}
                        <Link href="https://en-gb.facebook.com/help/146952742043748">
                            <p className="text-[#522367] hover:underline mb-[10px] md:mb-0 overflow-x-auto" >https://en-gb.facebook.com/help/146952742043748</p>
                        </Link>
                    </span>
                    <span className=" md:flex">
                        <span>Twitter –</span>{' '}
                        <Link href="https://help.twitter.com/en/safety-and-security/privacy-controls-for-tailored-ads">
                            <p className="text-[#522367]   hover:underline mb-[10px] md:mb-0 overflow-x-auto" >https://help.twitter.com/en/safety-and- security/privacy-<br/>controls-for-  tailored-ads</p>
                        </Link>
                    </span>
                    <span className=" md:flex">
                        <span>Double Click –</span>{' '}
                        <Link href="https://myaccount.google.com/privacy#ads">
                            <p className="text-[#522367] hover:underline mb-[10px] md:mb-0 overflow-x-auto" >https://myaccount.google.com/privacy#ads</p>
                        </Link>
                    </span>
                    <span className=" md:flex">
                        <span>VE Interactive –</span>{' '}
                        <Link href="https://www.ve.com/privacy-policy">
                            <p className="text-[#522367] hover:underline mb-[10px] md:mb-0 overflow-x-auto" >https://www.ve.com/privacy-policy</p>
                        </Link>
                    </span>
                    <span className=" md:flex">
                        <span>AdRoll –</span>{' '}
                        <Link href="http://www.youronlinechoices.com/uk/your-ad-choices">
                            <p className="text-[#522367] hover:underline mb-[10px] md:mb-0 overflow-x-auto" >http://www.youronlinechoices.com/uk/your-ad-choices</p>
                        </Link>
                    </span>
                    <p className="mb-[15px]">
                        Email – you can unsubscribe at the bottom of any email you have received from us.
                    </p>
                    <span >
                        <span>Others not named above</span> (remove specific advertising cookies) –{' '}
                        <Link href="http://www.youronlinechoices.com/uk/your-ad-choices">
                            <p className="text-[#522367] mb-[66px] hover:underline overflow-x-auto " >http://www.youronlinechoices.com/uk/your-ad-choices</p>
                        </Link>
                    </span>
                </div>

                {/*<p className="text-[15px] lg:text-[18px] text-[#232323] mb-[15px] md:mb-[26px] font-brown-bold">*/}
                {/*    Singh’s closing triple bogey for a 76 saw him fall into a tie for 3rd alongside Thomas Gögele on -4. The German had six birdies, including one at the 18th, in his 68.*/}
                {/*</p>*/}

                {/*<p className="text-[15px] lg:text-[18px] text-[#232323] mb-[15px] md:mb-[26px] font-brown-bold">*/}
                {/*    Emanuele Canonica, Carl Suneson, Simon Griffiths and Greig Hutcheon finished in a tie for 5th on -3, with Mikael Lundberg, Clark Dennis, Adilson da Silva and Jyoti Randhawa a shot further back in tied-9th.*/}
                {/*</p>*/}

            </div>
        </div>
    );
};

export default NewsArticle;
