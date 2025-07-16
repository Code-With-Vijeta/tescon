import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // removed Pagination
import "swiper/css";
import "swiper/css/navigation";
// Removed "swiper/css/pagination"

const clientLogos = [
  "https://tescongroups.com/wp-content/uploads/2023/11/shakumbri-logo-655f12e70f4ba.webp",
  "https://tescongroups.com/wp-content/uploads/2023/11/shantha-logo-655f12e7d4700-150x150.webp",
  "https://tescongroups.com/wp-content/uploads/2023/11/shreeji-logo-150x150.webp",
  "https://tescongroups.com/wp-content/uploads/2023/11/shri-lakshmi-logo-655f12e7d879c-150x150.webp",
  "https://tescongroups.com/wp-content/uploads/2023/11/shripur-logo-655f12e8a65ca-150x150.webp",
  "https://tescongroups.com/wp-content/uploads/2023/11/sukhbir-logo-copy-655f12e8accc6-150x150.webp",
  "https://tescongroups.com/wp-content/uploads/2023/11/tinplate-logo-655f12e99485b-150x150.webp",
  "https://tescongroups.com/wp-content/uploads/2023/11/transtech-logo-655f12ea351e7-150x150.webp",
  "https://tescongroups.com/wp-content/uploads/2023/11/universal-logo-655f12eac1535-150x150.webp",
  "https://tescongroups.com/wp-content/uploads/2023/11/up-mineral-655f12eaedb9e-150x150.webp",
  "https://tescongroups.com/wp-content/uploads/2023/11/vasu-logo-655f12eb8e947-150x150.webp",
  "https://tescongroups.com/wp-content/uploads/2023/11/vishak-lecto-655f12ec2b6fd-150x130.webp",
  "https://tescongroups.com/wp-content/uploads/2023/11/abc-logo-655f12ed0cb7f-150x150.webp",
  "https://tescongroups.com/wp-content/uploads/2023/11/abhinav-logo-655f12ee123ca-150x150.webp",
  "https://tescongroups.com/wp-content/uploads/2023/11/ab-logo-655f12ec8ec37-150x150.webp",
  "https://tescongroups.com/wp-content/uploads/2023/11/anand-logo.webp",
  "https://tescongroups.com/wp-content/uploads/2023/11/badarpur-logo-655f12ef1840b-150x150.webp",
  "https://tescongroups.com/wp-content/uploads/2023/11/bharat-logo-150x150.webp",
  "https://tescongroups.com/wp-content/uploads/2023/11/bindal-logo-655f12ef66f54-150x150.webp",
  "https://tescongroups.com/wp-content/uploads/2023/11/bindal-paper-logo-655f12efc4277-150x150.webp",
  "https://tescongroups.com/wp-content/uploads/2023/11/bio-logo-655f12f000e25.webp",
  "https://tescongroups.com/wp-content/uploads/2023/11/bvcl-logo-655f12f08b8de-150x150.webp",
  "https://tescongroups.com/wp-content/uploads/2023/11/cement-logo-655f12f09b0e2-150x150.webp",
  "https://tescongroups.com/wp-content/uploads/2023/11/century-logo-655f12ddb3b10-150x150.webp"
];

const OurClients = () => {
  return (
    <section className="py-12 px-4 bg-white text-center">
      <h3 className="text-2xl font-bold mb-6">Our Clients</h3>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={4}
        navigation
        loop={true}
        autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
        breakpoints={{
          0: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {clientLogos.map((logo, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <img
              src={logo}
              alt={`Client ${index + 1}`}
              className="w-28 h-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default OurClients;
