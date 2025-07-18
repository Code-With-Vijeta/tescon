import React from "react";

const projects = [
  {
    title: "Coal Handling System",
    image: "/coal.png",
    description:
      "Efficient execution of Coal Handling Systems with a proven track record. We deliver reliable, optimized, and high-performance coal handling solutions.",
  },
  {
    title: "Ash Handling System",
    image: "/ash.png",
    description:
      "Expertly designed Ash Handling Systems for seamless, efficient operations. Trusted by industries across sectors for reliable ash management.",
  },
  // {
  //   title: "Bio-Mass Handling System",
  //   image: "/biomass.png",
  //   description:
  //     "High-performance Bio-Mass Handling solutions using advanced technology. Supporting sustainable operations through efficient systems.",
  // },
  {
    title: "Storage And Loading System",
    image: "/storage.png",
    description:
      "Powerful and scalable Storage & Loading Systems designed to meet industrial demands with precision and speed.",
  },
];

const TesconProjectsSection = () => {
  return (
    <section className="bg-[#f7f9fc] py-20 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-14">
          <p className="text-blue-700 uppercase tracking-wider font-semibold mb-2">
            Work we have done
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-500 mb-4">
           Our Projects
          </h2>
        </div>

        {/* Project Cards */}
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3  className="text-xl font-bold  hover:text-yellow-500 text-gray-800 mb-3 border-b pb-2 border-dashed border-gray-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-[15.5px] leading-relaxed">
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
