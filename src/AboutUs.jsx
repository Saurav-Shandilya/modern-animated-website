import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import aboutImg from "../public/images.webp"; // Replace with your actual image path

const AboutUs = () => {
  return (
    <section
      id="about"
      className="relative bg-black py-20 px-6 sm:px-12 lg:px-20 overflow-hidden scroll-mt-24"
    >
      {/* Gradient Blobs */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-orange-500 opacity-30 blur-3xl rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-600 opacity-20 blur-3xl rounded-full pointer-events-none z-0" />

      {/* Section Header */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-300">
          We’re a creative team passionate about building digital products <br /> that work beautifully and efficiently.
        </p>
      </div>

      {/* Full Width Glassy Card */}
      <div className="relative z-10 w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl">
        
        {/* Image Side */}
        <div className="w-full md:w-1/2 h-64 md:h-auto">
          <img
            src={aboutImg}
            alt="About Us"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text and Socials */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center text-white">
          <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Who We Are</h3>
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6">
            We help brands tell their story through innovative design and robust development. Every project we take on is a chance to deliver meaningful results — whether that’s through polished websites, seamless apps, or scalable backend solutions.<br /><br />
            Our mission is to empower businesses with creative digital tools that enhance customer experience and drive growth. With a team that thrives on curiosity, creativity, and clean code, we're always ready to push boundaries.
          </p>

          {/* Social Icons in Orange */}
          <div className="flex gap-5 mt-2 text-orange-500">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
