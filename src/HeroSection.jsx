import React from 'react';
import Spline from '@splinetool/react-spline';

const HeroSection = () => {
  return (
    <section className="relative bg-black min-h-[calc(100vh-64px)] pt-16 overflow-hidden flex items-center">
      {/* Gradient Decor */}
      <div className="absolute top-0 left-0 w-60 h-60 sm:w-80 sm:h-80 bg-orange-500 opacity-30 blur-3xl rounded-full z-0 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-orange-600 opacity-20 blur-3xl rounded-full z-0 pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-4 relative z-10 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-0 min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
          
          {/* Left Side - Hero Text vertically centered */}
          <div className="w-full md:w-5/12 flex flex-col justify-center text-center md:text-left z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-8 leading-tight tracking-wide">
              Build Smarter,<br /> Launch&nbsp;Faster
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-md mx-auto md:mx-0">
              We help startups and businesses create stunning digital products. From idea to launch, we build experiences that users love.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <button className="bg-orange-500 text-white px-6 py-3 sm:px-8 sm:py-3 text-base rounded hover:bg-orange-600 transition">
                Get Started
              </button>
              <button className="bg-white text-black px-6 py-3 sm:px-8 sm:py-3 text-base rounded hover:bg-gray-100 transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side - Spline Animation shifted right */}
          <div className="w-full md:w-7/12 flex justify-center md:justify-end items-center z-10">
            <div className="w-full max-w-[720px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] md:translate-x-28">
              <Spline scene="https://prod.spline.design/HI7EFr-pRzPjYCTI/scene.splinecode" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
