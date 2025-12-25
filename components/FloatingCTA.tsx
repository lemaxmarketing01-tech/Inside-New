
import React from 'react';
import { CONTACT_INFO } from '../constants';

const FloatingCTA: React.FC = () => {
  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3">
      <a 
        href={`https://wa.me/${CONTACT_INFO.phone.replace(/[^0-9]/g, '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 group relative"
      >
        <i className="fab fa-whatsapp text-2xl"></i>
        <span className="absolute left-16 bg-black text-white text-xs py-1 px-3 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
};

export default FloatingCTA;
