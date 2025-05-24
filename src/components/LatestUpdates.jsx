import React from 'react';

export default function LatestUpdates() {
  return (
    <div className="w-full max-w-[860px] bg-white mx-auto mt-4 sm:mt-5.5 mb-3 px-4 sm:px-6 lg:px-8">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 pb-1 mb-5">
        <span className="border-b-4 border-sky-700 pb-1">Lates</span>t Updates
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        <div className="border border-gray-300 px-4 sm:px-6 pt-3 pb-8 rounded-lg hover:cursor-pointer">
          <p className="text-xs sm:text-sm font-semibold text-gray-600">
            Date: 17-Apr-2025 <span className="text-blue-600 text-xs border rounded border-gray-300 bg-blue-100 p-1 ml-2 sm:ml-4">News</span>
          </p>
          <p className="text-black text-sm sm:text-[15px] font-semibold pt-3 hover:text-blue-800">
            Form 10AB condonation request for Section 12A is now avai...
          </p>
        </div>
        <div className="border border-gray-300 px-4 sm:px-6 pt-3 pb-8 rounded-lg hover:cursor-pointer">
          <p className="text-xs sm:text-sm font-semibold text-gray-600">
            Date: 30-Mar-2025 <span className="text-green-600 text-xs border rounded border-gray-300 bg-green-100 p-1 ml-2 sm:ml-4">e-Campaign</span>
          </p>
          <p className="text-black text-sm sm:text-[15px] font-semibold pt-3 hover:text-blue-800">
            File your Updated Return for A.Y.2022-23
          </p>
        </div>
        <div className="border border-gray-300 px-4 sm:px-6 pt-3 pb-8 rounded-lg hover:cursor-pointer">
          <p className="text-xs sm:text-sm font-semibold text-gray-600">
            Date: 02-Apr-2025 <span className="text-blue-600 text-xs border rounded border-gray-300 bg-blue-100 p-1 ml-2 sm:ml-4">News</span>
          </p>
          <p className="text-black text-sm sm:text-[15px] font-semibold pt-3 hover:text-blue-800">
            Form 3CEFC (Application for opting for safe harbour for i...
          </p>
        </div>
        <div className="border border-gray-300 px-4 sm:px-6 pt-3 pb-8 rounded-lg hover:cursor-pointer">
          <p className="text-xs sm:text-sm font-semibold text-gray-600">
            Date: 30-Mar-2025 <span className="text-green-600 text-xs border rounded border-gray-300 bg-green-100 p-1 ml-2 sm:ml-4">e-Campaign</span>
          </p>
          <p className="text-black text-sm sm:text-[15px] font-semibold pt-3 hover:text-blue-800">
            File your Updated Return for A.Y.2023-24
          </p>
        </div>
      </div>
      <button className="text-blue-600 text-xs sm:text-sm font-semibold mt-4 hover:underline block mx-auto sm:ml-auto">View All ➔</button>
    </div>
  );
}