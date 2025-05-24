import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaYoutube } from 'react-icons/fa';
import { FaXTwitter, FaChevronUp } from 'react-icons/fa6';
import india from '../assets/india.svg';

export default function Footer() {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="bg-[#181f3a] text-white pt-10 sm:pt-15 pb-8 sm:pb-10">
      {/* Top Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
        {/* About Us */}
        <div>
          <h3 className="font-bold mb-3 text-base sm:text-lg">About Us</h3>
          <ul className="space-y-1 text-xs sm:text-sm font-semibold text-gray-400">
            <li className="hover:cursor-pointer hover:text-fuchsia-100">About the Portal</li>
            <li className="hover:cursor-pointer hover:text-fuchsia-100">History of Direct Taxation</li>
            <li className="hover:cursor-pointer hover:text-fuchsia-100">Vision, Mission, Values</li>
            <li className="hover:cursor-pointer hover:text-fuchsia-100">Vision, Mission, Values (Hindi)</li>
            <li className="hover:cursor-pointer hover:text-fuchsia-100">Who We Are</li>
            <li className="hover:cursor-pointer hover:text-fuchsia-100">Right to Information</li>
            <li className="hover:cursor-pointer hover:text-fuchsia-100">Organization & Functions</li>
            <li className="hover:cursor-pointer hover:text-fuchsia-100">Media Reports</li>
            <li className="hover:cursor-pointer hover:text-fuchsia-100">e-Filing Calendar 2023</li>
            <li className="hover:cursor-pointer hover:text-fuchsia-100">Tax Payer Charter</li>
            <li className="hover:cursor-pointer hover:text-fuchsia-100">Tax Payer Charter (Hindi)</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-bold mb-3 text-base sm:text-lg">Contact Us</h3>
          <ul className="space-y-1 text-xs sm:text-sm font-semibold text-gray-400">
            <li className="hover:cursor-pointer hover:text-fuchsia-100">Helpdesk Numbers</li>
            <li className="hover:cursor-pointer hover:text-fuchsia-100">Grievances</li>
            <li className="hover:cursor-pointer hover:text-fuchsia-100">View Grievance</li>
            <li className="hover:cursor-pointer hover:text-fuchsia-100">Help</li>
          </ul>
        </div>

        {/* Using the Portal */}
        <div>
          <h3 className="font-bold mb-3 text-base sm:text-lg">Using the Portal</h3>
          <ul className="space-y-1 text-xs sm:text-sm font-semibold text-gray-400">
            <li className="hover:cursor-pointer hover:text-fuchsia-100">Website Policies</li>
            <li className="hover:cursor-pointer hover:text-fuchsia-100">Accessibility Statement</li>
            <li className="hover:cursor-pointer hover:text-fuchsia-100">Site Map</li>
            <li className="hover:cursor-pointer hover:text-fuchsia-100">Browser Support</li>
          </ul>
        </div>

        {/* Related Sites */}
        <div>
          <h3 className="font-bold mb-3 text-base sm:text-lg">Related Sites</h3>
          <ul className="space-y-1 text-xs sm:text-sm font-semibold text-gray-400">
            <li className="hover:cursor-pointer hover:text-fuchsia-100">Income Tax India</li>
            <li className="hover:cursor-pointer hover:text-fuchsia-100">Protean (previously NSDL)🔗</li>
            <li className="hover:cursor-pointer hover:text-fuchsia-100">TRACES</li>
          </ul>
        </div>

        {/* Social Media Handles */}
        <div className="font-semibold flex items-center gap-4 mt-5 sm:col-span-2 md:col-span-4">
          <span className="text-xs sm:text-sm">Follow us on :</span>
          <button className="border border-gray-600 hover:bg-red-600 p-1.5 rounded hover:cursor-pointer">
            <FaYoutube size={14} />
          </button>
          <button className="border border-gray-600 hover:bg-gray-900 p-1.5 rounded hover:cursor-pointer">
            <FaXTwitter size={14} />
          </button>
          <button className="border border-gray-600 hover:bg-sky-700 p-1.5 rounded hover:cursor-pointer">
            <FaFacebookF size={14} />
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-6 sm:mt-8 border-t border-gray-600 pt-5 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-5">
          <img src={india} alt="India Logo" className="h-8 sm:h-11 hover:cursor-pointer" />
        </div>
        <div className="mt-4 sm:mt-6 text-end text-xs sm:text-sm font-semibold text-gray-400">
          <p>Last reviewed and updated on : {formattedDate}</p>
          <p className="mt-1">
            This site is best viewed in 1024 × 768 resolution with latest version
            of Chrome, Firefox, Safari and Microsoft Edge.
          </p>
          <p className="mt-1">
            Copyright @ Income Tax Management System, Ministry of Finance, Government of
            India. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-10 sm:bottom-14 right-3 sm:right-5 text-sm text-white bg-blue-900 shadow-lg border-transparent rounded p-1 hover:cursor-pointer transition duration-300 z-50"
          aria-label="Scroll to Top"
        >
          <FaChevronUp size={14} />
        </button>
      )}
    </footer>
  );
}