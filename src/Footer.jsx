import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black bg-white/10 backdrop-blur-md border-t border-white/20 shadow-inner py-8 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-white">

        {/* Social Icons */}
        <div className="flex space-x-6">
          {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
            <a
              key={idx}
              href="#"
              className="text-white hover:text-orange-400 transition transform hover:scale-110"
              aria-label="Social link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="w-6 h-6" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-white/60 text-sm select-none text-center md:text-right">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
