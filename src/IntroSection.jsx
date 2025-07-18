import React from 'react';

const IntroSection = () => {
  return (
    <div className="bg-blue-900 py-16 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-white text-2xl md:text-3xl font-semibold leading-relaxed">
          We provide innovative{' '}
          <span className="text-yellow-500 underline underline-offset-4">
            product solutions
          </span>{' '}
          for sustainable progress. Our professional team works to increase productivity and cost effectiveness on the market.
        </h2>
        {/* <h2 className="text-white text-2xl md:text-3xl font-semibold leading-relaxed mt-4">
          professional team works to increase productivity and cost
        </h2>
        <h2 className="text-white text-2xl md:text-3xl font-light leading-relaxed mt-2">
          effectiveness on the market.
        </h2> */}
      </div>
    </div>
  );
};

export default IntroSection;
