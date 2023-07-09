import React, { useState } from 'react';

function Box() {
  const [selectedButton, setSelectedButton] = useState('');

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <div>
      {/* 4 buttons */}
      <div className="cursor-pointer text-center grid gap-2 grid-cols-2 lg:grid-cols-4 mb-3">
        <div
          className={`px-2 py-4 rounded-lg ${
            selectedButton === 'All' ? 'bg-[#eb6270] text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleButtonClick('All')}
        >
          All Lessons
        </div>
        <div
          className={`px-2 py-4 rounded-lg ${
            selectedButton === 'OneByOne' ? 'bg-[#eb6270] text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleButtonClick('OneByOne')}
        >
          One By One
        </div>
        <div
          className={`px-2 py-4 rounded-lg ${
            selectedButton === 'Webinar' ? 'bg-[#eb6270] text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleButtonClick('Webinar')}
        >
          Webinar
        </div>
        <div
          className={`px-2 py-4 rounded-lg ${
            selectedButton === 'VideoScheduling' ? 'bg-[#eb6270] text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleButtonClick('VideoScheduling')}
        >
          Video Scheduling
        </div>
      </div>
    </div>
  );
}

export default Box;
