import React from "react";
import Slider from "react-slick";
import {
  FaCog,
  FaCogs,
  FaArrowAltCircleUp,
  FaWrench,
  FaTools,
  FaBoxes,
} from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const services = [
  {
    icon: <FaCog className="text-3xl text-white" />,
    title: "Conveyor Pulleys",
    desc: "Tailor-made for durability and smooth operation.",
  },
  {
    icon: <FaCogs className="text-3xl text-white" />,
    title: "Carrying & Return Rollers",
    desc: "Designed for long service life in harsh conditions.",
  },
  {
    icon: <FaBoxes className="text-3xl text-white" />,
    title: "Material Handling Buckets",
    desc: "Suitable for bucket elevators and other systems.",
  },
  {
    icon: <FaArrowAltCircleUp className="text-3xl text-white" />,
    title: "Bucket Elevators",
    desc: "For vertical lifting of granular and powdered materials.",
  },
  {
    icon: <FaWrench className="text-3xl text-white" />,
    title: "Screw Conveyors",
    desc: "Customized for ash, coal, and similar materials.",
  },
  {
    icon: <FaTools className="text-3xl text-white" />,
    title: "Special Fabricated Components",
    desc: "Built to project-specific requirements.",
  },
];

const AboutUs = () => {
  const sliderSettings = {
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
            About Tescon Engineers
          </h1>
          <p className="max-w-2xl mx-auto text-lg">
            We specialize in Ash & Coal Handling and Storage Systems, offering
            cutting-edge material handling solutions that prioritize efficiency
            and minimal downtime.
          </p>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="px-6 md:px-20 py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <h2 className="text-4xl font-bold text-center text-[#042b4e] dark:text-yellow-400 mb-16 relative">
          <span className="relative z-10">What We Do</span>
          <span className="absolute w-16 h-1 bg-yellow-400 left-1/2 -translate-x-1/2 -bottom-3"></span>
        </h2>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-10 rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-[#042b4e] text-white flex items-center justify-center rounded-full shadow-lg text-3xl">
                {service.icon}
              </div>

              <div className="mt-12 text-center">
                <h3 className="text-xl font-semibold text-[#042b4e] dark:text-yellow-400 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center max-w-3xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed">
          At{" "}
          <span className="font-semibold text-[#042b4e] dark:text-yellow-400">
            Tescon Engineers
          </span>
          , we engineer tailored material handling solutions to boost your
          productivity while cutting operational costs.
        </div>
      </div>

      {/* Our Vision Section */}
      <div className="relative py-20 px-6 md:px-20 bg-gradient-to-r from-[#042b4e] to-[#06406e] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/vision.png')] bg-cover bg-center pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-yellow-400">
            Our Vision
          </h2>
          <p className="text-lg md:text-xl leading-relaxed tracking-wide">
            At{" "}
            <span className="font-semibold text-yellow-300">
              Tescon Engineers
            </span>
            , our vision is to become a{" "}
            <span className="italic text-white underline underline-offset-4">
              leading name in India and globally
            </span>{" "}
            for precision-engineered components and systems for{" "}
            <span className="font-medium text-white">
              bulk material handling
            </span>
            . We aim to drive innovation in{" "}
            <span className="text-yellow-200">mechanical design</span>,{" "}
            <span className="text-yellow-200">operational efficiency</span>, and{" "}
            <span className="text-yellow-200">system integration</span> across
            power and process industries.
          </p>
        </div>
      </div>

      {/* Clients Carousel */}
      <div className="bg-gray-100 dark:bg-gray-900 py-16 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#042b4e] dark:text-white">
          Our Trusted Clients
        </h2>

        <Slider {...sliderSettings} className="max-w-6xl mx-auto">
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
                With a strong foundation, an expanding client base, and a
                <span className="font-semibold text-[#042b4e] dark:text-yellow-400">
                  {" "}
                  forward-looking mindset
                </span>
                , Tescon Engineers is poised for sustained growth and long-term
                impact in India’s
                <span className="font-semibold text-[#042b4e] dark:text-yellow-400">
                  {" "}
                  industrial and energy infrastructure development
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
