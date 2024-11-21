'use client'
import React from "react";
import Link from 'next/link';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";

const Footer: React.FC = () => {

  return (
    <footer className="bg-[#31153D] text-white py-12">
      <div className="container mx-auto flex flex-col  xl:justify-center  lg:flex-row justify-between items-center space-y-8 md:space-y-0">
        {/* Mobile-only up section */}
        <div className="flex flex-col md:hidden w-full  text-white">
          <div className="flex justify-between w-full">
            <div className="flex flex-col ">
              <Link
                href="/schedule"
                className="font-brown-bold text-white hover:text-gray-300 text-base"
              >
                Schedule
              </Link>
              <Link
                href="/rankings"
                className="font-brown-bold text-white hover:text-gray-300 text-base"
              >
                Ranking
              </Link>
              <Link
                href="/join"
                className="font-brown-bold text-white hover:text-gray-300 text-base"
              >
                Membership
              </Link>
            </div>
            <div className="flex flex-col space-y-2">
              <Link
                href="/players"
                className="font-brown-bold text-white hover:text-gray-300 text-base"
              >
                Players
              </Link>
              <Link
                href="/playing-experiences"
                className="font-brown-bold text-white hover:text-gray-300 text-base"
              >
                Play with a Pro
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop icons on the left */}
        <div className="lg:flex  xl:justify-center items-center large-xl:mr-[350px]">
        <div className="hidden lg:flex lg:justify-between  items-center xl:space-x-10 lg:space-x-4">
          <Link
            href="https://web.facebook.com/euLegendsTour/?_rdc=1&_rdr#"
            aria-label="Facebook"
            className="xl:text-[60px] lg:text-[45px] text-[36px] text-white hover:text-gray-300"
            target="_blank"
          >
            <FaFacebook />
          </Link>
          <Link
            href="https://twitter.com/eulegendstour"
            aria-label="Twitter"
            className="xl:text-[60px] lg:text-[45px] text-[36px] text-white hover:text-gray-300"
            target="_blank"
          >
            <img src="/img/partners/twitter-icon.png" alt="Twitter" className="xl:w-16 xl:h-16 lg:w-[45px] lg:h-[45px]" />
          </Link>
          <Link
            href="https://www.instagram.com/eulegendstour/"
            aria-label="Instagram"
            className="xl:text-[60px] lg:text-[45px] text-[36px] text-white hover:text-gray-300"
            target="_blank"
          >
            <FaInstagram />
          </Link>
        </div>
        </div>

        {/* Center section for desktop */}
        <div className="hidden md:flex flex-col text-center">
          <div className="mb-1 flex flex-col sm:flex-row justify-center xl:text-[20px] md:text-[16px] xl:mb-[15px]">
            <Link
              href="/schedule"
              className=" xl:px-4 sm:px-2 font-brown-bold text-white hover:text-gray-300 xl:text-[20px] md:text-[16px]"
            >
              Schedule
            </Link>
            <Link
              href="/players"
              className="xl:px-4 sm:px-2 font-brown-bold text-white hover:text-gray-300 xl:text-[20px] md:text-[16px]"
            >
              Players
            </Link>
            <Link
              href="/rankings"
              className="xl:px-4 sm:px-2 font-brown-bold text-white hover:text-gray-300 xl:text-[20px] md:text-[16px]"
            >
              Ranking
            </Link>
            <Link
              href="/playing-experiences"
              className="xl:px-4 sm:px-2 font-brown-bold text-white hover:text-gray-300 xl:text-[20px] md:text-[16px]"
            >
              Play with a Pro
            </Link>
            <Link
              href="/join"
              className="xl:px-4 sm:px-2 font-brown-bold text-white hover:text-gray-300 xl:text-[20px] md:text-[16px]"
            >
              Membership
            </Link>
          </div>
          <div className="md:flex lg:hidden block justify-center items-center md:mt-[5px] md:mb-[5px] space-x-[75px]">
            <Link
                href="https://web.facebook.com/euLegendsTour/?_rdc=1&_rdr#"
                aria-label="Facebook"
                className="xl:text-[60px] lg:text-[45px] text-[36px] text-white hover:text-gray-300"
                target="_blank"
            >
              <FaFacebook />
            </Link>
            <Link
                href="https://twitter.com/eulegendstour"
                aria-label="Twitter"
                className="xl:text-[60px] lg:text-[45px] text-[36px] text-white hover:text-gray-300"
                target="_blank"
            >
              <img src="/img/partners/twitter-icon.png" alt="Twitter" className="w-8 h-8" />
            </Link>
            <Link
                href="https://www.instagram.com/eulegendstour/"
                aria-label="Instagram"
                className="xl:text-[60px] lg:text-[45px] text-[36px] text-white hover:text-gray-300"
                target="_blank"
            >
              <FaInstagram />
            </Link>
            <Link
                href="https://www.youtube.com/channel/UCTpnBaECW4VkDDK3jzY-ShQ/featured"
                aria-label="YouTube"
                className="xl:text-[60px] lg:text-[45px] text-[36px] text-white hover:text-gray-300"
                target="_blank"
            >
              <FaYoutube />
            </Link>
            <Link
                href="https://www.linkedin.com/company/eulegends-tour/"
                aria-label="LinkedIn"
                className="xl:text-[60px] lg:text-[45px] text-[36px] text-white hover:text-gray-300"
                target="_blank"
            >
              <FaLinkedin />
            </Link>
            <Link
                href="https://www.tiktok.com/@eulegendstour?_t=8pNhePFoViy&_r=1"
                aria-label="Tiktok"
                className="xl:text-[60px] lg:text-[45px] text-[36px] text-white hover:text-gray-300"
                target="_blank"
            >
              <FaTiktok />
            </Link>
          </div>
          <div className="flex flex-wrap justify-center space-x-2">
            <Link
              href="/about-us"
              className="px-0.28 font-brown-bold text-white hover:text-gray-300 xl:text-[15px] md:text-[12px]"
            >
              About Us
            </Link>
            <span className="px-0.28 text-white text-xs">|</span>
            <Link
              href="/news"
              className="px-0.28 font-brown-bold text-white hover:text-gray-300 xl:text-[15px] md:text-[12px]"
            >
              News
            </Link>
            <span className="px-0.28 text-white text-xs">|</span>
            <a
              href="#"
              className="px-0.28 font-brown-bold text-white hover:text-gray-300 xl:text-[15px] md:text-[12px]"
            >
              Partnership
            </a>
            <span className="px-0.28 text-white text-xs">|</span>
            <a
              href="#"
              className="px-0.28 font-brown-bold text-white hover:text-gray-300 xl:text-[15px] md:text-[12px]"
            >
              Contact
            </a>
            <span className="px-0.28 text-white text-xs">|</span>
            <Link
              href="/privacy-policy"
              className="px-0.28 font-brown-bold text-white hover:text-gray-300 xl:text-[15px] md:text-[12px]"
            >
              Privacy Policy
            </Link>
            <span className="px-0.28 text-white text-xs">|</span>
            <Link
              href="/cookie-policy"
              className="px-0.28 font-brown-bold text-white hover:text-gray-300 xl:text-[15px] md:text-[12px]"
            >
              Cookie Policy
            </Link>
            <span className="px-0.28 text-white text-xs">|</span>
            <Link
              href="/terms-and-conditions"
              className="px-0.28 font-brown-bold text-white hover:text-gray-300 xl:text-[15px] md:text-[12px]"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>

        {/* Mobile-only middle section */}
        <div className="flex flex-col md:hidden w-full space-y-4 items-center">
          <div className="flex justify-center mobile-lg:space-x-8 mobile-md:space-x-6 mobile-sm:space-x-3">
            <Link
              href="https://web.facebook.com/euLegendsTour/?_rdc=1&_rdr#"
              aria-label="Facebook"
              className="text-3xl text-white hover:text-gray-300"
              target="_blank"
            >
              <FaFacebook />
            </Link>
            <Link
              href="https://twitter.com/eulegendstour"
              aria-label="Twitter"
              className="text-3xl text-white hover:text-gray-300"
              target="_blank"
            >
              <img src="/img/partners/twitter-icon.png" alt="Twitter" className="w-8 h-8" />
            </Link>
            <Link
              href="https://www.instagram.com/eulegendstour/"
              aria-label="Instagram"
              className="text-3xl text-white hover:text-gray-300"
              target="_blank"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCTpnBaECW4VkDDK3jzY-ShQ/featured"
              aria-label="YouTube"
              className="text-3xl text-white hover:text-gray-300"
              target="_blank"
            >
              <FaYoutube />
            </Link>
            <Link
              href="https://www.linkedin.com/company/eulegends-tour/"
              aria-label="LinkedIn"
              className="text-3xl text-white hover:text-gray-300"
              target="_blank"
            >
              <FaLinkedin />
            </Link>
            <Link
                href="https://www.tiktok.com/@eulegendstour?_t=8pNhePFoViy&_r=1"
                aria-label="Tiktok"
                className="xl:text-[60px] lg:text-[45px] text-3xl text-white hover:text-gray-300"
                target="_blank"
            >
              <FaTiktok />
            </Link>
          </div>
        </div>

        {/* Mobile-only down section */}
        <div className="flex flex-col md:hidden w-full space-y-0 text-white">
          <div className="flex justify-between w-full">
            <div className="flex flex-col space-y-0">
              <Link
                href="/about-us"
                className="font-brown-bold text-white hover:text-gray-300 text-sm"
              >
                About Us
              </Link>
              <a
                href="#"
                className="font-brown-bold text-white hover:text-gray-300 text-sm"
              >
                Partnership
              </a>
              <Link
                href="/privacy-policy"
                className="font-brown-bold text-white hover:text-gray-300 text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-and-conditions"
                className="font-brown-bold text-white hover:text-gray-300 text-sm"
              >
                Terms & Conditions
              </Link>
            </div>
            <div className="flex flex-col space-y-0">
              <Link
                href="/news"
                className="font-brown-bold text-white hover:text-gray-300 text-sm"
              >
                News
              </Link>
              <a
                href="#"
                className="font-brown-bold text-white hover:text-gray-300 text-sm"
              >
                Contact
              </a>
              <Link
                href="/cookie-policy"
                className="font-brown-bold text-white hover:text-gray-300 text-sm"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop icons on the right */}
        <div className="large-xl:ml-[350px]">
        <div className="hidden lg:flex justify-end items-center xl:space-x-10 lg:space-x-4">
          <Link
            href="https://www.youtube.com/channel/UCTpnBaECW4VkDDK3jzY-ShQ/featured"
            aria-label="YouTube"
            className="xl:text-[60px] lg:text-[45px] text-[36px] text-white hover:text-gray-300"
            target="_blank"
          >
            <FaYoutube />
          </Link>
          <Link
            href="https://www.linkedin.com/company/eulegends-tour/"
            aria-label="LinkedIn"
            className="xl:text-[60px] lg:text-[45px] text-[36px] text-white hover:text-gray-300"
            target="_blank"
          >
            <FaLinkedin />
          </Link>
          <Link
              href="https://www.tiktok.com/@eulegendstour?_t=8pNhePFoViy&_r=1"
              aria-label="Tiktok"
              className="xl:text-[60px] lg:text-[45px] text-[36px] text-white hover:text-gray-300"
              target="_blank"
          >
            <FaTiktok />
          </Link>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
