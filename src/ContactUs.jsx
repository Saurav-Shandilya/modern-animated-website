import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="scroll-mt-24 relative bg-black py-20 px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      {/* Gradient Blobs */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-orange-500 opacity-30 blur-3xl rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-600 opacity-20 blur-3xl rounded-full pointer-events-none z-0" />

      {/* Section Header */}
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-300">
          We're here to answer your questions and explore new opportunities together.
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto mb-4">
        {[
          {
            icon: <Mail className="text-orange-500 w-8 h-8" />,
            title: "Email",
            content: "hello@yourcompany.com",
          },
          {
            icon: <Phone className="text-orange-500 w-8 h-8" />,
            title: "Phone",
            content: "+1 (234) 567-8900",
          },
          {
            icon: <MapPin className="text-orange-500 w-8 h-8" />,
            title: "Address",
            content: "123 Innovation Street, Tech City, USA",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-white shadow-lg transition-transform duration-300 hover:scale-[1.02]"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                {item.icon}
                <h3 className="text-xl font-semibold text-orange-500">{item.title}</h3>
              </div>
              <p className="text-white/80 break-words">{item.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* How We Help Card */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 sm:p-12 text-white shadow-lg transition-transform duration-300 hover:scale-[1.02]">
          <h3 className="text-3xl sm:text-4xl font-bold text-orange-500 mb-4">How We Help</h3>
          <p className="text-base sm:text-lg md:text-xl text-white/80">
            Whether you're just starting out or looking to scale, our team is here to support you with design, development, and strategy. From one-on-one consultations to full-scale product delivery, we're ready to bring your vision to life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
