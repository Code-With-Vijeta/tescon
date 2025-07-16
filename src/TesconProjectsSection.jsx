import React from 'react';

const projects = [
  {
    title: 'Coal Handling System',
    image: '/coal.png',
    description:
      'Tescon Groups excels in efficient execution of Coal Handling Systems, boasting a successful track record with numerous projects. Our expertise ensures seamless operations and optimal performance, making us a trusted partner in delivering excellence in coal handling solutions.',
  },
  {
    title: 'Ash Handling System',
    image: '/ash.png',
    description:
      'Tescon Groups excels in efficient execution of Ash Handling Systems and equipment, having successfully completed numerous projects. Our expertise ensures seamless operations, optimal performance, and client satisfaction in the realm of ash handling solutions.',
  },
  {
    title: 'Bio-Mass Handling System',
    image: '/biomass.png',
    description:
      'Tescon Groups excels in efficient execution of Bio-Mass Handling System projects. With a track record of successful installations, we leverage cutting-edge equipment and expertise to ensure seamless operations, contributing to the success of numerous projects.',
  },
  {
    title: 'Storage And Loading System',
    image: '/storage.png',
    description:
      'Tescon Groups excels in efficiently implementing Storage and Loading Systems, showcasing prowess through numerous successful projects. Our cutting-edge equipment ensures seamless operations, providing reliable solutions for diverse industries.',
  },
];

const TesconProjectsSection = () => {
  return (
    <section className="bg-[#f9f9f9] py-20 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-blue-600">
          Tescon Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover rounded-t-xl"
              />
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-semibold text-black mb-4 relative inline-block after:block after:h-[3px] after:bg-blue-600 after:w-16 after:mt-1">
                  {project.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-[15px]">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TesconProjectsSection;
