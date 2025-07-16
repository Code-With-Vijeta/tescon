import React from 'react';

const OverviewSection = () => {
  return (
    <section className="bg-white text-black py-20 px-4 md:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue-600 tracking-wide">
          Overview
        </h2>

        {/* Styled Content */}
        <div className="border-l-4 border-blue-600 pl-6 md:pl-10 text-justify text-base md:text-lg leading-relaxed space-y-6">
          <p>
            With a beginning in 1994 as sole proprietorship, Mr. Rajesh Kumar started the operation with a team of 20 to 25 people in the process industry with job contract of Bulk Material Handling System. With the yielded success, soon a Pvt. Ltd. company was formed with satisfied customers willing to place repeat orders.
          </p>
          <p>
            In a short span of 18 years, we have evaluated to start a limited company viz., Tescon Project. We have 100–145 installations to our credit. Nowadays, Tescon Project, an ISO-9001:2008 certified company with its head office in New Delhi, India, is a multi-disciplinary company with diversified interests in Power Energy & Process Industries.
          </p>
          <p>
            We are now executing Coal, Bagasse, Lignite-fired power plants with unit sizes ranging from 1 MW to 50 MW as well as a wide range of products & services including BOP, Bulk Material & Ash Handling Plants. Tescon Project is also a service provider for O&M of power plants in India.
          </p>
          <p>
            We have been rendering specialized engineering services covering all disciplines of Engineering — Civil, Structural, Architectural, Mechanical, Electrical, Electronics, Instrumentation, Controls & Environmental — for various power utilities and industrial projects in India.
          </p>
          <p>
            Since inception, Tescon Project has consistently thrived to promote its resources for better products & services by adapting new technology. Tescon Project has built a highly talented pool of professionals who have put persistent efforts to apply the latest technology, manufacturing capabilities, and project execution skills comparable with the finest in the industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
