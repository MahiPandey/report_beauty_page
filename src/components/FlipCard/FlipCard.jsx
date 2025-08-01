import React from 'react';
import './FlipCard.css';

export default function FlipCard({ front, back }) {
  return (
    <div className="flip-card w-full h-60">
      <div className="flip-card-inner">
        <div className="flip-card-front bg-[#f6e7d6] p-4 rounded-xl shadow-xl flex items-center justify-center ">
          <p className="text-2xl font-semibold text-black text-left">{front}</p>
        </div>
        <div className="flip-card-back bg-[#c6714a] p-4 rounded-xl shadow-xl flex items-center justify-center ">
          <p className="text-2xl font-semibold text-white text-left ">{back}</p>
        </div>
      </div>
    </div>
  );
}
