import React from "react";
import Card from "./card";
import Partners from "../Partners/Partners";
import SocialSection from "../Rankings/SocialSection";

const Players: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#f2f2f2]">
      <div className="bg-[#522367] text-white p-6 md:p-8 mt-auto mb-20 rounded-none flex flex-col md:flex-row mobile-lg:flex-row mobile-md:flex-row mobile-sm:flex-row items-center justify-between  md:text-left md:justify-center space-x-8 xl:space-x-[200px]">
        <div className="font-bold ">

          <h1 className="font-brown-bold text-[21px] md:text-2xl xl:text-[36px] lg:text-[30px] md:text-[24px] pb-2">
            Join My Legends Tour
          </h1>
          <p className="font-brown-bold text-[12px] xl:text-[24px] lg:text-[21px] md:text-[14px]">
            Sign up for the latest tournament and ticket news, offers and discounts
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="bg-white text-[#522367] font-brown-regular px-6 py-2 md:px-8 md:py-3 rounded-none text-14px lg:text-[24px] md:text-[18px] font-bold">
            SIGN UP
          </button>
        </div>
        </div>


      {/* Card Section */}
      <div className="bg-[#f2f2f2] p-6 md:p-11 flex justify-center">
        <div className="w-full max-w-7xl flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-10">
          <Card
            imageUrl="/img/Celebrity Legends.jpg"
            title="Golf Legends"
            description="Our Legends have won tournaments worldwide, including Major championships. Passionate about the game and with a story to tell, 18 holes with any of the Legends is a once in a lifetime opportunity."
            buttonText="VIEW PLAYER BIOS"
          />
          <Card
            imageUrl="/img/image4.jpg"
            title="Celebrity Legends"
            description="All great personalities, having reached the pinnacles of their careers winning multiple accolades along the way. With a common theme being a passion for golf and a love of competition."
            buttonText="VIEW CELEBRITY BIOS"
          />
        </div>
      </div>

      <Partners />
    </div>
  );
};

export default Players;
