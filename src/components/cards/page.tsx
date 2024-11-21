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
import Link from "next/link";

const cardsData = [
  {
    imageUrl:
      "https://d1j6ra8qdo17fv.cloudfront.net/wp-content/uploads/2023/10/Steve-Stricker.png",
    date: "23-24 MAY 2024",
    description: "KitchenAid Senior PGA Championship",
    place: "Harbor Shores Golf Club, Benton Harbor United States",
    img: "https://d1j6ra8qdo17fv.cloudfront.net/wp-content/uploads/2020/08/USA.png",
    title: "image",
  },
  {
    imageUrl:
      "https://d1j6ra8qdo17fv.cloudfront.net/wp-content/uploads/2023/12/The-Bay-Course-banner-e1715242116799.jpeg",
    date: "23-24 MAY 2024",
    description: "Costa Navarino Legends Tour Trophy",
    place: "Costa Navarino Greece",
    img: "https://d1j6ra8qdo17fv.cloudfront.net/wp-content/uploads/2024/05/flag-round-250.png",
    title: "image",
  },
  {
    imageUrl:
      "https://d1j6ra8qdo17fv.cloudfront.net/wp-content/uploads/2024/01/Paul-Lawrie-e1710500368263.png",
    date: "23-24 MAY 2024",
    description: "Paul Lawrie Match Play presented by Petsure",
    place: "Hanbury Manor Marriott Hotel & Country Club, Hertfordshire England",
    img: "https://d1j6ra8qdo17fv.cloudfront.net/wp-content/uploads/2022/11/ENGLAND.png",
    title: "image",
  },
];

const HomePage = () => {
  return (
    <div className="border-b-2 border-[#232323] border-opacity-20 2xl:mt-0 md:mt-[45px] md:mb-[80px] ">
      <div>
        <div className="flex items-center justify-center md:hidden text-center ">
          <hr className="  border-t-[2px] border-[#522367] w-[80px]  md:w-[480px]  " />
          <span className="md:mx-4 mx-2 text-md lg:text-lg text-[#522367] font-medium">UPCOMING TOURNAMENTS</span>
          <hr className=" border-t-[2px] border-[#522367] w-[80px]   md:w-[480px]" />
        </div>
        <div className="mx-auto  container mt-16  overflow-hidden">
          {/* Desktop View */}
          <div className="md:flex items-center justify-center md:mb-[60px] hidden md:block ">
            <hr className="border-t-[2px] border-[#522367]  flex md:mr-5 xl:w-[455px] lg:w-[325px] md:w-[204px] xl:ml-[15px] lg:ml-[17px] md:ml-[25px] w-[5px] " />
            <span className=" text-[#522367]  text-[18px] text-center">UPCOMING TOURNAMENTS</span>
            <hr className="border-t-[2px] border-[#522367] flex md:ml-5 xl:w-[452px] lg:w-[330px] md:w-[190px] xl:ml-[20px] w-[5px] " />
          </div>
          <div className="flex items-center justify-center overflow-x-auto">
          <div className=" xl:max-w-[1270px] hidden md:grid md:grid-cols-3 lg:grid-cols-3 xl:gap-10 lg:gap-[20px] md:gap-[330px] md:ml-4  ">
            {cardsData.map((card, index) => (
              <Card
                className=" xl:w-[370px] lg:w-[295px] md:w-[325px]  h-[630px] 2xl:h-[580px] mb-4 flex flex-col justify-between"
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
                        <div className="text-md font-[300] font-browa mt-4 text-center ">
                          <p>{card.place}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
                <CardFooter className="flex justify-center">
                  <a href="#" className="text-white text-xl font-bold py-2 px-4 underline decoration-2 underline-offset-4">
                    VIEW
                  </a>
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
              centerSlidePercentage={95}
            >
              {cardsData.map((card, index) => (
                <div key={index} className="flex justify-center  ">
                  <Card className="w-[345px] h-[640px] flex flex-col justify-between mb-4 mr-4 ">
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
                          style={{ width: "60px" }} // Adjust the width here
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
                    <CardFooter className="flex justify-center">
                      <a
                        href="#"
                        className="text-white text-xl font-bold py-2 px-4 underline decoration-2 underline-offset-4">
                        VIEW
                      </a>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      <div className=" text-lg mt-[95px] mb-[182px] flex items-center justify-center mx-auto">
        <Link href="/schedule">
          <Button className="w-full   md:w-[240px] md:h-[53px] lg:p-7 tracking-widest">ALL TOURNAMENTS</Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

{/* <img
src={image.flag}
alt={image.alt}
className="w-[30px] h-[30px] absolute mt-[-10px]   left-1/2  z-10 "
/> */}