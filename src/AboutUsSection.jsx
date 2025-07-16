import React from 'react';

const AboutUsSection = () => {
  return (
    <section className="bg-gradient-to-br from-white to-blue-50 py-20 px-4 md:px-20 text-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div className="w-full md:w-1/2 group relative overflow-hidden rounded-lg shadow-lg">
          <img
            src="/about.png"
            alt="About Tescon"
            className="w-full h-auto object-cover rounded-lg transform group-hover:scale-105 transition duration-500 ease-in-out"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-sm uppercase text-blue-500 tracking-wider font-medium mb-2">
            Who We Are
          </h2>
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-600 mb-6">
            About Tescon Group
          </h1>
          <p className="text-gray-700 text-[16px] leading-relaxed">
            Tescon Group is a leading provider of coal handling systems, ash handling systems,
            biomass handling systems, and aggregate storage plants. Established in 1994 in New
            Delhi, Tescon Group has a proven track record of providing high-quality,
            cost-effective solutions to its customers.
          </p>
          <p className="text-gray-700 text-[16px] leading-relaxed mt-4">
            Our experienced team of engineers and technicians is committed to delivering exceptional
            service. We are a reliable partner for all your coal handling, ash handling, biomass
            handling, and aggregate storage needs—trusted by industries across India.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
