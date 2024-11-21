// src/components/Rankings/RankingHeader.tsx

import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';

interface RankingHeaderProps {
  year: '2024' | '2023' | '2022';
  setYear: Dispatch<SetStateAction<'2024' | '2023' | '2022'>>;
  category: string;
  setCategory: (category: string) => void;
}

const RankingHeader: React.FC<RankingHeaderProps> = ({ year, setYear, category, setCategory }) => {
  const handleYearChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setYear(event.target.value as '2024' | '2023' | '2022');
  };

  return (
    <div className="flex flex-col py-8 w-full">
      <h2 className="text-6xl w-full py-6 text-left font-bold mb-4 text-custom">Ranking</h2>
      <div className="flex-col gap-4 mb-4">
        <select 
          value={year} 
          onChange={handleYearChange} 
          className="border-r-5 rounded text-2xl px-16 border-1 my-5 py-2"
        >
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>
        <div className="flex">
          <button 
            onClick={() => setCategory('pro')} 
            className={`px-4 py-2 ${category === 'pro' ? 'bg-custom text-2xl text-white' : 'bg-gray-300'}`}
          >
            PRO
          </button>
          <button 
            onClick={() => setCategory('amateur')} 
            className={`px-4 py-2 ${category === 'amateur' ? 'bg-custom text-2xl text-white' : 'bg-gray-300'}`}
          >
            AMATEUR
          </button>
        </div>
      </div>
      <input 
        type="text" 
        placeholder="Search for a player" 
        className="border rounded px-4 py-2 w-80"
      />
    </div>
  );
};

export default RankingHeader;
