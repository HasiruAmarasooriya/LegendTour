import React from "react";
import SignUp from "../SignUp/SignUp";
import TicketsCards from "../TicketsCards/TicketsCards";

function Tickets() {
  return (
    <div className="bg-[#f2f2f2]">
      {/*<div className="relative">*/}
      {/*  <div className="relative w-full   ">*/}
      {/*    <div className="absolute inset-0 bg-gradient-to-r from-[#232323] to-[#0000] opacity-60"></div>*/}
      {/*    <img*/}
      {/*      className="md:w-full md:h-[600px]"*/}
      {/*      src="https://d1j6ra8qdo17fv.cloudfront.net/wp-content/uploads/2024/01/SPGA-7-768x363.jpg"*/}
      {/*      alt=""*/}
      {/*    />*/}
      {/*    <span className=" font-brown text-6xl absolute bottom-0 left-0 text-white font-bold ml-[95px] mb-[86px] 2xl:ml-[700px]">*/}
      {/*      Tickets*/}
      {/*    </span>*/}
      {/*  </div>*/}

      {/*  <a*/}
      {/*    href="/"*/}
      {/*    className="font-extralight mt-[15px] absolute top-0 left-0 text-[#FFFFFF8F] px-2 py-1 text-[18px] ml-[95px] 2xl:ml-[700px]"*/}
      {/*  >*/}
      {/*    <span className="underline">Home</span>/Tickets*/}
      {/*  </a>*/}
      {/*</div>*/}
      <div className=' tracking-wider overflow-hidden'>
        <div className="relative w-full">
          <img
              src="https://d1j6ra8qdo17fv.cloudfront.net/wp-content/uploads/2024/01/SPGA-7-768x363.jpg"
              alt=""
              className="w-full h-[240px] md:h-[540px] object-cover opacity-80 bg-custom-gradient"
          />
          <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center"></div>
          <div className="absolute bottom-0 left-0 p-4 text-white text-[24px] md:text-[58px] font-brown-bold font-bold mb-[2rem] flex items-center justify-center w-full">
            <h1 className='xl:mr-[1000px] lg:mr-[700px] md:mr-[430px] '> Tickets</h1>
          </div>
        </div>
      </div>
      {/*<div className="md:ml-[95px] ml-[28px] mb-[57px] mt-8 md:w-6/12 2xl:ml-[700px] 2xl:mr-[780px] 2xl:max-w-[680px]">*/}
      {/*  <span className="font-brown-light text-center mx-auto text-[27px] text-[#232323]  ">*/}
      {/*    Be part of the action up close and witness Ryder Cup captains and*/}
      {/*    major winners grace the fairways, tickets are available now - be sure*/}
      {/*    to secure yours today! <br />*/}
      {/*    <br />*/}
      {/*    You can also experience more and take part in the Legends Experience*/}
      {/*    to play alongside Ryder Cup captains and major winners - enquire today*/}
      {/*    as places are limited! .*/}
      {/*  </span>*/}
      {/*</div>*/}
      <div className="flex items-center justify-center mr-[20px] md:mr-[100px] lg:mr-[470px] p-4 md:p-8">
        <div className="max-w-full md:max-w-[800px] bg-[#f2f2f2] p-4 md:p-8 items-center justify-center">
          <p className="text-[18px]  lg:text-[26px] text-[#232323] mb-[16px] md:mb-[26px] font-brown-light">
            Be part of the action up close and witness Ryder Cup captains and
            major winners grace the fairways, tickets are available now - be sure
            to secure yours today!          </p>
          <p className="text-[18px]  lg:text-[26px] text-[#232323] font-brown-light mb-[40px] md:mb-[66px]">
            You can also experience more and take part in the Legends Experience
            to play alongside Ryder Cup captains and major winners - enquire today
            as places are limited! .          </p>

        </div>
      </div>
      <div>
        <TicketsCards />
        <SignUp />
      </div>
    </div>
  );
}

export default Tickets;
