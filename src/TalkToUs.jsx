import React from "react";

const TalkToUs = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat text-center py-20 px-6 md:px-20 relative"
      style={{
        backgroundImage:
          "url('https://4920851.fs1.hubspotusercontent-na1.net/hub/4920851/hubfs/US%20Blog%20Feature%20Images/Kardex_img_customer_Wipotec_10_1200x628.jpeg?quality=low&width=893&height=500&name=Kardex_img_customer_Wipotec_10_1200x628.jpeg')",
      }}
    >
      <div className="bg-black/60  p-10 rounded-xl max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Talk to us
        </h2>
        <p className="text-gray-200 text-lg mb-8">
          Have any questions? We are always open to talk about your business,
          new projects, creative opportunities and how we can help you.
        </p>
        <a
          href="#contact" // change this to your actual contact link
          className="inline-block bg-white text-[#042b4e] px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default TalkToUs;
