import React from 'react';

const OverviewSection = () => {
  return (
    <section className="bg-white text-black py-20 px-4 md:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 tracking-wide relative inline-block">
            Overview
            <span className="block w-16 h-1 bg-blue-600 mt-2 mx-auto rounded-full"></span>
          </h2>
        </div>

        {/* Styled Content */}
        <div className="bg-gray-50 p-8 md:p-12 rounded-lg shadow-md text-justify text-base md:text-lg leading-relaxed space-y-6 border border-gray-200">
          <p>
            Tescon Project began in 1994 with Mr. Rajesh Kumar and a small team, focusing on Bulk Material Handling Systems. With growing success and client trust, it soon evolved into a Pvt. Ltd. company.
          </p>
          <p>
            Today, Tescon Project is an ISO-9001:2008 certified limited company based in New Delhi, with over 100 installations across India. We operate in Power, Energy, and Process Industries.
          </p>
          <p>
            Our expertise includes Coal, Bagasse, and Lignite-fired power plants (1–50 MW), BOP, Bulk Material, and Ash Handling systems. We also offer O&M services for power plants.
          </p>
          <p>
            Tescon provides specialized engineering across Civil, Mechanical, Electrical, Instrumentation, and Environmental sectors for major industrial and utility projects.
          </p>
          <p>
            Backed by a skilled team and modern tech, Tescon is committed to quality, innovation, and efficient project execution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
