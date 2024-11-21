import React, { useState } from 'react';
import Image from 'next/image';
import SWE from '../../../public/img/news/Untitled-design-3-2.png';
import CLOSE from "../../../public/img/news/icons8-close-50.png";
import Search from "../../../public/img/news/icons8-search-50.png";
import RSA from "../../../public/img/schedule/SOUTH-AFRICA.png";

const PlayerTable = () => {
    const [openPlayerIndex, setOpenPlayerIndex] = useState(null);
    const [searchInput, setSearchInput] = useState('');
    const [activeTable, setActiveTable] = useState('PRO');

    const players = [
        {
            pos: 1,
            country: 'RSA',
            flag: RSA,
            name: 'Chris WILLIAMS',
            score: -9,
            r1: 69,
            r2: 68,
            r3: 70,
            r4:74,
            total1: 207,
            om: 21,
            points: 450,

            scores: {
                PAR: [7, 4, 3, 4, 4, 5, 4, 3, 4, 4, 4, 5, 4, 3, 4, 3, 4, 3],
                R1: [6, 4, 2, 4, 4, 5, 4, 3, 4, 5, 4, 4, 6, 3, 4, 3, 4, 3],
                R2: [4, 4, 2, 4, 4, 5, 4, 3, 4, 5, 4, 4, 6, 6, 4, 3, 4, 3],
                R3: [4, 4, 2, 4, 4, 5, 4, 3, 4, 5, 4, 4, 4, 3, 4, 3, 4, 3],
                R4: [4, 4, 2, 4, 4, 5, 4, 3, 4, 5, 4, 4, 4, 3, 4, 3, 4, 3]
            },
            out: {
                PAR: 36,
                R1: 34,
                R2: 34,
                R3: 34,
                R4:35,
            },
            in: {
                PAR: 36,
                R1: 35,
                R2: 35,
                R3: 35,
                R4:35,
            },
            total: {
                PAR: 72,
                R1: 69,
                R2: 69,
                R3: 70,
                R4:70,
            },
            toPar: {
                R1: -3,
                R2: -3,
                R3: -2,
                R4: "PAR"
            }
        },
        {
            pos: 2,
            country: 'RSA',
            flag: RSA,
            name: 'Phillip PRICE',
            score: -6,
            r1: 69,
            r2: 68,
            r3: 73,
            r4:74,
            total1: 210,
            om: 6,
            points: 297,

            scores: {
                PAR: [7, 4, 3, 4, 4, 5, 4, 3, 4, 4, 4, 5, 4, 3, 4, 3, 4, 3],
                R1: [4, 4, 2, 4, 4, 5, 4, 3, 4, 5, 4, 4, 4, 3, 4, 3, 4, 3],
                R2: [4, 4, 2, 4, 4, 5, 4, 3, 4, 5, 4, 4, 4, 3, 4, 3, 4, 3],
                R3: [4, 4, 2, 4, 4, 5, 4, 3, 4, 5, 4, 4, 4, 3, 4, 3, 4, 3],
                R4: [4, 4, 2, 4, 4, 5, 4, 3, 4, 5, 4, 4, 4, 3, 4, 3, 4, 3]
            },
            out: {
                PAR: 36,
                R1: 34,
                R2: 34,
                R3: 34,
                R4:35,
            },
            in: {
                PAR: 36,
                R1: 35,
                R2: 35,
                R3: 35,
                R4:35,
            },
            total: {
                PAR: 72,
                R1: 69,
                R2: 69,
                R3: 70,
                R4:70,
            },
            toPar: {
                R1: -3,
                R2: -3,
                R3: 1,
                R4:1
            }
        },
        // Add more players here...
    ];

    const player = [
        {
            pos: 1,
            country: 'RSA',
            flag: RSA,
            name: 'Chris WILLIAMS',
            score: -9,
            r1: 69,
            r2: 68,
            r3: 70,
            r4:74,
            total1: 207,


            Round1: {
                PAR: [7, 4, 3, 4, 4, 5, 4, 3, 4, 4, 4, 5, 4, 3, 4, 3, 4, 3],
                SI: [432,400,561,312,183,432,416,481,461,189,384,423,431,430,403,140,491,440],
                Gross: ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
                Net: [4, 4, 2, 4, 4, 5, 4, 3, 4, 5, 4, 4, 4, 3, 4, 3, 4, 3],
                Points: ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-']

            },
            R1out: {
                PAR: 36,
                SI:'',
                Gross:'' ,
                Net:'',
                Points:'',

            },
            R1in: {
                PAR: 36,
                SI:'',
                Gross:'' ,
                Net:'',
                Points:'',


            },
            R1total: {
                PAR: 72,
                SI:'',
                Gross:'' ,
                Net:'',
                Points:'',
            },
            R1toPar: {
                PAR: 36,
                SI:'',
                Gross:'' ,
                Net:'',
                Points:'',
            },
            Round2: {
                PAR: [7, 4, 3, 4, 4, 5, 4, 3, 4, 4, 4, 5, 4, 3, 4, 3, 4, 3],
                SI: [432,400,561,312,183,432,416,481,461,189,384,423,431,430,403,140,491,440],
                Gross: ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
                Net: [1,2,2,2,2,3,2,2,2,2,2,6,3,4,2,2,3,0],
                Points: ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-']

            },
            R2out: {
                PAR: 36,
                SI:'',
                Gross:'' ,
                Net:'',
                Points:'',

            },
            R2in: {
                PAR: 36,
                SI:'',
                Gross:'' ,
                Net:'',
                Points:'',


            },
            R2total: {
                PAR: 72,
                SI:'',
                Gross:'' ,
                Net:'',
                Points:'',
            },
            R2toPar: {
                PAR: 36,
                SI:'',
                Gross:'' ,
                Net:'',
                Points:'',
            },
            Round3: {
                PAR: [7, 4, 3, 4, 4, 5, 4, 3, 4, 4, 4, 5, 4, 3, 4, 3, 4, 3],
                SI: [432,400,561,312,183,432,416,481,461,189,384,423,431,430,403,140,491,440],
                Gross: ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
                Net: [4, 4, 2, 4, 4, 5, 4, 3, 4, 5, 4, 4, 4, 3, 4, 3, 4, 3],
                Points:['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-']

            },
            R3out: {
                PAR: 36,
                SI:'',
                Gross:'' ,
                Net:'',
                Points:'',

            },
            R3in: {
                PAR: 36,
                SI:'',
                Gross:'' ,
                Net:'',
                Points:'',


            },
            R3total: {
                PAR: 72,
                SI:'',
                Gross:'' ,
                Net:'',
                Points:'',
            },
            R3toPar: {
                PAR: 36,
                SI:'',
                Gross:'' ,
                Net:'',
                Points:'',
            }
        },
        {
            pos: 2,
            country: 'RSA',
            flag: RSA,
            name: 'Phillip PRICE',
            score: -6,
            r1: 69,
            r2: 68,
            r3: 73,
            r4:74,
            total1: 210,
            om: 6,
            points: 297,

            Round1: {
                PAR: [7, 4, 3, 4, 4, 5, 4, 3, 4, 4, 4, 5, 4, 3, 4, 3, 4, 3],
                SI: [432,400,561,312,183,432,416,481,461,189,384,423,431,430,403,140,491,440],
                Gross: ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
                Net: [4, 4, 2, 4, 4, 5, 4, 3, 4, 5, 4, 4, 4, 3, 4, 3, 4, 3],
                Points: ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-']

            },
            R1out: {
                PAR: 36,
                SI:'',
                Gross:'' ,
                Net:'',
                Points:'',

            },
            R1in: {
                PAR: 36,
                SI:'',
                Gross:'' ,
                Net:'',
                Points:'',


            },
            R1total: {
                PAR: 72,
                SI:'',
                Gross:'' ,
                Net:'',
                Points:'',
            },
            R1toPar: {
                PAR: 36,
                SI:'',
                Gross:'' ,
                Net:'',
                Points:'',
            },
            Round2: {
                PAR: [7, 4, 3, 4, 4, 5, 4, 3, 4, 4, 4, 5, 4, 3, 4, 3, 4, 3],
                SI: [432,400,561,312,183,432,416,481,461,189,384,423,431,430,403,140,491,440],
                Gross: ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
                Net: [1,2,2,2,2,3,2,2,2,2,2,6,3,4,2,2,3,0],
                Points: ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-']

            },
            R2out: {
                PAR: 36,
                SI:'',
                Gross:'' ,
                Net:'',
                Points:'',

            },
            R2in: {
                PAR: 36,
                SI:'',
                Gross:'' ,
                Net:'',
                Points:'',


            },
            R2total: {
                PAR: 72,
                SI:'',
                Gross:'' ,
                Net:'',
                Points:'',
            },
            R2toPar: {
                PAR: 36,
                SI:'',
                Gross:'' ,
                Net:'',
                Points:'',
            },
            Round3: {
                PAR: [7, 4, 3, 4, 4, 5, 4, 3, 4, 4, 4, 5, 4, 3, 4, 3, 4, 3],
                SI: [432,400,561,312,183,432,416,481,461,189,384,423,431,430,403,140,491,440],
                Gross: ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
                Net: [4, 4, 2, 4, 4, 5, 4, 3, 4, 5, 4, 4, 4, 3, 4, 3, 4, 3],
                Points:['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-']

            },
            R3out: {
                PAR: 36,
                SI:'',
                Gross:'' ,
                Net:'',
                Points:'',

            },
            R3in: {
                PAR: 36,
                SI:'',
                Gross:'' ,
                Net:'',
                Points:'',


            },
            R3total: {
                PAR: 72,
                SI:'',
                Gross:'' ,
                Net:'',
                Points:'',
            },
            R3toPar: {
                PAR: 36,
                SI:'',
                Gross:'' ,
                Net:'',
                Points:'',
            }
        },
        // Add more players here...
    ];

    const playerData = [
        { position: 1, flag: RSA, playerName: 'Chris HOLLINS', score: 46, r1: 40, total: 46 },
        { position: 2, flag: RSA, playerName: 'Keith Duffy', score: 43, r1: 41, total: 43 },
        { position: 3, flag: RSA, playerName: 'Robbie Fowler', score: 42, r1: 36, total: 42 },
        { position: 4, flag: RSA, playerName: 'John Parrott', score: 40, r1: 33, total: 40 },
        { position: 5, flag: RSA, playerName: 'Darren Gough', score: 39, r1: 35, total: 39 },
        { position: 6, flag: RSA, playerName: 'Vernon Kay', score: 37, r1: 33, total: 37 },
        { position: 7, flag: RSA, playerName: 'Brian McFadden', score: 36, r1: 32, total: 36 },
        { position: 8, flag: RSA, playerName: 'Georgie BINGHAM', score: 35, r1: 30, total: 35 },
        { position: 9, flag: RSA, playerName: 'Gavin Hastings', score: 34, r1: 29, total: 34 },
        { position: 10, flag: RSA, playerName: 'Sir Andrew Strauss', score: 33, r1: 31, total: 33 },
        { position: 8, flag: RSA, playerName: 'Georgie BINGHAM', score: 35, r1: 30, total: 35 },
        { position: 9, flag: RSA, playerName: 'Gavin Hastings', score: 34, r1: 29, total: 34 },
        { position: 10, flag: RSA, playerName: 'Sir Andrew Strauss', score: 33, r1: 31, total: 33 }
    ];

    const teamData = [
        { position: 1, teamName: 'Alex CEJKA + Neil Mellor + Paul Jenkins + Steve Harmison', score: 101, r1: 89, total: 101 },
        { position: 2, teamName: 'Chris WILLIAMS + Darren Gough + Alan Stubbs + Clare Seddon', score: 101, r1: 91, total: 101 },
        { position: 3, teamName: 'Paul LAWRIE + Alan Hansen + Damian Hessian + Toby Hessian', score: 99, r1: 89, total: 99 },
        { position: 4, teamName: 'Paul EALES + Sir Andrew Strauss + Peter Kennedy + Howard Rishton', score: 98, r1: 88, total: 98 },
        { position: 5, teamName: 'James KINGSTON + Allan Lamb + Ross Snape + Ed Rom', score: 96, r1: 86, total: 96 },
        { position: 6, teamName: 'Magnus ATLEVI + Chris Hollins + Neil Chambers + Teddy Sheringham', score: 95, r1: 84, total: 95 },
        { position: 7, teamName: 'Clark DENNIS + John Parrott + Joe Nuttall + Alex Woodward', score: 94, r1: 82, total: 94 },
        { position: 7, teamName: 'Stephen DODD + Robbie Fowler + Christian Nellemann + Dom Joly', score: 94, r1: 82, total: 94 },
        { position: 9, teamName: 'Joakim HAEGGMAN + Wayne Lonsdale + Alex Elliott + Danny Mills', score: 93, r1: 83, total: 93 },
        { position: 9, teamName: 'Marc FARRY + Brian McFadden + Alan McInally + Mike Jones', score: 93, r1: 82, total: 93 },
        { position: 7, teamName: 'Stephen DODD + Robbie Fowler + Christian Nellemann + Dom Joly', score: 94, r1: 82, total: 94 },
        { position: 9, teamName: 'Joakim HAEGGMAN + Wayne Lonsdale + Alex Elliott + Danny Mills', score: 93, r1: 83, total: 93 },
        { position: 9, teamName: 'Marc FARRY + Brian McFadden + Alan McInally + Mike Jones', score: 93, r1: 82, total: 93 },
        { position: 9, teamName: 'Marc FARRY + Brian McFadden + Alan McInally + Mike Jones', score: 93, r1: 82, total: 93 },
        { position: 7, teamName: 'Stephen DODD + Robbie Fowler + Christian Nellemann + Dom Joly', score: 94, r1: 82, total: 94 },
        { position: 9, teamName: 'Joakim HAEGGMAN + Wayne Lonsdale + Alex Elliott + Danny Mills', score: 93, r1: 83, total: 93 },
        { position: 9, teamName: 'Marc FARRY + Brian McFadden + Alan McInally + Mike Jones', score: 93, r1: 82, total: 93 }

    ];




    const handleRowClick = (index:any) => {
        let fixedIndex = parseInt(index);
        setOpenPlayerIndex(openPlayerIndex === fixedIndex ? null : index);
    };


    const handleClosePanel = () => {
        setOpenPlayerIndex(null);
    };

    const filteredPlayers = players.filter(player =>
        player.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    const filteredTeamPlayers = player.filter(player =>
        player.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    const celebrityIndividual = playerData.filter(playerData =>
        playerData.playerName.toLowerCase().includes(searchInput.toLowerCase())
    );
    const celebrityTeam = teamData.filter(teamData =>
        teamData.teamName.toLowerCase().includes(searchInput.toLowerCase())
    );

    const [showMorePro, setShowMorePro] = useState(false);
    const [showMoreAma, setShowMoreAma] = useState(false);
    const [showMoreInd, setShowMoreInd] = useState(false);
    const [showMoreTeam, setShowMoreTeam] = useState(false);

    const handleShowMoreToggleTablePro = () => {
        setShowMorePro(!showMorePro);
    };


    const handleShowMoreToggleTableAma = () => {
        setShowMoreAma(!showMoreAma);
    };

    const handleShowMoreToggleTableInd= () => {
        setShowMoreInd(!showMoreInd);
    };

    const handleShowMoreToggleTableTeam = () => {
        setShowMoreTeam(!showMoreTeam);
    };

    const visibleTeamsPro = showMorePro ? filteredPlayers : filteredPlayers.slice(0, 10);
    const visibleTeamsAma = showMoreAma ? filteredTeamPlayers : filteredTeamPlayers.slice(0, 10);
    const visibleTeamsInd = showMoreInd ? celebrityIndividual : celebrityIndividual.slice(0, 10);
    const visibleTeamsTeam = showMoreTeam ? celebrityTeam : celebrityTeam.slice(0, 10);
    return (
        <div className="sm:container mx-auto mt-8 font-brown-bold">
            <div className=" bottom-0 left-0 flex items-center justify-center text-[#522367]  text-[24px] md:text-[38px] lg:text-[58px] font-brown-bold font-bold w-full ">
                <h1 className='xl:pr-[1000px] lg:pr-[750px] md:pr-[570px] sm:pr-[500px]  leading-none text-left'>Results</h1>
            </div>
            <div className="bg-[#f2f2f2] flex md:justify-center justify-start items-center overflow-hidden  xl:mr-[430px] lg:mr-[180px] md:mr-[150px] sm:mr-[150px] overflow-x-auto">
                <div className="pt-4  md:pt-[20px]">

                    <div className="flex md:justify-center justify-start items-center  ">
                        <button className={`pl-[10px] h-[86px] ${activeTable === 'PRO' ? 'bg-white border-b-[3px] border-[#522367]' : 'bg-gray-200'}   text-[#522367] font-bold mt-8 md:w-[137px] lg:w-[190px]  w-[120px]  pt-4 pb-[20px] mx-auto`}
                                onClick={() => setActiveTable('PRO')}>
                            PROS
                        </button>
                        <button className={`pl-[10px] ${activeTable === 'AMATEUR' ? 'bg-white border-b-[3px] border-[#522367]' : 'bg-gray-200'} text-[#522367] font-bold mt-8 md:w-[137px] lg:w-[190px]  w-[120px]  pt-4 pb-[20px] mx-auto`}
                                onClick={() => setActiveTable('AMATEUR')}>
                            AMATEUR <br/>INDIVIDUAL
                        </button>
                        <button className={`pl-[10px] ${activeTable === 'INDIVIDUAL' ? 'bg-white border-b-[3px] border-[#522367]' : 'bg-gray-200'} text-[#522367] font-bold mt-8 md:w-[137px] lg:w-[190px]  w-[120px]  pt-4 pb-[20px] mx-auto`}
                                onClick={() => setActiveTable('INDIVIDUAL')}>
                            CELEBRITY <br/>INDIVIDUAL
                        </button>
                        <button className={`pl-[10px] ${activeTable === 'TEAM' ? 'bg-white border-b-[3px] border-[#522367]' : 'bg-gray-200'} text-[#522367] font-bold mt-8 md:w-[137px] lg:w-[190px]  w-[120px]  pt-4 pb-[20px] mx-auto`}
                                onClick={() => setActiveTable('TEAM')}>
                            CELEBRITY <br/>TEAM
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
                        <p className="text-center md:text-left mb-[20px]  md:mt-[60px] text-[#232323] lg:text-[18px]  text-[15px]">Last Updated: 14 Nov 2023 09:48 BST</p>
                    </div>
                <div className="overflow-x-auto">
            <table className="xl:w-[1200px] lg:w-[950px] md:w-[700px] sm:w-[600px] w-[500px]  mx-auto bg-white border border-gray-200 ">
                <thead className="bg-[#522367] text-white text-[13px]">
                <tr>
                    <th className="text-[14px] p-[12px] text-center">POS.</th>
                    <th className="text-[14px] p-[12px] text-start">COUNTRY</th>
                    <th className="text-[14px] p-[12px] text-start">PLAYER NAME</th>
                    <th className="text-[14px] p-[12px] text-end">SCORE</th>
                    <th className="text-[14px] p-[12px] text-center">R1</th>
                    <th className="text-[14px] p-[12px] text-center">R2</th>
                    <th className="text-[14px] p-[12px] text-center">R3</th>
                    <th className="text-[14px] p-[12px] text-center">R4</th>
                    <th className="text-[14px] p-[12px] text-center">TOTAL</th>
                    <th className="text-[14px] p-[12px] text-center">OM</th>
                    <th className="text-[14px] p-[12px] text-center">POINTS</th>
                </tr>
                </thead>
                <tbody>
                {visibleTeamsPro.map((player, index) => (
                    <React.Fragment key={index}>
                        <tr
                            onClick={() => handleRowClick(index)}
                            className={`border-b-[2px] border-gray-400 cursor-pointer ${openPlayerIndex === index ? 'bg-black text-white' : ''}`}
                        >
                            <td className="text-[14px] p-[12px] text-center">{player.pos}</td>
                            <td className="text-[14px] p-[12px] text-center">
                                <Image src={player.flag} alt={player.country} width={20} height={20} />
                            </td>
                            <td className="text-[14px] p-[12px] text-start">{player.name}</td>
                            <td className="text-[14px] p-[12px] text-end">
                                    <span className={`px-3 py-1 rounded-l-lg  ${openPlayerIndex === index ? 'bg-black  bg-red-600 text-white' : 'bg-red-600 text-white'}`}>
                                        {player.score}
                                    </span>
                            </td>
                            <td className={`text-[14px] p-[12px] text-center font-brown-light ${openPlayerIndex === index ? 'bg-black text-white' : 'bg-[#f2f2f2]'}`}>{player.r1}</td>
                            <td className={`text-[14px] p-[12px] text-center font-brown-light ${openPlayerIndex === index ? 'bg-black text-white' : 'bg-[#f2f2f2]'}`}>{player.r2}</td>
                            <td className={`text-[14px] p-[12px] text-center font-brown-light ${openPlayerIndex === index ? 'bg-black text-white' : 'bg-[#f2f2f2]'}`}>{player.r3}</td>
                            <td className={`text-[14px] p-[12px] text-center font-brown-light ${openPlayerIndex === index ? 'bg-black text-white' : 'bg-[#f2f2f2]'}`}>{player.r4}</td>
                            <td className={`text-[14px] p-[12px] text-center font-brown-light ${openPlayerIndex === index ? 'bg-black text-white' : 'bg-gray-200'}`}>{player.total1}</td>
                            <td className="text-[14px] p-[12px] text-center">
                                    <span className={`px-3 py-1 rounded-l-lg ${openPlayerIndex === index ? 'bg-black text-white' : 'bg-black text-white'}`}>
                                        {player.om}
                                    </span>
                            </td>
                            <td className={`text-[14px] p-[12px] text-center ${openPlayerIndex === index ? 'bg-black text-white' : 'bg-[#f2f2f2]'}`}>{player.points}</td>
                        </tr>
                        {openPlayerIndex === index && (
                            <tr>
                                <td colSpan={11}>
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
                                onClick={handleShowMoreToggleTablePro}
                            >
                                {showMorePro ? 'Show Less' : 'Show More'}
                            </button>
                        </div>
                    )}
                </div>
            ) : activeTable ==='AMATEUR' ? (
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
                        <div>
                        <p className="text-center md:text-left   md:mt-[60px] text-[#232323] lg:text-[18px]  text-[15px]">Last Updated: 14 Nov 2023 09:48 BST</p>
                            <p className="text-center md:text-left mb-[20px]   text-[#232323] lg:text-[18px]  text-[15px]">
                                Format: Stableford</p>
                        </div>
                    </div>
                <div className="overflow-x-auto">
                <table className="xl:w-[1200px] lg:w-[950px] md:w-[700px] sm:w-[600px] w-[500px] mx-auto bg-white border border-gray-200">
                    <thead className="bg-[#522367] text-white text-[13px]">
                    <tr>
                        <th className="text-[14px] p-[12px] text-center">POS.</th>
                        <th className="text-[14px] p-[12px] text-start">COUNTRY</th>
                        <th className="text-[14px] p-[12px] text-start">PLAYER NAME</th>
                        <th className="text-[14px] p-[12px]text-end">SCORE</th>
                        <th className="text-[14px] p-[12px] text-center">R1</th>
                        <th className="text-[14px] p-[12px] text-center">R2</th>
                        <th className="text-[14px] p-[12px] text-center">R3</th>

                        <th className="text-[14px] p-[12px] text-center">TOTAL</th>

                    </tr>
                    </thead>
                    <tbody>
                    {visibleTeamsAma.map((player, index) => (
                        <React.Fragment key={index}>
                            <tr
                                onClick={() => handleRowClick(index)}
                                className={`border-b-[2px] border-gray-400 cursor-pointer ${openPlayerIndex === index ? 'bg-black text-white' : ''}`}
                            >
                                <td className="text-[14px] p-[12px] text-center">{player.pos}</td>
                                <td className="text-[14px] p-[12px] text-center">
                                    <Image src={player.flag} alt={player.country} width={20} height={20} />
                                </td>
                                <td className="text-[14px] p-[12px] text-start">{player.name}</td>
                                <td className="text-[14px] p-[12px] text-center">
                                    <span className={`px-3 py-1 rounded-l-lg ${openPlayerIndex === index ? 'bg-black text-white' : 'bg-black text-white'}`}>
                                        {player.score}
                                    </span>
                                </td>
                                <td className={`text-[14px] p-[12px] text-center font-brown-light ${openPlayerIndex === index ? 'bg-black text-white' : 'bg-[#f2f2f2]'}`}>{player.r1}</td>
                                <td className={`text-[14px] p-[12px] text-center font-brown-light ${openPlayerIndex === index ? 'bg-black text-white' : 'bg-[#f2f2f2]'}`}>{player.r2}</td>
                                <td className={`text-[14px] p-[12px] text-center font-brown-light ${openPlayerIndex === index ? 'bg-black text-white' : 'bg-[#f2f2f2]'}`}>{player.r3}</td>

                                <td className={`text-[14px] p-[12px] text-center font-brown-light ${openPlayerIndex === index ? 'bg-black text-white' : 'bg-gray-200'}`}>{player.total1}</td>

                            </tr>
                            {openPlayerIndex === index && (
                                <tr>
                                    <td colSpan={11}>
                                        <HoleByHolePanelAMATEUR player={player as any} onClose={handleClosePanel} />
                                    </td>
                                </tr>
                            )}
                        </React.Fragment>
                    ))}
                    </tbody>
                </table>
                </div>
                    {filteredTeamPlayers.length > 10 && (
                        <div className="text-center mt-4">
                            <button
                                className="ml-4 bg-[#522367] font-brown-bold text-[18px]  uppercase text-white px-6 py-4"
                                onClick={handleShowMoreToggleTableAma}
                            >
                                {showMoreAma ? 'Show Less' : 'Show More'}
                            </button>
                        </div>
                    )}
                </div>
            ) : activeTable ==='INDIVIDUAL' ? (
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
                        <div>
                            <p className="text-center md:text-left   md:mt-[60px] text-[#232323] lg:text-[18px]  text-[15px]">Last Updated: 14 Nov 2023 09:48 BST</p>
                            <p className="text-center md:text-left mb-[20px]   text-[#232323] lg:text-[18px]  text-[15px]">
                                Format: Stableford</p>
                        </div>
                    </div>
                <div className="overflow-x-auto">
                <table className="xl:w-[1200px] lg:w-[950px] md:w-[700px] sm:w-[600px] w-[500px]  mx-auto bg-white border border-gray-200">
                    <thead className="bg-[#522367] text-white text-[13px]">
                    <tr>
                        <th className="text-[14px] p-[12px] text-center">POS.</th>
                        <th className="text-[14px] p-[12px] text-start">COUNTRY</th>
                        <th className="text-[14px] p-[12px] text-start ">PLAYER NAME</th>

                        <th className=" text-[14px] p-[12px] text-end">SCORE</th>
                        <th className="text-[14px] p-[12px] text-center">R1</th>


                        <th className="text-[14px] p-[12px] text-center">TOTAL</th>

                    </tr>
                    </thead>
                    <tbody>
                    {visibleTeamsInd.map((playerData) => (

                        // eslint-disable-next-line react/jsx-key
                        <tr className="border-b-[2px] border-gray-400">
                            <td className="text-[14px] p-[12px] text-center">{playerData.position}</td>
                            <td className="text-[14px] p-[12px] text-center">
                                <Image src={playerData.flag} alt="flag" width={20} height={20} />
                            </td>
                            <td className="text-[14px] p-[12px] text-start">{playerData.playerName}</td>

                            <td className="text-[14px] p-[12px] text-end">
                                    <span className="px-2 py-1 rounded bg-black text-white">
                                        {playerData.score}
                                    </span>
                            </td>
                            <td className="text-[14px] p-[12px] text-center bg-[#f2f2f2] font-brown-light" >{playerData.r1}</td>

                            <td className="text-[14px] p-[12px] text-center  bg-gray-200 font-brown-light">{playerData.total}</td>

                        </tr>


                    ))}
                    </tbody>
                </table>
                </div>
                    {celebrityIndividual.length > 10 && (
                        <div className="text-center mt-4">
                            <button
                                className="ml-4 bg-[#522367] font-brown-bold text-[18px]  uppercase text-white px-6 py-4"
                                onClick={handleShowMoreToggleTableInd}
                            >
                                {showMoreInd ? 'Show Less' : 'Show More'}
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <div className="overflow-x-auto">
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
                            <div>
                                <p className="text-center md:text-left   md:mt-[60px] text-[#232323] lg:text-[18px]  text-[15px]">Last Updated: 14 Nov 2023 09:48 BST</p>
                                <p className="text-center md:text-left mb-[20px]   text-[#232323] lg:text-[18px]  text-[15px]">
                                    Format: Stableford</p>
                            </div>
                        </div>
                <table className="xl:w-[1200px] lg:w-[950px] md:w-[700px] sm:w-[600px] w-[500px]  mx-auto bg-white border border-gray-200">
                    <thead className="bg-[#522367] text-white text-[13px]">
                    <tr>
                        <th className="text-[14px] p-[12px] text-center">POS.</th>

                        <th className="text-[14px] p-[12px] text-start ">TEAM NAME</th>

                        <th className="text-[14px] p-[12px] text-end">SCORE</th>
                        <th className="text-[14px] p-[12px] text-center ">R1</th>


                        <th className="text-[14px] p-[12px] text-center">TOTAL</th>

                    </tr>
                    </thead>
                    <tbody>
                    {visibleTeamsTeam.map((teamData) => (

                        // eslint-disable-next-line react/jsx-key
                        <tr className="border-b-[2px] border-gray-400">
                            <td className="text-[14px] p-[12px] text-center">{teamData.position}</td>

                            <td className="text-[14px] p-[12px] text-start">{teamData.teamName}</td>

                            <td className="text-[14px] p-[12px] text-end">
                                    <span className="px-2 py-1 rounded bg-black text-white">
                                        {teamData.score}
                                    </span>
                            </td>
                            <td className="text-[14px] p-[12px] text-center bg-[#f2f2f2] font-brown-light" >{teamData.r1}</td>

                            <td className="text-[14px] p-[12px] text-center  bg-gray-200 font-brown-light">{teamData.total}</td>


                        </tr>


                    ))}
                    </tbody>
                </table>
                    </div>
                    {celebrityTeam.length > 10 && (
                        <div className="text-center mt-4">
                            <button
                                className="ml-4 bg-[#522367] font-brown-bold text-[18px]  uppercase text-white px-6 py-4"
                                onClick={handleShowMoreToggleTableTeam}
                            >
                                {showMoreTeam ? 'Show Less' : 'Show More'}
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
        <div className="overflow-x-auto">
        <div className="relative xl:w-[1200px] lg:w-[950px] md:w-[700px] sm:w-[600px] w-[800px]  mx-auto p-4 bg-[#3E3E3E] text-white">
            <button
                className="absolute top-4 right-4 text-white hover:bg-gray-700 rounded-full p-1"
                onClick={onClose}
            >
                <Image src={CLOSE} alt="cancel" width={40} height={40} />
            </button>
            <div className="flex items-center space-x-4 mt-[25px] mb-[30px] hidden lg:flex">
                <div className="w-[80px] h-[105px] relative">
                    <Image
                        src={SWE}
                        alt="Player Image"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <h2 className="text-[26px] relative ml-[100px] w-[189px] font-brown-regular">{player.name} ({player.country})</h2>
                <div className="ml-auto flex ">
                    <div className=" h-[130px] w-[1.5px] bg-white ml-[20px] mr-[30px]"></div>
                    <button className="text-white hover:underline underline mr-[100px]">VIEW PROFILE</button>
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

                    <button className="mt-4 text-[18px] underline">VIEW PROFILE</button>
                </div>
            </div>
            <div className="mt-4 overflow-x-auto">
                <table className="min-w-full text-center border-collapse">
                    <thead>
                    <tr>
                        <th className="bg-[#522367] text-[12px] p-[12px]">HOLE</th>
                        {[...Array(9)].map((_, i) => (
                            <th key={i} className="bg-black border-b-2 border-gray-300 text-[14px] p-[12px]">{i + 1}</th>
                        ))}
                        <th className="bg-[#522367] text-[12px] p-[12px]">OUT</th>
                        {[...Array(9)].map((_, i) => (
                            <th key={i + 9} className="bg-black border-b-2 border-gray-300 text-[14px] p-[12px]">{i + 10}</th>
                        ))}
                        <th className="bg-[#522367] text-[12px] p-[12px]">IN</th>
                        <th className="bg-black text-[14px] p-[12px] border-b-2 border-gray-300 ">TOTAL</th>
                        <th className="bg-black text-[14px] p-[12px] border-b-2 border-gray-300 ">TO PAR</th>
                    </tr>
                    </thead>
                    <tbody>
                    {['PAR'].map((round) => (
                        <tr key={round} className="bg-black text-white">
                            <td className="text-[12px] p-[12px] bg-[#522367]">{round}</td>
                            {player.scores[round].slice(0, 9).map((score: any, j: any) => (
                                <td key={j} className="text-[14px] p-[12px]">
                                    {score === 4 ? (
                                        <span>{score}</span>
                                    ) : score === 2 || score === 3 ? (
                                        <span className="inline-block w-6 h-6   rounded-full text-white">{score}</span>
                                    ) : (
                                        <span className="inline-block w-6 h-6 bg-black text-white">{score}</span>
                                    )}
                                </td>
                            ))}
                            <td className="bg-[#522367] text-[12px] p-[12px]">{player.out[round]}</td>
                            {player.scores[round].slice(9).map((score: any, j: any) => (
                                <td key={j + 9} className="text-[14px] p-[12px]">
                                    {score === 4 ? (
                                        <span>{score}</span>
                                    ) : score === 2 || score === 3 ? (
                                        <span className="inline-block w-6 h-6  rounded-full text-white">{score}</span>
                                    ) : (
                                        <span className="inline-block w-6 h-6  bg-black text-white">{score}</span>
                                    )}
                                </td>
                            ))}
                            <td className="bg-[#522367] text-[12px] p-[12px]">{player.in[round]}</td>
                            <td className="text-[14px] p-[12px]">{player.total[round]}</td>
                            <td className="text-[14px] p-[12px] bg-black">{player.toPar[round]}</td>
                        </tr>
                    ))}
                    {['R1', 'R2', 'R3', 'R4'].map((round) => (
                        <tr key={round} className="bg-white  border-b-2 border-gray-300 text-black">
                            <td className="text-[14px] p-[12px] bg-gray-200">{round}</td>
                            {player.scores[round].slice(0, 9).map((score: any, j: any) => (
                                <td key={j} className="text-[14px] p-[12px]">
                                    {score === 4 ? (
                                        <span>{score}</span>
                                    ) : score === 2 || score === 3 ? (
                                        <span className="inline-block w-6 h-6 bg-red-600 pt-[2px] pb-[2px] rounded-full text-white">{score}</span>
                                    ) : score === 6 ? (
                                        <span className="inline-block w-6 h-6 bg-blue-600 pt-[2px] pb-[2px] text-white">{score}</span>
                                    ) : (
                                        <span className="inline-block w-6 h-6 bg-black pt-[2px] pb-[2px] text-white">{score}</span>
                                    )}
                                </td>
                            ))}
                            <td className="bg-gray-200 text-[12px] p-[12px]">{player.out[round]}</td>
                            {player.scores[round].slice(9).map((score: any, j: any) => (
                                <td key={j + 9} className="text-[14px] p-[12px] ">
                                    {score === 4 ? (
                                        <span>{score}</span>
                                    ) : score === 2 || score === 3 ? (
                                        <span className="inline-block w-6 h-6 bg-red-600 pt-[2px] pb-[2px] rounded-full text-white">{score}</span>
                                    ) : score === 6 ? (
                                        <span className="inline-block w-6 h-6 bg-blue-600 pt-[2px] pb-[2px] text-white">{score}</span>
                                    ) : (
                                        <span className="inline-block w-6 h-6 bg-black pt-[2px] pb-[2px] text-white">{score}</span>
                                    )}
                                </td>
                            ))}
                            <td className="bg-gray-200 text-[12px] p-[12px]">{player.in[round]}</td>
                            <td className="text-[14px] p-[12px]">{player.total[round]}</td>
                            {/*<td className="p-2 px-2 py-1 bg-red-600 rounded">{player.toPar[round]}</td>*/}
                              <td   className="px-2 py-2 text-center">
                                {player.toPar[round] && (
                                    player.toPar[round] === "PAR"? (
                                    <span className={"px-2 py-1 rounded-l-lg  bg-gray-600 text-[14px] text-white"}>
                                        {player.toPar[round]}
                                    </span>
                                        ) : (
                                            <span className={"px-3 py-1 rounded-l-lg  bg-red-600 text-[14px] text-white"}>
                                        {player.toPar[round]}
                                    </span>
                                    )
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
                    <span className="inline-block w-4 h-4 bg-blue-600 border-2 border-white mr-2"></span>
                    Double Bogey +
                </div>
            </div>
        </div>
        </div>
    );
};

const HoleByHolePanelAMATEUR = ({ player, onClose }: { player: any; onClose: () => void }) => {
    const [selectedRound, setSelectedRound] = useState<'Round 1' | 'Round 2' | 'Round 3'>('Round 1');


    return (
        <div className="overflow-x-auto">
        <div className=" relative xl:w-[1200px] lg:w-[950px] md:w-[700px] sm:w-[600px] w-[630px]  mx-auto p-4 bg-[#3E3E3E] text-white">
            <button
                className="absolute top-4 right-4 text-white hover:bg-gray-700 rounded-full p-1"
                onClick={onClose}
            >
                <Image src={CLOSE} alt="cancel" width={40} height={40} />
            </button>
            <div className="flex items-center space-x-4 mt-[25px] mb-[30px] hidden lg:flex">
                <div className="w-[80px] h-[105px] relative">
                    <Image
                        src={SWE}
                        alt="Player Image"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>

                <h2 className="text-[26px] relative ml-[100px] w-[150px] font-brown-regular">{player.name} ({player.country})</h2>

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

            </div>
            <div className="ml-auto flex space-x-0.5 " role="tablist">
                <button
                    className={`pt-[6px] pb-[6px] pl-[14px] pr-[14px] text-[14px] text-[#522367]  ${selectedRound === 'Round 1' ? ' bg-white' : 'bg-gray-200'}`}
                    role="tab"
                    aria-selected={selectedRound === 'Round 1'}
                    onClick={() => setSelectedRound('Round 1')}
                >
                    Round 1
                </button>
                <button
                    className={`pt-[6px] pb-[6px] pl-[14px] pr-[14px] text-[14px] text-[#522367] ${selectedRound === 'Round 2' ? 'bg-white' : 'bg-gray-200'}`}
                    role="tab"
                    aria-selected={selectedRound === 'Round 2'}
                    onClick={() => setSelectedRound('Round 2')}
                >
                    Round 2
                </button>
                <button
                    className={`pt-[6px] pb-[6px] pl-[14px] pr-[14px] text-[14px] text-[#522367] ${selectedRound === 'Round 3' ? ' bg-white' : ' bg-gray-200'}`}
                    role="tab"
                    aria-selected={selectedRound === 'Round 3'}
                    onClick={() => setSelectedRound('Round 3')}
                >
                    Round 3
                </button>
            </div>

            <div className=" overflow-x-auto">
                {selectedRound === 'Round 1' ? (
                <table className="min-w-full text-center border-collapse">
                    <thead>
                    <tr>
                        <th className="bg-[#522367] text-[12px]  p-[12px]">HOLE</th>
                        {[...Array(9)].map((_, i) => (
                            <th key={i} className="bg-black border-b-2 border-gray-200 text-[14px] p-[12px]">{i + 1}</th>
                        ))}
                        <th className="bg-[#522367] text-[12px] p-[12px]">OUT</th>
                        {[...Array(9)].map((_, i) => (
                            <th key={i + 9} className="bg-black border-b-2 border-gray-200 text-[14px] p-[12px]">{i + 10}</th>
                        ))}
                        <th className="bg-[#522367] text-[12px] p-[12px]">IN</th>
                        <th className="bg-black  border-b-2 border-gray-200 text-[12px] p-[12px]">TOTAL</th>
                        <th className="bg-black  border-b-2 border-gray-200 text-[12px] p-[12px]">TO PAR</th>
                    </tr>
                    </thead>
                    <tbody>
                    {['PAR'].map((round) => (
                        <tr key={round} className="bg-black text-white">
                            <td className="text-[12px] p-[12px] bg-[#522367]">{round}</td>
                            {player.Round1[round].slice(0, 9).map((score: any, j: any) => (
                                <td key={j} className=" border-b-2 border-gray-200 text-[14px] p-[12px]">
                                    {score === 4 ? (
                                        <span>{score}</span>
                                    ) : score === 2 || score === 3 ? (
                                        <span className="inline-block w-6 h-6  text-white">{score}</span>
                                    ) : (
                                        <span className="inline-block w-6 h-6 bg-black text-white">{score}</span>
                                    )}
                                </td>
                            ))}
                            <td className="bg-[#522367] text-[12px] p-[12px]">{player.R1out[round]}</td>
                            {player.Round1[round].slice(9).map((score: any, j: any) => (
                                <td key={j + 9} className="border-b-2 border-gray-200 text-[14px] p-[12px]">
                                    {score === 4 ? (
                                        <span>{score}</span>
                                    ) : score === 2 || score === 3 ? (
                                        <span className="inline-block w-6 h-6  text-white">{score}</span>
                                    ) : (
                                        <span className="inline-block w-6 h-6 bg-black text-white">{score}</span>
                                    )}
                                </td>
                            ))}
                            <td className="bg-[#522367] text-[12px] p-[12px]">{player.R1in[round]}</td>
                            <td className="border-b-2 border-gray-200 text-[14px] p-[12px]">{player.R1total[round]}</td>
                            <td className="border-b-2 border-gray-200 text-[14px] p-[12px] bg-black">{player.R1toPar[round]}</td>
                        </tr>
                    ))}
                    {['SI'].map((round) => (
                        <tr key={round} className="bg-black text-white">
                            <td className="text-[12px] p-[12px] bg-[#522367]">{round}</td>
                            {player.Round1[round].slice(0, 9).map((score: any, j: any) => (
                                <td key={j} className="text-[14px] p-[12px]">
                                    {score === 4 ? (
                                        <span>{score}</span>
                                    ) : score === 2 || score === 3 ? (
                                        <span className="inline-block w-6 h-6  text-white">{score}</span>
                                    ) : (
                                        <span className="inline-block w-6 h-6 bg-black text-white">{score}</span>
                                    )}
                                </td>
                            ))}
                            <td className="bg-[#522367] p-2">{player.R1out[round]}</td>
                            {player.Round1[round].slice(9).map((score: any, j: any) => (
                                <td key={j + 9} className="text-[14px] p-[12px]">
                                    {score === 4 ? (
                                        <span>{score}</span>
                                    ) : score === 2 || score === 3 ? (
                                        <span className="inline-block w-6 h-6  text-white">{score}</span>
                                    ) : (
                                        <span className="inline-block w-6 h-6 bg-black text-white">{score}</span>
                                    )}
                                </td>
                            ))}
                            <td className="bg-[#522367] text-[12px] p-[12px]">{player.R1in[round]}</td>
                            <td className="text-[14px] p-[12px]">{player.R1total[round]}</td>
                            <td className="text-[14px] p-[12px] bg-black">{player.R1toPar[round]}</td>
                        </tr>
                    ))}
                    {[ 'Gross', 'Net', 'Points'].map((round) => (
                        <tr key={round} className="bg-white text-black">
                            <td className="border-b-2 border-gray-300 text-[14px] p-[12px] bg-gray-200">{round}</td>
                            {player.Round1[round].slice(0, 9).map((score: any, j: any) => (
                                <td key={j} className="border-b-2 border-gray-300 text-[14px]">
                                    {score === 2 ? (
                                        <span>{score}</span>
                                    ) : score === 0 ? (
                                        <span className="inline-block w-6 h-6 bg-blue-600 pt-[2px] pb-[2px] text-white">{score}</span>
                                    ) : score === 1 ? (
                                        <span className="inline-block w-6 h-6 bg-black pt-[2px] pb-[2px] text-white">{score}</span>
                                    ) : score === 3 ? (
                                        <span className="inline-block w-6 h-6 bg-red-600 pt-[2px] pb-[2px] rounded-full text-white">{score}</span>
                                    ) : score === 4 || score === 6 ? (
                                        <span className="inline-block w-6 h-6 bg-[#FFBB26] pt-[2px] pb-[2px] rounded-full text-white">{score}</span>
                                    ) : (
                                        <span className="inline-block w-6 h-6 text-black">{score}</span>
                                    )}
                                </td>
                            ))}
                            <td className="bg-gray-200 border-b-2 border-gray-300 text-[14px] p-[12px]">{player.R1out[round]}</td>
                            {player.Round1[round].slice(9).map((score: any, j: any) => (
                                <td key={j + 9} className="border-b-2 border-gray-300 text-[14px]">
                                    {score === 2 ? (
                                        <span>{score}</span>
                                    ) : score === 0 ? (
                                        <span className="inline-block w-6 h-6 bg-blue-600 pt-[2px] pb-[2px] text-white">{score}</span>
                                    ) : score === 1 ? (
                                        <span className="inline-block w-6 h-6 bg-black pt-[2px] pb-[2px] text-white">{score}</span>
                                    ) : score === 3 ? (
                                        <span className="inline-block w-6 h-6 bg-red-600 pt-[2px] pb-[2px] rounded-full text-white">{score}</span>
                                    ) : score === 4 || score === 6 ? (
                                        <span className="inline-block w-6 h-6 bg-yellow-500 pt-[2px] pb-[2px] rounded-full text-white">{score}</span>
                                    ) : (
                                        <span className="inline-block w-6 h-6 text-black">{score}</span>
                                    )}
                                </td>
                            ))}
                            <td className="bg-gray-200 border-b-2 border-gray-300 text-[14px] p-[12px]">{player.R1in[round]}</td>
                            <td className="text-[14px] p-[12px] border-b-2 border-gray-300">{player.R1total[round]}</td>
                            {/*<td className="p-2 px-2 py-1 bg-red-600 rounded">{player.toPar[round]}</td>*/}
                            <td className="px-2 py-2 border-b-2 border-gray-300 text-center">
                                {player.R1toPar[round] && (
                                    <span className={"px-3 py-1 rounded-l-lg bg-red-600 text-[14px]  text-white"}>
                                        {player.R1toPar[round]}
                                    </span>
                                )}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                ) : selectedRound ==='Round 2' ? (
                    <table className="min-w-full text-center border-collapse">
                        <thead>
                        <tr>
                            <th className="bg-[#522367] text-[12px]  p-[12px]">HOLE</th>
                            {[...Array(9)].map((_, i) => (
                                <th key={i} className="bg-black border-b-2 border-gray-200 text-[14px] p-[12px]">{i + 1}</th>
                            ))}
                            <th className="bg-[#522367] text-[12px] p-[12px]">OUT</th>
                            {[...Array(9)].map((_, i) => (
                                <th key={i + 9} className="bg-black border-b-2 border-gray-200 text-[14px] p-[12px]">{i + 10}</th>
                            ))}
                            <th className="bg-[#522367] text-[12px] p-[12px]">IN</th>
                            <th className="bg-black  border-b-2 border-gray-200 text-[12px] p-[12px]">TOTAL</th>
                            <th className="bg-black  border-b-2 border-gray-200 text-[12px] p-[12px]">TO PAR</th>
                        </tr>
                        </thead>
                        <tbody>
                        {['PAR'].map((round) => (
                            <tr key={round} className="bg-black text-white">
                                <td className="text-[12px] p-[12px] bg-[#522367]">{round}</td>
                                {player.Round2[round].slice(0, 9).map((score: any, j: any) => (
                                    <td key={j} className=" border-b-2 border-gray-200 text-[14px] p-[12px]">
                                        {score === 4 ? (
                                            <span>{score}</span>
                                        ) : score === 2 || score === 3 ? (
                                            <span className="inline-block w-6 h-6  text-white">{score}</span>
                                        ) : (
                                            <span className="inline-block w-6 h-6 bg-black text-white">{score}</span>
                                        )}
                                    </td>
                                ))}
                                <td className="bg-[#522367] text-[12px] p-[12px]">{player.R2out[round]}</td>
                                {player.Round2[round].slice(9).map((score: any, j: any) => (
                                    <td key={j + 9} className="border-b-2 border-gray-200 text-[14px] p-[12px]">
                                        {score === 4 ? (
                                            <span>{score}</span>
                                        ) : score === 2 || score === 3 ? (
                                            <span className="inline-block w-6 h-6  text-white">{score}</span>
                                        ) : (
                                            <span className="inline-block w-6 h-6 bg-black text-white">{score}</span>
                                        )}
                                    </td>
                                ))}
                                <td className="bg-[#522367] text-[12px] p-[12px]">{player.R2in[round]}</td>
                                <td className="border-b-2 border-gray-200 text-[14px] p-[12px]">{player.R2total[round]}</td>
                                <td className="border-b-2 border-gray-200 text-[14px] p-[12px] bg-black">{player.R2toPar[round]}</td>
                            </tr>
                        ))}
                        {['SI'].map((round) => (
                            <tr key={round} className="bg-black text-white">
                                <td className="text-[12px] p-[12px] bg-[#522367]">{round}</td>
                                {player.Round2[round].slice(0, 9).map((score: any, j: any) => (
                                    <td key={j} className="text-[14px] p-[12px]">
                                        {score === 4 ? (
                                            <span>{score}</span>
                                        ) : score === 2 || score === 3 ? (
                                            <span className="inline-block w-6 h-6  text-white">{score}</span>
                                        ) : (
                                            <span className="inline-block w-6 h-6 bg-black text-white">{score}</span>
                                        )}
                                    </td>
                                ))}
                                <td className="bg-[#522367] p-2">{player.R2out[round]}</td>
                                {player.Round2[round].slice(9).map((score: any, j: any) => (
                                    <td key={j + 9} className="text-[14px] p-[12px]">
                                        {score === 4 ? (
                                            <span>{score}</span>
                                        ) : score === 2 || score === 3 ? (
                                            <span className="inline-block w-6 h-6  text-white">{score}</span>
                                        ) : (
                                            <span className="inline-block w-6 h-6 bg-black text-white">{score}</span>
                                        )}
                                    </td>
                                ))}
                                <td className="bg-[#522367] text-[12px] p-[12px]">{player.R2in[round]}</td>
                                <td className="text-[14px] p-[12px]">{player.R2total[round]}</td>
                                <td className="text-[14px] p-[12px] bg-black">{player.R2toPar[round]}</td>
                            </tr>
                        ))}
                        {[ 'Gross', 'Net', 'Points'].map((round) => (
                            <tr key={round} className="bg-white text-black">
                                <td className="border-b-2 border-gray-300 text-[14px] p-[12px] bg-gray-200">{round}</td>
                                {player.Round2[round].slice(0, 9).map((score: any, j: any) => (
                                    <td key={j} className="border-b-2 border-gray-300 text-[14px]">
                                        {score === 2 ? (
                                            <span>{score}</span>
                                        ) : score === 0 ? (
                                            <span className="inline-block w-6 h-6 bg-blue-600 pt-[2px] pb-[2px] text-white">{score}</span>
                                        ) : score === 1 ? (
                                            <span className="inline-block w-6 h-6 bg-black pt-[2px] pb-[2px] text-white">{score}</span>
                                        ) : score === 3 ? (
                                            <span className="inline-block w-6 h-6 bg-red-600 pt-[2px] pb-[2px] rounded-full text-white">{score}</span>
                                        ) : score === 4 || score === 6 ? (
                                            <span className="inline-block w-6 h-6 bg-[#FFBB26] pt-[2px] pb-[2px] rounded-full text-white">{score}</span>
                                        ) : (
                                            <span className="inline-block w-6 h-6 text-black">{score}</span>
                                        )}
                                    </td>
                                ))}
                                <td className="bg-gray-200 border-b-2 border-gray-300 text-[14px] p-[12px]">{player.R2out[round]}</td>
                                {player.Round2[round].slice(9).map((score: any, j: any) => (
                                    <td key={j + 9} className="border-b-2 border-gray-300 text-[14px]  ">
                                        {score === 2 ? (
                                            <span>{score}</span>
                                        ) : score === 0 ? (
                                            <span className="inline-block w-6 h-6 bg-blue-600 pt-[2px] pb-[2px] text-white">{score}</span>
                                        ) : score === 1 ? (
                                            <span className="inline-block w-6 h-6 bg-black pt-[2px] pb-[2px] text-white">{score}</span>
                                        ) : score === 3 ? (
                                            <span className="inline-block w-6 h-6 bg-red-600 pt-[2px] pb-[2px] rounded-full text-white">{score}</span>
                                        ) : score === 4 || score === 6 ? (
                                            <span className="inline-block w-6 h-6 bg-yellow-500 pt-[2px] pb-[2px] rounded-full text-white">{score}</span>
                                        ) : (
                                            <span className="inline-block w-6 h-6 text-black">{score}</span>
                                        )}
                                    </td>
                                ))}
                                <td className="bg-gray-200 border-b-2 border-gray-300 text-[14px] p-[12px]">{player.R2in[round]}</td>
                                <td className="text-[14px] p-[12px] border-b-2 border-gray-300">{player.R2total[round]}</td>
                                {/*<td className="p-2 px-2 py-1 bg-red-600 rounded">{player.toPar[round]}</td>*/}
                                <td className="px-2 py-2 border-b-2 border-gray-300 text-center">
                                    {player.R2toPar[round] && (
                                    <span className={"px-3 py-1 rounded-l-lg bg-red-600 text-[14px]  text-white"}>
                                        {player.R2toPar[round]}
                                    </span>
                                    )}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    ):(
                    <table className="min-w-full text-center border-collapse">
                        <thead>
                        <tr>
                            <th className="bg-[#522367] text-[12px]  p-[12px]">HOLE</th>
                            {[...Array(9)].map((_, i) => (
                                <th key={i} className="bg-black border-b-2 border-gray-200 text-[14px] p-[12px]">{i + 1}</th>
                            ))}
                            <th className="bg-[#522367] text-[12px] p-[12px]">OUT</th>
                            {[...Array(9)].map((_, i) => (
                                <th key={i + 9} className="bg-black border-b-2 border-gray-200 text-[14px] p-[12px]">{i + 10}</th>
                            ))}
                            <th className="bg-[#522367] text-[12px] p-[12px]">IN</th>
                            <th className="bg-black  border-b-2 border-gray-200 text-[12px] p-[12px]">TOTAL</th>
                            <th className="bg-black  border-b-2 border-gray-200 text-[12px] p-[12px]">TO PAR</th>
                        </tr>
                        </thead>
                        <tbody>
                        {['PAR'].map((round) => (
                            <tr key={round} className="bg-black text-white">
                                <td className="text-[12px] p-[12px] bg-[#522367]">{round}</td>
                                {player.Round3[round].slice(0, 9).map((score: any, j: any) => (
                                    <td key={j} className=" border-b-2 border-gray-200 text-[14px] p-[12px]">
                                        {score === 4 ? (
                                            <span>{score}</span>
                                        ) : score === 2 || score === 3 ? (
                                            <span className="inline-block w-6 h-6  text-white">{score}</span>
                                        ) : (
                                            <span className="inline-block w-6 h-6 bg-black text-white">{score}</span>
                                        )}
                                    </td>
                                ))}
                                <td className="bg-[#522367] text-[12px] p-[12px]">{player.R3out[round]}</td>
                                {player.Round3[round].slice(9).map((score: any, j: any) => (
                                    <td key={j + 9} className="border-b-2 border-gray-200 text-[14px] p-[12px]">
                                        {score === 4 ? (
                                            <span>{score}</span>
                                        ) : score === 2 || score === 3 ? (
                                            <span className="inline-block w-6 h-6  text-white">{score}</span>
                                        ) : (
                                            <span className="inline-block w-6 h-6 bg-black text-white">{score}</span>
                                        )}
                                    </td>
                                ))}
                                <td className="bg-[#522367] text-[12px] p-[12px]">{player.R3in[round]}</td>
                                <td className="border-b-2 border-gray-200 text-[14px] p-[12px]">{player.R3total[round]}</td>
                                <td className="border-b-2 border-gray-200 text-[14px] p-[12px] bg-black">{player.R3toPar[round]}</td>
                            </tr>
                        ))}
                        {['SI'].map((round) => (
                            <tr key={round} className="bg-black text-white">
                                <td className="text-[12px] p-[12px] bg-[#522367]">{round}</td>
                                {player.Round3[round].slice(0, 9).map((score: any, j: any) => (
                                    <td key={j} className="text-[14px] p-[12px]">
                                        {score === 4 ? (
                                            <span>{score}</span>
                                        ) : score === 2 || score === 3 ? (
                                            <span className="inline-block w-6 h-6  text-white">{score}</span>
                                        ) : (
                                            <span className="inline-block w-6 h-6 bg-black text-white">{score}</span>
                                        )}
                                    </td>
                                ))}
                                <td className="bg-[#522367] p-2">{player.R3out[round]}</td>
                                {player.Round3[round].slice(9).map((score: any, j: any) => (
                                    <td key={j + 9} className="text-[14px] p-[12px]">
                                        {score === 4 ? (
                                            <span>{score}</span>
                                        ) : score === 2 || score === 3 ? (
                                            <span className="inline-block w-6 h-6  text-white">{score}</span>
                                        ) : (
                                            <span className="inline-block w-6 h-6 bg-black text-white">{score}</span>
                                        )}
                                    </td>
                                ))}
                                <td className="bg-[#522367] text-[12px] p-[12px]">{player.R3in[round]}</td>
                                <td className="text-[14px] p-[12px]">{player.R3total[round]}</td>
                                <td className="text-[14px] p-[12px] bg-black">{player.R3toPar[round]}</td>
                            </tr>
                        ))}
                        {[ 'Gross', 'Net', 'Points'].map((round) => (
                            <tr key={round} className="bg-white text-black">
                                <td className="border-b-2 border-gray-300 text-[14px] p-[12px] bg-gray-200">{round}</td>
                                {player.Round3[round].slice(0, 9).map((score: any, j: any) => (
                                    <td key={j} className="border-b-2 border-gray-300 text-[14px]">
                                        {score === 2 ? (
                                            <span>{score}</span>
                                        ) : score === 0 ? (
                                            <span className="inline-block w-6 h-6 bg-blue-600 pt-[2px] pb-[2px] text-white">{score}</span>
                                        ) : score === 1 ? (
                                            <span className="inline-block w-6 h-6 bg-black pt-[2px] pb-[2px] text-white">{score}</span>
                                        ) : score === 3 ? (
                                            <span className="inline-block w-6 h-6 bg-red-600 pt-[2px] pb-[2px] rounded-full text-white">{score}</span>
                                        ) : score === 4 || score === 6 ? (
                                            <span className="inline-block w-6 h-6 bg-[#FFBB26] pt-[2px] pb-[2px] rounded-full text-white">{score}</span>
                                        ) : (
                                            <span className="inline-block w-6 h-6 text-black">{score}</span>
                                        )}
                                    </td>
                                ))}
                                <td className="bg-gray-200 border-b-2 border-gray-300 text-[14px] p-[12px]">{player.R3out[round]}</td>
                                {player.Round3[round].slice(9).map((score: any, j: any) => (
                                    <td key={j + 9} className="border-b-2 border-gray-300 text-[14px]  ">
                                        {score === 2 ? (
                                            <span>{score}</span>
                                        ) : score === 0 ? (
                                            <span className="inline-block w-6 h-6 bg-blue-600 pt-[2px] pb-[2px] text-white">{score}</span>
                                        ) : score === 1 ? (
                                            <span className="inline-block w-6 h-6 bg-black pt-[2px] pb-[2px] text-white">{score}</span>
                                        ) : score === 3 ? (
                                            <span className="inline-block w-6 h-6 bg-red-600 pt-[2px] pb-[2px] rounded-full text-white">{score}</span>
                                        ) : score === 4 || score === 6 ? (
                                            <span className="inline-block w-6 h-6 bg-yellow-500 pt-[2px] pb-[2px] rounded-full text-white">{score}</span>
                                        ) : (
                                            <span className="inline-block w-6 h-6 text-black">{score}</span>
                                        )}
                                    </td>
                                ))}
                                <td className="bg-gray-200 border-b-2 border-gray-300 text-[14px] p-[12px]">{player.R3in[round]}</td>
                                <td className="text-[14px] p-[12px] border-b-2 border-gray-300">{player.R3total[round]}</td>
                                {/*<td className="p-2 px-2 py-1 bg-red-600 rounded">{player.toPar[round]}</td>*/}
                                <td className="px-2 py-2 border-b-2 border-gray-300 text-center">
                                    {player.R3toPar[round] && (
                                    <span className={"px-3 py-1 rounded-l-lg bg-red-600 text-[14px] text-white"}>
                                        {player.R3toPar[round]}
                                    </span>
                                    )}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    )}
            </div>
            <div className="mt-4 text-sm flex justify-end space-x-4 mb-[50px] ">
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
                    <span className="inline-block w-4 h-4 bg-blue-600 border-2 border-white mr-2"></span>
                    Double Bogey +
                </div>
            </div>
        </div>
        </div>
    );
};
export default PlayerTable;
