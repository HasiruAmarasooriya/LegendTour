"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  Card,
  CardHeader,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { Navigation } from "lucide-react";

interface CardData {
  imageUrl: string;
  date: string;
  description: string;
  place: string;
  img: string;
  buttonLabel: string;
  extraButton: boolean;
}

const cardsData: CardData[] = [
  {
    imageUrl:
      "https://d1j6ra8qdo17fv.cloudfront.net/wp-content/uploads/2024/01/Paul-Lawrie-e1710500368263.png",
    date: "13 - 16 June 2024",
    description: "Paul Lawrie Match Play presented by Petsure",
    place: "Hanbury Manor Marriott Hotel & Country Club, Hertfordshire",
    img: "https://d1j6ra8qdo17fv.cloudfront.net/wp-content/uploads/2020/08/USA.png",
    buttonLabel: "TICKETS",
    extraButton: false,
  },
  {
    imageUrl:
      "https://d1j6ra8qdo17fv.cloudfront.net/wp-content/uploads/2023/10/Peter-Baker-7.jpg",
    date: "19 - 22 June 2024",
    description: "OFX Irish Legends",
    place: "Seapoint Golf Links, Co Louth",
    img: "https://d1j6ra8qdo17fv.cloudfront.net/wp-content/uploads/2020/08/IRELAND.png",
    buttonLabel: "TICKETS",
    extraButton: false,
  },
  {
    imageUrl:
      "https://d1j6ra8qdo17fv.cloudfront.net/wp-content/uploads/2022/11/GettyImages-1565707850-1.jpg",
    date: "25 - 28 July 2024",
    description: "The Senior Open presented by Rolex",
    place: "Carnoustie Golf Links",
    img: "https://d1j6ra8qdo17fv.cloudfront.net/wp-content/uploads/2024/05/flag-round-250.png",
    buttonLabel: "TICKETS",
    extraButton: false,
  },
];

const Tournaments: React.FC = () => {
  return (
    <div className="mb-5">
      <div>
        <div className="flex items-center justify-center mb-[80px]">
          <hr className="md:ml-16 border-t-[2px] border-[#522367] w-[100px] md:w-[550px]  " />
          <span className="mx-4 text-sm md:text-lg text-[#522367] font-medium">
            2024
          </span>
          <hr className="md:mr-16 border-t-[2px] border-[#522367] w-[100px] md:w-[550px] " />
        </div>


        <div className="mx-auto container mt-6 my-4  pb-[80px]">
          <div className="flex items-center justify-center overflow-x-auto">
          {/* Desktop View */}
          <div className="xl:max-w-[1270px] hidden md:grid md:grid-cols-3 lg:grid-cols-3 xl:gap-10 lg:gap-[20px] md:gap-[330px]  ">
            {cardsData.map((card, index) => (
              <Card
                className={`xl:w-[370px] lg:w-[295px] md:w-[325px] h-[630px] mb-4 flex flex-col justify-between ${
                  card.extraButton ? "last-card" : ""
                }`}
                key={index}
              >
                <div>
                  <CardHeader>
                    <img
                      src={card.imageUrl}
                      alt=""
                      className="w-full h-[270px] object-cover"
                    />
                  </CardHeader>
                  <div className="relative flex items-center justify-center">
                    <img
                      src={card.img}
                      alt=""
                      className="absolute w-14 h-14 mx-auto"
                    />
                  </div>
                  <CardContent className="flex flex-col items-center">
                    <div className="text-white text-center mt-4 mx-auto">
                      <div className="flex flex-col justify-center items-center h-full mt-4">
                        <div className="text-md mt-4">
                          <p>{card.date}</p>
                        </div>
                        <div className="font-medium text-xl text-center mt-4">
                          <p>{card.description}</p>
                        </div>
                        <div className="text-md mt-4 text-center italic">
                          <p>{card.place}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
                <CardFooter className="flex justify-center mb-4">
                  <Button
                    className={`h-[53px] w-[131px] text-center tracking-widest break-words leading-tight ${
                      card.extraButton ? "text-sm" : ""
                    }`}
                  >
                    {card.buttonLabel}
                  </Button>
                  {card.extraButton && (
                    <Button className="h-[53px] w-[131px] text-center tracking-widest break-words text-sm leading-tight ml-4">
                      PLAYER
                      <br />
                      EXPERIENCE
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
          </div>
          {/* Mobile View */}
          <div className="lg:hidden md:hidden">
            <Carousel
              showThumbs={false}
              showStatus={false}
              showArrows={false}
              autoPlay={false}
              infiniteLoop={false}
              showIndicators={false}
              emulateTouch
              centerMode
              centerSlidePercentage={95} // Adjust the percentage to control how much of the next card is shown
            >
              {cardsData.map((card, index) => (
                <div key={index} className="flex justify-center">
                  <Card className="w-[345px] h-[640px] flex flex-col justify-between mb-4 mr-4">
                    <div>
                      <CardHeader>
                        <img
                          src={card.imageUrl}
                          alt=""
                          className="w-full h-[270px] object-cover"
                        />
                      </CardHeader>
                      <div className="relative flex items-center justify-center">
                        <img
                          src={card.img}
                          alt=""
                          className="absolute w-14 h-14 mx-auto"
                          style={{ width: "65px" }}
                        />
                      </div>
                      <CardContent className="flex flex-col items-center">
                        <div className="text-white text-center mt-4 mx-auto">
                          <div className="flex flex-col justify-center items-center h-full mt-4">
                            <div className="text-md mt-4">
                              <p>{card.date}</p>
                            </div>
                            <div className="font-medium text-xl text-center mt-4">
                              <p>{card.description}</p>
                            </div>
                            <div className="text-md mt-4 text-center italic">
                              <p>{card.place}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                    <CardFooter className="flex justify-center mb-4">
                      <Button
                        className={`h-[53px] w-[131px] text-center tracking-widest break-words leading-tight ${
                          card.extraButton ? "text-sm" : ""
                        }`}
                      >
                        {card.buttonLabel}
                      </Button>
                      {card.extraButton && (
                        <Button className="h-[53px] w-[131px] text-center tracking-widest break-words text-sm leading-tight ml-4">
                          PLAYER
                          <br />
                          EXPERIENCE
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </Carousel>
          </div>
          <div className="flex justify-center items-center">
  <Button className="h-[53px] mt-[50px] text-center tracking-widest break-words text-[16px] leading-tight">
    ALL TOURNAMENTS
  </Button>
</div>

        </div>
      </div>
    </div>
  );
};

export default Tournaments;
