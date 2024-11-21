import React, { useState } from 'react';
import Image from 'next/image';
import SWE from '../../../public/img/news/Untitled-design-3-2.png';
import CLOSE from "../../../public/img/news/icons8-close-50.png";
import Search from "../../../public/img/news/icons8-search-50.png";
import AUS from "../../../public/img/schedule/AUSTRALIA.png";
import WCS from "../../../public/img/news/WCS-wapp-celeb-logo-2.png";

const RankTable2023 = () => {
    const [openPlayerIndex, setOpenPlayerIndex] = useState(null);
    const [searchInput, setSearchInput] = useState('');
    const [activeTable, setActiveTable] = useState('PRO');
    const [showMorePro, setShowMorePro] = useState(false);
    const [showMoreCeleb, setShowMoreCeleb] = useState(false);
    const [showMoreAma, setShowMoreAma] = useState(false);
    const [showMoreEue, setShowMoreEue] = useState(false);
    const [showMoreUK, setShowMoreUK] = useState(false);


    const players = [
        {
            pos: 1,
            country: 'AUS',
            flag:AUS,
            name: 'Chris WILLIAMS',
            tp: 9,
            om: 21,
            results: [
                { count: 1, label: "1ST" },
                { count: 1, label: "2ND" },
                { count: 0, label: "3RD" },
                { count: 1, label: "TOP TEN" },
            ],
        },
        {
            pos: 2,
            country: 'AUS',
            flag:AUS,
            name: 'Phillip PRICE',
            tp: 6,
            om: 69,
            results: [
                { count: 0, label: "1ST" },
                { count: 1, label: "2ND" },
                { count: 0, label: "3RD" },
                { count: 0, label: "TOP TEN" },
            ],
        },
        {
            pos: 3,
            country: 'AUS',
            flag:AUS,
            name: 'Chris WILLIAMS',
            tp: 9,
            om: 21,
            results: [
                { count: 1, label: "1ST" },
                { count: 1, label: "2ND" },
                { count: 0, label: "3RD" },
                { count: 1, label: "TOP TEN" },
            ],
        },
        {
            pos: 4,
            country: 'AUS',
            flag:AUS,
            name: 'Chris WILLIAMS',
            tp: 9,
            om: 21,
            results: [
                { count: 1, label: "1ST" },
                { count: 1, label: "2ND" },
                { count: 0, label: "3RD" },
                { count: 1, label: "TOP TEN" },
            ],
        },
        {
            pos: 5,
            country: 'AUS',
            flag:AUS,
            name: 'Chris WILLIAMS',
            tp: 9,
            om: 21,
            results: [
                { count: 1, label: "1ST" },
                { count: 1, label: "2ND" },
                { count: 0, label: "3RD" },
                { count: 1, label: "TOP TEN" },
            ],
        },
        {
            pos: 6,
            country: 'AUS',
            flag:AUS,
            name: 'Chris WILLIAMS',
            tp: 9,
            om: 21,
            results: [
                { count: 1, label: "1ST" },
                { count: 1, label: "2ND" },
                { count: 0, label: "3RD" },
                { count: 1, label: "TOP TEN" },
            ],
        },
        {
            pos: 7,
            country: 'AUS',
            flag:AUS,
            name: 'Chris WILLIAMS',
            tp: 9,
            om: 21,
            results: [
                { count: 1, label: "1ST" },
                { count: 1, label: "2ND" },
                { count: 0, label: "3RD" },
                { count: 1, label: "TOP TEN" },
            ],
        },
        {
            pos: 8,
            country: 'AUS',
            flag:AUS,
            name: 'Chris WILLIAMS',
            tp: 9,
            om: 21,
            results: [
                { count: 1, label: "1ST" },
                { count: 1, label: "2ND" },
                { count: 0, label: "3RD" },
                { count: 1, label: "TOP TEN" },
            ],
        },
        {
            pos: 9,
            country: 'AUS',
            flag:AUS,
            name: 'Chris WILLIAMS',
            tp: 9,
            om: 21,
            results: [
                { count: 1, label: "1ST" },
                { count: 1, label: "2ND" },
                { count: 0, label: "3RD" },
                { count: 1, label: "TOP TEN" },
            ],
        },
        {
            pos: 10,
            country: 'AUS',
            flag:AUS,
            name: 'Chris WILLIAMS',
            tp: 9,
            om: 21,
            results: [
                { count: 1, label: "1ST" },
                { count: 1, label: "2ND" },
                { count: 0, label: "3RD" },
                { count: 1, label: "TOP TEN" },
            ],
        },
        {
            pos: 11,
            country: 'AUS',
            flag:AUS,
            name: 'Chris WILLIAMS',
            tp: 9,
            om: 21,
            results: [
                { count: 1, label: "1ST" },
                { count: 1, label: "2ND" },
                { count: 0, label: "3RD" },
                { count: 1, label: "TOP TEN" },
            ],
        },
        {
            pos: 12,
            country: 'AUS',
            flag:AUS,
            name: 'Chris WILLIAMS',
            tp: 9,
            om: 21,
            results: [
                { count: 1, label: "1ST" },
                { count: 1, label: "2ND" },
                { count: 0, label: "3RD" },
                { count: 1, label: "TOP TEN" },
            ],
        },
    ];

    const playersData = [
        {
            pos: 1,
            country: 'AUS',
            flag:AUS,
            name: 'Chris WILLIAMS',
            tp: 9,
            om: 21,
            results: [
                { count: 1, label: "1ST" },
                { count: 1, label: "2ND" },
                { count: 0, label: "3RD" },
                { count: 1, label: "TOP TEN" },
            ],
        },
        {
            pos: 2,
            country: 'AUS',
            flag:AUS,
            name: 'Phillip PRICE',
            tp: 6,
            om: 69,
            results: [
                { count: 0, label: "1ST" },
                { count: 1, label: "2ND" },
                { count: 0, label: "3RD" },
                { count: 0, label: "TOP TEN" },
            ],
        },
        {
            pos: 3,
            country: 'AUS',
            flag:AUS,
            name: 'Chris WILLIAMS',
            tp: 9,
            om: 21,
            results: [
                { count: 1, label: "1ST" },
                { count: 1, label: "2ND" },
                { count: 0, label: "3RD" },
                { count: 1, label: "TOP TEN" },
            ],
        },
        {
            pos: 4,
            country: 'AUS',
            flag:AUS,
            name: 'Chris WILLIAMS',
            tp: 9,
            om: 21,
            results: [
                { count: 1, label: "1ST" },
                { count: 1, label: "2ND" },
                { count: 0, label: "3RD" },
                { count: 1, label: "TOP TEN" },
            ],
        },
        {
            pos: 5,
            country: 'AUS',
            flag:AUS,
            name: 'Chris WILLIAMS',
            tp: 9,
            om: 21,
            results: [
                { count: 1, label: "1ST" },
                { count: 1, label: "2ND" },
                { count: 0, label: "3RD" },
                { count: 1, label: "TOP TEN" },
            ],
        },
        {
            pos: 6,
            country: 'AUS',
            flag:AUS,
            name: 'Chris WILLIAMS',
            tp: 9,
            om: 21,
            results: [
                { count: 1, label: "1ST" },
                { count: 1, label: "2ND" },
                { count: 0, label: "3RD" },
                { count: 1, label: "TOP TEN" },
            ],
        },
        {
            pos: 7,
            country: 'AUS',
            flag:AUS,
            name: 'Chris WILLIAMS',
            tp: 9,
            om: 21,
            results: [
                { count: 1, label: "1ST" },
                { count: 1, label: "2ND" },
                { count: 0, label: "3RD" },
                { count: 1, label: "TOP TEN" },
            ],
        },
        {
            pos: 8,
            country: 'AUS',
            flag:AUS,
            name: 'Chris WILLIAMS',
            tp: 9,
            om: 21,
            results: [
                { count: 1, label: "1ST" },
                { count: 1, label: "2ND" },
                { count: 0, label: "3RD" },
                { count: 1, label: "TOP TEN" },
            ],
        },
        {
            pos: 9,
            country: 'AUS',
            flag:AUS,
            name: 'Chris WILLIAMS',
            tp: 9,
            om: 21,
            results: [
                { count: 1, label: "1ST" },
                { count: 1, label: "2ND" },
                { count: 0, label: "3RD" },
                { count: 1, label: "TOP TEN" },
            ],
        },
        {
            pos: 10,
            country: 'AUS',
            flag:AUS,
            name: 'Chris WILLIAMS',
            tp: 9,
            om: 21,
            results: [
                { count: 1, label: "1ST" },
                { count: 1, label: "2ND" },
                { count: 0, label: "3RD" },
                { count: 1, label: "TOP TEN" },
            ],
        },
        {
            pos: 11,
            country: 'AUS',
            flag:AUS,
            name: 'Chris WILLIAMS',
            tp: 9,
            om: 21,
            results: [
                { count: 1, label: "1ST" },
                { count: 1, label: "2ND" },
                { count: 0, label: "3RD" },
                { count: 1, label: "TOP TEN" },
            ],
        },
        {
            pos: 12,
            country: 'AUS',
            flag:AUS,
            name: 'Chris WILLIAMS',
            tp: 9,
            om: 21,
            results: [
                { count: 1, label: "1ST" },
                { count: 1, label: "2ND" },
                { count: 0, label: "3RD" },
                { count: 1, label: "TOP TEN" },
            ],
        },
    ];

    const playersDataCeleb = [
        {
            pos: 1,
            country: 'AUS',
            flag:AUS,
            name: 'Chris WILLIAMS',
            tp: 9,
            om: 21,
            results: [
                { count: 1, label: "1ST" },
                { count: 1, label: "2ND" },
                { count: 0, label: "3RD" },
                { count: 1, label: "TOP TEN" },
            ],
        },
        {
            pos: 2,
            country: 'AUS',
            flag:AUS,
            name: 'Phillip PRICE',
            tp: 6,
            om: 69,
            results: [
                { count: 0, label: "1ST" },
                { count: 1, label: "2ND" },
                { count: 0, label: "3RD" },
                { count: 0, label: "TOP TEN" },
            ],
        },
        {
            pos: 3,
            country: 'AUS',
            flag:AUS,
            name: 'Chris WILLIAMS',
            tp: 9,
            om: 21,
            results: [
                { count: 1, label: "1ST" },
                { count: 1, label: "2ND" },
                { count: 0, label: "3RD" },
                { count: 1, label: "TOP TEN" },
            ],
        },
        {
            pos: 4,
            country: 'AUS',
            flag:AUS,
            name: 'Chris WILLIAMS',
            tp: 9,
            om: 21,
            results: [
                { count: 1, label: "1ST" },
                { count: 1, label: "2ND" },
                { count: 0, label: "3RD" },
                { count: 1, label: "TOP TEN" },
            ],
        },
        {
            pos: 5,
            country: 'AUS',
            flag:AUS,
            name: 'Chris WILLIAMS',
            tp: 9,
            om: 21,
            results: [
                { count: 1, label: "1ST" },
                { count: 1, label: "2ND" },
                { count: 0, label: "3RD" },
                { count: 1, label: "TOP TEN" },
            ],
        },
        {
            pos: 6,
            country: 'AUS',
            flag:AUS,
            name: 'Chris WILLIAMS',
            tp: 9,
            om: 21,
            results: [
                { count: 1, label: "1ST" },
                { count: 1, label: "2ND" },
                { count: 0, label: "3RD" },
                { count: 1, label: "TOP TEN" },
            ],
        },
        {
            pos: 7,
            country: 'AUS',
            flag:AUS,
            name: 'Chris WILLIAMS',
            tp: 9,
            om: 21,
            results: [
                { count: 1, label: "1ST" },
                { count: 1, label: "2ND" },
                { count: 0, label: "3RD" },
                { count: 1, label: "TOP TEN" },
            ],
        },
        {
            pos: 8,
            country: 'AUS',
            flag:AUS,
            name: 'Chris WILLIAMS',
            tp: 9,
            om: 21,
            results: [
                { count: 1, label: "1ST" },
                { count: 1, label: "2ND" },
                { count: 0, label: "3RD" },
                { count: 1, label: "TOP TEN" },
            ],
        },
        {
            pos: 9,
            country: 'AUS',
            flag:AUS,
            name: 'Chris WILLIAMS',
            tp: 9,
            om: 21,
            results: [
                { count: 1, label: "1ST" },
                { count: 1, label: "2ND" },
                { count: 0, label: "3RD" },
                { count: 1, label: "TOP TEN" },
            ],
        },
        {
            pos: 10,
            country: 'AUS',
            flag:AUS,
            name: 'Chris WILLIAMS',
            tp: 9,
            om: 21,
            results: [
                { count: 1, label: "1ST" },
                { count: 1, label: "2ND" },
                { count: 0, label: "3RD" },
                { count: 1, label: "TOP TEN" },
            ],
        },
        {
            pos: 11,
            country: 'AUS',
            flag:AUS,
            name: 'Chris WILLIAMS',
            tp: 9,
            om: 21,
            results: [
                { count: 1, label: "1ST" },
                { count: 1, label: "2ND" },
                { count: 0, label: "3RD" },
                { count: 1, label: "TOP TEN" },
            ],
        },
        {
            pos: 12,
            country: 'AUS',
            flag:AUS,
            name: 'Chris WILLIAMS',
            tp: 9,
            om: 21,
            results: [
                { count: 1, label: "1ST" },
                { count: 1, label: "2ND" },
                { count: 0, label: "3RD" },
                { count: 1, label: "TOP TEN" },
            ],
        },
    ];

    const playersDataUK = [
        {
            pos: 1,
            country: 'AUS',
            flag:AUS,
            name: 'Chris WILLIAMS',
            tp: 9,
            om: 21,
            results: [
                { count: 1, label: "1ST" },
                { count: 1, label: "2ND" },
                { count: 0, label: "3RD" },
                { count: 1, label: "TOP TEN" },
            ],
        },
        {
            pos: 2,
            country: 'AUS',
            flag:AUS,
            name: 'Phillip PRICE',
            tp: 6,
            om: 69,
            results: [
                { count: 0, label: "1ST" },
                { count: 1, label: "2ND" },
                { count: 0, label: "3RD" },
                { count: 0, label: "TOP TEN" },
            ],
        },
        {
            pos: 3,
            country: 'AUS',
            flag:AUS,
            name: 'Chris WILLIAMS',
            tp: 9,
            om: 21,
            results: [
                { count: 1, label: "1ST" },
                { count: 1, label: "2ND" },
                { count: 0, label: "3RD" },
                { count: 1, label: "TOP TEN" },
            ],
        },
        {
            pos: 4,
            country: 'AUS',
            flag:AUS,
            name: 'Chris WILLIAMS',
            tp: 9,
            om: 21,
            results: [
                { count: 1, label: "1ST" },
                { count: 1, label: "2ND" },
                { count: 0, label: "3RD" },
                { count: 1, label: "TOP TEN" },
            ],
        },
        {
            pos: 5,
            country: 'AUS',
            flag:AUS,
            name: 'Chris WILLIAMS',
            tp: 9,
            om: 21,
            results: [
                { count: 1, label: "1ST" },
                { count: 1, label: "2ND" },
                { count: 0, label: "3RD" },
                { count: 1, label: "TOP TEN" },
            ],
        },
        {
            pos: 6,
            country: 'AUS',
            flag:AUS,
            name: 'Chris WILLIAMS',
            tp: 9,
            om: 21,
            results: [
                { count: 1, label: "1ST" },
                { count: 1, label: "2ND" },
                { count: 0, label: "3RD" },
                { count: 1, label: "TOP TEN" },
            ],
        },
        {
            pos: 7,
            country: 'AUS',
            flag:AUS,
            name: 'Chris WILLIAMS',
            tp: 9,
            om: 21,
            results: [
                { count: 1, label: "1ST" },
                { count: 1, label: "2ND" },
                { count: 0, label: "3RD" },
                { count: 1, label: "TOP TEN" },
            ],
        },
        {
            pos: 8,
            country: 'AUS',
            flag:AUS,
            name: 'Chris WILLIAMS',
            tp: 9,
            om: 21,
            results: [
                { count: 1, label: "1ST" },
                { count: 1, label: "2ND" },
                { count: 0, label: "3RD" },
                { count: 1, label: "TOP TEN" },
            ],
        },
        {
            pos: 9,
            country: 'AUS',
            flag:AUS,
            name: 'Chris WILLIAMS',
            tp: 9,
            om: 21,
            results: [
                { count: 1, label: "1ST" },
                { count: 1, label: "2ND" },
                { count: 0, label: "3RD" },
                { count: 1, label: "TOP TEN" },
            ],
        },
        {
            pos: 10,
            country: 'AUS',
            flag:AUS,
            name: 'Chris WILLIAMS',
            tp: 9,
            om: 21,
            results: [
                { count: 1, label: "1ST" },
                { count: 1, label: "2ND" },
                { count: 0, label: "3RD" },
                { count: 1, label: "TOP TEN" },
            ],
        },
        {
            pos: 11,
            country: 'AUS',
            flag:AUS,
            name: 'Chris WILLIAMS',
            tp: 9,
            om: 21,
            results: [
                { count: 1, label: "1ST" },
                { count: 1, label: "2ND" },
                { count: 0, label: "3RD" },
                { count: 1, label: "TOP TEN" },
            ],
        },
        {
            pos: 12,
            country: 'AUS',
            flag:AUS,
            name: 'Chris WILLIAMS',
            tp: 9,
            om: 21,
            results: [
                { count: 1, label: "1ST" },
                { count: 1, label: "2ND" },
                { count: 0, label: "3RD" },
                { count: 1, label: "TOP TEN" },
            ],
        },
    ];
    const playersDataEurope = [
        {
            pos: 1,
            country: 'AUS',
            flag:AUS,
            name: 'Chris WILLIAMS',
            tp: 9,
            om: 21,

        },
        {
            pos: 2,
            country: 'AUS',
            flag:AUS,
            name: 'Phillip PRICE',
            tp: 6,
            om: 69,

        },
        {
            pos: 3,
            country: 'AUS',
            flag:AUS,
            name: 'Chris WILLIAMS',
            tp: 9,
            om: 21,

        },
        {
            pos: 4,
            country: 'AUS',
            flag:AUS,
            name: 'Chris WILLIAMS',
            tp: 9,
            om: 21,

        },
        {
            pos: 5,
            country: 'AUS',
            flag:AUS,
            name: 'Chris WILLIAMS',
            tp: 9,
            om: 21,

        },
        {
            pos: 6,
            country: 'AUS',
            flag:AUS,
            name: 'Chris WILLIAMS',
            tp: 9,
            om: 21,

        },
        {
            pos: 7,
            country: 'AUS',
            flag:AUS,
            name: 'Chris WILLIAMS',
            tp: 9,
            om: 21,

        },
        {
            pos: 8,
            country: 'AUS',
            flag:AUS,
            name: 'Chris WILLIAMS',
            tp: 9,
            om: 21,

        },
        {
            pos: 9,
            country: 'AUS',
            flag:AUS,
            name: 'Chris WILLIAMS',
            tp: 9,
            om: 21,

        },
        {
            pos: 10,
            country: 'AUS',
            flag:AUS,
            name: 'Chris WILLIAMS',
            tp: 9,
            om: 21,

        },
        {
            pos: 11,
            country: 'AUS',
            flag:AUS,
            name: 'Chris WILLIAMS',
            tp: 9,
            om: 21,

        },
        {
            pos: 12,
            country: 'AUS',
            flag:AUS,
            name: 'Chris WILLIAMS',
            tp: 9,
            om: 21,

        },
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
    const filteredPlayersAmateur = playersData.filter(player =>
        player.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    const filteredPlayersCeleb = playersDataCeleb.filter(player =>
        player.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    const filteredPlayersUK = playersDataUK.filter(player =>
        player.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    const filteredPlayersEurope = playersDataEurope.filter(player =>
        player.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    const handleShowMoreToggleTablePro = () => {
        setShowMorePro(!showMorePro);
    };

    const handleShowMoreToggleTableCeleb = () => {
        setShowMoreCeleb(!showMoreCeleb);
    };

    const handleShowMoreToggleTableAma = () => {
        setShowMoreAma(!showMoreAma);
    };

    const handleShowMoreToggleTableEue= () => {
        setShowMoreEue(!showMoreEue);
    };

    const handleShowMoreToggleTableUK = () => {
        setShowMoreUK(!showMoreUK);
    };

    const visibleTeamsPro = showMorePro ? filteredPlayers : filteredPlayers.slice(0, 10);
    const visibleTeamsCeleb = showMoreCeleb ? filteredPlayersCeleb : filteredPlayersCeleb.slice(0, 10);
    const visibleTeamsAma = showMoreAma ? filteredPlayersAmateur : filteredPlayersAmateur.slice(0, 10);
    const visibleTeamsEue = showMoreEue ? filteredPlayersEurope : filteredPlayersEurope.slice(0, 10);
    const visibleTeamsUK = showMoreUK ? filteredPlayersUK : filteredPlayersUK.slice(0, 10);
    return (
        <div className="sm:container mx-auto mt-8 font-brown-bold">
            <div className="overflow-x-auto">
            <div className="flex md:justify-center justify-start items-center  xl:mr-[220px]">
                <div className="pt-4 md:pt-[20px] md:pb-[60px]">

                    <div className="flex md:justify-center justify-start items-center">
                        <button className={`pl-[10px] h-[86px] ${activeTable === 'PRO' ? 'bg-white border-b-[3px] border-[#522367]' : 'bg-gray-200'}   text-[#522367] text-[18px] font-bold mt-8 md:w-[137px] lg:w-[190px] sm:w-[100px] w-[120px] pt-4 pb-[15px] mx-auto`}
                                onClick={() => setActiveTable('PRO')}>
                            PRO
                        </button>
                        <button className={`pl-[10px] h-[86px] ${activeTable === 'CELEB' ? 'bg-white border-b-[3px] border-[#522367]' : 'bg-gray-200'}  text-[18px]  text-[#522367] font-bold mt-8 md:w-[137px] lg:w-[190px] sm:w-[100px] w-[120px] pt-4 pb-[15px] mx-auto`}
                                onClick={() => setActiveTable('CELEB')}>
                            CELEB
                        </button>
                        <button className={`pl-[10px] h-[86px] ${activeTable === 'AMATEUR' ? 'bg-white border-b-[3px] border-[#522367]' : 'bg-gray-200'}  text-[18px]  text-[#522367] font-bold mt-8 md:w-[137px] lg:w-[190px] sm:w-[100px] w-[120px] pt-4 pb-[15px] mx-auto`}
                                onClick={() => setActiveTable('AMATEUR')}>
                            AMATEUR
                        </button>
                        <button className={`pl-[10px] h-[86px] ${activeTable === 'Q SERIES' ? 'bg-white border-b-[3px] border-[#522367]' : 'bg-gray-200'}  text-[18px]  text-[#522367] font-bold mt-8 md:w-[137px] lg:w-[190px] sm:w-[100px] w-[120px] pt-4 pb-[15px] mx-auto`}
                                onClick={() => setActiveTable('Q SERIES')}>
                            Q SERIES - UK
                        </button>
                        <button className={`pl-[10px] h-[86px] ${activeTable === 'EUROPE' ? 'bg-white border-b-[3px] border-[#522367]' : 'bg-gray-200'}  text-[18px]  text-[#522367] font-bold mt-8 md:w-[137px] lg:w-[190px] sm:w-[100px] w-[120px] pt-4 pb-[15px] mx-auto`}
                                onClick={() => setActiveTable('EUROPE')}>
                            Q SERIES - EUROPE
                        </button>
                    </div>
                    </div>

                </div>

            </div>

            {activeTable === 'PRO' ? (
                <div>
                    <div className="md:flex justify-center xl:items-center">
                        <div className="relative sm:mb-[30px] mb-[20px] flex items-center justify-center mobile-sm:mt-12 mobile-md:mt-12 mobile-lg:mt-12 md:mt-0 xl:mr-[398px] lg:mr-[170px] md:mr-[10px] flex text-black">

                            <input
                                type="text"
                                placeholder="Search for a player"
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                                className="md:w-[250px] w-[280px] h-[50px] p-2 pl-10 border-[2px] placeholder-black custom-placeholder border-gray-400 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-gray-200"
                            />
                            <div className="absolute md:ml-[210px] ml-[250px] ">
                                <div>
                                    <Image
                                        src={Search}
                                        alt="Search"
                                        className="h-5 w-5 text-gray-400"
                                    />
                                </div>
                            </div>
                        </div>
                        <p className="text-center md:text-left mb-[20px] md:mb-0  text-[#232323] lg:text-[18px]  text-[15px]">Accurate After: MCB Tour Championship Mauritius 2023</p>
                    </div>
                <div className="overflow-x-auto">
                <table className="xl:w-[1200px] lg:w-[950px] md:w-[700px] sm:w-[600px] w-[500px]  mx-auto bg-white border border-gray-200">
                    <thead className="bg-[#522367] text-white text-[13px]">
                    <tr>
                        <th className="text-[14px] p-[12px] text-center">POS.</th>
                        <th className="text-[14px] p-[12px] text-start">COUNTRY</th>
                        <th className="text-[14px] p-[12px] text-start">PLAYER NAME</th>
                        <th className="text-[14px] p-[12px] text-center">TOURNAMENTS PLAYED</th>
                        <th className="text-[14px] p-[12px] text-center">OM POINTS</th>
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
                                <td className="text-[14px] p-[12px] text-center">
                                        <span className={`px-2 py-1 rounded ${openPlayerIndex === index ? 'bg-black text-white' : 'font-brown-light text-black'}`}>
                                            {player.tp}
                                        </span>
                                </td>
                                <td className={`text-[14px] p-[12px] text-center ${openPlayerIndex === index ? 'bg-black text-white' : 'bg-[#f2f2f2]'}`}>{player.om}</td>
                            </tr>
                            {openPlayerIndex === index && (
                                <tr>
                                    <td colSpan={5}>
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
            ) : activeTable ==='CELEB' ? (
                <div>
                    <div className="md:flex justify-center xl:items-center">
                        <div className="relative sm:mb-[30px] mb-[20px] flex items-center justify-center mobile-sm:mt-12 mobile-md:mt-12 mobile-lg:mt-12 md:mt-0 xl:ml-[26px] lg:mr-[30px] lg:ml-[8px] md:mr-[10px] flex text-black">

                            <input
                                type="text"
                                placeholder="Search for a player"
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                                className="md:w-[250px] w-[280px] h-[50px] p-2 pl-10 border-[2px] placeholder-black custom-placeholder border-gray-400 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-gray-200"
                            />
                            <div className="absolute md:ml-[210px] ml-[250px] ">
                                <div>
                                    <Image
                                        src={Search}
                                        alt="Search"
                                        className="h-5 w-5 text-gray-400"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center flex-shrink-0 mb-[20px] md:mb-[45px] lg:mb-0">
                            <Image
                                src={WCS}
                                alt="WcsLogo"
                                className="w-[250px] h-[30px] xl:mr-[70px] xl:ml-[20px] lg:mr-[30px] md:mr-[10px] md:ml-[10px]  text-gray-400"
                            />
                        </div>

                        <p className="text-center md:text-left mb-[20px] md:mb-0 text-[#232323] lg:text-[18px]  text-[15px] xl:mr-[40px]  ">Accurate After: Staysure PGA Seniors Championship 2023 <br/>- Celebrity</p>
                    </div>
                <div className="overflow-x-auto">
                <table className="xl:w-[1200px] lg:w-[950px] md:w-[700px] sm:w-[600px] w-[500px]  mx-auto bg-white border border-gray-200">
                    <thead className="bg-[#522367] text-white text-[13px]">
                    <tr>
                        <th className="text-[14px] p-[12px] text-center">POS.</th>
                        <th className="text-[14px] p-[12px] text-start">COUNTRY</th>
                        <th className="text-[14px] p-[12px] text-start">PLAYER NAME</th>
                        <th className="text-[14px] p-[12px] text-center">TOURNAMENTS PLAYED</th>
                        <th className="text-[14px] p-[12px] text-center">OM POINTS</th>
                    </tr>
                    </thead>
                    <tbody>
                    {visibleTeamsCeleb.map((player, index) => (
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
                                <td className="text-[14px] p-[12px] text-center font-brown-light">
                                        <span className="px-2 py-1 rounded" >
                                            {player.tp}
                                        </span>
                                </td>
                                <td className={`text-[14px] p-[12px] text-center ${openPlayerIndex === index ? 'bg-black text-white' : 'bg-[#f2f2f2]'}`}>{player.om}</td>
                            </tr>
                            {openPlayerIndex === index && (
                                <tr>
                                    <td colSpan={5}>
                                        <HoleByHolePanelAmateur player={player as any} onClose={handleClosePanel} />
                                    </td>
                                </tr>
                            )}
                        </React.Fragment>
                    ))}
                    </tbody>
                </table>
                </div>
                    {filteredPlayersCeleb.length > 10 && (
                        <div className="text-center mt-4">
                            <button
                                className="ml-4 bg-[#522367] font-brown-bold text-[18px]  uppercase text-white px-6 py-4"
                                onClick={handleShowMoreToggleTableCeleb}
                            >
                                {showMoreCeleb ? 'Show Less' : 'Show More'}
                            </button>
                        </div>
                    )}
                </div>
            ) : activeTable ==='AMATEUR' ?(
                <div>
                    <div className="md:flex justify-center xl:items-center">
                        <div className="relative sm:mb-[30px] mb-[20px] flex items-center justify-center mobile-sm:mt-12 mobile-md:mt-12 mobile-lg:mt-12 md:mt-0 xl:mr-[302px] lg:mr-[75px] md:mr-[10px] flex text-black">

                            <input
                                type="text"
                                placeholder="Search for a player"
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                                className="md:w-[250px] w-[280px] h-[50px] p-2 pl-10 border-[2px] placeholder-black custom-placeholder border-gray-400 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-gray-200"
                            />
                            <div className="absolute md:ml-[210px] ml-[250px] ">
                                <div>
                                    <Image
                                        src={Search}
                                        alt="Search"
                                        className="h-5 w-5 text-gray-400"
                                    />
                                </div>
                            </div>
                        </div>
                        <p className="text-center md:text-left mb-[20px] text-[#232323] lg:text-[18px]  text-[15px]">Accurate After: MCB Tour Championship Mauritius 2023 - Alliance</p>
                    </div>
                <div className="overflow-x-auto">
                <table className="xl:w-[1200px] lg:w-[950px] md:w-[700px] sm:w-[600px] w-[500px]  mx-auto bg-white border border-gray-200">
                    <thead className="bg-[#522367] text-white text-[13px]">
                    <tr>
                        <th className="text-[14px] p-[12px] text-center">POS.</th>
                        <th className="text-[14px] p-[12px] text-start">COUNTRY</th>
                        <th className="text-[14px] p-[12px] text-start">PLAYER NAME</th>
                        <th className="text-[14px] p-[12px] text-center">TOURNAMENTS PLAYED</th>
                        <th className="text-[14px] p-[12px] text-center">OM POINTS</th>
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
                                <td className="text-[14px] p-[12px] text-center font-brown-light">
                                        <span className="px-2 py-1 rounded" >
                                            {player.tp}
                                        </span>
                                </td>
                                <td className={`text-[14px] p-[12px] text-center ${openPlayerIndex === index ? 'bg-black text-white' : 'bg-[#f2f2f2]'}`}>{player.om}</td>
                            </tr>
                            {openPlayerIndex === index && (
                                <tr>
                                    <td colSpan={5}>
                                        <HoleByHolePanelAmateur player={player as any} onClose={handleClosePanel} />
                                    </td>
                                </tr>
                            )}
                        </React.Fragment>
                    ))}
                    </tbody>

                </table>
                </div>
                    {filteredPlayersAmateur.length > 10 && (
                        <div className="text-center mt-4">
                            <button
                                className="ml-4 bg-[#522367] font-brown-bold  text-[18px]  uppercase text-white px-6 py-4"
                                onClick={handleShowMoreToggleTableAma}
                            >
                                {showMoreAma ? 'Show Less' : 'Show More'}
                            </button>
                        </div>
                    )}
                </div>
            ) : activeTable ==='Q SERIES' ?(
                <div>
                    <div className="md:flex justify-center xl:items-center">
                        <div className="relative sm:mb-[30px] mb-[20px] flex items-center justify-center mobile-sm:mt-12 mobile-md:mt-12 mobile-lg:mt-12 md:mt-0 xl:mr-[506px] lg:mr-[278px] md:mr-[100px] flex text-black">

                            <input
                                type="text"
                                placeholder="Search for a player"
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                                className="md:w-[250px] w-[280px] h-[50px] p-2 pl-10 border-[2px] placeholder-black custom-placeholder border-gray-400 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-gray-200"
                            />
                            <div className="absolute md:ml-[210px] ml-[250px] ">
                                <div>
                                    <Image
                                        src={Search}
                                        alt="Search"
                                        className="h-5 w-5 text-gray-400"
                                    />
                                </div>
                            </div>
                        </div>
                        <p className="text-center md:text-left mb-[20px] lg:text-[18px] text-[#232323] text-[15px]">Accurate After: Staysure Q Series Slaley Hall</p>
                    </div>
                <div className="overflow-x-auto">
                <table className="xl:w-[1200px] lg:w-[950px] md:w-[700px] sm:w-[600px] w-[500px]  mx-auto bg-white border border-gray-200">
                    <thead className="bg-[#522367] text-white text-[13px]">
                    <tr>
                        <th className="text-[14px] p-[12px] text-center">POS.</th>
                        <th className="text-[14px] p-[12px] text-start">COUNTRY</th>
                        <th className="text-[14px] p-[12px] text-start">PLAYER NAME</th>
                        <th className="text-[14px] p-[12px] text-center">TOURNAMENTS PLAYED</th>
                        <th className="text-[14px] p-[12px] text-center">OM POINTS</th>
                    </tr>
                    </thead>
                    <tbody>
                    {visibleTeamsUK.map((player, index) => (
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
                                <td className="text-[14px] p-[12px] text-center font-brown-light">
                                        <span className="px-2 py-1 rounded" >
                                            {player.tp}
                                        </span>
                                </td>
                                <td className={`text-[14px] p-[12px] text-center ${openPlayerIndex === index ? 'bg-black text-white' : 'bg-[#f2f2f2]'}`}>{player.om}</td>
                            </tr>
                            {openPlayerIndex === index && (
                                <tr>
                                    <td colSpan={5}>
                                        <HoleByHolePanel player={player as any} onClose={handleClosePanel} />
                                    </td>
                                </tr>
                            )}
                        </React.Fragment>
                    ))}
                    </tbody>
                </table>
                </div>
                    {filteredPlayersUK.length > 10 && (
                        <div className="text-center mt-4">
                            <button
                                className="ml-4 bg-[#522367] font-brown-bold text-[18px]  uppercase text-white px-6 py-4"
                                onClick={handleShowMoreToggleTableUK}
                            >
                                {showMoreUK ? 'Show Less' : 'Show More'}
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <div>
                    <div className="md:flex justify-center xl:items-center">
                        <div className="relative sm:mb-[30px] mb-[20px] flex items-center justify-center mobile-sm:mt-12 mobile-md:mt-12 mobile-lg:mt-12 md:mt-0 xl:mr-[462px] lg:mr-[235px] md:mr-[60px] flex text-black">

                            <input
                                type="text"
                                placeholder="Search for a player"
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                                className="md:w-[250px] w-[280px] h-[50px] p-2 pl-10 border-[2px] placeholder-black custom-placeholder border-gray-400 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-gray-200"
                            />
                            <div className="absolute md:ml-[210px] ml-[250px] ">
                                <div>
                                    <Image
                                        src={Search}
                                        alt="Search"
                                        className="h-5 w-5 text-gray-400"
                                    />
                                </div>
                            </div>
                        </div>
                        <p className="text-center md:text-left mb-[20px] lg:text-[18px] text-[#232323] text-[15px]">Accurate After: Q-Series Europe: Le Vaudreuil GC</p>
                    </div>
                <div className="overflow-x-auto">
                <table className="xl:w-[1200px] lg:w-[950px] md:w-[700px] sm:w-[600px] w-[500px]  mx-auto bg-white border border-gray-200">
                    <thead className="bg-[#522367] text-white text-[13px]">
                    <tr>
                        <th className="text-[14px] p-[12px] text-center">POS.</th>
                        <th className="text-[14px] p-[12px] text-start">COUNTRY</th>
                        <th className="text-[14px] p-[12px] text-start">PLAYER NAME</th>
                        <th className="text-[14px] p-[12px] text-center">TOURNAMENTS PLAYED</th>
                        <th className="text-[14px] p-[12px] text-center">OM POINTS</th>
                    </tr>
                    </thead>
                    <tbody>
                    {visibleTeamsEue.map((player, index) => (

                        // eslint-disable-next-line react/jsx-key
                            <tr

                                className="border-b-[2px] border-gray-400 cursor-pointer"
                            >
                                <td className="text-[14px] p-[12px] text-center">{player.pos}</td>
                                <td className="text-[14px] p-[12px] text-center">
                                    <Image src={player.flag} alt={player.country} width={20} height={20} />
                                </td>
                                <td className="text-[14px] p-[12px] text-start">{player.name}</td>
                                <td className="text-[14px] p-[12px] text-center font-brown-light">
                                        <span className="px-2 py-1 rounded" >
                                            {player.tp}
                                        </span>
                                </td>
                                <td className="text-[14px] p-[12px] text-center" >{player.om}</td>
                            </tr>

                    ))}
                    </tbody>
                </table>
                </div>
                    {filteredPlayersEurope.length > 10 && (
                        <div className="text-center mt-4">
                            <button
                                className="ml-4 bg-[#522367] font-brown-bold text-[18px]  uppercase text-white px-6 py-4"
                                onClick={handleShowMoreToggleTableEue}
                            >
                                {showMoreEue ? 'Show Less' : 'Show More'}
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
        <div className=" relative xl:w-[1200px] lg:w-[950px] md:w-[700px] sm:w-[600px] w-[500px]  mx-auto p-4 bg-[#3E3E3E] text-white">
            <button
                className="absolute top-4 right-4 text-white hover:bg-gray-700 rounded-full p-1"
                onClick={onClose}
            >
                <Image src={CLOSE} alt="cancel" width={40} height={40} />
            </button>
            <div className="flex items-center mt-[25px] mb-[30px] hidden lg:flex">
                <div className="w-[80px] h-[105px] relative">
                    <Image
                        src={SWE}
                        alt="Player Image"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <h2 className="text-[26px] relative ml-[30px] w-[200px] mr-[100px] font-brown-regular">{player.name} ({player.country})</h2>
                <div className=" h-[130px] mr-[20px] w-[1.5px] bg-white  ml-[10px]"></div>
                <div className=" flex ">
                    <div className="flex space-x-28 mt-[50px]">

                        <div className="text-sm">Tournament <br/>Results</div>

                    </div>
                    <div className="flex ml-[120px] mt-[30px]">
                        {player.results.map((result: any, index: any) => (
                            <div key={index} className={`pt-[15px] text-white ${index > 0 ? 'pl-[20px]' : ''} flex items-start`}>
                                <p className="text-white font-bold text-[26px]">{result.count}</p>
                                <p className="text-custom-color-hr text-[8px] mt-4">{result.label}</p>
                            </div>
                        ))}
                    </div>
                    <div className=" h-[130px] w-[1.5px] bg-white ml-[20px] mr-[30px]"></div>
                    <button className="text-white hover:underline mr-[50px]">VIEW PROFILE</button>
                </div>
            </div>
            <div className="items-center mt-[25px] ml-[10px] mb-[30px] block lg:hidden">
                <div className="w-[80px] h-[105px] relative">
                    <Image
                        src={SWE}
                        alt="Player Image"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <h2 className="text-[26px] relative mt-[10px] w-[200px] mr-[100px] font-brown-regular">{player.name} ({player.country})</h2>
                <div className=" md:w-[650px] w-[280px] h-[1px] mt-[25px] mr-[20px] w-[1.5px] bg-white"></div>
                <div className=" flex ">
                    <div className="flex space-x-28 mt-[25px]">

                        <div className="text-sm max-w-[50px] md:max-w-[150px]">Tournament Results</div>

                    </div>
                    <div className="flex md:ml-[180px] ml-[90px]">
                        {player.results.map((result: any, index: any) => (
                            <div key={index} className={`pt-[15px] text-white ${index > 0 ? 'md:pl-[60px] pl:20px]' : ''} flex items-start`}>
                                <p className="text-white font-bold text-[26px]">{result.count}</p>
                                <p className="text-custom-color-hr text-[8px] mt-4">{result.label}</p>
                            </div>
                        ))}
                    </div>

                </div>
                <div className=" md:w-[650px] w-[280px] h-[1px] bg-white  mr-[30px] mt-[20px]"></div>
                <button className="text-white underline mt-[30px] mr-[50px]">VIEW PROFILE</button>
            </div>
        </div>
    );
};
const HoleByHolePanelAmateur = ({ player, onClose }: { player: any; onClose: () => void }) => {
    return (
        <div className=" relative xl:w-[1200px] lg:w-[950px] md:w-[700px] sm:w-[600px] w-[500px]  mx-auto p-4 bg-[#3E3E3E] text-white">
            <button
                className="absolute top-4 right-4 text-white hover:bg-gray-700 rounded-full p-1"
                onClick={onClose}
            >
                <Image src={CLOSE} alt="cancel" width={40} height={40} />
            </button>
            <div className="flex items-center mt-[25px] mb-[30px] hidden lg:flex">
                <div className="w-[80px] h-[105px] relative">
                    <Image
                        src={SWE}
                        alt="Player Image"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <h2 className="text-[26px] relative ml-[30px] w-[200px] mr-[100px] font-brown-regular">{player.name} ({player.country})</h2>
                <div className=" h-[130px] mr-[20px] w-[1.5px] bg-white  ml-[10px]"></div>
                <div className=" flex ">
                    <div className="flex space-x-28 mt-[10px] ">

                        <div className="text-sm">Tournament <br/>Results</div>

                    </div>
                    <div className="flex ml-[120px] mt-[10px] ">
                        {player.results.map((result: any, index: any) => (
                            <div key={index} className={`pt-[15px] text-white ${index > 0 ? 'pl-[20px]' : ''} flex items-start`}>
                                <p className="text-white font-bold text-[26px]">{result.count}</p>
                                <p className="text-custom-color-hr text-[8px] mt-4">{result.label}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <div className="items-center mt-[25px] ml-[10px] mb-[30px] block lg:hidden">
                <div className="w-[80px] h-[105px] relative">
                    <Image
                        src={SWE}
                        alt="Player Image"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <h2 className="text-[26px] relative mt-[10px] w-[200px] mr-[100px] font-brown-regular">{player.name} ({player.country})</h2>
                <div className=" md:w-[650px] w-[280px] h-[1px] mt-[25px] mr-[20px] w-[1.5px] bg-white"></div>
                <div className=" flex ">
                    <div className="flex space-x-28 mt-[25px]">

                        <div className="text-sm max-w-[50px] md:max-w-[150px]">Tournament Results</div>

                    </div>
                    <div className="flex md:ml-[180px] ml-[90px]">
                        {player.results.map((result: any, index: any) => (
                            <div key={index} className={`pt-[15px] text-white ${index > 0 ? 'md:pl-[60px] pl:20px]' : ''} flex items-start`}>
                                <p className="text-white font-bold text-[26px]">{result.count}</p>
                                <p className="text-custom-color-hr text-[8px] mt-4">{result.label}</p>
                            </div>
                        ))}
                    </div>

                </div>
                <div className=" md:w-[650px] w-[280px] h-[1px] bg-white  mr-[30px] mt-[20px]"></div>
                {/*<button className="text-white underline mt-[30px] mr-[50px]">VIEW PROFILE</button>*/}
            </div>
        </div>
    );
};

export default RankTable2023;
