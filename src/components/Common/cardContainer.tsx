'use client'

import * as React from "react";
import CardView from "@/components/Common/cardView";
import RichardImg from "../../../public/img/schedule/richard.jpg"
import Flag from '../../../public/img/schedule/AUSTRALIA.png';
import Enland from '../../../public/img/schedule/ENGLAND.png'
import Peter from '../../../public/img/schedule/peter (2).jpg'
import Clark from '../../../public/img/schedule/clark.jpg'
import Mikael from '../../../public/img/schedule/Mikael.jpg'
import USA from '../../../public/img/schedule/USA.png'
import SWE from '../../../public/img/schedule/SWEDEN-1.png'

const players = [
  {
    imageSrc: RichardImg,
    name: "Richard",
    number: 2,
    surname: "GREEN",
    country: "AUSTRALIA",
    flagSrc: Flag,
    year: 2024,
    points: 990.0,
    tournaments: 1,
    results: [
      { count: 0, label: "1ST" },
      { count: 1, label: "2ND" },
      { count: 0, label: "3RD" },
      { count: 0, label: "TOP TEN" },
    ]
  },
  {
    imageSrc: Peter,
    name: "Peter",
    number: 3,
    surname: "BAKER",
    country: "ENGLAND",
    flagSrc: Enland,
    year: 2024,
    points: 825.0,
    tournaments: 2,
    results: [
      { count: 1, label: "1ST" },
      { count: 0, label: "2ND" },
      { count: 0, label: "3RD" },
      { count: 0, label: "TOP TEN" },
    ]
  },
  {
    imageSrc: Clark,
    name: "Clark",
    number: 4,
    surname: "DENNIS",
    country: "UNITED STATES",
    flagSrc: USA,
    year: 2024,
    points: 375.0,
    tournaments: 2,
    results: [
      { count: 0, label: "1ST" },
      { count: 1, label: "2ND" },
      { count: 0, label: "3RD" },
      { count: 0, label: "TOP TEN" },
    ]
  },
  {
    imageSrc: Mikael,
    name: "Mikael",
    number: 5,
    surname: "LUNDBERG",
    country: "SWEDEN",
    flagSrc: SWE,
    year: 2024,
    points: 352.5,
    tournaments: 1,
    results: [
      { count: 0, label: "1ST" },
      { count: 0, label: "2ND" },
      { count: 0, label: "3RD" },
      { count: 1, label: "TOP TEN" },
    ]
  },
];

function CardContainer() {
  return (
    <div className="xl:flex items-center justify-center md:ml-[30px] lg:ml-[5px]  xl:overflow-visible overflow-x-auto">

      <div className="flex xl:flex-wrap xl:justify-center">
      {players.map((player, index) => (
        <div key={index}  >
          <CardView

            imageSrc={player.imageSrc}
            name={player.name}
            number={player.number}
            surname={player.surname}
            country={player.country}
            flagSrc={player.flagSrc}
            year={player.year}
            points={player.points}
            tournaments={player.tournaments}
            results={player.results}

          />
        </div>
      ))}
      </div>
    </div>
  );

}

export default CardContainer;