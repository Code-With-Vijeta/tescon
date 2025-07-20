import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const AboutUsSection = () => {
  return (
    <section className="flex flex-col lg:flex-row w-full h-full">
      {/* Left Image */}
      <div className="relative w-full lg:w-1/2 h-[500px]">
        <img
          src="/about.webp"
          alt="About Tescon"
          className="w-full h-full object-cover"
        />
        {/* Ribbon */}
        <div className="absolute top-0 left-0 bg-red-600 text-white px-6 py-4 text-center font-semibold shadow-lg">
          <div className="text-xs tracking-widest">AWARDED</div>
          <div className="text-sm font-bold mt-1">INDUSTRY</div>
        </div>
        {/* Vertical Text */}
        <div className="absolute left-0 bottom-6 text-white tracking-widest rotate-[-90deg] origin-left text-sm font-semibold pl-4">
          TESTIMONIAL
        </div>
      </div>

      {/* Right Content */}
      <div className="bg-[#042b4e] text-white w-full lg:w-1/2 py-12 px-8 md:px-16 relative flex flex-col justify-center">
        <FaQuoteLeft className="text-yellow-400 text-4xl mb-4" />
        <h2 className="text-sm uppercase text-yellow-400 tracking-wider font-medium mb-2">
          Who We Are
        </h2>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
          About Tescon Group
        </h1>
        <p className="text-gray-300 text-base leading-relaxed">
          Tescon Group is a leading provider of coal handling systems, ash handling systems,
          biomass handling systems, and aggregate storage plants. Established in 1994 in New
          Delhi, Tescon Group has a proven track record of providing high-quality,
          cost-effective solutions to its customers.
        </p>
        <p className="text-gray-300 text-base leading-relaxed mt-4">
          Our experienced team of engineers and technicians is committed to delivering exceptional
          service. We are a reliable partner for all your coal handling, ash handling, biomass
          handling, and aggregate storage needs—trusted by industries across India.
        </p>


      </div>
    </section>
  );
};

export default AboutUsSection;
