import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import SWE from '../../../public/img/news/Untitled-design-3-2.png';
import CLOSE from "../../../public/img/news/icons8-close-50.png";
import HeaderImg from "../../../public/img/schedule/headerimg.png";
import RSA from '../../../public/img/schedule/SOUTH-AFRICA.png';
import WALES from '../../../public/img/schedule/WALES-1.png';
import Search from '../../../public/img/news/icons8-search-50.png';
const PlayerTable1 = () => {
    const [openPlayerIndex, setOpenPlayerIndex] = useState(null);
    const [searchInput, setSearchInput] = useState('');
    const [activeTable, setActiveTable] = useState('PRO');

    interface Player {
        pos: any;
        country: string;
        flag: StaticImageData;
        name: string;
        score: any;
        r1: any;
        r2: any;
        r3: any;
        total1: any;
        om: any;
        points: any;
        scores: {
            PAR: any[];
            R1: any[];
            R2: any[];
            R3: any[];
        };
        out: {
            PAR: any;
            R1: any;
            R2: any;
            R3: any;
        };
        in: {
            PAR: any;
            R1: any;
            R2: any;
            R3: any;
        };
        total: {
            PAR: any;
            R1: any;
            R2: any;
            R3: any;
        };
        toPar: {
            R1: any;
            R2: any;
            R3: any;
        };
    }

        const players: Player[] = [
            {
                pos: 1,
                country: 'RSA',
                flag: RSA,
                name: 'Chris WILLIAMS',
                score: -9,
                r1: 69,
                r2: 68,
                r3: 70,
                total1: 207,
                om: 21,
                points: 450,

                scores: {
                    PAR: [7, 4, 3, 4, 4, 5, 4, 3, 4, 4, 4, 5, 4, 3, 4, 3, 4, 3],
                    R1: [6, 4, 2, 4, 4, 5, 4, 3, 4, 5, 4, 4, 6, 3, 4, 3, 4, 3],
                    R2: [4, 4, 2, 4, 4, 5, 4, 3, 4, 5, 4, 4, 6, 6, 4, 3, 4, 3],
                    R3: [4, 4, 2, 4, 4, 5, 4, 3, 4, 5, 4, 4, 4, 3, 4, 3, 4, 3]
                },
                out: {
                    PAR: 36,
                    R1: 34,
                    R2: 34,
                    R3: 34
                },
                in: {
                    PAR: 36,
                    R1: 35,
                    R2: 35,
                    R3: 35
                },
                total: {
                    PAR: 72,
                    R1: 69,
                    R2: 69,
                    R3: 70
                },
                toPar: {
                    R1: -3,
                    R2: -3,
                    R3: -2
                }
            },
            {
                pos: 2,
                country: 'WAL',
                flag: WALES,
                name: 'Phillip PRICE',
                score: -6,
                r1: 69,
                r2: 68,
                r3: 73,
                total1: 210,
                om: 6,
                points: 297,

                scores: {
                    PAR: [7, 4, 3, 4, 4, 5, 4, 3, 4, 4, 4, 5, 4, 3, 4, 3, 4, 3],
                    R1: [4, 4, 2, 4, 4, 5, 4, 3, 4, 5, 4, 4, 4, 3, 4, 3, 4, 3],
                    R2: [4, 4, 2, 4, 4, 5, 4, 3, 4, 5, 4, 4, 4, 3, 4, 3, 4, 3],
                    R3: [4, 4, 2, 4, 4, 5, 4, 3, 4, 5, 4, 4, 4, 3, 4, 3, 4, 3]
                },
                out: {
                    PAR: 36,
                    R1: 34,
                    R2: 34,
                    R3: 34
                },
                in: {
                    PAR: 36,
                    R1: 35,
                    R2: 35,
                    R3: 39
                },
                total: {
                    PAR: 72,
                    R1: 69,
                    R2: 69,
                    R3: 73
                },
                toPar: {
                    R1:-3,
                    R2: -3,
                    R3:1
                }
            },
            // Add more players here...
        ];



    const team =[
        {
            "position": 1,
            "teamName": "Fitzpatrick, Jayne + BAKER, Peter",
            "score": -18,
            "r1": 65,
            "r2": 61,
            "total": 126
        },
        {
            "position": 2,
            "teamName": "Barrett, John + MORLAND IV, David",
            "score": -15,
            "r1": 68,
            "r2": 61,
            "total": 129
        },
        {
            "position": 3,
            "teamName": "Elston, James + BJØRN, Thomas",
            "score": -15,
            "r1": 65,
            "r2": 64,
            "total": 129
        },
        {
            "position": 4,
            "teamName": "Hanlon, Tyrone + FARRY, Marc",
            "score": -15,
            "r1": 64,
            "r2": 65,
            "total": 129
        },
        {
            "position": 5,
            "teamName": "Kerr, Derek + HAEGGMAN, Joakim",
            "score": -15,
            "r1": 63,
            "r2": 66,
            "total": 129
        },
        {
            "position": 6,
            "teamName": "Knezovich, Ivan + WILLIAMS, Chris",
            "score": -14,
            "r1": 65,
            "r2": 65,
            "total": 130
        },
        {
            "position": 7,
            "teamName": "Sloss, Colin + LAWRIE, Paul",
            "score": -13,
            "r1": 65,
            "r2": 66,
            "total": 131
        },
        {
            "position": 7,
            "teamName": "Nelson, David + FOWLER, Peter",
            "score": -13,
            "r1": 68,
            "r2": 63,
            "total": 131
        },
        {
            "position": 7,
            "teamName": "Lawton, Nigel + SPENCE, Tim",
            "score": -13,
            "r1": 67,
            "r2": 64,
            "total": 131
        },
        {
            "position": 7,
            "teamName": "Booth, Kevin + LITTLE, Stuart",
            "score": -13,
            "r1": 67,
            "r2": 64,
            "total": 131
        },

        {
            "position": 11,
            "teamName": "Law, David + PRICE, Phillip",
            "score": -12,
            "r1": 67,
            "r2": 65,
            "total": 132
        },
        {
            "position": 11,
            "teamName": "Williams, Nigel + GOLDING, Philip",
            "score": -12,
            "r1": 65,
            "r2": 67,
            "total": 132
        },
        {
            "position": 13,
            "teamName": "Scribner, Dave + HENDERSON, Scott",
            "score": -11,
            "r1": 70,
            "r2": 63,
            "total": 133
        },
        {
            "position": 13,
            "teamName": "Turner, Andrew + O'HANLON, Richard",
            "score": -11,
            "r1": 63,
            "r2": 70,
            "total": 133
        },
        {
            "position": 13,
            "teamName": "Oliver, Ross + REYNARD, Mike",
            "score": -11,
            "r1": 65,
            "r2": 68,
            "total": 133
        },
        {
            "position": 13,
            "teamName": "Mitchell, Rick + ORR, Gary",
            "score": -11,
            "r1": 64,
            "r2": 69,
            "total": 133
        },
        {
            "position": 13,
            "teamName": "Hill, Simon + QUIROS, Juan",
            "score": -11,
            "r1": 65,
            "r2": 68,
            "total": 133
        }
    ]


    const handleRowClick = (index:any) => {
        let fixedIndex = parseInt(index);
        setOpenPlayerIndex(openPlayerIndex === fixedIndex ? null : index);
    };



    const handleClosePanel = () => {
        setOpenPlayerIndex(null);
    };

    const filteredPlayers: any = players.filter((player: Player) =>
        player.name.toLowerCase().includes(searchInput.toLowerCase())
    );


    const filteredTeamPlayers = team.filter(team =>
        team.teamName.toLowerCase().includes(searchInput.toLowerCase())
    );

    const [showMore, setShowMore] = useState(false);
    const [showMorePro, setShowMorePro] = useState(false);


    const handleShowMoreToggle = () => {
        setShowMore(!showMore);
    };

    const handleShowMoreTogglePro = () => {
        setShowMorePro(!showMorePro);
    };


    const visibleTeams = showMore ? filteredTeamPlayers : filteredTeamPlayers.slice(0, 10);
    const visiblePro = showMorePro ? filteredPlayers : filteredPlayers.slice(0, 10);

    return (

        <div className="sm:container mx-auto mt-8 font-brown-bold">
            <div className=" bottom-0 left-0 flex items-center justify-center text-[#522367]  text-[24px] md:text-[38px] lg:text-[58px] font-brown-bold font-bold w-full ">
                <h1 className='xl:pr-[1000px] lg:pr-[750px] md:pr-[570px] sm:pr-[500px] leading-none text-left'>Results</h1>
            </div>
            <div className="bg-[#f2f2f2] flex justify-center  items-center overflow-hidden xl:mr-[820px] lg:mr-[570px] md:mr-[420px]"
                 >
                <div className="pt-4  md:pt-[20px]   ">

                    <div className="flex justify-center  items-center">
                    <button className={`pl-[10px] h-[86px] ${activeTable === 'PRO' ? 'bg-white border-b-[3px] border-[#522367]' : 'bg-gray-200'}   text-[#522367] font-bold mt-8 md:w-[137px] lg:w-[190px] sm:w-[100px] w-[120px] pt-4 pb-[20px] mx-auto`}
                            onClick={() => setActiveTable('PRO')}>
                        PRO
                    </button>
                    <button className={`pl-[10px] h-[86px] ${activeTable === 'TEAM' ? 'bg-white border-b-[3px] border-[#522367]' : 'bg-gray-200'} text-[#522367] font-bold mt-8 md:w-[137px] lg:w-[190px] sm:w-[100px] w-[120px] pt-4 pb-[20px] mx-auto`}
                            onClick={() => setActiveTable('TEAM')}>
                        TEAM
                    </button>
                    </div>

                </div>
                <hr className="bg-[#b9b9b9] h-[5px]" />
            </div>

            {activeTable === 'PRO' ? (
                <div>
                    <div className="md:flex justify-center xl:items-center">
                    <div className="relative sm:mb-[30px]  mb-[20px] flex justify-center round items-center mt-12 xl:mr-[620px] lg:mr-[360px] md:mr-[170px] flex text-black">
                        <input
                            type="text"
                            placeholder="Search for a player"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            className="md:w-[250px] w-[280px] p-2 pl-10 border-[2px] placeholder-black custom-placeholder border-gray-400 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-gray-200"
                        />
                        <div className="absolute md:ml-[200px] ml-[250px] ">
                            <div>
                            <Image
                                src={Search}
                                alt="Search"
                                className="h-5 w-5 text-gray-400"
                            />
                            </div>
                        </div>
                    </div>
                        <p className="text-center md:text-left mb-[20px]  md:mt-[60px] text-[#232323] lg:text-[18px]  text-[15px]">Last Updated: 24 Nov 2021 08:45 BST</p>
                    </div>
                <div className="overflow-x-auto">
            <table className="xl:w-[1200px] lg:w-[950px] md:w-[700px] sm:w-[600px] w-[500px]  mx-auto bg-white border border-gray-200">
                <thead className="bg-[#522367] text-white text-[13px]">
                <tr>
                    <th className="text-[14px] p-[12px] text-center">POS.</th>
                    <th className="text-[14px] p-[12px] text-start">COUNTRY</th>
                    <th className="text-[14px] p-[12px] text-start">PLAYER NAME</th>
                    <th className="text-[14px] p-[12px] text-end">SCORE</th>
                    <th className="text-[14px] p-[12px] text-center">R1</th>
                    <th className="text-[14px] p-[12px] text-center">R2</th>
                    <th className="text-[14px] p-[12px] text-center">R3</th>
                    <th className="py-2 text-center">TOTAL</th>
                    <th className="text-[14px] p-[12px] text-center">OM</th>
                    <th className="text-[14px] p-[12px] text-center">POINTS</th>
                </tr>
                </thead>
                <tbody>
                {visiblePro.map((player:any, index:any) => (
                    <React.Fragment key={index}>
                        <tr
                            onClick={() => handleRowClick(index)}
                            className={`border-b-[2px] border-gray-4000 cursor-pointer ${openPlayerIndex === index ? 'bg-black text-white' : ''}`}
                        >
                            <td className="text-[14px] p-[12px] text-center">{player.pos}</td>
                            <td className="text-[14px] p-[12px] text-center">
                                <Image src={player.flag} alt={player.country} width={20} height={20} />
                            </td>
                            <td className="text-[14px] p-[12px] text-start">{player.name}</td>
                            <td className="text-[14px] p-[12px] text-end">
                                    <span className={`px-3 py-1 rounded-l-lg  ${openPlayerIndex === index ? 'bg-black text-white bg-red-600 w-[50px] h-[30px]' : 'bg-red-600 w-[50px] h-[30px] text-white'}`}>
                                        {player.score}
                                    </span>
                            </td>
                            <td className={`text-[14px] p-[12px] text-center font-brown-light ${openPlayerIndex === index ? 'bg-black text-white' : 'bg-[#f2f2f2]'}`}>{player.r1}</td>
                            <td className={`text-[14px] p-[12px] text-center font-brown-light ${openPlayerIndex === index ? 'bg-black text-white' : 'bg-[#f2f2f2]'}`}>{player.r2}</td>
                            <td className={`text-[14px] p-[12px] text-center font-brown-light ${openPlayerIndex === index ? 'bg-black text-white' : 'bg-[#f2f2f2]'}`}>{player.r3}</td>
                            <td className={`text-[14px] p-[12px] text-center font-brown-light ${openPlayerIndex === index ? 'bg-black text-white' : 'bg-gray-200'}`}>{player.total1}</td>
                            <td className="text-[14px] p-[12px] text-center">
                                    <span className={`px-3 py-1 rounded-l-lg ${openPlayerIndex === index ? 'bg-black text-white' : 'bg-black text-white'}`}>
                                        {player.om}
                                    </span>
                            </td>
                            <td className={`px-2 py-2 text-center ${openPlayerIndex === index ? 'bg-black text-white' : 'bg-[#f2f2f2]'}`}>{player.points}</td>
                        </tr>
                        {openPlayerIndex === index! && (
                            <tr>
                                <td colSpan={10}>
                                    <HoleByHolePanel player={player as any} onClose={handleClosePanel} />

                                </td>
                            </tr>
                        )}
                    </React.Fragment>
                ))}
                </tbody>
            </table>
                </div>
                {filteredPlayers.length > 10 && (
                        <div className="text-center mt-4">
                            <button
                                className="ml-4 bg-[#522367] font-brown-bold text-[18px]  uppercase text-white px-6 py-4"
                                onClick={handleShowMoreTogglePro}
                            >
                                {showMore ? 'Show Less' : 'Show More'}
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <div>
                    <div className="md:flex justify-center xl:items-center">
                        <div className="relative sm:mb-[30px]  mb-[20px] flex justify-center round items-center mt-12 xl:mr-[620px] lg:mr-[360px] md:mr-[170px] flex text-black">
                            <input
                                type="text"
                                placeholder="Search for a player"
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                                className="md:w-[250px] w-[280px] p-2 pl-10 border-[2px] placeholder-black custom-placeholder border-gray-400 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-gray-200"
                            />
                            <div className="absolute md:ml-[200px] ml-[250px] ">
                                <div>
                                    <Image
                                        src={Search}
                                        alt="Search"
                                        className="h-5 w-5 text-gray-400"
                                    />
                                </div>
                            </div>
                        </div>
                        <p className="text-center md:text-left mb-[20px]  md:mt-[60px] text-[#232323] lg:text-[18px]  text-[15px]">Last Updated: 24 Nov 2021 08:45 BST</p>
                    </div>
                <div className="overflow-x-auto">
                <table className="xl:w-[1200px] lg:w-[950px] md:w-[700px] sm:w-[600px] w-[500px]  mx-auto w-auto bg-white border border-gray-200">
                    <thead className="bg-[#522367] text-white text-[13px]">
                    <tr>
                        <th className="text-[14px] p-[12px] text-center">POS.</th>
                        <th className="py-2 text-start ">TEAM NAME</th>

                        <th className="text-[14px] p-[12px] text-end">SCORE</th>
                        <th className="text-[14px] p-[12px] text-center">R1</th>
                        <th className="text-[14px] p-[12px] text-center">R2</th>

                        <th className="text-[14px] p-[12px] text-center">TOTAL</th>

                    </tr>
                    </thead>
                    <tbody>
                    {visibleTeams.map((team, index) => (

                        // eslint-disable-next-line react/jsx-key
                            <tr className="border-b-[2px] border-gray-400">
                                <td className="text-[14px] p-[12px] text-center">{team.position}</td>
                                <td className="text-[14px] p-[12px]text-start">{team.teamName}</td>

                                <td className="text-[14px] p-[12px] text-end">
                                    <span className=" px-3 py-1 rounded-l-lg  bg-red-600 text-white ">
                                        {team.score}
                                    </span>
                                </td>
                                <td className=" text-[14px] p-[12px] text-center bg-[#f2f2f2] font-brown-light" >{team.r1}</td>
                                <td className=" text-[14px] p-[12px] text-center bg-[#f2f2f2] font-brown-light" >{team.r2}</td>

                                <td className="text-[14px] p-[12px] text-center bg-gray-200 font-brown-light">{team.total}</td>

                            </tr>


                    ))}
                    </tbody>
                </table>
                </div>
                    {filteredTeamPlayers.length > 10 && (
                        <div className="text-center mt-4">
                            <button
                                className="ml-4 bg-[#522367] font-brown-bold text-[18px]  uppercase text-white px-6 py-4"
                                onClick={handleShowMoreToggle}
                            >
                                {showMore ? 'Show Less' : 'Show More'}
                            </button>
                        </div>
                    )}
                </div>
                )}


        </div>
    );
};



const HoleByHolePanel = ({ player, onClose }: { player: any; onClose: () => void }) => {


    return (
        <div className=" relative xl:w-[1200px] lg:w-[950px] md:w-[700px] sm:w-[600px] w-[630px]  mx-auto p-4 bg-[#3E3E3E] text-white">
            <button
                className="absolute top-4 right-4 text-white hover:bg-gray-700 rounded-full p-1"
                onClick={onClose}
            >
                <Image src={CLOSE} alt="cancel" width={40} height={40} />
            </button>
            <div className="flex items-center mt-[25px] mb-[30px] hidden lg:flex ">
                <div className="w-[80px] h-[105px] relative">
                    <Image
                        src={SWE}
                        alt="Player Image"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <h2 className="text-[26px] relative ml-[30px] w-[200px] mr-[100px] font-brown-regular">{player.name} ({player.country})</h2>
                <div className=" h-[130px] mr-[20px] w-[2px] bg-gray-500  ml-[10px]"></div>
                <div className=" flex ">
                    <div className="flex space-x-28 mt-[50px]">

                        <div className="text-sm">2021 Ranking</div>
                        <div className="text-2xl font-bold">{player.om}</div>
                    </div>
                    <div className="ml-8 h-[130px] mr-[20px] w-[2px] bg-gray-500 ml-[20px]  ml-[10px]"></div>
                    <div className="flex space-x-28 mt-[50px]">
                        <div className="text-sm">2021 Points</div>
                        <div className="text-2xl font-bold">{player.points}</div>
                    </div>
                    <div className=" h-[130px] w-[2px] bg-gray-500 ml-[20px] mr-[30px]"></div>
                    <button className="text-white  underline hover:underline mr-[50px]">VIEW PROFILE</button>
                </div>
            </div>
            <div className=" text-white p-2  mx-auto  block lg:hidden ">
                <div >
                    <div className="w-[80px] h-[105px] relative">
                        <Image
                            src={SWE}
                            alt="Player Image"
                            layout="fill"
                            objectFit="cover"

                        />
                    </div>
                    <div className="">
                        <h2 className="text-[26px]  ">
                            {player.name}
                        </h2>
                        <p className="text-[26px] ">
                            ({player.country})
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <div className="pt-[20px] w-full">
                        <hr className="bg-[#b9b9b9] h-[2px] w-[270px] mobile-lg:w-[375px] mobile-md:w-[320px] md:w-[633px]" />
                    </div>
                </div>
                <div className="items-center justify-center">
                    <div className="flex md:justify-between  mobile-lg:space-x-[265px] mobile-md:space-x-[210px] space-x-[160px]">
                        <span className="text-[14px] mt-[20px]">2021 Ranking</span>
                        <span className="text-[26px] mt-[10px] ">{player.om}</span>
                    </div>
                    <div className="flex items-start ">
                        <div className="pt-[20px] w-full">
                            <hr className="bg-[#b9b9b9] h-[2px]  md:w-[633px] mobile-lg:w-[375px] mobile-md:w-[320px]  w-[270px]" />
                        </div>
                    </div>
                    <div className="flex md:justify-between  mobile-lg:space-x-[260px] mobile-md:space-x-[210px] space-x-[150px] ">
                        <span className="text-[14px] mt-[20px]">2021 Points</span>
                        <span className="text-[26px] mt-[10px]">{player.points}</span>
                    </div>
                    <div className="flex items-start ">
                        <div className="pt-[20px] w-full">
                            <hr className="bg-[#b9b9b9] h-[2px] w-[270px] mobile-md:w-[300px] mobile-lg:w-[375px] mobile-md:w-[320px] md:w-[633px]" />
                        </div>
                    </div>
                    <button className="mt-4 text-[18px] underline">VIEW PROFILE</button>
                </div>
            </div>
            <div className="mt-4 overflow-x-auto">
                <table className="min-w-full text-center border-collapse">
                    <thead>
                    <tr>
                        <th className="bg-[#522367] text-[12px]  p-[12px]">HOLE</th>
                        {[...Array(9)].map((_, i) => (
                            <th key={i} className="bg-black border-b-2 border-gray-300 p-2">{i + 1}</th>
                        ))}
                        <th className="bg-[#522367] text-[12px]  p-[12px]">OUT</th>
                        {[...Array(9)].map((_, i) => (
                            <th key={i + 9} className="bg-black border-b-2 border-gray-300 p-2">{i + 10}</th>
                        ))}
                        <th className="bg-[#522367] text-[12px]  p-[12px]">IN</th>
                        <th className="bg-black text-[14px]  p-[12px] border-b-2 border-gray-300 ">TOTAL</th>
                        <th className="bg-black text-[14px]  p-[12px] border-b-2 border-gray-300 ">TO PAR</th>
                    </tr>
                    {/*<tr>*/}
                    {/*    <th className="bg-[#522367] text-[12px] p-2">PAR</th>*/}
                    {/*    {player.parValues.slice(0, 9).map((par, i) => (*/}
                    {/*        <td key={i} className="bg-gray-700 p-2">{par}</td>*/}
                    {/*    ))}*/}
                    {/*    <td className="bg-purple-600 p-2"></td>*/}
                    {/*    {player.parValues.slice(9).map((par, i) => (*/}
                    {/*        <td key={i} className="bg-gray-700 p-2">{par}</td>*/}
                    {/*    ))}*/}
                    {/*    <td className="bg-purple-600 p-2"></td>*/}
                    {/*    <td className="bg-purple-600 p-2"></td>*/}
                    {/*    <td className="bg-purple-600 p-2"></td>*/}
                    {/*</tr>*/}
                    </thead>
                    <tbody>
                    {['PAR'].map((round) => (
                        <tr key={round} className="bg-black text-white">
                            <td className="text-[12px]  p-[12px] bg-[#522367]">{round}</td>
                            {player.scores[round].slice(0, 9).map((score: any, j: any)=> {
                                const typedScore = score as any;
                                return (
                                    <td key={j} className="text-[14px]  p-[12px]">
                                        {typedScore === 4 ? (
                                            <span>{typedScore}</span>
                                        ) : typedScore === 2 || typedScore === 3 ? (
                                            <span className="inline-block w-6 h-6  rounded-full text-white">{typedScore}</span>
                                        ) : (
                                            <span className="inline-block w-6 h-6 bg-black text-white">{typedScore}</span>
                                        )}
                                    </td>
                                );
                            })}
                            <td className="bg-[#522367] text-[12px]  p-[12px]">{player.out[round]}</td>
                            {player.scores[round].slice(9).map((score: any, j: any) => (
                                <td key={j + 9} className="text-[14px]  p-[12px]">
                                    {score === 4 ? (
                                        <span>{score}</span>
                                    ) : score === 2 || score === 3 ? (
                                        <span className="inline-block w-6 h-6  rounded-full text-white">{score}</span>
                                    ) : (
                                        <span className="inline-block w-6 h-6 bg-black text-white">{score}</span>
                                    )}
                                </td>
                            ))}
                            <td className="bg-[#522367] text-[12px]  p-[12px]">{player.in[round]}</td>
                            <td className="text-[14px]  p-[12px]">{player.total[round]}</td>
                            <td className="text-[14px]  p-[12px] bg-black">{player.toPar[round]}</td>
                        </tr>
                    ))}
                    {['R1', 'R2', 'R3'].map((round) => (
                        <tr key={round} className="bg-white text-black border-b-2 border-gray-300">
                            <td className="text-[14px]  p-[12px] bg-gray-200">{round}</td>
                            {player.scores[round].slice(0, 9).map((score: any, j: any) => (
                                <td key={j} className="text-[14px]   ">
                                    {score === 4 ? (
                                        <span>{score}</span>
                                    ) : score === 2 || score === 3 ? (
                                        <span className="inline-flex w-6 h-6 bg-red-600  items-center justify-center  rounded-full text-white"><span>{score}</span> </span>
                                    ) : (
                                        <span className="inline-flex w-6 h-6 bg-black  items-center justify-center text-white"><span>{score}</span> </span>
                                    )}
                                </td>
                            ))}
                            <td className="bg-gray-200 text-[12px]  p-[12px]">{player.out[round]}</td>
                            {player.scores[round].slice(9).map((score: any, j: any) => (
                                <td key={j + 9} className="text-[14px]    ">
                                    {score === 4 ? (
                                        <span>{score}</span>
                                    ) : score === 2 || score === 3 ? (
                                        <span className="inline-flex w-6 h-6 bg-red-600   items-center justify-center  rounded-full text-white"><span>{score}</span> </span>
                                    ) : (
                                        <span className="inline-flex w-6 h-6 bg-black   items-center justify-center  text-white"><span>{score}</span> </span>
                                    )}
                                </td>
                            ))}
                            <td className="bg-gray-200 text-[12px]  p-[12px]">{player.in[round]}</td>
                            <td className="text-[14px]  p-[12px]">{player.total[round]}</td>
                            {/*<td className="p-2 px-2 py-1 bg-red-600 rounded">{player.toPar[round]}</td>*/}
                            <td className="px-2 py-2 text-center">
                                {player.toPar[round] && (
                                    <span className={"px-3 py-1 rounded-l-lg  bg-red-600 text-white text-[14px]"}>
                                        {player.toPar[round]}
                                    </span>
                                )}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className="mt-4 text-sm flex justify-end space-x-4 mb-[50px]">
                <div className="flex items-center">
                    <span className="inline-block w-4 h-4 bg-yellow-500 border-2 border-white rounded-full mr-2"></span>
                    Eagle or better
                </div>
                <div className="flex items-center">
                    <span className="inline-block w-4 h-4 bg-red-600 border-2 border-white rounded-full mr-2"></span>
                    Birdie
                </div>
                <div className="flex items-center">
                    <span className="inline-block w-4 h-4 bg-black border-2 border-white mr-2"></span>
                    Bogey
                </div>
                <div className="flex items-center">
                    <span className="inline-block border-white w-4 h-4 bg-blue-600 border-2 border-white mr-2"></span>
                    Double Bogey +
                </div>
            </div>
        </div>
    );
};

export default PlayerTable1;
