"use client";

import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function PlayerExperienceDrawer() {
  const [scrolled, setScrolled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const imagesData = [
    {
      src: "https://d1j6ra8qdo17fv.cloudfront.net/wp-content/uploads/2023/09/Hend2.jpg",
      alt: "Image 1",
      flag: "https://d1j6ra8qdo17fv.cloudfront.net/wp-content/uploads/2020/08/AUSTRALIA.png",
      text: "Scott HEND",
      text2: "2024 Points",
      text3: "1790.5",
      text4: "5",
      end: "Tournaments",
    },
    {
      src: "https://d1j6ra8qdo17fv.cloudfront.net/wp-content/uploads/2023/06/GettyImages-1497405548.jpg",
      alt: "Image 2",
      flag: "https://d1j6ra8qdo17fv.cloudfront.net/wp-content/uploads/2020/08/AUSTRALIA.png",
      text: "Richard GREEN",
      text2: "2024 Points",
      text3: "1650.0",
      text4: "2",
      end: "Tournaments",
    },
    {
      src: "https://d1j6ra8qdo17fv.cloudfront.net/wp-content/uploads/2023/06/GettyImages-1497405548.jpg",
      alt: "Image 2",
      flag: "https://d1j6ra8qdo17fv.cloudfront.net/wp-content/uploads/2020/08/AUSTRALIA.png",
      text: "Richard GREEN",
      text2: "2024 Points",
      text3: "1650.0",
      text4: "2",
      end: "Tournaments",
    },
    {
      src: "https://d1j6ra8qdo17fv.cloudfront.net/wp-content/uploads/2023/06/GettyImages-1497405548.jpg",
      alt: "Image 2",
      flag: "https://d1j6ra8qdo17fv.cloudfront.net/wp-content/uploads/2020/08/AUSTRALIA.png",
      text: "Richard GREEN",
      text2: "2024 Points",
      text3: "1650.0",
      text4: "2",
      end: "Tournaments",
    },
    {
      src: "https://d1j6ra8qdo17fv.cloudfront.net/wp-content/uploads/2023/06/GettyImages-1497405548.jpg",
      alt: "Image 2",
      flag: "https://d1j6ra8qdo17fv.cloudfront.net/wp-content/uploads/2020/08/AUSTRALIA.png",
      text: "Richard GREEN",
      text2: "2024 Points",
      text3: "1650.0",
      text4: "2",
      end: "Tournaments",
    },


    // Add more data as needed
  ];

  const handleNextSlide = () => {
    if (selectedIndex < imagesData.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const handlePrevSlide = () => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  return (
    <div
      className={`fixed left-0 w-screen h-[320px] font-brown-light bg-[#522367] justify-around z-50  ${
        scrolled ? "mt-[13px]" : "mt-[13px]"
      }`}
    >
      <div className="flex flex-row items-start justify-center">
        <div className="flex flex-col mt-[30px]">
          <a href="/rankings" className="text-white hover:font-semibold  xl:mr-[200px] mr-[50px] ">
            MCB ROAD TO MAURITIUS
          </a>
        </div>

        {/* Cards */}
        <Carousel
          selectedItem={selectedIndex}
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          autoPlay={false}
          infiniteLoop={false}
          showIndicators={false}
          emulateTouch
          centerMode
          centerSlidePercentage={33}
          className="xl:w-[670px] w-[600px] xl:ml-[80px] xl:mr-[75px] mr-[95px]"
        >
          {imagesData.map((image, index) => (
            <div key={index} className="text-white ">
              {/* Main image container */}
              <div className="pl-[30px]  relative border-r-2 border-white pr-[16px]">
                {/* Numbered box inside main image */}
                <div className="absolute top-0 left-0 w-11 h-11 bg-[#522367] mt-8 ml-5 flex items-center justify-center z-30">
                  <span className="text-white font-semibold text-[18px]">
                    {index + 1}
                  </span>
                </div>
                {/* Main image */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-[175px] h-[115px] mt-10 mx-auto relative z-10"
                />
                {/* Flag partially inside main image */}
                <div>
                <img
                  src={image.flag}
                  alt={image.alt}
                  style={{
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "30px",
                    height: "30px",
                    zIndex: 10,
                    marginTop:"-15px",
                    
                  }}
                />
                </div>
                


                <p className="text-center font-medium text-[15px] mt-5">
                  {image.text}
                </p>
                <div className="flex justify-between border-b pb-3 pt-2 font-semibold">
                  <div className="text-[11px]">{image.text2}</div>
                  <div className="text-[14px]">{image.text3}</div>
                </div>
                <div className="flex justify-between pt-2 font-semibold">
                  <div className="text-[11px]">{image.end}</div>
                  <div className="text-[14px]">{image.text4}</div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>

        {/* Left arrow button, only visible if not on the first slide */}
        {selectedIndex > 0 && (
          <button
            onClick={handlePrevSlide}
            className="absolute p-2 top-1/2 transform -translate-y-1/2 text-white text-[30px] z-50 mr-[650px] bg-[#3d1c4d]"
          >
            <FaArrowLeft />
          </button>
        )}

        {/* Right arrow button */}
        <button
          onClick={handleNextSlide}
          className="absolute p-2 top-1/2 transform -translate-y-1/2 text-white text-[30px] z-50 ml-[1260px] bg-[#3d1c4d]"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
