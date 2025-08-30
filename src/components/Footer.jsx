import React from "react";
import foot1 from "../img/icons/foot1.png";
import foot2 from "../img/icons/foot2.png";
import foot3 from "../img/icons/foot3.png";
import logo from "../img/logo.png";

const Footer = () => {
  return (
    <section id="contact">
      <div className="bg-[#050008] text-white px-6 py-8 sm:px-10 md:px-16 lg:px-24">

        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Left Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="/">
              <img src={logo} alt="Ileri Scent Logo" className="w-10 mb-3 md:ml-16" />
            </a>
            <span className="text-sm">© 2025. All Rights Reserved.</span>
          </div>

          {/* Contact Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-1 md:ml-6">Contacts</h3>
            <p className="text-sm">+234 816 825 0885</p>
          </div>

          {/* Social Media Section */}
          <div className="flex justify-center gap-6 sm:gap-8">
            <a
              href="https://wa.me/8168250885"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
            >
              <img src={foot1} alt="Chat on WhatsApp" className="w-8 sm:w-9 md:w-10" />
            </a>

            <a
              href="https://www.tiktok.com/@aileri_"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our TikTok profile"
            >
              <img src={foot2} alt="Visit TikTok Profile" className="w-8 sm:w-9 md:w-10" />
            </a>

            <a
              href="https://instagram.com/ileriscent"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram profile"
            >
              <img src={foot3} alt="Visit Instagram Profile" className="w-8 sm:w-9 md:w-10" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
