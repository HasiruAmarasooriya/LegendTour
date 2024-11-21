'use client';

import * as React from 'react';
import Image, { StaticImageData } from 'next/image';
import { useSwipeable } from 'react-swipeable';

interface CardViewProps {
  cards: {
    imageSrc: StaticImageData;
    name: string;
    number: number;
    surname: string;
    country: string;
    flagSrc: StaticImageData;
    year: number;
    points: number;
    tournaments: number;
    results: { count: number; label: string }[];
  }[];
}

const CardView: React.FC<CardViewProps> = React.memo(({ cards }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextCard = React.useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  }, [cards.length]);

  const prevCard = React.useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  }, [cards.length]);

  const handlers = useSwipeable({
    onSwipedLeft: nextCard,
    onSwipedRight: prevCard,
    trackMouse: true,
  });

  return (
    <div className="relative w-[300px] h-full md:hidden" {...handlers}>
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {cards.map((card, index) => (
          <div key={index} className="min-w-full flex-shrink-0">
            <div>
              <div className="flex-item-start font-brown-bold">
                <div className="relative">
                  <div className="absolute top-0 left-0 w-16 h-16 bg-[#522367] ml-[20px] mt-[50px] flex justify-center items-center">
                    <p className="text-white text-[27px]">{card.number}</p>
                  </div>
                  <Image
                    className="pt-[50px] pl-[20px] w-[280px] h-[400px]"
                    src={card.imageSrc}
                    alt="HeaderImage"
                  />
                </div>

                <div className="flex items-start font-brown-bold ">
                  <div className="ml-[20px] mr-[20px]">
                    <div className="pt-[20px]">
                      <p className="text-black text-[25px]">{card.name}</p>
                      <p className="text-black text-[25px]">{card.surname}</p>
                    </div>

                    <div className="flex items-start mt-[15px]">
                      <div>
                        <Image className="w-[23px] h-[23px]" src={card.flagSrc} alt="FlagImage" />
                      </div>
                      <div className="ml-4">
                        <p className="text-[#522367] text-[18px]">{card.country}</p>
                      </div>
                    </div>

                    <div className="flex items-start mt-4">
                      <div className="pt-[30px]">
                        <p className="text-black font-bold text-[12px]">{card.year}</p>
                        <p className="text-black font-bold text-[12px]">Points</p>
                      </div>
                      <div className="ml-[140px] pt-[32px]">
                        <p className="text-black font-bold text-[25px]">{card.points}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="pt-[20px]">
                        <hr className="bg-[#b9b9b9] h-[3px] w-[265px]" />
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="pt-[32px]">
                        <p className="text-black font-bold text-[12px]">Tournaments</p>
                      </div>
                      <div className="ml-[155px] pt-[25px]">
                        <p className="text-black font-bold text-[25px]">{card.tournaments}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="pt-[20px]">
                        <hr className="bg-[#b9b9b9] h-[3px] w-[265px]" />
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="pt-[25px]">
                        <p className="text-black font-bold text-[12px]">Tournaments results</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      {card.results.map((result, index) => (
                        <div
                          key={index}
                          className={`pt-[15px] ${index > 0 ? 'pl-[40px]' : ''} flex items-start`}
                        >
                          <p className="text-black font-bold text-[25px]">{result.count}</p>
                          <p className="text-custom-color-hr text-[8px] mt-4">{result.label}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-start">
                      <div className="pt-[20px]">
                        <hr className="bg-[#b9b9b9] h-[3px] w-[265px]" />
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="pt-[25px]">
                        <p className="text-custom-color font-bold text-[15px]">VIEW PROFILE</p>
                        <hr className="bg-[#522367] h-[3px] w-[100px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

CardView.displayName = 'CardView';

export default CardView;
