import React, { useState } from 'react';
import Screenshot_1 from '../assets/Screenshot_1.png';
import FraudAware from '../assets/FraudAware.png';
import Phishing from '../assets/Phishing.png';
import pdf from '../assets/pdf.svg';

export default function ThingsToKnow() {
  const [activeTab, setActiveTab] = useState('how-to-videos');

  const tabs = {
    'how-to-videos': [
      { title: "Benefits to Senior and Super Senior Citizen under Income Tax 🔗", image: Screenshot_1 },
      { title: "Old Vs New Tax Regime (Part 1) 🔗", image: Screenshot_1 },
      { title: "Old Vs New Tax Regime (Part 3) 🔗", image: Screenshot_1 },
      { title: "Updated Income Tax Return (ITR U) 🔗", image: Screenshot_1 },
    ],
    'awareness-videos': [
      { title: "Do not get lured by phishing! 🔗", image: FraudAware },
      { title: "Got a email/SMS from ITD 🔗", image: Phishing },
    ],
    'brochures': [
      { title: "ABC of Tax", image: pdf },
      { title: "e-Filing Portal", image: pdf },
      { title: "File Grievances & respond to e-proceedings", image: pdf },
      { title: "e-file Returns", image: pdf },
    ],
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full max-w-[860px] bg-white mx-auto mb-4 sm:mb-6 px-4 sm:px-6 lg:px-8">
      <h2 className="text-xl sm:text-2xl font-bold pb-1 mb-5">
        <span className="border-b-4 border-sky-700 pb-1">Thing</span>s To Know
      </h2>
      <div className="flex flex-col sm:flex-row mb-5 gap-2 sm:gap-0">
        <button
          onClick={() => handleTabClick('how-to-videos')}
          className={`text-sm sm:text-md font-semibold hover:cursor-pointer hover:text-blue-600 px-2 sm:px-3.5 py-2 sm:py-4 ${
            activeTab === 'how-to-videos' ? 'text-blue-600 border-2 sm:border-3 border-blue-700' : 'text-gray-600'
          }`}
        >
          How To ...Videos
        </button>
        <button
          onClick={() => handleTabClick('awareness-videos')}
          className={`text-sm sm:text-md font-semibold hover:cursor-pointer hover:text-blue-600 px-2 sm:px-3.5 py-2 sm:py-4 ${
            activeTab === 'awareness-videos' ? 'text-blue-600 border-2 sm:border-3 border-blue-700' : 'text-gray-600'
          }`}
        >
          Awareness Videos
        </button>
        <button
          onClick={() => handleTabClick('brochures')}
          className={`text-sm sm:text-md font-semibold hover:cursor-pointer hover:text-blue-600 px-2 sm:px-3.5 py-2 sm:py-4 ${
            activeTab === 'brochures' ? 'text-blue-600 border-2 sm:border-3 border-blue-700' : 'text-gray-600'
          }`}
        >
          Brochures
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-300">
        {tabs[activeTab].map((item, index) => (
          <div key={index} className="flex border border-transparent items-center">
            <img src={item.image} alt={item.title} className="w-16 sm:w-22 h-12 sm:h-17 rounded object-cover" />
            <p className="text-sm sm:text-base font-semibold border-b border-transparent mx-4 sm:mx-6 hover:cursor-pointer hover:border-blue-700 hover:border-b-2 hover:text-blue-600">
              {item.title}
            </p>
          </div>
        ))}
      </div>
      <button className="text-blue-600 text-xs sm:text-sm font-semibold mt-4 hover:underline block mx-auto sm:ml-auto">View All ➔</button>
    </div>
  );
}