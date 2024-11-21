import React from "react";

const images = [
  "/img/partners/rolex.png", // Image 1
  "/img/partners/european-tour-new.png", // Image 2
  "/img/partners/staysure.png", // Image 3
  "/img/partners/titleist_1ballingolf.png", // Image 4
  "/img/partners/sky-caddie.png", // Image 5
  "/img/partners/Glenmuir.png", // Image 6
  "/img/partners/Sunderland.png", // Image 7
  "/img/partners/OFX.png", // Image 8
  "/img/partners/luxe-scot.png", // Image 9
  "/img/partners/eagle-rare.png", // Image 10
];

const Partners: React.FC = () => {
  return (
    <div className="bg-white text-black py-16 overflow-hidden">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-10 text-[#232323] bg-[#ffffff]">Our Partners</h1>
        {/* Desktop view */}
        <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {images.map((image, index) => (
            <div key={index} className="p-1">
              <img
                src={image}
                alt={`Partner ${index + 1}`}
                className="max-w-full h-auto"
              />
            </div>
          ))}
        </div>
        {/* Mobile view */}
        <div className="sm:hidden grid grid-cols-2 gap-4">
          {images.map((image, index) => (
            <div key={index} className="p-1">
              <img
                src={image}
                alt={`Partner ${index + 1}`}
                className="max-w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
