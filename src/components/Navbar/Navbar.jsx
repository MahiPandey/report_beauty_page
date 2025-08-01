import React from 'react';

export default function Navbar() {
  return (
    <header className="w-full bg-[#9EAEFE] py-4">
      <div className="max-w-7xl questrial-regular mx-auto flex flex-row items-center justify-between px-4 sm:px-8 gap-4">
        
        {/* Logo */}
        <div
          className="w-0 h-0 bg-center bg-contain bg-no-repeat"
        ></div>

        {/* Button */}
        <div className="text-center">
          <a href='https://www.datumintell.com/' className="relative group border border-black rounded-full w-55 px-5 py-2 overflow-hidden transition">
            <span className="relative z-10 text-black text-sm font-bold transition-colors duration-100 group-hover:text-blue-700">
              GO TO HOMEPAGE
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
