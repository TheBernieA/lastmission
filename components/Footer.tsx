
import { copyrightSign, logo } from "@public/assets/icons";
import { footerLogo } from "@public/assets/images";
import { footerLinks, socialMedia } from "@constants";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="#">
            <Image src={logo} width={150} height={46} alt="footer logo" />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Bridging the gap between healthcare and faith, providing much-needed
            care to those who are often overlooked while sharing the love of
            Christ with those in need.
          </p>
          <div className="flex items-center gap-5 mt-8 ">
            {socialMedia.map((icon) => (
              <div
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
                key={icon.alt}
              >
                <Link href={icon.link} target="_blank">
                  <Image src={icon.src} alt={icon.alt} width={24} height={24} />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div className="" key={section.title}>
              <h4 className="text-white font-montserrat text-2xl leading-normal mb-6 font-medium">
                {section.title}
              </h4>
              <ul className="">
                {section.links.map((link) => (
                  <li
                    className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"
                    key={link.name}
                  >
                    <a href={link.link}></a>
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <Image
            src={copyrightSign}
            alt="copyright symbol"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All right</p>
        </div>
        <p className="">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
