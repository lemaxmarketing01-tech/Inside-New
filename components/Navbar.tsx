
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS, CONTACT_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-white text-black shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              {/* Logo Implementation */}
              <div className="relative w-12 h-12 bg-[#F37021] flex items-center justify-center rounded-sm overflow-hidden flex-shrink-0">
                <img 
                  src="logo.png" 
                  alt="Inside Solution Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Fallback if logo.png is missing: Recreate logo look with CSS
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement?.classList.add('flex-col', 'pt-1');
                  }}
                />
                {/* CSS Fallback Icon */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity">
                   <i className="fas fa-mouse text-white text-xs"></i>
                </div>
              </div>
              
              <div className="flex flex-col">
                <span className="text-2xl leading-none">
                  <span className="font-black text-black lowercase">inside</span>
                </span>
                <span className="text-sm font-light tracking-[0.3em] uppercase text-gray-500 -mt-1">
                  SOLUTION
                </span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-2 py-1 text-sm font-bold tracking-tight transition-all border-b-2 ${
                  location.pathname === link.path 
                    ? 'border-[#F37021] text-[#F37021]' 
                    : 'border-transparent text-gray-600 hover:text-black hover:border-black'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
              className="bg-[#F37021] hover:bg-black text-white px-6 py-2.5 rounded-sm font-black text-xs tracking-wider transition-all transform hover:shadow-lg flex items-center gap-2"
            >
              <i className="fas fa-phone-alt"></i>
              CALL US NOW
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 hover:text-[#F37021] p-2"
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-slide-down shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 rounded-md text-base font-bold ${
                  location.pathname === link.path 
                    ? 'text-[#F37021] bg-orange-50' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
              className="block w-full text-center bg-[#F37021] text-white px-3 py-4 rounded-md font-black mt-4"
            >
              CALL US NOW
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
