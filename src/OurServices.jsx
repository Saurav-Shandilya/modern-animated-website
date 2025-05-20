import React from "react";
import {
  Code,
  Smartphone,
  Brush,
  Search,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description: "Responsive and scalable websites tailored to your business.",
    icon: Code,
    link: "#web-development",
  },
  {
    title: "UI/UX Design",
    description: "Crafting user-first interfaces that feel natural and intuitive.",
    icon: Brush,
    link: "#ui-ux",
  },
  {
    title: "Mobile Apps",
    description: "Cross-platform apps built for performance and elegance.",
    icon: Smartphone,
    link: "#mobile-apps",
  },
  {
    title: "SEO Optimization",
    description: "Boost your search rankings and drive organic traffic.",
    icon: Search,
    link: "#seo",
  },
];

const OurServices = () => {
  return (
    <section
      id="services"
      className="relative bg-black py-20 px-6 sm:px-12 lg:px-20 overflow-hidden scroll-mt-24"
    >
      {/* Gradient Blobs (match HeroSection) */}
      <div className="absolute top-0 left-0 w-60 h-60 sm:w-80 sm:h-80 bg-orange-500 opacity-30 blur-3xl rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-orange-600 opacity-20 blur-3xl rounded-full pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          From strategy to execution, we offer services that bring your ideas to life.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">
        {services.map(({ title, description, icon: Icon, link }, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl pt-20 pb-6 px-6 text-white shadow-xl overflow-visible"
          >
            {/* Floating Icon - Half Outside with Shadow */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 flex items-center justify-center bg-orange-500 rounded-full shadow-2xl z-20">
              <Icon className="w-12 h-12 text-white" />
            </div>

            {/* Card Content */}
            <div className="text-center mt-4">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-sm text-white/80 mb-4">{description}</p>
              <a
                href={link}
                className="inline-flex items-center gap-1 text-orange-400 text-sm font-medium hover:underline"
              >
                Learn More <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
