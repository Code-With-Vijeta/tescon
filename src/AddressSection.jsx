import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGooglePlay,
} from "react-icons/fa";

const AddressSection = () => {
  return (
    <section className="relative bg-[#f9fafb] py-20 px-6 md:px-16 overflow-hidden">
      {/* Background pattern circles */}
      <div className="absolute -top-10 -left-10 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-200"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 z-10 relative">
        
        {/* Left Panel */}
        <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">📍 Visit Us</h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            <span className="font-semibold">Address:</span><br />
            C-76, Block C/1, 3rd Floor,<br />
            Mahavir Vihar, Sector-1, Dwarka,<br />
            New Delhi - 110075
          </p>

          <h4 className="text-xl font-semibold text-gray-700 mb-4">Connect With Us</h4>
          <div className="flex items-center gap-4 mb-8">
            <a href="#" className="bg-[#3b5998] text-white p-3 rounded-full hover:bg-blue-700 transition-all shadow-lg hover:scale-105"><FaFacebookF /></a>
            <a href="#" className="bg-[#1da1f2] text-white p-3 rounded-full hover:bg-sky-500 transition-all shadow-lg hover:scale-105"><FaTwitter /></a>
            <a href="#" className="bg-[#0077b5] text-white p-3 rounded-full hover:bg-blue-900 transition-all shadow-lg hover:scale-105"><FaLinkedinIn /></a>
            <a href="#" className="bg-[#34a853] text-white p-3 rounded-full hover:bg-green-600 transition-all shadow-lg hover:scale-105"><FaGooglePlay /></a>
          </div>

          <button className="mt-2 px-6 py-3 bg-blue-600 text-white text-lg rounded-full font-semibold shadow-md hover:bg-blue-700 transition-all">
            Get in Touch
          </button>
        </div>

        {/* Map Embed */}
        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-500">
          <iframe
            title="Tescon Group Location"
            src="https://maps.google.com/maps?q=tescongroups%20dwarka%20&t=m&z=15&output=embed&iwloc=near"
            width="100%"
            height="450"
            className="w-full h-full"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default AddressSection;
