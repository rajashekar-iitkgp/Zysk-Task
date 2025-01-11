import React from 'react';

const BasicFeaturesComponent = () => {
  return (
    <div className="text-center mt-5 pt-10 px-4">
      {/* Line 1 - Features in red */}
      <p className="text-red-600 text-xl mb-4">Features</p>

      {/* Line 2 - Analytics in h2 */}
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4 mt-2">
        Analytics that feels like it's from the future..
      </h2>

      {/* Line 3 - Descriptive text with 75% opacity */}
      <p className="text-black opacity-75 text-base sm:text-lg">
        Powerful, self-serve product and growth analytics to help you convert,
        engage, <br className="hidden sm:block" /> and retain more users. Trusted by over 4000 startups.
      </p>
    </div>
  );
};

export default BasicFeaturesComponent;
