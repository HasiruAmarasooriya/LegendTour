import React from "react";

const Club: React.FC = () => {
  return (

    <div className="bg-[#31153D] bg-cover p-8 shadow-md rounded-lg md:flex  items-center justify-center ">
      <div className=" xl:w-1/2 md:mr-4 ">
        <h1
          className="text-3xl md:text-5xl font-bold font-brown-bold mb-3 text-center text-white"
          style={{
            letterSpacing: "0.28px",
            lineHeight: "26px",
            marginBlockEnd: "16px",
            marginBottom: "16px",
          }}
        >
            Become a Partner
        </h1>

        <p
          className="text-2xl md:text-3xl text-white text-left font-brown mb-1"
          style={{
            letterSpacing: "0.28px",
            lineHeight: "26px",
          }}
        >
            We partner with select businesses who share our passion for golf.
        </p>
      </div>
      <div className="flex  md:w-1/2 md:ml-4">
        <img
          src="/img/partners/eagle-rare.png"
          alt="small image"
          className="w-9 h-9 mr-2 md:mr-4"
        />
        <div className="bg-white text-black p-2 w-30 h-15 rounded-sm mb-3">
          <p className="text-sm">To Date: £32,700</p>
        </div>
      </div>
    </div>

  );
};

export default Club;
