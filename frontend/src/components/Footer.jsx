import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white py-8 border-t border-gray-200">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Top Bar */}
        <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-6 flex-wrap gap-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-blue-900">ABC</span>
            <span className="text-yellow-500 font-semibold">Furniture</span>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-3">
            <a
              href="#"
              className="bg-yellow-400 p-2 rounded-lg hover:opacity-80"
              aria-label="Instagram"
            >
              <FaInstagram className="text-black" />
            </a>
            <a
              href="#"
              className="bg-yellow-400 p-2 rounded-lg hover:opacity-80"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-black" />
            </a>
            <a
              href="#"
              className="bg-yellow-400 p-2 rounded-lg hover:opacity-80"
              aria-label="YouTube"
            >
              <FaYoutube className="text-black" />
            </a>
            <a
              href="#"
              className="bg-yellow-400 p-2 rounded-lg hover:opacity-80"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="text-black" />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6 text-sm">
            <Link to="/" className="hover:text-yellow-500">
              Home
            </Link>
            <Link to="/product" className="hover:text-yellow-500">
              Product
            </Link>
            <Link to="/category" className="hover:text-yellow-500">
              Categories
            </Link>
            <Link to="#" className="hover:text-yellow-500">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Location & Contact Section */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Location Box */}
          <div className="bg-gray-100 p-6 rounded-lg relative">
            <div className="absolute -top-5 left-6 bg-yellow-400 px-6 py-2 rounded">
              <span className="font-medium">Location</span>
            </div>
            <div className="mt-4 text-sm text-gray-800">
              <p>ABC Furniture, Shop 385</p>
              <p>Bagbazar, Kathmandu</p>
              <p>Nepal</p>
            </div>
          </div>

          {/* Contact Box */}
          <div className="bg-gray-100 p-6 rounded-lg relative">
            <div className="absolute -top-5 left-6 bg-yellow-400 px-6 py-2 rounded">
              <span className="font-medium">Contact</span>
            </div>
            <div className="mt-4 text-sm text-gray-800">
              <p>Tel: +977 9800000000</p>
              <p>Email: info@abcfurniture.com</p>
              <p>Working Hours: 10 AM to 11 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm mt-6 border-t border-gray-200 pt-4">
          <p>© 2025 EasyStore. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              to="/privacy-policy"
              className="hover:text-yellow-500 transition"
            >
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-yellow-500 transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
