// "use client";
// import React from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import { Card, CardHeader, CardFooter, CardContent } from "@/components/ui/card";
//
// const LegendsCard = [
//   // Your existing card data
//   {
//     imageUrl:
//       "https://d1j6ra8qdo17fv.cloudfront.net/wp-content/uploads/2022/01/Thomas-BjornRyderCupsmaller-e1641553442788.jpg",
//     des1: "2018 Ryder Cup captain ",
//     des2: "15 x European Tour win",
//     description: "Thomas ",
//     sirName: "Bjørn (DEN)",
//   },
//   {
//     imageUrl:
//       "https://d1j6ra8qdo17fv.cloudfront.net/wp-content/uploads/2023/12/IanWoosnam1.jpg",
//     des1: "2006 Ryder Cup Captain",
//     des2: "1991 Masters Champion",
//     description: "Ian",
//     sirName: "Woosnam (WAL)",
//   },
//   {
//     imageUrl:
//       "https://d1j6ra8qdo17fv.cloudfront.net/wp-content/uploads/2020/08/Untitled-design-20.png",
//     des1: "1999 Ryder Cup Captain ",
//     des2: "18 x European Tour wins",
//     description: "Mark ",
//     sirName: "James (ENG)",
//   },
//   {
//     imageUrl:
//       "https://d1j6ra8qdo17fv.cloudfront.net/wp-content/uploads/2020/08/Instagram-Post.png",
//     des1: "1999 Open Champion",
//     des2: "2 x Ryder Cup appearances",
//     description: "Paul ",
//     sirName: "Lawrie (SCO)",
//   },
//   {
//     imageUrl:
//       "https://d1j6ra8qdo17fv.cloudfront.net/wp-content/uploads/2022/01/Thomas-BjornRyderCupsmaller-e1641553442788.jpg",
//     des1: "2018 Ryder Cup captain ",
//     des2: "15 x European Tour win",
//     description: "Thomas ",
//     sirName: "Bjørn (DEN)",
//   },
//   {
//     imageUrl:
//       "https://d1j6ra8qdo17fv.cloudfront.net/wp-content/uploads/2023/12/IanWoosnam1.jpg",
//     des1: "2006 Ryder Cup Captain",
//     des2: "1991 Masters Champion",
//     description: "Ian",
//     sirName: "Woosnam (WAL)",
//   },
//   {
//     imageUrl:
//       "https://d1j6ra8qdo17fv.cloudfront.net/wp-content/uploads/2020/08/Untitled-design-20.png",
//     des1: "1999 Ryder Cup Captain ",
//     des2: "18 x European Tour wins",
//     description: "Mark ",
//     sirName: "James (ENG)",
//   },
// ];
//
// const responsive = {
//   superLargeDesktop: {
//     breakpoint: { max: 4000, min: 1024 },
//     items: 4,
//   },
//   desktop: {
//     breakpoint: { max: 1024, min: 768 },
//     items: 4,
//   },
//   tablet: {
//     breakpoint: { max: 768, min: 464 },
//     items: 2,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//     partialVisibilityGutter: 40, // Adjust this value as needed
//   },
// };
//
// const HomePage = () => {
//   return (
//       <div className="">
//     <div className=" mb-[80px] md:ml-[26px]   lg:max-w-[1250px]">
//       <div className="mx-auto container  my-4 overflow-x-auto">
//         <Carousel
//           responsive={responsive}
//           swipeable={true}
//           draggable={true}
//           showDots={false}
//           ssr={true} // means to render carousel on server-side.
//           infinite={true}
//           autoPlay={false}
//           autoPlaySpeed={1000}
//           keyBoardControl={true}
//           customTransition="all .5"
//           transitionDuration={500}
//           containerClass="carousel-container"
//           removeArrowOnDeviceType={["tablet", "mobile"]}
//           dotListClass="custom-dot-list-style"
//           itemClass="carousel-item-padding-20-px" // Adjust padding here
//         >
//           {LegendsCard.map((card, index) => (
//             <div key={index} className="inline-block px-2  ">
//               <Card className=" bg-white border-none w-[250px] md:w-[270px] h-full flex flex-col justify-between shadow-none">
//                 <div>
//                   <CardHeader>
//                     <img
//                       src={card.imageUrl}
//                       alt=""
//                       className="w-full h-[270px] object-cover"
//                     />
//                   </CardHeader>
//                   <CardContent className="flex flex-col md:pl-0 mt-[16px]">
//                     <div className="text-black text-left">
//                       <div className="flex flex-col h-full">
//                         <div className="font-medium text-2xl font-brown-regular">
//                           <p>{card.description}</p>
//                         </div>
//                         <div className="font-medium text-2xl font-brown-regular">
//                           <p>{card.sirName}</p>
//                         </div>
//                         <div className="text-lg font-[250] mt-[16px] font-brown">
//                           <p>{card.des1}</p>
//                         </div>
//                         <div className="text-lg font-[250] font-brown">
//                           <p>{card.des2}</p>
//                         </div>
//                         <a
//                           href="#"
//                           className="text-[#522367] text-lg mt-[26px] font-bold underline decoration-2 underline-offset-4"
//                         >
//                           VIEW PROFILE
//                         </a>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </div>
//               </Card>
//             </div>
//           ))}
//         </Carousel>
//       </div>
//     </div>
//       </div>
//   );
// };
//
// export default HomePage;

// import React from "react";
//
// interface PlayLegendsProps {
//   title: string;
//   description: string;
// }
//
// const legendsData = [
//   {
//     name: "Michael Campbell (NZL)",
//     imageUrl: "/img/experience/GettyImages-2158318847.jpg",
//     achievements: [
//       "2005 US Open champion",
//       "8x DP World Tour wins"
//     ],
//     profileUrl: "/profile/michael-campbell"
//   },
//   {
//     name: "Thomas Bjørn (DEN)",
//     imageUrl: "/img/experience/Thomas-BjornRyderCupsmaller-e1641553442788.jpg",
//     achievements: [
//       "2018 Ryder Cup captain",
//       "15x European Tour wins"
//     ],
//     profileUrl: "/profile/thomas-bjorn"
//   },
//   {
//     name: "Ian Woosnam (WAL)",
//     imageUrl: "/img/experience/IanWoosnam1.jpg",
//     achievements: [
//       "2006 Ryder Cup Captain",
//       "1991 Masters Champion"
//     ],
//     profileUrl: "/profile/ian-woosnam"
//   },
//   {
//     name: "Tom Lehman (USA)",
//     imageUrl: "/img/experience/GettyImages-71980840.jpg",
//     achievements: [
//       "2006 Ryder Cup Captain",
//       "1996 Open Champion"
//     ],
//     profileUrl: "/profile/tom-lehman"
//   }
// ];
//
// const PlayLegends: React.FC<PlayLegendsProps> = ({ title, description }) => {
//   return (
//     <div className="bg-[#f2f2f2] px-4 md:px-[30px] lg:px-[115px] mb-[80px]">
//       <div className="mb-[40px] md:mb-[60px] lg:mb-[80px]">
//         <h1 className="mb-4 text-[#522367] text-3xl md:text-4xl lg:text-[60px] leading-tight lg:leading-[1em] font-brown-bold text-center lg:text-left max-w-full lg:max-w-[800px]">
//           {title}
//         </h1>
//         <h2 className="text-xl md:text-2xl lg:text-[30px] text-[#522367] font-brown-light text-center lg:text-left max-w-full lg:max-w-[800px]">
//           {description}
//         </h2>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-[40px]">
//         {legendsData.map((legend, index) => {
//           // Split name into two lines
//           const [firstLine, secondLine] = legend.name.split(' (');
//           return (
//             <div key={index} className="text-center lg:text-left">
//               <img src={legend.imageUrl} alt={legend.name} className="w-full h-[240px] md:h-[300px] lg:h-[346px] object-cover" />
//               <h3 className="mt-4 text-xl md:text-2xl lg:text-[26px] font-brown-regular">
//                 <span className="block">{firstLine}</span>
//                 <span className="block">({secondLine}</span>
//               </h3>
//               <p className="mt-2 text-base md:text-lg lg:text-[18px] font-brown-light">
//                 {legend.achievements.map((achievement, idx) => (
//                   <span key={idx}>{achievement}<br /></span>
//                 ))}
//               </p>
//               <a
//                 href={legend.profileUrl}
//                 className="text-[#522367] font-bold inline-block mt-4 text-base md:text-lg lg:text-[18px] font-brown-regular"
//               >
//                 VIEW PROFILE
//                 <span className="block h-[1px] bg-[#522367] w-full mt-1"></span>
//               </a>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
//
// export default PlayLegends;

"use client";
// import React, { useState } from "react";
//
// interface PlayLegendsProps {
//     title: string;
//     description: string;
// }
//
// const legendsData = [
//     {
//         name: "Michael Campbell (NZL)",
//         imageUrl: "/img/experience/GettyImages-2158318847.jpg",
//         achievements: ["2005 US Open champion", "8x DP World Tour wins"],
//         profileUrl: "/profile/michael-campbell",
//     },
//     {
//         name: "Thomas Bjørn (DEN)",
//         imageUrl: "/img/experience/Thomas-BjornRyderCupsmaller-e1641553442788.jpg",
//         achievements: ["2018 Ryder Cup captain", "15x European Tour wins"],
//         profileUrl: "/profile/thomas-bjorn",
//     },
//     {
//         name: "Ian Woosnam (WAL)",
//         imageUrl: "/img/experience/IanWoosnam1.jpg",
//         achievements: ["2006 Ryder Cup Captain", "1991 Masters Champion"],
//         profileUrl: "/profile/ian-woosnam",
//     },
//     {
//         name: "Tom Lehman (USA)",
//         imageUrl: "/img/experience/GettyImages-71980840.jpg",
//         achievements: ["2006 Ryder Cup Captain", "1996 Open Champion"],
//         profileUrl: "/profile/tom-lehman",
//     },
//     {
//         name: "Michael Campbell (NZL)",
//         imageUrl: "/img/experience/GettyImages-2158318847.jpg",
//         achievements: ["2005 US Open champion", "8x DP World Tour wins"],
//         profileUrl: "/profile/michael-campbell",
//     },
//     {
//         name: "Thomas Bjørn (DEN)",
//         imageUrl: "/img/experience/Thomas-BjornRyderCupsmaller-e1641553442788.jpg",
//         achievements: ["2018 Ryder Cup captain", "15x European Tour wins"],
//         profileUrl: "/profile/thomas-bjorn",
//     },
//     {
//         name: "Ian Woosnam (WAL)",
//         imageUrl: "/img/experience/IanWoosnam1.jpg",
//         achievements: ["2006 Ryder Cup Captain", "1991 Masters Champion"],
//         profileUrl: "/profile/ian-woosnam",
//     },
//     {
//         name: "Tom Lehman (USA)",
//         imageUrl: "/img/experience/GettyImages-71980840.jpg",
//         achievements: ["2006 Ryder Cup Captain", "1996 Open Champion"],
//         profileUrl: "/profile/tom-lehman",
//     },
//     // Add more legends if needed
// ];
//
// const PlayLegends: React.FC<PlayLegendsProps> = ({ title, description }) => {
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const legendsPerSlide = 4; // Display 4 cards per slide
//     const totalSlides = Math.ceil(legendsData.length / legendsPerSlide);
//
//     const handleNext = () => {
//         if (currentSlide < totalSlides - 1) {
//             setCurrentSlide(currentSlide + 1);
//         }
//     };
//
//     const handlePrev = () => {
//         if (currentSlide > 0) {
//             setCurrentSlide(currentSlide - 1);
//         }
//     };
//
//     // Calculate translateX value for sliding
//     const translateX = -(currentSlide * 100);
//
//     return (
//         <div className="bg-white lg:px-[115px] mb-[80px] lg:mt-[150px] overflow-hidden relative">
//             <div className="mb-[40px] md:mb-[60px] lg:mb-[80px] lg:mt-[150px]">
//                 <h1 className="mb-4 text-[#522367] text-3xl md:text-4xl lg:text-[60px] leading-tight lg:leading-[1em] font-brown-bold text-center lg:text-left max-w-full lg:max-w-[800px]">
//                     {title}
//                 </h1>
//                 <h2 className="text-xl md:text-2xl lg:text-[30px] text-[#522367] font-brown-light text-center lg:text-left max-w-full lg:max-w-[800px]">
//                     {description}
//                 </h2>
//             </div>
//
//             <div className="relative">
//                 {/* Legends Cards Container */}
//                 <div className="overflow-hidden">
//                     <div
//                         className="flex transition-transform duration-500 ease-in-out"
//                         style={{ transform: `translateX(${translateX}%)`, width: `${totalSlides * 100}%` }}
//                     >
//                         {legendsData.map((legend, index) => {
//                             const [firstLine, secondLine] = legend.name.split(" (");
//                             return (
//                                 <div
//                                     key={index}
//                                     className="flex-shrink-0 w-full md:w-1/2 lg:w-[25%] px-2 md:px-4 lg:px-[20px]"
//                                 >
//                                     <div className="text-center lg:text-left lg:mb-[150px]">
//                                         <img
//                                             src={legend.imageUrl}
//                                             alt={legend.name}
//                                             className="w-full h-[240px] md:h-[300px] lg:h-[346px] object-cover"
//                                         />
//                                         <h3 className="mt-4 text-xl md:text-2xl lg:text-[26px] font-brown-regular">
//                                             <span className="block">{firstLine}</span>
//                                             <span className="block">({secondLine}</span>
//                                         </h3>
//                                         <p className="mt-2 text-base md:text-lg lg:text-[18px] font-brown-light">
//                                             {legend.achievements.map((achievement, idx) => (
//                                                 <span key={idx}>
//                                                     {achievement}
//                                                     <br />
//                                                 </span>
//                                             ))}
//                                         </p>
//                                         <a
//                                             href={legend.profileUrl}
//                                             className="text-[#522367] font-bold inline-block mt-4 text-base md:text-lg lg:text-[18px] font-brown-regular"
//                                         >
//                                             VIEW PROFILE
//                                             <span className="block h-[1px] bg-[#522367] w-full mt-1"></span>
//                                         </a>
//                                     </div>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>
//
//                 {/* Left Arrow */}
//                 {currentSlide > 0 && (
//                     <button
//                         className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-[#522367] text-white"
//                         onClick={handlePrev}
//                     >
//                         &#8592;
//                     </button>
//                 )}
//
//                 {/* Right Arrow */}
//                 {currentSlide < totalSlides - 1 && (
//                     <button
//                         className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-[#522367] text-white"
//                         onClick={handleNext}
//                     >
//                         &#8594;
//                     </button>
//                 )}
//             </div>
//         </div>
//     );
// };
//
// export default PlayLegends;


import React, { useState } from 'react';

interface LegendCardProps {
  id:any,
  name: any;
  role: any;
  achievements: any;
  imgSrc: any;
}

interface LegendCarouselProps {
  legends: LegendCardProps[];
}

const legendsData = [
  {
    id: 1,
    name: "Colin Montgomerie (SCO)",
    role: "2010 Ryder Cup Captain",
    achievements: "31x European Tour wins",
    imgSrc: "/img/experience/GettyImages-2158318847.jpg", // Replace with actual image paths
  },
  {
    id: 2,
    name: "Paul McGinley (IRE)",
    role: "2014 Ryder Cup Captain",
    achievements: "4x European Tour wins",
    imgSrc: "/img/experience/Thomas-BjornRyderCupsmaller-e1641553442788.jpg",
  },
  {
    id: 3,
    name: "José María Olazabal (ESP)",
    role: "1994 & 1999 Masters champion",
    achievements: "2012 Ryder Cup Captain",
    imgSrc: "/img/experience/IanWoosnam1.jpg",
  },
  {
    id: 4,
    name: "Peter Baker (ENG)",
    role: "2023 MCB Road to Mauritius champion",
    achievements: "6x Legends Tour wins",
    imgSrc: "/img/experience/GettyImages-71980840.jpg",
  },
  {
    id: 5,
    name: "Colin Montgomerie (SCO)",
    role: "2010 Ryder Cup Captain",
    achievements: "31x European Tour wins",
    imgSrc: "/img/experience/GettyImages-2158318847.jpg", // Replace with actual image paths
  },
  {
    id: 6,
    name: "Paul McGinley (IRE)",
    role: "2014 Ryder Cup Captain",
    achievements: "4x European Tour wins",
    imgSrc: "/img/experience/Thomas-BjornRyderCupsmaller-e1641553442788.jpg",
  },
  {
    id: 7,
    name: "José María Olazabal (ESP)",
    role: "1994 & 1999 Masters champion",
    achievements: "2012 Ryder Cup Captain",
    imgSrc: "/img/experience/IanWoosnam1.jpg",
  },
  {
    id: 8,
    name: "Peter Baker (ENG)",
    role: "2023 MCB Road to Mauritius champion",
    achievements: "6x Legends Tour wins",
    imgSrc: "/img/experience/GettyImages-71980840.jpg",
  },
];

// LegendCard Component - Reusable card to display a single legend's details
const LegendCard: React.FC<LegendCardProps> =  ({ name, role, achievements, imgSrc }) => {
  return (
      <div className="bg-white ">
        <div className="flex space-x-4 items-center justify-center pt-4 pb-4 pr-4">
          {/* Wrapper for each card */}
          <div className="flex flex-col  w-[260px] ">
            {/* Image container with fixed height and width */}

            <div className="w-full h-[346px] ">
              <img src={imgSrc} alt={name} className="w-full h-full object-cover" />
            </div>
            {/* Text content with fixed height */}
            <div className="flex flex-col items-start h-[350px] ">
              <h3 className="font-brown-regular text-[18px]  lg:text-[26px] text-[#232323] max-w-[250px] mb-[16px]">{name}</h3>
              <p className="font-brown-regular text-[18px] text-[#232323]">{role}</p>
              <p className="font-brown-regular text-[18px] text-[#232323]">{achievements}</p>
              <a href="#" className="font-brown-bold mt-[22px] text-[18px] text-[#522367] uppercase mt-2 ">
                View Profile
                <span className="block h-[2px] bg-[#522367] w-full mt-1"></span></a>
            </div>
            {/* Profile link */}

          </div>
        </div>
      </div>


  );
};

// LegendCarousel Component - Manages the display of the cards and navigation logic
const LegendCarousel: React.FC<LegendCarouselProps> = ({ legends }) => {
  const [startIndex, setStartIndex] = useState(0);

  // Only show 4 cards at a time
  const visibleCards = legends.slice(startIndex, startIndex + 4);

  const handleNext = () => {
    if (startIndex + 4 < legends.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
      <div className="relative">
        {/* Cards Container */}
        <div className="flex space-x-[18px] bg-white xl:items-center items-start xl:justify-center justify-start overflow-x-auto">
          {visibleCards.map((legend) => (
              <LegendCard
                  key={legend.id}
                  id={legend.id}
                  name={legend.name}
                  role={legend.role}
                  achievements={legend.achievements}
                  imgSrc={legend.imgSrc}
              />
          ))}
        </div>

        {/* Left Arrow */}
        {startIndex > 0 && (
            <button
                onClick={handlePrev}
                className="absolute left-[-25px] top-1/3 transform -translate-y-1/2 bg-white hover:bg-[#522367] text-[#522367] hover:text-white xl:text-[36px] p-2 xl:w-[80px] xl:h-[80px] lg:w-[50px] lg:h-[50px] lg:text-[24px] w-[35px] h-[35px] text-[12px]">
              ←
            </button>
        )}

        {/* Right Arrow */}
        {startIndex + 4 < legends.length && (
            <button
                onClick={handleNext}
                className="absolute right-[-25px] top-1/3 transform -translate-y-1/2 bg-white hover:bg-[#522367] text-[#522367] hover:text-white xl:text-[36px] p-2 xl:w-[80px] xl:h-[80px] lg:w-[50px] lg:h-[50px] lg:text-[24px] w-[35px] h-[35px] text-[12px]">
              →
            </button>
        )}
      </div>
  );
};

// Main Component - Displays the legends page with the carousel
const LegendsPage = () => {
  return (
      <div className="bg-white ">
        <div className="container mx-auto lg:pt-[180px] pt-[70px] lg:mt-[-180px] ">

          {/*<h2 className="text-[30px] lg:text-[60px] text-[#522367] font-brown-bold text-start xl:text-center xl:mr-[440px] mb-8">Play with Legends in 2025</h2>*/}
          {/*<div className="flex items-center justify-center">*/}
          {/*  <p className="text-start xl:text-start xl:max-w-[800px] lg:max-w-[600px] lg:text-[26px] text-[18px] text-[#232323] xl:mr-[370px] lg:mr-[320px] font-brown-light mb-12">*/}
          {/*    Create lifelong golfing memories with exclusive playing experiences in the Legends Experience,Luxe Scot Celebrity Pro-Am and Championship Pro-Am.          </p>*/}
          {/*</div>*/}
          <LegendCarousel legends={legendsData as any} />
        </div>
      </div>
  );
};

export default LegendsPage;


