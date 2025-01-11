import React from 'react';
import logo1 from './assets/africa-user.png';
import logo3 from './assets/china-user.png';
import logo2 from './assets/user.jpg';

const ImageOverlapComponent = () => {
  return (
    <div className="m-10 px-4 sm:px-[80px] bg-[#F9FAFB]">
      <div className="flex flex-col justify-center items-center h-64 space-y-4">
        <div className="relative flex justify-center items-center">
          <img
            src={logo3}
            alt="Image 3"
            className="w-10 h-10 rounded-full border opacity-80 cursor-pointer absolute left-8 -bottom-2"
            style={{ borderWidth: "0.75px" }}
          />
          <img
            src={logo1}
            alt="Image 2"
            className="w-10 h-10 rounded-full border opacity-80 cursor-pointer absolute right-6 -bottom-2"
            style={{ borderWidth: "0.75px" }}
          />
          <img
            src={logo2}
            alt="Image 1"
            className="w-10 h-10 rounded-full border opacity-80 cursor-pointer -top-2"
            style={{ borderWidth: "0.75px" }}
          />
        </div>

        <div className="text-center px-4">
          <h2 className="text-lg font-bold">Still have questions?</h2>
          <p className="text-gray-600 opacity-85 mt-2">
            Can't find the answer you're looking for? Please chat to our friendly team.
          </p>
        </div>

        <div className="pt-4">
          <button className="bg-red-600 text-white px-6 py-2 rounded">
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageOverlapComponent;
