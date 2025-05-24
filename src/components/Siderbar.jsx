import React, { useState } from 'react';
import icon_1 from '../assets/icon_1.svg';
import icon_2 from '../assets/icon_2.svg';
import icon_3 from '../assets/icon_3.svg';
import icon_4 from '../assets/icon_4.svg';
import icon_5 from '../assets/icon_5.svg';
import icon_6 from '../assets/icon_6.svg';
import icon_7 from '../assets/icon_7.svg';
import icon_8 from '../assets/icon_8.svg';
import icon_9 from '../assets/icon_9.svg';
import icon_10 from '../assets/icon_10.svg';
import icon_11 from '../assets/icon_11.svg';
import icon_12 from '../assets/icon_12.svg';
import icon_13 from '../assets/icon_13.svg';
import icon_14 from '../assets/icon_14.svg';
import icon_15 from '../assets/icon_15.svg';
import icon_16 from '../assets/icon_16.svg';
import icon_17 from '../assets/icon_17.svg';
import icon_18 from '../assets/icon_18.svg';
import icon_19 from '../assets/icon_19.svg';
import icon_20 from '../assets/icon_20.svg';
import icon_21 from '../assets/icon_21.svg';
import icon_22 from '../assets/icon_22.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="md:hidden fixed top-20 left-4 z-50 text-gray-600"
        onClick={toggleSidebar}
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
      </button>
      <div
        className={`w-full md:w-96 ml-0 md:ml-31 my-6 p-5 h-full transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 fixed md:static bg-[#eeeff6] z-40`}
      >
        <h2 className="text-xl md:text-2xl font-bold mb-4">
          <span className="border-b-4 border-sky-700">Quick</span> Links
        </h2>
        <div className="flex flex-col bg-white text-gray-900 text-sm border-gray-300 border-1 font-semibold max-h-[904px] overflow-y-auto">
          <div className="flex items-center px-3 py-1 border-b-1 border-gray-300 hover:cursor-pointer">
            <img src={icon_1} alt="" className="size-8 md:size-10" />
            <span className="pl-3">
              ➔<span className="text-blue-700 pl-1">e-Pay Tax</span>
            </span>
          </div>
          <div className="flex items-center px-3 py-1 border-b-1 border-gray-300 hover:cursor-pointer">
            <img src={icon_2} alt="" className="size-8 md:size-9" />
            <span className="pl-3 md:pl-6">
              Suggestions for Simplification of IT Rules and Forms{' '}
              <span className="text-blue-700">New</span>
            </span>
          </div>
          <div className="flex items-center px-3 py-1 border-b-1 border-gray-300 hover:cursor-pointer">
            <img src={icon_3} alt="" className="size-8 md:size-9" />
            <span className="pl-3 md:pl-5">DTVSV Scheme of 2024</span>
          </div>
          <div className="flex items-center px-3 py-1 border-b-1 border-gray-300 hover:cursor-pointer">
            <img src={icon_4} alt="" className="size-8 md:size-9" />
            <span className="pl-3 md:pl-5">e-Verify Return</span>
          </div>
          <div className="flex items-center px-3 py-1 border-b-1 border-gray-300 hover:cursor-pointer">
            <img src={icon_5} alt="" className="size-8 md:size-9" />
            <span className="pl-3 md:pl-5">Verify PAN Status</span>
          </div>
          <div className="flex items-center px-3 py-1 border-b-1 border-gray-300 hover:cursor-pointer">
            <img src={icon_6} alt="" className="size-8 md:size-9" />
            <span className="pl-3 md:pl-5">Know Tax Payment Status</span>
          </div>
          <div className="flex items-center px-3 py-1 border-b-1 border-gray-300 hover:cursor-pointer">
            <img src={icon_7} alt="" className="size-8 md:size-9" />
            <span className="pl-3 md:pl-5">Instant E-PAN</span>
          </div>
          <div className="flex items-center px-3 py-1 border-b-1 border-gray-300 hover:cursor-pointer">
            <img src={icon_8} alt="" className="size-8 md:size-9" />
            <span className="pl-3 md:pl-5">Know Your AO</span>
          </div>
          <div className="flex items-center px-3 py-1 border-b-1 border-gray-300 hover:cursor-pointer">
            <img src={icon_22} alt="" className="size-8 md:size-9" />
            <span className="pl-3 md:pl-5">Verify Service Request</span>
          </div>
          <div className="flex items-center px-3 py-1 border-b-1 border-gray-300 hover:cursor-pointer">
            <img src={icon_9} alt="" className="size-8 md:size-9" />
            <span className="pl-3 md:pl-5">Report Account Misuse</span>
          </div>
          <div className="flex items-center px-3 py-1 border-b-1 border-gray-300 hover:cursor-pointer">
            <img src={icon_10} alt="" className="size-8 md:size-9" />
            <span className="pl-3 md:pl-5">Income Tax Calculator</span>
          </div>
          <div className="flex items-center px-3 py-1 border-b-1 border-gray-300 hover:cursor-pointer">
            <img src={icon_11} alt="" className="size-8 md:size-9" />
            <span className="pl-3 md:pl-5">Know TAN Details</span>
          </div>
          <div className="flex items-center px-3 py-1 border-b-1 border-gray-300 hover:cursor-pointer">
            <img src={icon_12} alt="" className="size-8 md:size-9" />
            <span className="pl-3 md:pl-5">Tax Calendar</span>
          </div>
          <div className="flex items-center px-3 py-1 border-b-1 border-gray-300 hover:cursor-pointer">
            <img src={icon_13} alt="" className="size-8 md:size-9" />
            <span className="pl-3 md:pl-5">Tax Information & services</span>
          </div>
          <div className="flex items-center px-3 py-1 border-b-1 border-gray-300 hover:cursor-pointer">
            <img src={icon_14} alt="" className="size-8 md:size-9" />
            <span className="pl-3 md:pl-5">Download CSI File</span>
          </div>
          <div className="flex items-center px-3 py-1 border-b-1 border-gray-300 hover:cursor-pointer">
            <img src={icon_15} alt="" className="size-8 md:size-9" />
            <span className="pl-3 md:pl-5">Know your Refund Status</span>
          </div>
          <div className="flex items-center px-3 py-1 border-b-1 border-gray-300 hover:cursor-pointer">
            <img src={icon_16} alt="" className="size-8 md:size-9" />
            <span className="pl-3 md:pl-5">Comply to Notice</span>
          </div>
          <div className="flex items-center px-3 py-1 border-b-1 border-gray-300 hover:cursor-pointer">
            <img src={icon_17} alt="" className="size-8 md:size-9" />
            <span className="pl-3 md:pl-5">Submit Information on Tax Evasion or Benami Property</span>
          </div>
          <div className="flex items-center px-3 py-1 border-b-1 border-gray-300 hover:cursor-pointer">
            <img src={icon_18} alt="" className="size-8 md:size-9" />
            <span className="pl-3 md:pl-5">Link Aadhaar Status</span>
          </div>
          <div className="flex items-center px-3 py-1 border-b-1 border-gray-300 hover:cursor-pointer">
            <img src={icon_19} alt="" className="size-8 md:size-9" />
            <span className="pl-3 md:pl-5">Link Aadhaar</span>
          </div>
          <div className="flex items-center px-3 py-1 border-b-1 border-gray-300 hover:cursor-pointer">
            <img src={icon_20} alt="" className="size-8 md:size-9" />
            <span className="pl-3 md:pl-5">Authenticate notice/order issued by ITD</span>
          </div>
          <div className="flex items-center px-3 py-1 border-b-1 border-gray-300 hover:cursor-pointer">
            <img src={icon_21} alt="" className="size-8 md:size-9" />
            <span className="pl-3 md:pl-5">TDS On Cash Withdrawal</span>
          </div>
        </div>
      </div>
    </>
  );
}