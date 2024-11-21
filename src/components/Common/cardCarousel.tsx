'use client';

import * as React from 'react';
import RichardImg from '../../../public/img/schedule/richard.jpg';
import Flag from '../../../public/img/schedule/AUSTRALIA.png';
import England from '../../../public/img/schedule/ENGLAND.png';
import Peter from '../../../public/img/schedule/peter (2).jpg';
import Clark from '../../../public/img/schedule/clark.jpg';
import Mikael from '../../../public/img/schedule/Mikael.jpg';
import USA from '../../../public/img/schedule/USA.png';
import SWE from '../../../public/img/schedule/SWEDEN-1.png';
import Hend from '../../../public/img/schedule/Hend2.jpg';
import CardViewCarousel from '@/components/Common/cardViewCarousel';


const players = [
  {
    imageSrc: Hend,
    name: 'Scott',
    number: 1,
    surname: 'HEND',
    country: 'AUSTRALIA',
    flagSrc: Flag,
    year: 2024,
    points: 1581.5,
    tournaments: 3,
    results: [
      { count: 0, label: '1ST' },
      { count: 2, label: '2ND' },
      { count: 0, label: '3RD' },
      { count: 1, label: 'TOP TEN' },
    ],
  },
  {
    imageSrc: RichardImg,
    name: 'Richard',
    number: 2,
    surname: 'GREEN',
    country: 'AUSTRALIA',
    flagSrc: Flag,
    year: 2024,
    points: 990.0,
    tournaments: 1,
    results: [
      { count: 0, label: '1ST' },
      { count: 1, label: '2ND' },
      { count: 0, label: '3RD' },
      { count: 0, label: 'TOP TEN' },
    ],
  },
  {
    imageSrc: Peter,
    name: 'Peter',
    number: 3,
    surname: 'BAKER',
    country: 'ENGLAND',
    flagSrc: England,
    year: 2024,
    points: 825.0,
    tournaments: 2,
    results: [
      { count: 1, label: '1ST' },
      { count: 0, label: '2ND' },
      { count: 0, label: '3RD' },
      { count: 0, label: 'TOP TEN' },
    ],
  },
  {
    imageSrc: Clark,
    name: 'Clark',
    number: 4,
    surname: 'DENNIS',
    country: 'UNITED STATES',
    flagSrc: USA,
    year: 2024,
    points: 375.0,
    tournaments: 2,
    results: [
      { count: 0, label: '1ST' },
      { count: 1, label: '2ND' },
      { count: 0, label: '3RD' },
      { count: 0, label: 'TOP TEN' },
    ],
  },
  {
    imageSrc: Mikael,
    name: 'Mikael',
    number: 5,
    surname: 'LUNDBERG',
    country: 'SWEDEN',
    flagSrc: SWE,
    year: 2024,
    points: 352.5,
    tournaments: 1,
    results: [
      { count: 0, label: '1ST' },
      { count: 0, label: '2ND' },
      { count: 0, label: '3RD' },
      { count: 1, label: 'TOP TEN' },
    ],
  },
];

function CardContainer() {
  return (
    <>
      <div className=" md:flex items-center justify-center ml-[10px] md:overflow-visible overflow-x-auto">
        <div className="flex md:flex-wrap md:justify-center">
          {players.map((player, index) => (
            <div key={index} className="flex-shrink-0 md:flex-shrink md:w-auto w-[280px]">
              <CardViewCarousel cards={[player]} />
            </div>
          ))}
        </div>
      </div>
  
    </>
  );
}

export default CardContainer;
