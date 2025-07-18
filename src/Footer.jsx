import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGooglePlay,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#042b4e] text-gray-100 pt-16 pb-8 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-12">
        
        {/* Logo / Company Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-yellow-500">Tescon Engineers</h3>
          <p className="text-gray-400 leading-relaxed">
            We empower industries with sustainable infrastructure and energy solutions built for tomorrow.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-yellow-500">Quick Links</h4>
          <ul className="space-y-3 text-gray-300">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">About</a></li>
            <li><a href="#" className="hover:text-white transition">Energy & Infrastructure</a></li>
            <li><a href="#" className="hover:text-white transition">Services</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-yellow-500">Contact</h4>
          <p className="text-gray-300 text-sm">
            C-76, Block C/1, 3rd Floor,<br />
            Mahavir Vihar, Sector-1,<br />
            Dwarka, New Delhi - 110075<br /><br />
            <strong className="text-blue-300">Email:</strong> info@essaedig.com<br />
            <strong className="text-blue-300">Phone:</strong> +91-8028544100
          </p>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-white">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="p-3 rounded-full bg-blue-600 hover:bg-blue-700 transition"><FaFacebookF /></a>
            <a href="#" className="p-3 rounded-full bg-sky-500 hover:bg-sky-600 transition"><FaTwitter /></a>
            <a href="#" className="p-3 rounded-full bg-blue-800 hover:bg-blue-900 transition"><FaLinkedinIn /></a>
            <a href="#" className="p-3 rounded-full bg-green-600 hover:bg-green-700 transition"><FaGooglePlay /></a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-8"></div>

      {/* Bottom Note */}
      <div className="text-center text-gray-400 text-sm">
        ©2022 <span className="text-white font-medium">Tescon Groups</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
