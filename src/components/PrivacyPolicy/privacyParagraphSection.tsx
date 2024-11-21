'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ParaImg1 from '../../../public/img/news/newsParaImg1.jpg'
import ParaImg2 from '../../../public/img/news/Prize-presentation.jpg'


const NewsArticle = () => {
    return (
        <div className="flex items-center justify-center  xl:mr-[470px] lg:mr-[330px] p-4 ">
            <div className="max-w-full lg:max-w-[840px] bg-white p-4 md:p-8 items-center justify-center lg:mt-[100px] md:mt-[50px] mt-[30px]">

                <h1 className="text-[18px] lg:text-[26px] text-[#232323] mb-[46px] font-brown-regular">
                    About The European Legends Tour Limited
                </h1>

                <p className="text-[15px] lg:text-[18px] text-[#232323] mb-[66px]  font-brown-regular">
                    The European Legends Tour is registered in the United Kingdom, Company No. 12520960 and registered address is PGA European Legends Tour, Wentworth Drive, Virginia Water, Surrey, GU25 4LX
                </p>


                <hr className="h-[2px] xl:w-[1240px] bg-gray-200"/>


                <h1 className="text-[18px] lg:text-[26px] text-[#232323] mb-[46px] mt-[56px]  font-brown-regular">
                    The information we collect, how it’s collected and what it’s used for
                </h1>

                <p className="text-[15px] lg:text-[18px] text-[#232323]  font-brown-regular mb-[16px]">
                    As the data controller, we collect and process information about you when you telephone our contact centre, so that we can provide you with the products and services you have requested. This will be your name, email address, phone number and any other information which is necessary for us to:
                </p>

                <ul className="text-[14px] text-[#232323] font-brown-regular mb-[86px] list-disc pl-[50px]">
                    <li>meet our contractual obligations to you;</li>
                    <li>service your enquiry; and</li>
                    <li>detect, investigate and prevent activities which may be illegal.</li>
                </ul>
                <hr className="h-[2px] xl:w-[1240px] bg-gray-200"/>

                <h1 className="text-[18px] lg:text-[26px] text-[#232323] mb-[46px] mt-[56px]  font-brown-regular">
                    Special Categories of Personal Data
                </h1>

                <p className="text-[15px] lg:text-[18px] text-[#232323] mb-[26px]  font-brown-regular">
                    Some of the personal data you provide to us may be more sensitive in nature and is treated as a Special Category of personal data. This could be information relating to your health or criminal convictions, and may be required by us for the specific purposes of underwriting or as part of the claims handling process. The provision of such data is conditional for us to be able to provide insurance or manage a claim. Such data will only be used for the specific purposes as set out in this notice.
                </p>

                <p className="text-[15px] lg:text-[18px] text-[#232323] mb-[66px]  font-brown-regular">
                    If you are providing us with another person’s personal information, you should ask them to also read this Privacy Policy. By giving us information about another person, you are confirming that they have given you consent to provide the information to us.              </p>

                <hr className="h-[2px] xl:w-[1240px] bg-gray-200"/>

                <h1 className="text-[18px] lg:text-[26px] text-[#232323] mb-[46px] mt-[56px]  font-brown-regular">
                    Marketing and research
                </h1>

                <p className="text-[15px] lg:text-[18px] text-[#232323] mb-[20px]  font-brown-regular">
                    We may use your information to:              </p>

                <ul className="text-[14px] text-[#232323] font-brown-regular mb-[20px] list-disc pl-[50px]">
                    <li>keep you informed by post, telephone, email or other communication means about products and services, articles or competitions that we think may be of interest to you;</li>
                    <li>carry out market research or data analysis to help us improve the services we provide or to design new services for the future;</li>

                </ul>


                <p className="text-[15px] lg:text-[18px] text-[#232323]  mt-[15px] mb-[26px]  font-brown-regular">
                    Your personal information may also be used for the above purposes after your membership has lapsed or the event you attended has occurred. You have the right to request at any time that we stop processing your personal information for marketing purposes. If you wish to do this, please call or write to The European Legends Tour Customer Services at Howserv Limited, Britannia House, 3-5 Rushmills Business Park, Bedford Road, Northampton, Northamptonshire, United Kingdom, NN4 7YB.   Please be aware that because we prepare our mailings months in advance it can take up to three months for you to stop receiving mailings from us. </p>

                <p className="text-[15px] lg:text-[18px] text-[#232323]  mt-[15px] mb-[26px]  font-brown-regular">
                    We also collect information when you voluntarily complete customer surveys, provide feedback and participate in competitions. When you use our website, information is collected using cookies. If you contact us electronically (for example via our website or email), we may collect your Internet Protocol (IP) address or telephone number supplied by your service provider. We may use this information to help us detect fraud.             </p>


                <p className="text-[15px] lg:text-[18px] text-[#232323] mt-[15px] mb-[66px]  font-brown-regular">
                    We will only share your personal data with a third party for the purpose of them directly marketing to you where you have consented to such data sharing (for example, if you consent to receiving our partner offers and news when participating in a competition run in conjunction with one of our partners).                </p>

                <hr className="h-[2px] xl:w-[1240px] bg-gray-200"/>

                <h1 className="text-[18px] lg:text-[26px] text-[#232323] mt-[66px] mb-[66px] mt-[66px]lg:font-brown-bold font-brown-regular">
                    Cookies
                </h1>

                <p className="text-[15px] lg:text-[18px] text-[#232323]  mt-[15px] mb-[26px]  font-brown-regular">
                    Cookies identify your computer to a server that then enables information to be stored on the hard drive of your computer. Cookies allow a computer to be identified as corresponding to one that has accessed another website or visited a website previously. Cookies are commonly used on the Internet and do not harm your computer system. Cookies collect standard internet log information and visitor behaviour information. This information is used to track visitor use of our website and to compile statistical analysis reports of website activity. Information collected in this way can be used to identify you and to ensure your web journey is as easy and as targeted as possible.               </p>


                <p className="text-[15px] lg:text-[18px] text-[#232323] mb-[15px] md:mb-[26px]  font-brown-regular">
                    You can set your internet browser not to accept cookies and remove them from your browser. For further information visit www.aboutcookies.org or www.allaboutcookies.org.                </p>

                <p className="text-[15px] lg:text-[18px] text-[#232323]  mt-[15px] mb-[26px]  font-brown-regular">
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

                <hr className="h-[2px] xl:w-[1240px] bg-gray-200"/>

                <h1 className="text-[18px] lg:text-[26px] text-[#232323] mb-[66px] mt-[66px]  font-brown-regular">
                    What is the Legal Basis for processing your Personal Data?
                </h1>

                <p className="text-[15px] lg:text-[18px] text-[#232323]  mt-[15px] mb-[66px]  font-brown-regular">
                    We process the above data for the ‘performance of contract’ or ‘legitimate interest’.              </p>

                <hr className="h-[2px] xl:w-[1240px] bg-gray-200"/>

                <h1 className="text-[18px] lg:text-[26px] text-[#232323]  mb-[66px] mt-[66px]  font-brown-regular">
                    Who we share your information with
                </h1>

                <p className="text-[15px] lg:text-[18px] text-[#232323]  mt-[15px] mb-[26px]  font-brown-regular">
                    We will share your information with our outsourced service provider (Howserv) in order to administer your enquiry and requirements.  Howserv will pass certain information to the European Tour Limited to allow them to fulfil the completion of your requirements. We will not share your information with anyone else unless we are required by any authorities, such as the Police.             </p>

                <p className="text-[15px] lg:text-[18px] text-[#232323]  mt-[15px] mb-[66px]  font-brown-regular">
                    We will not pass on your personal data to any party outside of Staysure Group Limited, European Legends Tour, Howsam Limited and European Tour Limited..              </p>

                <hr className="h-[2px] xl:w-[1240px] bg-gray-200"/>

                <h1 className="text-[18px] lg:text-[26px] text-[#232323]  mb-[66px] mt-[66px]   font-brown-regular">
                    Your rights
                </h1>

                <p className="text-[15px] lg:text-[18px] text-[#232323]  mt-[15px] mb-[26px]  font-brown-regular">
                    Under the Data Protection Act 2018 and General Data Protection Regulation (GDPR) 2018, all data subjects have the following rights:            </p>

                <ul className="text-[14px] text-[#232323] font-brown-regular mb-[66px] list-disc pl-[50px]">
                    <li>To obtain a copy of your data that we hold, via a Data Subject Access Request;</li>
                    <li>To have the data corrected if it is inaccurate or incomplete;</li>
                    <li>To have the data deleted, although this may not always be possible, if we still need to process it, i.e. for a claim or complaint;</li>
                    <li>To ask us to stop processing your data in certain circumstances; and</li>
                    <li>To receive a copy of your personal information in a portable format which can be shared by you.</li>
                </ul>

                <hr className="h-[2px] xl:w-[1240px] bg-gray-200"/>

                <h1 className="text-[18px] lg:text-[26px] text-[#232323] mb-[66px] mt-[66px]   font-brown-regular">
                    How long we keep your data
                </h1>

                <p className="text-[15px] lg:text-[18px] text-[#232323]  mt-[15px] mb-[66px]  font-brown-regular">
                    We will only retain your data for as long as we require it, which will be no longer than 7 years after your policy completion, in line with financial, legal and regulatory requirements.
                </p>

                <hr className="h-[2px] xl:w-[1240px] bg-gray-200"/>

                <h1 className="text-[18px] lg:text-[26px] text-[#232323] mb-[66px] mt-[66px]   font-brown-regular">
                    How we store and protect information
                </h1>

                <p className="text-[15px] lg:text-[18px] text-[#232323] mt-[15px] mb-[66px]  font-brown-regular">
                    Information collected by us is securely stored on servers located either in the United Kingdom or European Union. We keep and process this information to meet our contractual and regulatory obligations or to deal with requests from other authorities. You have the right to request a copy of or correct the information that we hold about you. If you would like a copy of the information we hold about you please contact us by email or letter as shown below:
                </p>

                <hr className="h-[2px] xl:w-[1240px] bg-gray-200"/>

                <p className="text-[15px] lg:text-[18px] text-[#232323] mt-[66px]  font-brown-regular">
                    Enquiries in relation to data held by The European Legends Tour should be directed to:                </p>

                <p className="text-[15px] lg:text-[18px] text-[#232323] mt-[20px] mb-[20px]  font-brown-regular">
                    Data Protection Officer                </p>


                <p className="text-[15px] lg:text-[18px] text-[#232323]   font-brown-regular">
                    The European Legends Tour               </p>

                <p className="text-[15px] lg:text-[18px] text-[#232323]   font-brown-regular">
                    Britannia House              </p>
                <p className="text-[15px] lg:text-[18px] text-[#232323]   font-brown-regular">
                    3-5 Rushmills Business Park               </p>
                <p className="text-[15px] lg:text-[18px] text-[#232323]    font-brown-regular">
                    Bedford Road                </p>
                <p className="text-[15px] lg:text-[18px] text-[#232323]   font-brown-regular">
                    Northampton              </p>
                <p className="text-[15px] lg:text-[18px] text-[#232323]   font-brown-regular">
                    NN4 7YB              </p>

                <p className="text-[15px] lg:text-[18px] text-[#232323] mt-[20px] mb-[66px]  font-brown-regular">
                    Email: dataprotectionofficer@staysure.co.uk                </p>


            </div>
        </div>
    );
};

export default NewsArticle;
