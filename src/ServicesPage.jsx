import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const industries = [
  {
    title:
      "Thermal Power Plants (Coal, Bagasse, and Lignite-based, up to 50 MW)",
    description:
      "Specialized ash and coal handling systems designed to enhance reliability and operational efficiency in small to mid-sized thermal power plants.",
    image: "./services/power.png",
  },
  {
    title: "Cement Manufacturing Plants",
    description:
      "Advanced bulk material systems tailored for the seamless handling of limestone, clinker, and additives critical to continuous cement production.",
    image: "./services/cement.png",
  },
  {
    title: "Process and Chemical Industries",
    description:
      "Engineered solutions for efficient material transfer, supporting complex chemical processes and ensuring safety and precision across production lines.",
    image: "./services/chemical.png",
  },
  {
    title: "Bulk Material Storage & Handling Facilities",
    description:
      "Comprehensive systems for managing and storing ores, minerals, and other bulk materials in mining, warehousing, and transport hubs.",
    image: "./services/storage.png",
  },
  {
    title: "Energy and Utility Sectors",
    description:
      "Robust handling solutions for biomass, coal, and other fuels, supporting efficient operations across energy production and utility infrastructure.",
    image: "./services/energy.png",
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      {/* Hero Section */}
      <div
        className="relative text-white py-20 px-6 text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <div className="absolute inset-0  bg-black/70"></div>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-500">
            Our Services
          </h1>
          <p className="max-w-2xl mx-auto text-lg">
            With our extensive experience and deep technical knowledge, we serve
            a wide range of industrial sectors.
          </p>
        </div>
      </div>

      {/* Industries Section */}
      <div className="bg-white dark:bg-gray-900 py-16 px-6 md:px-20">
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

      {/* Clients Carousel Section */}
      <div className="bg-gray-100 dark:bg-gray-900 py-16 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#042b4e] dark:text-white">
          Our Trusted Clients
        </h2>

        <Slider {...settings} className="max-w-6xl mx-auto">
          {clientLogos.map((client, index) => (
            <div key={index} className="px-4">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex items-center justify-center h-28">
                <img
                  src={client.src}
                  alt={client.name}
                  className="max-h-16 object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>

        <p className="mt-10 text-center text-gray-600 dark:text-gray-300 text-sm max-w-2xl mx-auto">
          We proudly collaborate with top-tier clients across various
          industries, delivering trusted engineering solutions with excellence
          and precision.
        </p>
      </div>

      <div className="bg-gradient-to-br from-[#f7f9fc] to-[#e0e7ff] dark:from-gray-900 dark:to-gray-800 py-20 px-6 md:px-20 text-gray-800 dark:text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#042b4e] dark:text-white">
            Commitment to Quality & Growth
          </h2>
          <div className="relative mt-10 md:mt-16">
            <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl px-8 py-12 md:px-16 md:py-16 transition-all duration-500">
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                Every product we deliver reflects our commitment to{" "}
                <span className="font-semibold text-[#042b4e] dark:text-yellow-400">
                  quality
                </span>
                ,
                <span className="font-semibold text-[#042b4e] dark:text-yellow-400">
                  {" "}
                  performance
                </span>
                , and
                <span className="font-semibold text-[#042b4e] dark:text-yellow-400">
                  {" "}
                  customer satisfaction
                </span>
                . We continuously invest in
                <span className="font-semibold text-[#042b4e] dark:text-yellow-400">
                  {" "}
                  new technologies
                </span>
                ,
                <span className="font-semibold text-[#042b4e] dark:text-yellow-400">
                  {" "}
                  workforce training
                </span>
                , and
                <span className="font-semibold text-[#042b4e] dark:text-yellow-400">
                  {" "}
                  R&D
                </span>{" "}
                to ensure we stay at the forefront of the industry.
              </p>
              <p className="mt-6 text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                Whether for a greenfield project or retrofitting an existing
                plant,
                <span className="font-semibold text-[#042b4e] dark:text-yellow-400">
                  {" "}
                  Tescon Engineers offers reliable,
                </span>
                , project-ready solutions that meet the most demanding
                operational standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
