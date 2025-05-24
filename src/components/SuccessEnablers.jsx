import React, { useState, useEffect, useRef } from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

export default function SuccessEnablers() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef(null);

  const testimonials = [
    {
      content: "@IncomeTaxIndia Sir/Mam \nI and my wife want to appreciate the professionalism and helpfulness of your staffs and IT officers we got in touch with last month due to our TDS rectification. All the actions are very prompt, fast and professional.\n\nITO Pune, TDS Tumkur, TDS Gangtok",
      date: "12-May-2025",
    },
    {
      content: "@IncomeTaxIndia Thank you very much, I received callback from your team and your executive has been kind enough to guide me through the process very patiently, I submitted the rectificetion certificate request and will wait to see if it gets closed. I appreciate your assistance.",
      date: "13-May-2025",
    },
    {
      content: "Heartfelt thanks to the respected @IncomeTaxIndia for their prompt communication and support in the ITR process. Received my intimation mail from CPC today, and the refund was credited within 30 min! Truly appreciate the smooth and efficient service. #IncomeTax #ITR #Gratitude",
      date: "16-May-2025",
    },
    {
      content: "@IncomeTaxIndia @nsitharamanoffc @officeofPCM @FinMinIndia @PIB_India @MIB_India This initiative is awesome @IncomeTaxIndia, New filers would love this👍🫰",
      date: "16-May-2025",
    },
    {
      content: "@IncomeTaxIndia @FinMinIndia @nsitharaman @PMOIndia Yes dear Sir/Ma'am. And my issue got resolved as well. Thank you so much for your prompt action and helping me out.",
      date: "17-May-2025",
    },
  ];

  const startInterval = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
  };

  const stopInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    if (isPlaying) {
      startInterval();
    } else {
      stopInterval();
    }
    return () => stopInterval();
  }, [isPlaying]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setIsPlaying(false);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-full max-w-[850px] bg-white mx-auto mt-4 sm:mt-5.5 mb-4 sm:mb-7 px-4 sm:px-8">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 pb-1 mb-5">
        <span className="border-b-4 border-sky-700 pb-1">Our </span> Success Enablers
      </h2>
      <div className="border-b border-gray-300">
        <button className="text-sm sm:text-md font-semibold hover:cursor-pointer text-blue-600 border-2 sm:border-3 px-2 sm:px-3.5 py-2 sm:py-4 mb-4">
          Taxpayer Voices
        </button>
        <button className="text-sm sm:text-md font-semibold text-gray-600 px-2 sm:px-3.5 py-2 sm:py-4 hover:cursor-pointer hover:text-blue-600">
          Statistics
        </button>
      </div>
      <div className="relative w-full">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`px-2 pt-8 py-4 italic text-gray-500 text-sm sm:text-md font-medium transition-opacity duration-500 ${
              currentIndex === index ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'
            }`}
          >
            <p style={{ whiteSpace: 'pre-line' }}>{testimonial.content}</p>
            <div className="flex w-25 justify-between items-end my-4 text-xs">
              <FaXTwitter size={16} />
              <span>{testimonial.date}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-start gap-2 items-center">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className="focus:outline-none"
          >
            <span
              className={`text-xs font-bold ${
                currentIndex === index ? 'text-blue-700' : 'text-black'
              } hover:text-blue-700`}
            >
              ○
            </span>
          </button>
        ))}
        <button
          onClick={togglePlayPause}
          className="ml-2 p-1 hover:cursor-pointer focus:outline-none"
          title={isPlaying ? 'Pause' : 'Resume'}
        >
          <FontAwesomeIcon
            icon={isPlaying ? faPause : faPlay}
            size="xs"
            color="blue"
          />
        </button>
      </div>
    </div>
  );
}