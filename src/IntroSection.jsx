import React from 'react';

const IntroSection = () => {
  return (
    <div className="relative py-20 px-6 md:px-20 bg-gradient-to-r from-[#042b4e] to-[#06406e] text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10 bg-[url('/vision.png')] bg-cover bg-center pointer-events-none"></div>

      {/* Main Intro Text */}
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-white text-2xl md:text-3xl font-semibold leading-relaxed">
          We provide innovative{' '}
          <span className="text-yellow-500 underline underline-offset-4">
            product solutions
          </span>{' '}
          for sustainable progress. Our professional team works to increase productivity and cost effectiveness on the market.
        </h2>
      </div>

    </div>
  );
};

export default IntroSection;
