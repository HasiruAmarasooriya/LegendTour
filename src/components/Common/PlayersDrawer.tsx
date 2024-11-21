"use client";

import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";

export default function PlayerExperienceDrawer() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed left-0 w-screen h-[320px] font-brown-light bg-[#522367] justify-around z-50 ${
        scrolled ? "mt-[13px]" : "mt-[13px]"
      }`}
    >
      <div className="flex flex-row items-start justify-center">
        <div className="flex flex-col mt-[30px] mr-[90px]">
          <a
            href="/upcoming-matches"
            className="text-white hover:font-semibold"
          >
            GOLFING LEGENDS
          </a>
          <a href="/past-matches" className="text-white hover:font-semibold">
            CELEBRITIES
          </a>
        </div>
        <div className="flex flex-col items-start xl:pl-[130px]">
          <div className="relative flex items-center mt-[30px] w-[223px] h-[50px]">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent text-lg font-semibold border-b-2 border-white text-white placeholder-white focus:outline-none w-full pb-3 pr-10"
            />
            <FiSearch className="absolute right-2 text-white text-2xl font-semibold mb-3 " />
          </div>
          <div className="grid grid-cols-3 xl:gap-x-[130px] gap-x-[60px]  gap-y-[20px] mt-5">
            {[
              {
                src: "https://d1j6ra8qdo17fv.cloudfront.net/wp-content/uploads/2023/09/Hend2.jpg",
                link: "https://example.com/link1",
                text: "Scott HEND",
                text1: "AUS",
              },
              {
                src: "https://d1j6ra8qdo17fv.cloudfront.net/wp-content/uploads/2020/08/GettyImages-2151614529.jpg",
                link: "https://example.com/link2",
                text: "Richard GREEN",
                text1: "AUS",
              },
              {
                src: "https://d1j6ra8qdo17fv.cloudfront.net/wp-content/uploads/2023/05/GettyImages-2158717999.jpg",
                link: "https://example.com/link3",
                text: "Peter BAKER",
                text1: "ENG",
              },
              {
                src: "https://www.legendstour.com/assets/images/profile_logo.png",
                link: "https://example.com/link4",
                text: "Adison DaSILVA",
                text1: "BRA",
              },
              {
                src: "https://d1j6ra8qdo17fv.cloudfront.net/wp-content/uploads/2023/06/GettyImages-1497405548.jpg",
                link: "https://example.com/link5",
                text: "Angel CABRERA",
                text1: "ARG",
              },
              {
                src: "https://d1j6ra8qdo17fv.cloudfront.net/wp-content/uploads/2023/10/James-Kingston-2-e1713798339726.jpg",
                link: "https://example.com/link6",
                text: "James KINGSTON",
                text1: "RSA",
              },
            ].map((item, index) => (
              <div key={index} className="flex flex-row items-center">
                <img
                  className="w-[61px] h-[56px]"
                  src={item.src}
                  alt={`Image ${index + 1}`}
                />
                <div className="flex flex-col">
                  <div>
                    <a
                      href={item.link}
                      className="text-white mt-2 font-medium ml-2"
                    >
                      {item.text}
                    </a>
                  </div>
                  <div>
                    <p className="text-white mt-2 ml-2 font-bold">
                      {item.text1}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
