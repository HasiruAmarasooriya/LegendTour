'use client'

import React, { useState, ChangeEvent } from 'react';

import Image from 'next/image';
import { useRouter } from "next/navigation";
import Flag from '../../../public/img/schedule/ENGLAND.png';
import IRE from '../../../public/img/schedule/IRELAND.png';
import FRA from '../../../public/img/schedule/FRANCE.png';
import SCO from '../../../public/img/schedule/SCOTLAND.png';
import AUS from '../../../public/img/schedule/AUSTRIA.png';
import ITA from '../../../public/img/schedule/ITALY.png';
import LEG from "../../../public/img/schedule/legends-exp.svg";
import CEL from "../../../public/img/schedule/celebrity-pro-am.svg";


const eventData2021 = [
    {
        month: "June",
        events: [
            {
                eventMonth:"Jun",
                date: "17 - 20",
                imageSrc: IRE,
                title: "Farmfoods European Legends Links Championship",
                location: "Trevose Golf & Country Club",
                buttonText: "Full Result >",
                link: "/fullresult"
            }
        ]
    },
    {
        month: "July",
        events: [
            {
                eventMonth:"Jul",
                date: "05 - 08",
                imageSrc: IRE,
                title: "Irish Legends presented by McGinley Foundation",
                location: "Rosapenna Hotel & Golf Resort",
                buttonText: "Full Result >",
                link: "/fullresult1"
            },
            {
                eventMonth:"Jul",
                date: "21 - 24",
                imageSrc: IRE,
                title: "French Legends Championship",
                location: "Golf de Saint-Cloud",
                buttonText: "Full Result >",
                link: "/fullresult2"
            }
        ]
    },
    // Add more months and events as needed
];

const eventData2022 = [
    {
        month: "June",
        events: [
            {
                eventMonth:"Jun",
                date: "17 - 20",
                imageSrc: IRE,
                title: "Farmfoods European Legends Links Championship",
                location: "Trevose Golf & Country Club",
                buttonText: "Full Result >",
                link: "/testLink"
            }
        ]
    },
    {
        month: "July",
        events: [
            {
                eventMonth:"Jul",
                date: "05 - 08",
                imageSrc: IRE,
                title: "Irish Legends presented by McGinley Foundation",
                location: "Rosapenna Hotel & Golf Resort",
                buttonText: "Full Result >",
                link: "/testLink"
            },
            {
                eventMonth:"Jul",
                date: "21 - 24",
                imageSrc: IRE,
                title: "French Legends Championship",
                location: "Golf de Saint-Cloud",
                buttonText: "Full Result >",
                link: "/testLink"
            }
        ]
    },
    // Add more months and events as needed
];

const eventData2023 = [
    {
        month: "June",
        events: [
            {
                eventMonth:"Jun",
                date: "17 - 20",
                imageSrc: IRE,
                title: "Farmfoods European Legends Links Championship",
                location: "Trevose Golf & Country Club",
                buttonText: "Full Result >",
                link: "/testLink"
            }
        ]
    },
    {
        month: "July",
        events: [
            {
                eventMonth:"Jul",
                date: "05 - 08",
                imageSrc: IRE,
                title: "Irish Legends presented by McGinley Foundation",
                location: "Rosapenna Hotel & Golf Resort",
                buttonText: "Full Result >",
                link: "/testLink"
            },
            {
                eventMonth:"Jul",
                date: "21 - 24",
                imageSrc: IRE,
                title: "French Legends Championship",
                location: "Golf de Saint-Cloud",
                buttonText: "Full Result >",
                link: "/testLink"
            }
        ]
    },
    // Add more months and events as needed
];

const eventData2024Upcomming = [
    {
        month: "June",
        events: [
            {
                eventMonth:"Jun",
                date: "17 - 20",
                imageSrc: IRE,
                title: "Farmfoods European Legends Links Championship",
                location: "Trevose Golf & Country Club",
                buttonText: "",
                link: ""
            }
        ]
    },
    {
        month: "July",
        events: [
            {
                eventMonth:"Jul",
                date: "05 - 08",
                imageSrc: IRE,
                title: "Irish Legends presented by McGinley Foundation",
                location: "Rosapenna Hotel & Golf Resort",
                buttonText: "",
                link: ""
            },
            {
                eventMonth:"Jul",
                date: "21 - 24",
                imageSrc: IRE,
                title: "French Legends Championship",
                location: "Golf de Saint-Cloud",
                buttonText: "",
                link: ""
            }
        ]
    },
    // Add more months and events as needed
];

const eventData2024Completed = [
    {
        month: "June",
        events: [
            {
                eventMonth:"Jun",
                date: "17 - 20",
                imageSrc: IRE,
                title: "Farmfoods European Legends Links Championship",
                location: "Trevose Golf & Country Club",
                buttonText: "Full Result >",
                link: "/testLink"
            }
        ]
    },
    {
        month: "July",
        events: [
            {
                eventMonth:"Jul",
                date: "05 - 08",
                imageSrc: IRE,
                title: "Irish Legends presented by McGinley Foundation",
                location: "Rosapenna Hotel & Golf Resort",
                buttonText: "Full Result >",
                link: "/testLink"
            },
            {
                eventMonth:"Jul",
                date: "21 - 24",
                imageSrc: IRE,
                title: "French Legends Championship",
                location: "Golf de Saint-Cloud",
                buttonText: "Full Result >",
                link: "/testLink"
            }
        ]
    },
    // Add more months and events as needed
];

const eventData2025Upcomming = [
    {
        month: "June",
        events: [
            {
                eventMonth:"Jun",
                date: "17 - 20",
                imageSrc: IRE,
                title: "Farmfoods European Legends Links Championship",
                location: "Trevose Golf & Country Club",
                buttonText: "Playing Experience",
                link: "/testLink"
            }
        ]
    },
    {
        month: "July",
        events: [
            {
                eventMonth:"Jul",
                date: "05 - 08",
                imageSrc: IRE,
                title: "Irish Legends presented by McGinley Foundation",
                location: "Rosapenna Hotel & Golf Resort",
                buttonText: "Playing Experience",
                link: "/testLink"
            },
            {
                eventMonth:"Jul",
                date: "21 - 24",
                imageSrc: IRE,
                title: "French Legends Championship",
                location: "Golf de Saint-Cloud",
                buttonText: "Playing Experience",
                link: "/testLink"
            }
        ]
    },
    // Add more months and events as needed
];





function ScheduleComponent(){
    const [selectedYear, setSelectedYear] = useState('eventData2024Upcomming');

    const handleYearChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedYear(event.target.value);
    };

    const router = useRouter();

    const handleNavigation = (link:any) => {
        router.push(link);
    };

    const [selectedTab, setSelectedTab] = useState<'completed' | 'upcoming'>('completed');

    const handleTabClick = (tab: 'completed' | 'upcoming') => {
        setSelectedTab(tab);
    };



    return (
        <div>
        <div className=' tracking-wider overflow-hidden'>
            <div className="relative w-full">
                <img
                    src="https://d1j6ra8qdo17fv.cloudfront.net/wp-content/uploads/2023/01/trump_international21-1024x384.jpg"
                    alt=""
                    className="w-full h-[240px] md:h-[540px] object-cover opacity-80 bg-custom-gradient"
                />
                <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white text-[24px] md:text-[58px] font-brown-bold font-bold mb-[2rem] flex items-center justify-center w-full">
                    <h1 className='xl:mr-[550px] lg:mr-[350px] md:mr-[100px] '>2024 & 2025 Schedule</h1>
                </div>
            </div>

            <div className="flex items-center justify-center font-brown-bold ">
                <div className="bg-[#31153D] h-[110px] w-full xl:max-w-[1150px]  lg:max-w-[950px] md:max-w-[730px] flex flex-col  items-start ">
                    <p className="text-[white] mt-[25px] ml-[20px] md:ml-[30px]"> Home {'>'}  Schedule</p>
                    <div className="mt-4 ml-[20px] md:ml-[30px] inline-block pl-[10px] pr-[10px]">
                        <select
                            className="p-2 rounded-[30px] bg-gray-400 text-white font-bold focus:outline-none focus:bg-gray-400"
                            value={selectedYear}
                            onChange={handleYearChange}
                        >
                            <option className="text-white" value="eventData2021">2021</option>
                            <option className="text-white" value="eventData2022">2022</option>
                            <option className="text-white" value="eventData2023">2023</option>
                            <option className="text-white" value="eventData2024Upcomming">2024</option>
                            <option className="text-white" value="eventData2025Upcomming">2025</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="content  md:p-0">
                {selectedYear === 'eventData2021' &&
                <div className='font-brown-regular'>


                    {eventData2021.map((monthData, index) => (
                        <React.Fragment key={index}>
                            <div className="flex items-center justify-center">
                                <div className="bg-[#31153D] h-[30px] w-full xl:max-w-[1150px] lg:max-w-[950px] md:max-w-[730px]">
                                    <p className="text-white ml-[30px] mt-[3px] mb-[20px] flex items-center">{monthData.month}</p>
                                </div>
                            </div>
                            {monthData.events.map((event, eventIndex) => (
                                <EventCard key={eventIndex} event={{ ...event, month: monthData.month }} handleNavigation={handleNavigation} />
                            ))}
                        </React.Fragment>
                    ))}
                </div>}
                {selectedYear === 'eventData2022' &&  <div className='font-brown-regular'>


                    {eventData2022.map((monthData, index) => (
                        <React.Fragment key={index}>
                            <div className="flex items-center justify-center">
                                <div className="bg-[#31153D] h-[30px] w-full xl:max-w-[1150px] lg:max-w-[950px] md:max-w-[730px]">
                                    <p className="text-white ml-[30px] mt-[3px] mb-[20px] flex items-center">{monthData.month}</p>
                                </div>
                            </div>
                            {monthData.events.map((event, eventIndex) => (
                                <EventCard key={eventIndex} event={{ ...event, month: monthData.month }} handleNavigation={handleNavigation} />
                            ))}
                        </React.Fragment>
                    ))}
                </div>}
                {selectedYear === 'eventData2023' &&
                <div className='font-brown-regular'>


                    {eventData2023.map((monthData, index) => (
                        <React.Fragment key={index}>
                            <div className="flex items-center justify-center">
                                <div className="bg-[#31153D] h-[30px] w-full xl:max-w-[1150px] lg:max-w-[950px] md:max-w-[730px]">
                                    <p className="text-white ml-[30px] mt-[3px] mb-[20px] flex items-center">{monthData.month}</p>
                                </div>
                            </div>
                            {monthData.events.map((event, eventIndex) => (
                                <EventCard key={eventIndex} event={{ ...event, month: monthData.month }} handleNavigation={handleNavigation} />
                            ))}
                        </React.Fragment>
                    ))}
                </div>}
                {selectedYear === 'eventData2024Upcomming' &&
                <div>
                    <div className="flex   items-center justify-center">
                        <div className="bg-[#31153D] h-[50px] w-full xl:max-w-[1150px] lg:max-w-[950px] md:max-w-[730px] flex items-center">
                            <div className="flex items-center justify-center font-brown-bold font-bold">
                                <a
                                    className={`text-white pl-[30px] pr-10 text-[20px] ${selectedTab === 'completed' ? 'underline' : ''}`}
                                    onClick={() => handleTabClick('completed')}
                                    href="#"
                                >
                                    Completed
                                </a>
                                <a
                                    className={`text-white ml-[20px] mr-10 text-[20px]  ${selectedTab === 'upcoming' ? 'underline' : ''}`}
                                    onClick={() => handleTabClick('upcoming')}
                                    href="#"
                                >
                                    Upcoming
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="content">
                        {selectedTab === 'completed' && (
                            <div className="completed-content">
                                <div className='font-brown-regular'>


                                    {eventData2024Completed.map((monthData, index) => (
                                        <React.Fragment key={index}>
                                            <div className="flex items-center justify-center">
                                                <div className="bg-[#31153D] h-[30px] w-full xl:max-w-[1150px] lg:max-w-[950px] md:max-w-[730px]">
                                                    <p className="text-white ml-[30px] mt-[3px] mb-[20px] flex items-center">{monthData.month}</p>
                                                </div>
                                            </div>
                                            {monthData.events.map((event, eventIndex) => (
                                                <EventCard key={eventIndex} event={{ ...event, month: monthData.month }} handleNavigation={handleNavigation} />
                                            ))}
                                        </React.Fragment>
                                    ))}
                                </div>

                            </div>
                        )}
                        {selectedTab === 'upcoming' && (
                            <div className="upcoming-content">
                                <div className='font-brown-regular'>


                                    {eventData2024Upcomming.map((monthData, index) => (
                                        <React.Fragment key={index}>
                                            <div className="flex items-center justify-center">
                                                <div className="bg-[#31153D] h-[30px] w-full xl:max-w-[1150px] lg:max-w-[950px] md:max-w-[730px]">
                                                    <p className="text-white ml-[30px] mt-[3px] mb-[20px] flex items-center">{monthData.month}</p>
                                                </div>
                                            </div>
                                            {monthData.events.map((event, eventIndex) => (
                                                <EventCard key={eventIndex} event={{ ...event, month: monthData.month }} handleNavigation={handleNavigation} />
                                            ))}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>}
                {selectedYear === 'eventData2025Upcomming' &&
                <div>
                    <div className="flex   items-center justify-center">
                        <div className="bg-[#31153D] h-[50px] w-full xl:max-w-[1150px] lg:max-w-[950px] md:max-w-[730px] flex items-center">
                            <div className="flex items-center justify-center font-brown-bold font-bold">
                                {/*<a*/}
                                {/*    className={`text-white pl-[30px] pr-10 text-[20px] ${selectedTab === 'completed' ? 'underline' : ''}`}*/}
                                {/*    onClick={() => handleTabClick('completed')}*/}
                                {/*    href="#"*/}
                                {/*>*/}
                                {/*    Completed*/}
                                {/*</a>*/}
                                <a
                                    className={`text-white ml-[30px] mr-10 text-[20px]  ${selectedTab === 'upcoming' ? 'underline' : ''}`}
                                    onClick={() => handleTabClick('upcoming')}
                                    href="#"
                                >
                                    Upcoming
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="content">
                        {selectedTab === 'completed' && (
                            <div className="completed-content">
                                <div className='font-brown-regular'>


                                    {eventData2025Upcomming.map((monthData, index) => (
                                        <React.Fragment key={index}>
                                            <div className="flex items-center justify-center">
                                                <div className="bg-[#31153D] h-[30px] w-full xl:max-w-[1150px] lg:max-w-[950px] md:max-w-[730px]">
                                                    <p className="text-white ml-[30px] mt-[3px] mb-[20px] flex items-center">{monthData.month}</p>
                                                </div>
                                            </div>
                                            {monthData.events.map((event, eventIndex) => (
                                                <EventCard key={eventIndex} event={{ ...event, month: monthData.month }} handleNavigation={handleNavigation} />
                                            ))}
                                        </React.Fragment>
                                    ))}
                                </div>

                            </div>
                        )}
                        {selectedTab === 'upcoming' && (
                            <div className="upcoming-content">
                                <div className='font-brown-regular'>


                                    {eventData2025Upcomming.map((monthData, index) => (
                                        <React.Fragment key={index}>
                                            <div className="flex items-center justify-center">
                                                <div className="bg-[#31153D] h-[30px] w-full xl:max-w-[1150px] lg:max-w-[950px] md:max-w-[730px]">
                                                    <p className="text-white ml-[30px] mt-[3px] mb-[20px] flex items-center">{monthData.month}</p>
                                                </div>
                                            </div>
                                            {monthData.events.map((event, eventIndex) => (
                                                <EventCard key={eventIndex} event={{ ...event, month: monthData.month }} handleNavigation={handleNavigation} />
                                            ))}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>}
            </div>
        </div>





        </div>

);

}
function EventCard({ event, handleNavigation }: { event: any; handleNavigation: any }){
    return (
        <div className="md:flex items-center justify-center">
            <div className="p-4  h-auto md:h-[130px] w-full xl:max-w-[1150px] lg:max-w-[950px] md:max-w-[730px] mb-2">
                <div className="md:flex justify-between items-center  ">
                    <div className="w-full xl:w-10/12 md:w-9/12 ">
                        <div className="flex  md:items-center  item-start xl:gap-4 lg:gap-4  h-auto md:h-[130px] mb-2">
                            <div className="text-lg flex flex-col items-center justify-center text-gray-700 text-[#522367] ">
                                <p className="font-bold text-[#522367] lg:text-[21px] md:text-[18px] text-[13px]">{event.eventMonth}</p>
                                <p className="text-[#522367] lg:text-[16.8px] md:text-[14.4px] text-[11.2px] whitespace-nowrap">{event.date}</p>
                            </div>
                            <div className="my-2 md:my-0 flex-shrink-0 ">
                                <Image className="lg:w-[50px] lg:h-[50px] md:w-[40px] md:h-[40px] w-[25px] h-[25px]" src={event.imageSrc} alt="FlagImage"  />
                            </div>
                            <div className="text-lg md:items-center  item-start md:text-left mx-2  text-[#522367]">
                                <p className="font-bold lg:text-[21px] md:text-[18px] text-[13px] leading-none">{event.title}</p>
                                <p className="lg:text-[18px] md:text-[15px] text-[13px] ">{event.location}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center mb-2">
                        <hr className="w-full md:w-0 h-[2px] md:h-0"/>
                    </div>

                    {event.buttonText && event.link && (
                        <div className="w-full xl:w-2/12 md:w-3/12 flex item-center justify-center">
                            <button
                                onClick={() => handleNavigation(event.link)}
                                className="mt-2 md:mt-0  font-bold lg:text-[21px] md:text-[18px] text-[13px] text-[#522367] rounded bg-transparent"
                            >
                                {event.buttonText}
                                <span className="block h-[2px] bg-[#522367] w-full mt-1"></span>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}




export default ScheduleComponent;
