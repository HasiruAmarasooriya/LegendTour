import React from 'react';

const LegendsTourCard: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#f2f2f2] ">
      <div className="border-b-2 pb-10 md:pb-[100px] border-gray-300 px-4 md:px-10 ">
        {/* First Card */}
        <div className="max-w-full lg:max-w-[1500px] md:max-w-[1200px] xl:max-w-[1200px] mx-auto bg-white mb-10 md:mb-[80px] relative">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:max-w-[41.66667%]">
              <img
                className="object-cover h-64 md:h-[400px] lg:min-h-[614px] w-full"
                src="/img/Join/FaldoPublicSpeaking.jpg"
                alt="Legends Membership"
              />
            </div>
            <div className="py-8 px-6 md:py-[35px] md:px-[50px] flex flex-col justify-center lg:max-w-[58.33333%]">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">My Legends Membership</h2>
              <p className="font-semibold mb-4">My Legends Membership benefits include:</p>
              <ul className="list-disc pl-5 mb-8">
                <li className="mb-2 md:mb-4">Discount on travel insurance with Staysure (T&Cs apply)</li>
                <li className="mb-2 md:mb-4">Discount on Legends Tour and DP World Tour tickets</li>
                <li className="mb-2 md:mb-4">Exclusive content from Legends and Celebrities</li>
                <li className="mb-2 md:mb-4">Competitions and Partner offers</li>
                <li className="mb-2 md:mb-4">Discounts on green fees</li>
              </ul>
              <p className="font-bold mb-6 md:mb-10">Free</p>
              <div className="text-left">
                <button className="px-4 py-3 md:px-6 md:py-4 bg-[#3B194A] text-white text-sm md:text-base sm:text-lg font-bold leading-relaxed">FIND OUT MORE</button>
              </div>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="max-w-full md:max-w-[1200px] mx-auto bg-white mb-10 md:mb-[80px] relative">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:max-w-[41.66667%]">
              <img
                className="object-cover h-64 md:h-[400px] lg:min-h-[740px] w-full"
                src="/img/Join/McGinleyQA.jpg"
                alt="Legends Membership"
              />
            </div>
            <div className="py-8 px-6 md:py-[35px] md:px-[50px] flex flex-col justify-center lg:max-w-[58.33333%]">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Legends Club Membership</h2>
              <p className="font-semibold mb-4">A premium golf experience consisting of a small group of like-minded golf fans, playing in number of Legends Tour events, including:</p>
              <ul className="list-disc pl-5 mb-8">
                <li className="mb-2 md:mb-4">Play multiple Legends Tour Experience events from the flagship Staysure PGA Seniors Championship to the enigmatic Irish Legends</li>
                <li className="mb-2 md:mb-4">Priority access to other Legends Tour events across the globe (additional costs apply)</li>
                <li className="mb-2 md:mb-4">Play with former Ryder Cup Captains and Major winners</li>
                <li className="mb-2 md:mb-4">Concierge service to create bespoke itineraries and exclusive experiences</li>
                <li className="mb-2 md:mb-4">Off-course events and dinners with the Legends</li>
              </ul>
              <p className="font-bold mb-6 md:mb-10">POA</p>
              <div className="text-left">
                <button className="px-4 py-3 md:px-6 md:py-4 bg-[#3B194A] text-white text-sm md:text-base sm:text-lg font-bold leading-relaxed">FIND OUT MORE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegendsTourCard;
