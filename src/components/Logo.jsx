import React from 'react';
import logo1 from './assets/Alphabet.png';
import logo2 from './assets/Chase.png';
import logo3 from './assets/Walmart.png';
import logo4 from './assets/Meta.png';
import logo5 from './assets/ms.png';
import logo6 from './assets/Samsung.png';

const LogoComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center -mt-36">
      <p className="text-sm mb-4">Join 4000+ companies already growing</p>
      <div className="flex flex-wrap justify-center items-center w-full max-w-5xl -mt-6 mx-auto space-x-4 space-y-4 sm:space-y-0">
        <img src={logo1} alt="Company Logo 1" className="w-32 h-24 sm:w-40 sm:h-28" />
        <img src={logo2} alt="Company Logo 2" className="w-32 h-24 sm:w-40 sm:h-28" />
        <img src={logo3} alt="Company Logo 3" className="w-32 h-24 sm:w-40 sm:h-28" />
        <img src={logo4} alt="Company Logo 4" className="w-32 h-24 sm:w-40 sm:h-28" />
        <img src={logo5} alt="Company Logo 5" className="w-32 h-24 sm:w-40 sm:h-28" />
        <img src={logo6} alt="Company Logo 6" className="w-32 h-24 sm:w-40 sm:h-28" />
      </div>
    </div>
  );
};

export default LogoComponent;
