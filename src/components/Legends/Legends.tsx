import React from "react";
import LegendsCard from "./LegendsCard/LegendsCard";

function Legends() {
  return (
    <>
      <div className="relative mb-3 w-full md:w-screen 2xl:h-full overflow-hidden">
        <div>
          <img
              className="w-full h-full 2xl:h-[650px] "
              src="https://d1j6ra8qdo17fv.cloudfront.net/wp-content/uploads/2020/09/Paul-and-Ian-e1620645817121.jpg"
              alt=""
            />
        </div>

        <div className=" absolute hidden xl:block  top-0 left-0 md:w-1/2  md:h-full bg-black bg-opacity-40 flex items-center justify-center">
          <div className=" relative flex items-center justify-end mr-[60px] md:w-full mr-[170px] xl:mt-[160px]">
          <div className=" ">

          <p className="font-brown-light 2xl:ml-[655px] md:mt-[65px]  text-[#ffffff]  md:w-[522px] md:h-[218px] text-[16px]  md:text-2xl font-brown ">
            &quot;It means a lot to spend time with passionate golf fans,
            sharing my thoughts and knowledge on leadership, performance and
            creating a winning team culture based on a player and as a
            victorious Ryder Cup Captain.&quot;
          </p>

          <p className="font-brown-light 2xl:ml-[655px]  text-white font-semibold mt-[16px] md:mt-0 text-lg ">
            PAUL MCGINLEY
          </p>

          </div>
        </div>
        </div>
        <div className="xl:hidden block  top-0 left-0 bg-[#f2f2f2]  md:h-full   items-center justify-center">
          <p className="font-brown-light lg:pt-[65px] md:pt-[35px] pt-[40px] md:ml-[60px] lg:ml-[40px] ml-[30px]   w-full lg:max-w-[902px] md:max-w-[680px] md:h-[218px] text-[18px]  lg:text-[26px]  font-brown ">
            &quot;It means a lot to spend time with passionate golf fans,
            sharing my thoughts and knowledge on leadership, performance and
            creating a winning team culture based on a player and as a
            victorious Ryder Cup Captain.&quot;
          </p>
          <p className="font-brown-light md:ml-[60px] lg:ml-[40px] lg:pb-[200px] ml-[30px] pb-[100px] mt-[20px] font-semibold text-[14px] md:mt-[-70px] lg:mt-0 lg:text-[18px]">
            PAUL MCGINLEY
          </p>
        </div>
      </div>

      {/*<div className=" overflow-hidden md:mt-[180px]  mx-[20px] mr-20px md:mr-[20px] md:ml-[94px] 2xl:ml-[665px]">*/}
      {/*  <span className="font-brown-bold text-[#522367] font-semibold text-3xl md:text-6xl">*/}
      {/*    Play Alongside Legends*/}
      {/*  </span>*/}
      {/*  <p className="font-brown-light md:mt-[48px] text-[16px]  font-[240] md:text-2xl font-brown md:w-[659px] md:h-[181px] ">*/}
      {/*    Legends Tour members hail from around the globe and in 2022, there are*/}
      {/*    members ranging from former Major Champions, World Number Ones, Ryder*/}
      {/*    Cup Captain&apos;s and Players as well as winners of DP World Tour and*/}
      {/*    PGA Tour events.{" "}*/}
      {/*  </p>*/}
      {/*</div>*/}

      <div className="flex items-center justify-center p-4 lg:pt-[180px] pt-[50px] xl:mr-[490px] lg:mr-[370px]">
        <div className="max-w-full md:max-w-[800px]  p-4  items-center justify-center">
          {/*<h2 className="text-lg md:text-[30px] lg:text-[40px] text-[#522367] font-brown-bold leading-none mb-4 md:mb-[24px]">*/}
          {/*  Brilliant Broadhurst takes the spoils at Formby*/}
          {/*</h2>*/}

          <h2 className="lg:text-[60px] text-[30px]  text-[#522367] font-brown-bold leading-none mb-4 md:mb-[24px]">
            Play Alongside Legends
          </h2>

          <p className="lg:text-[26px] text-[18px] md:max-w-[650px] text-[#232323] mb-4 md:mb-[26px]  font-brown-light">
            Legends Tour members hail from around the globe and in 2022, there are members ranging from former Major Champions, World Number Ones, Ryder Cup Captain&apos;s and Players as well as winners of DP World Tour and PGA Tour events.
          </p>


        </div>
      </div>

        <LegendsCard/>

    </>
  );
}

export default Legends;
