import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import Online_Scams from '../assets/Online_Scams.jpeg';
import Bank_validation_Banner from '../assets/Bank_validation_Banner_.png';
import Settle_Tax_Dispute_Banner from '../assets/Settle_Tax_Dispute_Banner.jpg';

const items = [
  "Form 10AB condonation request under Section 12A is now available for filing on the e-filing portal. Please refer Latest Updates for details.",
  "Form 3CEFC is now available for filing on the e-filing portal. Please refer Latest Updates for details.",
  "Facility for filing updated returns for the AYs 2021-22 and 2022-23 as per Finance Act, 2025 will be provided shortly.",
  "Suggestions for Simplification of Income Tax rules and forms is invited from all stakeholders. Please navigate to Quick links to submit your suggestion.",
  "Notice Inviting Tender (NIT) for selection of Managed Service Provider (MSP) for Insight 2.0. The format of all documents and other details are available with Tender ID:2024_DREV_838109_1 on the https://eprocure.gov.in/eprocure/app. Please refer ‘Latest Updates’ for detailed NIT.",
];

export default function InfoSection() {
  const [isPlayingNotice, setIsPlayingNotice] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(1);
  const [isPlayingBanner, setIsPlayingBanner] = useState(true);

  const images = [
    Online_Scams,
    Bank_validation_Banner,
    Settle_Tax_Dispute_Banner,
  ];

  useEffect(() => {
    let interval;
    if (isPlayingBanner) {
      interval = setInterval(() => {
        setCurrentImage(prev => prev === images.length ? 1 : prev + 1);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlayingBanner, images.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    setIsPlayingNotice(false);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    setIsPlayingNotice(false);
  };

  return (
    <div className="bg-white relative w-full px-4 sm:px-6 lg:px-8">
      {/* Notice Section */}
      <div className="relative">
        <div className="w-full max-w-[860px] h-24 sm:h-30 overflow-hidden border border-green-800 rounded mx-auto my-4 sm:my-6 pl-3 sm:pl-5 pr-10 sm:pr-15 py-2 text-green-700 font-semibold text-xs sm:text-sm" style={{ backgroundColor: '#F2F8F4' }}>
          <div className={`space-y-4 ${isPlayingNotice ? 'animate-marquee' : ''}`}>
            {items.concat(items).map((item, idx) => (
              <div key={idx} className="whitespace-normal">
                <span className="inline-block pr-2">{(idx % items.length) + 1}.</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute right-2 sm:right-4 top-4 sm:top-6 w-5 flex flex-col gap-2 text-[9px] z-10">
          <button onClick={handlePrevious}>
            <FontAwesomeIcon icon={faChevronUp} title="Dropup" color="green" />
          </button>
          <button onClick={() => setIsPlayingNotice(!isPlayingNotice)} className="border rounded-full border-green-800 py-0.5 px-0.5">
            <FontAwesomeIcon icon={isPlayingNotice ? faPause : faPlay} title={isPlayingNotice ? "Pause" : "Resume"} color="green" />
          </button>
          <button onClick={handleNext}>
            <FontAwesomeIcon icon={faChevronDown} title="Dropdown" color="green" />
          </button>
        </div>
      </div>

      {/* Banner Section */}
      <div className="w-full max-w-[858px] h-[150px] sm:h-[200px] lg:h-[250px] mx-auto mb-4 sm:mb-6 bg-white relative">
        <div className="rounded overflow-hidden w-full h-full">
          <img src={images[currentImage - 1]} alt={`Banner ${currentImage}`} className="w-full h-full object-fit-cover" />
        </div>

        <div className="flex justify-center gap-3 mt-2 items-center">
          {[1, 2, 3].map((id) => (
            <button key={id} onClick={() => { setCurrentImage(id); setIsPlayingBanner(false); }} className="hover:cursor-pointer">
              <span className={`text-xs font-bold ${currentImage === id ? 'text-blue-700 border-2 border-blue-800' : 'text-black'}`}>○</span>
            </button>
          ))}
          <button
            onClick={() => setIsPlayingBanner(!isPlayingBanner)}
            className="border-2 px-1.5 py-0.5 rounded-full border-blue-700 text-xs hover:bg-gray-100"
            title={isPlayingBanner ? "Pause Slideshow" : "Play Slideshow"}
          >
            <FontAwesomeIcon icon={isPlayingBanner ? faPause : faPlay} size="xs" color="blue" />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateY(0%); }
          100% { transform: translateY(-50%); }
        }

        .animate-marquee {
          display: flex;
          flex-direction: column;
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
}