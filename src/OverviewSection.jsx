import React from "react";

const OverviewSection = () => {
  return (
    <section className="bg-white text-black py-20 px-4 md:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#042b4e] tracking-wide relative inline-block">
            Overview
            <span className="block w-16 h-1 bg-[#042b4e] mt-2 mx-auto rounded-full"></span>
          </h2>
        </div>

        {/* Styled Content */}
        <div className="bg-gray-50 p-8 md:p-12 rounded-lg shadow-md text-justify text-base md:text-lg leading-relaxed space-y-6 border border-gray-200">
          <p>
            Tescon Engineers, established in 2018, is a wholly-owned subsidiary
            of the renowned Tescon Group, which has been delivering innovative
            and reliable engineering solutions since 1994. While the Tescon
            Group is widely respected for its turnkey expertise in bulk material
            handling and power solutions, Tescon Engineers was launched to focus
            specifically on the design, manufacturing, and supply of critical
            components and equipment for material handling systems in power,
            cement, and process industries.
          </p>
          <p>
            Headquartered in New Delhi, Tescon Engineers has quickly earned a
            reputation for engineering excellence, product reliability, and
            customer-centric service. Our operations are supported by modern
            design tools, quality-controlled manufacturing facilities, and a
            skilled workforce committed to precision and performance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
