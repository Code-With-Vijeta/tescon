import React from "react";

const productGroups = [
  {
    category: "Equipments",
    items: [
      {
        title: "Belt Conveyer",
        description:
          "A conveyor belt system is a continuous, durable loop—commonly manufactured from rubber, reinforced fabric, or metal alloys—designed to transport materials efficiently across varying distances and elevations.",
        image: "/equipments/belt.webp",
      },
      {
        title: "Screw Conveyor",
        description:
          "A screw conveyor is a versatile mechanical conveying system used for transporting bulk materials in a controlled and efficient manner.",
        image: "/equipments/screw.webp",
      },
      {
        title: "Drag Chain Conveyor",
        description:
          "Designed to transport heavy, abrasive, or sticky materials, drag chain conveyors use flights mounted on chains to drag materials through a trough.",
        image: "/equipments/drag.webp",
      },
      {
        title: "Vibrating Screen",
        description:
          "Vibrating screens separate bulk materials by size using vibration to pass smaller particles through screens while larger particles continue on.",
        image: "/equipments/screen.webp",
      },
      {
        title: "Bucket Elevator",
        description:
          "A bucket elevator vertically lifts bulk materials using buckets attached to a continuous belt or chain.",
        image: "/equipments/bucket.webp",
      },
      {
        title: "Portable Loader",
        description:
          "Portable loaders are mobile conveyors mounted on wheeled or skid bases for flexible material loading and transfer on site.",
        image: "/equipments/loader.webp",
      },
    ],
  },

  {
    category: "Components",
    items: [
      {
        subheading: "Idlers",
        parts: [
          {
            title: "Impact Idler",
            description:
              "Positioned at loading zones to absorb shock and impact forces from falling bulk material.",
            image: "/components/impact.webp",
          },
          {
            title: "Carrying Idler",
            description:
              "Form a trough shape for stable, controlled material transport. Typical trough angles: 20°, 35°, or 45°. Diameter",
            image: "/components/carrying.webp",
          },
          {
            title: "Return Idler",
            description:
              "Support the empty belt and prevent sagging. Commonly flat or slightly trough-shaped.",
            image: "/components/return.webp",
          },
          {
            title: "Guide Idler",
            description:
              "Located along return run edges to maintain belt alignment and prevent tracking issues.",
            image: "/components/guide.webp",
          },
        ],
      },
      {
        subheading: "Pulleys",
        parts: [
          {
            title: "V-Type Pulley",
            description:
              "Designed for V-belt drives, improves power transfer efficiency with grooved surfaces.",
            image: "/components/v.webp",
          },
          {
            title: "Drive Pulley",
            description:
              "Transmits power from the motor to move the belt; often equipped with lagging to increase grip.",
            image: "/components/drive.webp",
          },
          {
            title: "Tail Pulley",
            description:
              "Located at the conveyor end, guides the belt back. Usually unlagged but can be lagged in some designs.",
            image: "/components/tail.webp",
          },
          {
            title: "Lagged Pulley",
            description:
              "Features a friction-enhancing lagging surface (rubber or ceramic) to prevent belt slip, especially in high torque applications.",
            image: "/components/lagged.webp",
          },
        ],
      },
      {
        subheading: "Feeders",
        parts: [
          {
            title: "Screw Feeder",
            description:
              "Rotating screw inside a trough or pipe moves powders and granular materials for precise feeding.",
            image: "/feeder/screw.webp",
          },
          {
            title: "Vibro Feeder",
            description:
              "Utilizes controlled vibrations to move materials gently, ideal for fragile or free-flowing materials.",
            image: "/feeder/vibro.webp",
          },
          {
            title: "Apron Feeder",
            description:
              "Heavy-duty feeders with overlapping steel plates for coarse or large lump material. Suitable for feeding crushers or conveyors under harsh conditions.",
            image: "/feeder/apron.webp",
          },
          {
            title: "Drag Chain Feeder",
            description:
              "Chain flights drag materials in a trough for reliable feeding of heavy, abrasive, or sticky bulk materials. Fully enclosed for dust control.",
            image: "/feeder/drag.webp",
          },
          {
            title: "Belt Feeder",
            description:
              "Uses a continuous belt to deliver a steady, controllable feed of bulk materials. Ideal for powders, granules, and lumps.",
            image: "/feeder/belt.webp",
          },
        ],
      },
    ],
  },
];

const Products = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      {/* Hero Section */}
      <div
        className="relative text-white py-20 px-6 text-center bg-cover bg-center"
        style={{ backgroundImage: "url('./hero.webp')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-500">
            Our <span className="text-white">Products</span>
          </h1>
          <p className="text-lg text-white">
            Explore our wide range of industrial equipment, components, and
            feeders tailored for bulk material handling solutions.
          </p>
        </div>
      </div>

      {/* Products Section */}
      <div className="py-20 px-6 md:px-20 bg-white text-gray-800 dark:bg-gray-900 dark:text-white">
        {productGroups.map((group, index) => (
          <div key={index} className="mb-16">
            <h3 className="text-3xl font-semibold text-[#042b4e] mb-6 text-center">
              {group.category}
            </h3>

            {"subheading" in (group.items[0] || {}) ? (
              group.items.map((sub, subIndex) => (
                <div key={subIndex} className="mb-10">
                  <h4 className="text-2xl font-bold mb-4 text-[#042b4e] text-center">
                    {sub.subheading}
                  </h4>
                  <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
                    {sub.parts.map((part, partIndex) => (
                      <div
                        key={partIndex}
                        className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition duration-300"
                      >
                        <img
                          src={part.image}
                          alt={part.title}
                          className="w-full h-70 object-contain  rounded-t-xl"
                        />
                        <div className="p-5">
                          <h5 className="text-lg font-semibold text-[#042b4e] mb-2">
                            {part.title}
                          </h5>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {part.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
                {group.items.map((item, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition duration-300"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-70 object-contain rounded-t-xl"
                    />
                    <div className="p-5">
                      <h4 className="text-lg font-semibold text-[#042b4e] mb-2">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
