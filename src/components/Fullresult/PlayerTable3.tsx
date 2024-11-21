import React, { useState } from 'react';
import Image from 'next/image';
import SWE from '../../../public/img/news/Untitled-design-3-2.png';
import CLOSE from "../../../public/img/news/icons8-close-50.png";
import Search from "../../../public/img/news/icons8-search-50.png";
import IRE from "../../../public/img/schedule/IRELAND.png";
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
                R3: -2
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
                R3: 1
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
                Net:'-9',
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

    const teamData = [
        { position: 1, teamName: 'Team McCLOSKEY', score: -36, r1: 133, r2: 125, r3: 132, total: 390 },
        { position: 2, teamName: 'Team HARROP', score: -35, r1: 131, r2: 127, r3: 133, total: 391 },
        { position: 3, teamName: 'Team McCARRON T', score: -33, r1: 139, r2: 129, r3: 125, total: 393 },
        { position: 4, teamName: 'Team CATTON', score: -31, r1: 130, r2: 129, r3: 136, total: 395 },
        { position: 5, teamName: 'Team BUTLER', score: -29, r1: 136, r2: 134, r3: 127, total: 397 },
        { position: 6, teamName: 'Team SNAPE', score: -27, r1: 137, r2: 132, r3: 130, total: 399 },
        { position: 7, teamName: 'Team JONES', score: -26, r1: 136, r2: 130, r3: 134, total: 400 },
        { position: 8, teamName: 'Team NESBITT', score: -24, r1: 132, r2: 139, r3: 131, total: 402 },
        { position: 8, teamName: 'Team TURLEY', score: -24, r1: 139, r2: 132, r3: 131, total: 402 },
        { position: 10, teamName: 'Team HUMPHREYS', score: -23, r1: 138, r2: 137, r3: 128, total: 403 },
        { position: 7, teamName: 'Team JONES', score: -26, r1: 136, r2: 130, r3: 134, total: 400 },
        { position: 8, teamName: 'Team NESBITT', score: -24, r1: 132, r2: 139, r3: 131, total: 402 },
        { position: 8, teamName: 'Team TURLEY', score: -24, r1: 139, r2: 132, r3: 131, total: 402 },
        { position: 10, teamName: 'Team HUMPHREYS', score: -23, r1: 138, r2: 137, r3: 128, total: 403 }
    ];

    const playerData = [
        { position: 1, flag: IRE, playerName: 'Jim Gavin', score: 44, r1: 40, total: 44 },
        { position: 2, flag: IRE, playerName: 'Keith Wood', score: 42, r1: 36, total: 42 },
        { position: 3, flag: IRE, playerName: 'Joe Canning', score: 41, r1: 35, total: 41 },
        { position: 4, flag: IRE, playerName: 'David Humphreys', score: 39, r1: 34, total: 39 },
        { position: 5, flag: IRE, playerName: 'Georgie BINGHAM', score: 38, r1: 31, total: 38 },
        { position: 6, flag: IRE, playerName: 'Robbie Fowler', score: 36, r1: 30, total: 36 },
        { position: 7, flag: IRE, playerName: 'Andrew Strauss', score: 32, r1: 29, total: 32 },
        { position: 7, flag: IRE, playerName: 'Daniel O\'Carroll', score: 32, r1: 26, total: 32 },
        { position: 9, flag: IRE, playerName: 'Niall Quinn', score: 30, r1: 25, total: 30 },
        { position: 9, flag: IRE, playerName: 'Anthony Nash', score: 30, r1: 28, total: 30 },
        { position: 7, flag: IRE, playerName: 'Andrew Strauss', score: 32, r1: 29, total: 32 },
        { position: 7, flag: IRE, playerName: 'Daniel O\'Carroll', score: 32, r1: 26, total: 32 },
        { position: 9, flag: IRE, playerName: 'Niall Quinn', score: 30, r1: 25, total: 30 },
        { position: 9, flag: IRE, playerName: 'Anthony Nash', score: 30, r1: 28, total: 30 }
    ];

    const teamDataDetailed = [
        { position: 1, teamName: 'Paul LAWRIE + Ronnie Whelan + Alan Hansen + Janet Hansen', score: 105, r1: 92, total: 105 },
        { position: 2, teamName: 'Peter FOWLER + David Humphreys + Seamus Hopkins + Matthew Coyle', score: 97, r1: 86, total: 97 },
        { position: 3, teamName: 'James KINGSTON + Jim Gavin + Jack Murray + Joseph Carlin', score: 96, r1: 88, total: 96 },
        { position: 3, teamName: 'Philip GOLDING + Joe Canning + Gary Ross + Mark Catton', score: 96, r1: 84, total: 96 },
        { position: 5, teamName: 'Markus BRIER + Georgie Bingham + Chris Embleton + Kerr Livingston', score: 95, r1: 83, total: 95 },
        { position: 6, teamName: 'Peter BAKER + Mike Tindall + Frank Casey Jnr + Seamus Herraghty', score: 93, r1: 83, total: 93 },
        { position: 7, teamName: 'David SHACKLADY + Daniel O\'Carroll + Damien Doherty + Joe McColgan', score: 92, r1: 81, total: 92 },
        { position: 7, teamName: 'Paul MCGINLEY + Keith Wood + Jeremy Bull + Debbie Bull', score: 92, r1: 80, total: 92 },
        { position: 9, teamName: 'Clark DENNIS + Anthony Nash + Matt Sandercock + John Moore', score: 91, r1: 83, total: 91 },
        { position: 10, teamName: 'Thomas BJØRN + James Nesbitt + Ross Snape + Heidi Huehn', score: 90, r1: 80, total: 90 },
        { position: 7, teamName: 'David SHACKLADY + Daniel O\'Carroll + Damien Doherty + Joe McColgan', score: 92, r1: 81, total: 92 },
        { position: 7, teamName: 'Paul MCGINLEY + Keith Wood + Jeremy Bull + Debbie Bull', score: 92, r1: 80, total: 92 },
        { position: 9, teamName: 'Clark DENNIS + Anthony Nash + Matt Sandercock + John Moore', score: 91, r1: 83, total: 91 },
        { position: 10, teamName: 'Thomas BJØRN + James Nesbitt + Ross Snape + Heidi Huehn', score: 90, r1: 80, total: 90 }



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

    const Team = teamData.filter(teamData =>
        teamData.teamName.toLowerCase().includes(searchInput.toLowerCase())
    );
    const celebrityIndividual = playerData.filter(playerData =>
        playerData.playerName.toLowerCase().includes(searchInput.toLowerCase())
    );
    const celebrityTeam = teamDataDetailed.filter(teamDataDetailed =>
        teamDataDetailed.teamName.toLowerCase().includes(searchInput.toLowerCase())
    );

    const [showMorePro, setShowMorePro] = useState(false);
    const [showMoreAma, setShowMoreAma] = useState(false);
    const [showMoreInd, setShowMoreInd] = useState(false);
    const [showMoreTeam, setShowMoreTeam] = useState(false);
    const [showMoreCTeam, setShowMoreCTeam] = useState(false);

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

    const handleShowMoreToggleTableCTeam = () => {
        setShowMoreCTeam(!showMoreCTeam);
    };

    const visibleTeamsPro = showMorePro ? filteredPlayers : filteredPlayers.slice(0, 10);
    const visibleTeamsAma = showMoreAma ? filteredTeamPlayers : filteredTeamPlayers.slice(0, 10);
    const visibleTeamsInd = showMoreInd ? celebrityIndividual : celebrityIndividual.slice(0, 10);
    const visibleTeamsTeam = showMoreTeam ? Team : Team.slice(0, 10);
    const visibleTeamsCTeam = showMoreCTeam ? celebrityTeam : celebrityTeam.slice(0, 10);

    return (
        <div className="sm:container mx-auto mt-8 font-brown-bold">
            <div className=" bottom-0 left-0 flex items-center justify-center text-[#522367]  text-[24px] md:text-[38px] lg:text-[58px] font-brown-bold font-bold w-full ">
                <h1 className='xl:pr-[1000px] lg:pr-[750px] md:pr-[570px] sm:pr-[500px] leading-none text-left'>Results</h1>
            </div>
            <div className="overflow-x-auto">
            <div className="bg-[#f2f2f2] flex md:justify-center justify-start items-center  xl:mr-[250px] ">

                <div className="pt-4  md:pt-[20px]">

                    <div className="flex md:justify-center justify-start items-center  ">

                        <button className={` h-[84px] ${activeTable === 'PRO' ? 'bg-white border-b-[3px] border-[#522367]' : 'bg-gray-200'}   text-[#522367] font-bold mt-8 md:w-[137px] lg:w-[190px]  w-[120px] pt-4 pb-[20px] mx-auto`}
                                onClick={() => setActiveTable('PRO')}>
                            PROS
                        </button>
                        <button className={` ${activeTable === 'AMATEUR' ? 'bg-white border-b-[3px] border-[#522367]' : 'bg-gray-200'} text-[#522367] font-bold mt-8 md:w-[137px] lg:w-[190px]  w-[120px] pt-4 pb-[20px] mx-auto`}
                                onClick={() => setActiveTable('AMATEUR')}>
                            AMATEUR <br/>INDIVIDUAL
                        </button>
                        <button className={` h-[84px] ${activeTable === 'TEAM' ? 'bg-white border-b-[3px] border-[#522367]' : 'bg-gray-200'} text-[#522367] font-bold mt-8 md:w-[137px] lg:w-[190px]  w-[120px] pt-4 pb-[20px] mx-auto`}
                                onClick={() => setActiveTable('TEAM')}>
                            TEAM
                        </button>
                        <button className={` ${activeTable === 'INDIVIDUAL' ? 'bg-white border-b-[3px] border-[#522367]' : 'bg-gray-200'} text-[#522367] font-bold mt-8 md:w-[137px] lg:w-[190px]  w-[120px] pt-4 pb-[20px] mx-auto`}
                                onClick={() => setActiveTable('INDIVIDUAL')}>
                            CELEBRITY <br/>INDIVIDUAL
                        </button>
                        <button className={` ${activeTable === 'CTEAM' ? 'bg-white border-b-[3px] border-[#522367]' : 'bg-gray-200'} text-[#522367] font-bold mt-8 md:w-[137px] lg:w-[190px]  w-[120px] pt-4 pb-[20px] mx-auto`}
                                onClick={() => setActiveTable('CTEAM')}>
                            CELEBRITY <br/>TEAM
                        </button>

                    </div>


                </div>
                <hr className="bg-[#b9b9b9] h-[5px]"/>
            </div>
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
                        <p className="text-center md:text-left mb-[20px]  md:mt-[60px] text-[#232323] lg:text-[18px]  text-[15px]">Last Updated: 10 Nov 2021 11:18 BST</p>
                    </div>
                <div className="overflow-x-auto">
                <table className="xl:w-[1200px] lg:w-[950px] md:w-[700px] sm:w-[600px] w-[500px] mx-auto bg-white border border-gray-200">
                    <thead className="bg-[#522367] text-white text-[13px]">
                    <tr>
                        <th className="text-[14px] p-[12px] text-center">POS.</th>
                        <th className="text-[14px] p-[12px] text-start">COUNTRY</th>
                        <th className="text-[14px] p-[12px] text-center">PLAYER NAME</th>
                        <th className="text-[14px] p-[12px] text-center">SCORE</th>
                        <th className="text-[14px] p-[12px] text-center">R1</th>
                        <th className="text-[14px] p-[12px] text-center">R2</th>
                        <th className="text-[14px] p-[12px] text-center">R3</th>
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
                                    <Image src={player.flag} alt="flag" width={20} height={20} />
                                </td>
                                <td className="text-[14px] p-[12px] text-center">{player.name}</td>
                                <td className="text-[14px] p-[12px] text-center">
                                    <span className={`px-3 py-1 rounded-l-lg ${openPlayerIndex === index ? 'bg-black text-white bg-red-600 ' : 'bg-red-600 text-white'}`}>
                                        {player.score}
                                    </span>
                                </td>
                                <td className={`text-[14px] p-[12px] text-center ${openPlayerIndex === index ? 'bg-black text-white' : 'bg-[#f2f2f2]'}`}>{player.r1}</td>
                                <td className={`text-[14px] p-[12px] text-center ${openPlayerIndex === index ? 'bg-black text-white' : 'bg-[#f2f2f2]'}`}>{player.r2}</td>
                                <td className={`text-[14px] p-[12px] text-center ${openPlayerIndex === index ? 'bg-black text-white' : 'bg-[#f2f2f2]'}`}>{player.r3}</td>
                                <td className={`text-[14px] p-[12px] text-center ${openPlayerIndex === index ? 'bg-black text-white' : 'bg-gray-200'}`}>{player.total1}</td>
                                <td className="text-[14px] p-[12px] text-center">
                                    <span className={`px-3 py-1 rounded-l-lg ${openPlayerIndex === index ? 'bg-black text-white' : 'bg-black text-white'}`}>
                                        {player.om}
                                    </span>
                                </td>
                                <td className={`text-[14px] p-[12px] text-center ${openPlayerIndex === index ? 'bg-black text-white' : 'bg-[#f2f2f2]'}`}>{player.points}</td>
                            </tr>
                            {openPlayerIndex === index && (
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
                            <p className="text-center md:text-left   md:mt-[60px] text-[#232323] lg:text-[18px]  text-[15px]">Last Updated: 10 Nov 2021 11:18 BST</p>
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
                        <th className="text-[14px] p-[12px] py-2 text-center">SCORE</th>
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
                                <td className="py-2 text-center">
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
            ) : activeTable ==='TEAM' ? (
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
                        <p className="text-center md:text-left mb-[20px]  md:mt-[60px] text-[#232323] lg:text-[18px]  text-[15px]">Last Updated: 10 Nov 2021 11:18 BST</p>
                    </div>
                <div className="overflow-x-auto">
                <table className="xl:w-[1200px] lg:w-[950px] md:w-[700px] sm:w-[600px] w-[500px] mx-auto bg-white border border-gray-200">
                    <thead className="bg-[#522367] text-white text-[13px]">
                    <tr>
                        <th className="text-[14px] p-[12px] text-center">POS.</th>
                        <th className="text-[14px] p-[12px] text-start ">TEAM NAME</th>

                        <th className="text-[14px] p-[12px] text-end">SCORE</th>
                        <th className="text-[14px] p-[12px] text-center">R1</th>
                        <th className="text-[14px] p-[12px] text-center">R2</th>
                        <th className="text-[14px] p-[12px] text-center">R3</th>
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
                                    <span className=" px-3 py-1 rounded-l-lg bg-red-600 text-white ">
                                        {teamData.score}
                                    </span>
                            </td>
                            <td className="text-[14px] p-[12px] text-center bg-[#f2f2f2] font-brown-light" >{teamData.r1}</td>
                            <td className="text-[14px] p-[12px] text-center bg-[#f2f2f2] font-brown-light" >{teamData.r2}</td>
                            <td className="text-[14px] p-[12px] text-center bg-[#f2f2f2] font-brown-light" >{teamData.r3}</td>
                            <td className="text-[14px] p-[12px] text-center bg-gray-200 font-brown-light">{teamData.total}</td>

                        </tr>


                    ))}
                    </tbody>
                </table>
                </div>
                    {Team.length > 10 && (
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
                            <p className="text-center md:text-left   md:mt-[60px] text-[#232323] lg:text-[18px]  text-[15px]">Last Updated: 10 Nov 2021 11:18 BST</p>
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
                        <th className="text-[14px] p-[12px] text-start ">PLAYER NAME</th>

                        <th className="text-[14px] p-[12px] text-end">SCORE</th>
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
                                    <span className="px-3 py-1 rounded-l-lg bg-black text-white">
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
                            <p className="text-center md:text-left   md:mt-[60px] text-[#232323] lg:text-[18px]  text-[15px]">Last Updated: 10 Nov 2021 11:18 BST</p>
                            <p className="text-center md:text-left mb-[20px]   text-[#232323] lg:text-[18px]  text-[15px]">
                                Format: Stableford</p>
                        </div>
                    </div>
                <div className="overflow-x-auto">
                <table className="xl:w-[1200px] lg:w-[950px] md:w-[700px] sm:w-[600px] w-[500px] mx-auto bg-white border border-gray-200">
                    <thead className="bg-[#522367] text-white text-[13px]">
                    <tr>
                        <th className="text-[14px] p-[12px] text-center">POS.</th>

                        <th className="text-[14px] p-[12px]text-start ">PLAYER NAME</th>

                        <th className="text-[14px] p-[12px] text-end ">SCORE</th>
                        <th className="text-[14px] p-[12px] text-center ">R1</th>


                        <th className="text-[14px] p-[12px] text-center">TOTAL</th>

                    </tr>
                    </thead>
                    <tbody>
                    {visibleTeamsCTeam.map((teamDataDetailed) => (

                        // eslint-disable-next-line react/jsx-key
                        <tr className="border-b-[2px] border-gray-400">
                            <td className="text-[14px] p-[12px] text-center">{teamDataDetailed.position}</td>

                            <td className="text-[14px] p-[12px] text-start">{teamDataDetailed.teamName}</td>

                            <td className="text-[14px] p-[12px] text-end">
                                    <span className="px-3 py-1 rounded-l-lg bg-black text-white">
                                        {teamDataDetailed.score}
                                    </span>
                            </td>
                            <td className="text-[14px] p-[12px] text-center bg-[#f2f2f2] font-brown-light" >{teamDataDetailed.r1}</td>

                            <td className="text-[14px] p-[12px] text-center  bg-gray-200 font-brown-light">{teamDataDetailed.total}</td>


                        </tr>


                    ))}
                    </tbody>
                </table>
                </div>
                    {celebrityTeam.length > 10 && (
                        <div className="text-center mt-4">
                            <button
                                className="ml-4 bg-[#522367] font-brown-bold text-[18px]  uppercase text-white px-6 py-4"
                                onClick={handleShowMoreToggleTableCTeam}
                            >
                                {showMoreCTeam ? 'Show Less' : 'Show More'}
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
        <div className=" relative xl:w-[1200px] lg:w-[950px] md:w-[700px] sm:w-[600px] w-[800px] mx-auto p-4 bg-[#3E3E3E] text-white">
            <button
                className="absolute top-4 right-4 text-white hover:bg-gray-700 rounded-full p-1"
                onClick={onClose}
            >
                <Image src={CLOSE} alt="cancel" width={40} height={40} />
            </button>
            <div className="flex items-center  mt-[25px] mb-[30px] hidden lg:flex">
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
            <div className="mt-4 overflow-x-auto whitespace-nowrap">
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
                        <th className="bg-[#522367] text-[12px] text-[12px]  p-[12px]">IN</th>
                        <th className="bg-black border-b-2 border-gray-300 text-[14px]  p-[12px]">TOTAL</th>
                        <th className="bg-black border-b-2 border-gray-300 text-[14px]  p-[12px]">TO PAR</th>
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
                            {player.scores[round].slice(0, 9).map((score: any, j: any) => (
                                <td key={j} className="text-[14px] p-[12px] ">
                                    {score === 4 ? (
                                        <span>{score}</span>
                                    ) : score === 2 || score === 3 ? (
                                        <span className="inline-block w-6 h-6  rounded-full text-white">{score}</span>
                                    ) : (
                                        <span className="inline-block w-6 h-6 bg-black text-white">{score}</span>
                                    )}
                                </td>
                            ))}
                            <td className="bg-[#522367] text-[12px]  p-[12px]">{player.out[round]}</td>
                            {player.scores[round].slice(9).map((score: any, j: any)=> (
                                <td key={j + 9} className="text-[14px]  p-[12px]">
                                    {score === 4 ? (
                                        <span>{score}</span>
                                    ) : score === 2 || score === 3 ? (
                                        <span className="inline-block w-6 h-6  text-white">{score}</span>
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
                        <tr key={round} className="bg-white text-black">
                            <td className="text-[14px]  p-[12px] bg-gray-200 border-b-2 border-gray-300">{round}</td>
                            {player.scores[round].slice(0, 9).map((score: any, j: any) => (
                                <td key={j} className="text-[14px]  p-[12px] border-b-2 border-gray-300">
                                    {score === 4 ? (
                                        <span>{score}</span>
                                    ) : score === 2 || score === 3 ? (
                                        <span className="inline-block w-6 h-6 bg-red-600 rounded-full text-white">{score}</span>
                                    ) : score === 6 ? (
                                        <span className="inline-block w-6 h-6 bg-blue-600 pt-[3px] pb-[3px] text-white">{score}</span>
                                    ) : (
                                        <span className="inline-block w-6 h-6 bg-black pt-[3px] pb-[3px] text-white">{score}</span>

                                    )}
                                </td>
                            ))}
                            <td className="bg-gray-200 text-[12px]  p-[12px]">{player.out[round]}</td>
                            {player.scores[round].slice(9).map((score: any, j: any) => (
                                <td key={j + 9} className="text-[14px]  p-[12px] border-b-2 border-gray-300">
                                    {score === 4 ? (
                                        <span>{score}</span>
                                    ) : score === 2 || score === 3 ? (
                                        <span className="inline-block w-6 h-6 bg-red-600  rounded-full text-white">{score}</span>
                                    ) : score === 6 ? (
                                        <span className="inline-block w-6 h-6 bg-blue-600  text-white">{score}</span>
                                    ) : (
                                        <span className="inline-block w-6 h-6 bg-black  text-white">{score}</span>
                                    )}
                                </td>
                            ))}
                            <td className="bg-gray-200 text-[12px]  p-[12px]">{player.in[round]}</td>
                            <td className="text-[14px]  p-[12px] border-b-2 border-gray-300">{player.total[round]}</td>
                            {/*<td className="p-2 px-2 py-1 bg-red-600 rounded">{player.toPar[round]}</td>*/}
                            <td className="px-2 py-2 text-center border-b-2 border-gray-300 text-[14px]">
                                {player.toPar[round] && (
                                    <span className={"px-3 py-1 rounded-l-lg bg-red-600 text-white"}>
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
                    <span className="inline-block w-4 h-4 bg-blue-600 border-2 border-white mr-2"></span>
                    Double Bogey +
                </div>
            </div>
        </div>
    );
};

const HoleByHolePanelAMATEUR = ({ player, onClose }: { player: any; onClose: () => void }) => {
    const [selectedRound, setSelectedRound] = useState<'Round 1' | 'Round 2' | 'Round 3'>('Round 1');


    return (
        <div className=" relative xl:w-[1200px] lg:w-[950px] md:w-[700px] sm:w-[600px] w-[500px]  mx-auto p-4 bg-[#3E3E3E] text-white">
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
                                    <span className={"px-3 py-1 rounded-l-lg bg-red-600 text-[14px]  text-white"}>
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
    );
};

export default PlayerTable;
