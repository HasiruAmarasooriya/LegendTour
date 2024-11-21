import React from 'react';

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  buttonText: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, title, description, buttonText }) => {
  return (
    <div className="bg-white shadow-md overflow-hidden w-full lg:w-[570px] md:w-2/3 h-auto">
      <img src={imageUrl} alt={title} className="w-full h-96 object-cover" />
      <div className="p-6 md:p-9">
        <h2 className="text-xl text-[#232323] font-brown-regular lg:text-[26px] text-[18px]">{title}</h2>
        <p className="mt-4 md:mt-5 text-gray-700 font-brown-regular lg:text-[18px] text-[15px]">{description}</p>
        <button className="mt-6 md:mt-7 bg-[#522367] text-white px-6 py-2 w-full md:w-auto font-brown-bold lg:text-[18px] text-[15px]">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
