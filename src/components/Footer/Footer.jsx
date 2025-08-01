import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full questrial-regular">
      {/* Top Row */}
      <div className="flex flex-col  md:flex-row items-center justify-between px-8 py-4 bg-gray-700 border-t">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-4 md:mb-0"> 
          {/* <img
            src="src\assets\images\Colorlogo.png" // Replace with your logo path
            alt="Intelligence Node"
            className="h-10 w-auto"
          /> */}
          <div className='align-center text-white'>
            <span >Report based on primary research: Online survey of 2,018 beauty product buyers across 30 cities in India | © Datum Intelligence, 2025</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 text-white text-xl">
          <a href="https://www.instagram.com/datumintell_in?igsh=MTdnMHp3djNzYmFybA==" aria-label="Instagram"><FaInstagram /></a>
          <a href="https://www.linkedin.com/company/datum-intell/" aria-label="LinkedIn"><FaLinkedinIn /></a>
        </div>
      </div>

      {/* Bottom Bar */}
      {/* <div className="bg-gray-700 text-white px-8 py-4 flex flex-col md:flex-row justify-between items-center text-sm gap-2">
        <div className="flex items-center gap-4">
          <p>© 2025 by Datum</p>
          <p className="hidden sm:inline">hello@datumintell.com</p>
        </div>

        
      </div> */}
    </footer>
  );
}
