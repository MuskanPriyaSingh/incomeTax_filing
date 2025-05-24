import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.svg';
import search from '../assets/search.svg';
import dark_mode from '../assets/dark_mode.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faPhone, faGlobe, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Top Navbar */}
      <div className="bg-white border-b border-transparent flex justify-between items-center py-4 px-4 sm:px-6 lg:px-30 fixed top-0 left-0 w-full z-50">
        <div>
          <img src={logo} alt="Logo" className="h-8 hover:cursor-pointer" />
        </div>
        <div className="flex items-center">
          <div className="hidden md:flex gap-2 items-center">
            <span className="text-gray-600 text-sm font-semibold hover:cursor-pointer">
              <FontAwesomeIcon icon={faPhone} /> Call Us <FontAwesomeIcon icon={faChevronDown} className="size-2" />
            </span>
            <span className="text-gray-300 mx-2 text-2xl">|</span>
            <span className="text-gray-600 text-sm font-semibold hover:cursor-pointer">
              <FontAwesomeIcon icon={faGlobe} /> English <FontAwesomeIcon icon={faChevronDown} className="size-2" />
            </span>
            <span className="text-gray-300 mx-2 text-2xl">|</span>
            <span className="font-semibold text-gray-600 hover:cursor-pointer">A<sup className="font-bold text-base">-</sup></span>
            <span className="font-semibold text-white bg-blue-500 rounded m-2 p-0.5 hover:cursor-pointer">A</span>
            <span className="font-semibold text-gray-600 hover:cursor-pointer">A<sup className="font-bold text-base">+</sup></span>
            <span className="text-gray-300 mx-2 text-2xl">|</span>
            <img src={dark_mode} alt="Dark Mode" className="hover:cursor-pointer" />
            <span className="text-gray-300 mx-2 text-2xl">|</span>
            <button style={{ color: '#29398D' }} className="px-3 py-1 text-sm font-semibold border rounded hover:cursor-pointer hover:bg-gray-200">Login</button>
            <button style={{ backgroundColor: '#29398D' }} className="px-3 py-1 text-white text-sm font-semibold rounded hover:cursor-pointer">Register</button>
          </div>
          <button className="md:hidden text-gray-600" onClick={toggleMenu}>
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-300 px-4 py-4 fixed top-16 left-0 w-full z-50">
          <div className="flex flex-col gap-4">
            <span className="text-gray-600 text-sm font-semibold hover:cursor-pointer">
              <FontAwesomeIcon icon={faPhone} /> Call Us <FontAwesomeIcon icon={faChevronDown} className="size-2" />
            </span>
            <span className="text-gray-600 text-sm font-semibold hover:cursor-pointer">
              <FontAwesomeIcon icon={faGlobe} /> English <FontAwesomeIcon icon={faChevronDown} className="size-2" />
            </span>
            <div className="flex gap-2">
              <span className="font-semibold text-gray-600 hover:cursor-pointer">A<sup className="font-bold text-base">-</sup></span>
              <span className="font-semibold text-white bg-blue-500 rounded m-2 p-0.5 hover:cursor-pointer">A</span>
              <span className="font-semibold text-gray-600 hover:cursor-pointer">A<sup className="font-bold text-base">+</sup></span>
            </div>
            <img src={dark_mode} alt="Dark Mode" className="hover:cursor-pointer w-6" />
            <button style={{ color: '#29398D' }} className="px-3 py-1 text-sm font-semibold border rounded hover:cursor-pointer hover:bg-gray-200">Login</button>
            <button style={{ backgroundColor: '#29398D' }} className="px-3 py-1 text-white text-sm font-semibold rounded hover:cursor-pointer">Register</button>
          </div>
        </div>
      )}

      {/* Header Navigation */}
      <div
        style={{ backgroundColor: '#29398D' }}
        className={`transition-all duration-300 ease-in-out ${
          showHeader ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
        } bg-blue-900 text-white px-4 sm:px-6 lg:px-30 flex flex-col md:flex-row md:items-center text-sm z-40 relative mt-16 md:mt-20`}
      >
        <div className="flex flex-col md:flex-row md:gap-12 py-3">
          <span className="font-semibold border-b-3 border-transparent hover:cursor-pointer hover:border-white py-2">Home</span>
          <span className="font-semibold border-b-3 border-transparent hover:cursor-pointer hover:border-white py-2">
            Individual/HUF <FontAwesomeIcon icon={faChevronDown} className="white size-2" />
          </span>
          <span className="font-semibold border-b-3 border-transparent hover:cursor-pointer hover:border-white py-2">
            Company <FontAwesomeIcon icon={faChevronDown} className="white size-2" />
          </span>
          <span className="font-semibold border-b-3 border-transparent hover:cursor-pointer hover:border-white py-2">
            Non-Company <FontAwesomeIcon icon={faChevronDown} className="white size-2" />
          </span>
          <span className="font-semibold border-b-3 border-transparent hover:cursor-pointer hover:border-white py-2">
            Tax Professionals & Others <FontAwesomeIcon icon={faChevronDown} className="white size-2" />
          </span>
          <span className="font-semibold border-b-3 border-transparent hover:cursor-pointer hover:border-white py-2">Downloads</span>
          <span className="font-semibold border-b-3 border-transparent hover:cursor-pointer hover:border-white py-2">Help</span>
        </div>
        <button className="bg-blue-600 md:ml-auto my-1.5 rounded px-1.5 py-1 hover:cursor-pointer">
          <img src={search} alt="Search" />
        </button>
      </div>
    </div>
  );
}