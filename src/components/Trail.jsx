import React from 'react';

const StartFreeTrialComponent = () => {
  return (
    <div className="text-center py-10 bg-gray-50 px-4">
      <h2 className="text-3xl font-semibold mb-4">Start your free trial</h2>
      <p className="text-gray-600 opacity-85 mb-6">
        Join over 4000+ startups already growing with Untitled.
      </p>
      <div className="flex flex-col sm:flex-row justify-center space-x-0 sm:space-x-4">
        <button className="border border-black bg-white text-black px-6 py-2 rounded-md opacity-85 hover:opacity-100 transition-opacity mb-4 sm:mb-0">
          Learn More
        </button>
        <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default StartFreeTrialComponent;
