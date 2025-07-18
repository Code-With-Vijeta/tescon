import React from "react";

const industries = [
  {
    title: "Power Plants",
    description:
      "Robust systems designed for coal handling, ash management, and more to improve power generation efficiency.",
    image: "./services/power.png",
  },
  {
    title: "Cement Industry",
    description:
      "Precision equipment for handling limestone, clinker, and other raw materials for continuous cement production.",
    image: "./services/cement.png",
  },
  {
    title: "Steel Plants",
    description:
      "High-durability handling systems for ore, coke, and slag to optimize operations in steel manufacturing.",
    image: "./services/steel.png",
  },
  {
    title: "Mining Industry",
    description:
      "Customized material handling for ores and minerals, ensuring safety and efficiency in mining processes.",
    image: "./services/mining.png",
  },
  {
    title: "Ports & Terminals",
    description:
      "Bulk material transfer solutions for smooth operations in shipping terminals and port logistics.",
    image: "./services/port.png",
  },
];

const clientLogos = [
  { name: "shakumbri", src: "./clients/shakumbri.png" },
  { name: "shantha", src: "./clients/shantha.png" },
  { name: "shreeji", src: "./clients/shreeji.png" },
  { name: "lakshmi", src: "./clients/lakshmi.png" },
  { name: "shripur", src: "./clients/shripur.png" },
  { name: "sukhbir", src: "./clients/sukhbir.png" },
  { name: "tinplate", src: "./clients/tinplate.png" },
  { name: "transtech", src: "./clients/transtech.png" },
  { name: "universal", src: "./clients/universal.png" },
  { name: "mineral", src: "./clients/mineral.png" },
];

const Services = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      {/* Hero Section */}
      <div className="bg-[#042b4e] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-500">
          Our Services
        </h1>
        <p className="max-w-2xl mx-auto text-lg">
          With our extensive experience and deep technical knowledge, we serve a
          wide range of industrial sectors.
        </p>
      </div>

      {/* Industries Section */}
      <div className="bg-white dark:bg-gray-900 py-16 px-6 md:px-20">
        {/* <h2 className="text-4xl font-bold text-center mb-14 text-[#042b4e] dark:text-white">
          Industries We Serve
        </h2> */}

        <div className="space-y-16">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <img
                src={industry.image}
                alt={industry.title}
                className="w-full md:w-1/2 h-64 object-contain"
              />
              <div className="md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl font-semibold mb-3 text-[#042b4e] dark:text-yellow-400">
                  {industry.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Clients Section */}
      <div className="bg-gray-100 dark:bg-gray-900 py-16 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#042b4e] dark:text-white">
          Our Trusted Clients
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 items-center justify-center max-w-6xl mx-auto">
          {clientLogos.map((client, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 flex items-center justify-center h-28"
            >
              <img
                src={client.src}
                alt={client.name}
                className="max-h-16 object-contain transition duration-300"
              />
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-gray-600 dark:text-gray-300 text-sm max-w-2xl mx-auto">
          We proudly collaborate with top-tier clients across various
          industries, delivering trusted engineering solutions with excellence
          and precision.
        </p>
      </div>
    </div>
  );
};

export default Services;
