import React from 'react';
import Hero from './assets/hero.png';
import youtube from './assets/youtube.png';

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-gray-50 py-20 px-4">
      <div className="text-center">
        <p className="text-red-600 text-base mb-2 px-1 py-1 bg-[#E63F3A]/10 text-[#E63F3A] border border-[#E63F3A] rounded-full inline-flex items-center justify-center px-2">
          <span className="bg-white text-md px-2 rounded-[16px] border border-[#E63F3A] inline-flex items-center">
            New feature
          </span>
          <span className="ml-2 flex items-center">
            Check out the team dashboard
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              style={{ color: '#E63F3A' }}
            >
              <path
                fillRule="evenodd"
                d="M4.47 14.53a.75.75 0 010-1.06L8.94 10 4.47 5.53a.75.75 0 111.06-1.06l5 5a.75.75 0 010 1.06l-5 5a.75.75 0 01-1.06 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </p>

        <h3 className="text-black text-3xl font-semibold mb-4">
          Beautiful analytics to grow smarter
        </h3>

        <p className="text-base mb-6 max-w-xl mx-auto text-center">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4000 startups.
        </p>

        <div className="flex gap-4 justify-center mb-6">
          <button
            className="bg-white text-black font-semibold hover:bg-blue-600 transition duration-300 flex items-center justify-center border border-black-100"
            style={{
              width: '99px',
              height: '48px',
              borderRadius: '108px',
              paddingTop: '12px',
              paddingRight: '20px',
              paddingBottom: '12px',
              paddingLeft: '20px',
              gap: '8px',
            }}
          >
            <img src={youtube} alt="youtube-icon" className="w-4 h-4" />
            Demo
          </button>

          <button
            className="bg-red-500 text-white font-semibold hover:bg-red-600 transition duration-300 flex items-center justify-center border border-red-500"
            style={{
              width: '99px',
              height: '48px',
              borderRadius: '108px',
              paddingTop: '12px',
              paddingRight: '20px',
              paddingBottom: '12px',
              paddingLeft: '20px',
              gap: '8px',
            }}
          >
            Sign Up
          </button>
        </div>

        <img
          src={Hero}
          alt="Analytics Dashboard Illustration"
          className="w-full h-auto max-w-[1216px] max-h-[688px] rounded-[11px] mx-auto object-cover"
          style={{
            clipPath: 'inset(0 0 20% 0)',
            WebkitClipPath: 'inset(0 0 20% 0)',
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
