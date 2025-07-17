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
  {
    title: "Bio-Mass Handling System",
    image: "/biomass.png",
    description:
      "High-performance Bio-Mass Handling solutions using advanced technology. Supporting sustainable operations through efficient systems.",
  },
  {
    title: "Storage And Loading System",
    image: "/storage.png",
    description:
      "Powerful and scalable Storage & Loading Systems designed to meet industrial demands with precision and speed.",
  },
];

const TesconProjectsSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#f0f8ff] to-[#e6f2ff] py-20 px-5 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-12">
          Our Projects
        </h2>

        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-2xl font-bold text-blue-800 mb-1 relative inline-block">
                  {project.title}
                  <span className="block w-10 h-[3px] bg-blue-800 mt-1 rounded-full"></span>
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
