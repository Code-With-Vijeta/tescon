import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGooglePlay,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      {/* Hero Section */}
      <div
        className="relative text-white py-20 px-6 text-center bg-cover bg-center"
        style={{ backgroundImage: "url('./hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-500">
            Stay <span className="text-white">Connected!</span>
          </h1>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] dark:from-gray-900 dark:to-gray-800 py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Card */}
          <div className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-xl border dark:border-gray-700 relative z-10">
            <h2 className="text-3xl font-bold text-[#042b4e] dark:text-yellow-400 mb-8">
              Contact Information
            </h2>

            <div className="space-y-6 text-gray-700 dark:text-gray-300 text-base">
              <div className="flex gap-4 items-start">
                <FaMapMarkerAlt className="text-[#042b4e] dark:text-yellow-300 text-xl mt-1" />
                <p>
                  <strong>Address:</strong>
                  <br />
                  C-1,Kh No. 76/12, 3rd Floor,
                  <br />
                  Mahavir Vihar, Sector-1,
                  <br />
                  Dwarka, New Delhi - 110045
                </p>
              </div>

              <div className="flex gap-4 items-start">
                <FaEnvelope className="text-[#042b4e] dark:text-yellow-300 text-xl mt-1" />
                <p>
                  <strong>Email:</strong>
                  <br />
                  Tesconengineers@gmail.com
                  <br />
                  Hr@tesconengineers.in
                  <br />
                  Info@tescongroups.com
                </p>
              </div>

              <div className="flex gap-4 items-start">
                <FaPhoneAlt className="text-[#042b4e] dark:text-yellow-300 text-xl mt-1" />
                <p>
                  <strong>Phone:</strong>
                  <br />
                  +91 8882253405
                  <br />
                  +91 9643856547
                </p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-10">
              <h4 className="text-xl font-semibold mb-4 text-gray-700 dark:text-yellow-200">
                Connect With Us
              </h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="bg-[#3b5998] p-3 rounded-full text-white hover:bg-blue-700 transition hover:scale-110 shadow-lg"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="bg-[#1da1f2] p-3 rounded-full text-white hover:bg-sky-500 transition hover:scale-110 shadow-lg"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="bg-[#0077b5] p-3 rounded-full text-white hover:bg-blue-900 transition hover:scale-110 shadow-lg"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="#"
                  className="bg-[#34a853] p-3 rounded-full text-white hover:bg-green-600 transition hover:scale-110 shadow-lg"
                >
                  <FaGooglePlay />
                </a>
              </div>
            </div>

            <button className="mt-8 w-full py-3 bg-[#042b4e] hover:bg-yellow-500 text-white dark:text-gray-900 font-bold rounded-full transition duration-300">
              Get in Touch
            </button>
          </div>

          {/* Map Section */}
          <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition duration-500 border-4 border-white">
            <iframe
              title="Tescon Group Location"
              src="https://maps.google.com/maps?q=tescongroups%20dwarka%20&t=m&z=15&output=embed&iwloc=near"
              width="100%"
              height="100%"
              className="w-full"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
