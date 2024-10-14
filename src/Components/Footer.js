import React from "react";
import logo from "../image/badsha_Logo.png";

import partical1 from "../image/carcal_blur_blue.png";
import partical2 from "../image/footer_PP_1.png";

import { MdEmail } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-scroll";


function Footer() {
  return (
    <div className="w-full h-full bg-[#1E1345] " id="footer">
      <footer className="text-white body-font">
        
        <div className="xl:w-[1230px] w-[96%] px-5 sm:py-24 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col z-10 relative">
        <div className="absolute right-[0px] bottom-0 select-none w-[450px] h-[450px] z-0 overflow-hidden">
          <img src={partical1} className="w-[440px] h-[100%] select-none blur-[60px]" />
          
        </div>
        <div className="absolute right-[60px] bottom-[60px] select-none w-[150px] h-[150px] z-1">
          <img src={partical2} className="w-[100%] h-[100%] select-none " />
          
        </div>


          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-white mb-[12px]">
              <img src={logo} className="sm:w-[31px] w-[28px] select-none" />
              <h1 className="sm:text-[23px] text-[21px] pl-[6px] cursor-pointer text-white font-[600] mt-[5px] select-none">
                Badsh<span className="text-[#03BFFF]">a</span>
              </h1>
            </a>
            <p className="mt-2 text-sm text-[#ffffff9c] GeologicaFont">
            Badsha Internet Marketing Agency is a full-service digital marketing agency. Attract, Impress, and Convert more leads online and get results with Badsha Agency.
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center z-10 ">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="text-[15px] font-semibold text-white tracking-[1px] mb-3 GeologicaFont">
                Service
              </h2>
              <nav className="list-none mb-10 text-[#ffffff9c] text-[14px] GeologicaFont">
                <li className=" py-[5px]">
                  <a className="cursor-pointer">B2b Lead Generation</a>
                </li>
                <li className=" py-[5px]">
                  <a className="cursor-pointer">Email Marketing</a>
                </li>
                <li className=" py-[5px]">
                  <a className="cursor-pointer">Data Entry</a>
                </li>
                <li className=" py-[5px]">
                  <a className="cursor-pointer">Data Mining</a>
                </li>
                <li className=" py-[5px]">
                  <a className="cursor-pointer">Virtual Assistant</a>
                </li>
                <li className=" py-[5px]">
                  <a className="cursor-pointer">Cold Email Marketing</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="text-[15px] font-semibold text-white tracking-[1px] mb-3 GeologicaFont">
                Quick Links
              </h2>
              <nav className="list-none mb-10 text-[#ffffff9c] text-[14px] GeologicaFont">
                <li className=" py-[5px]">
                  <Link
                  to="About"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="cursor-pointer"
                  aria-current="page"
                >
                  About
                </Link>
                </li>
                <li className=" py-[5px]">
                  <Link
                  to="Service"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="cursor-pointer"
                  aria-current="page"
                >
                  Service
                </Link>
                </li>
                <li className=" py-[5px]">
                  <Link
                  to="Team"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="cursor-pointer"
                  aria-current="page"
                >
                  Team
                </Link>
                </li>
                <li className=" py-[5px]">
                  <Link
                  to="Contact"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="cursor-pointer"
                  aria-current="page"
                >
                  Contact
                </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full sm:px-0 px-4">
              <h2 className="text-[15px] font-semibold text-white tracking-[1px] mb-3 GeologicaFont">
                Stay Connected
              </h2>
              <nav className="list-none mb-10 text-[#ffffff9c] text-[14px] GeologicaFont">
                <li className="flex py-[5px] md:justify-start justify-center ">
                <IoLocationSharp className="text-[18px] mr-[5px] md:text-left text-center mt-[3px]" />
                  <a className="">
                    Bangladesh 
                    <br /> Rajshahi, Paba 6210
                  </a>
                </li>
                <li className="flex items-center py-[5px] md:text-left text-center  md:justify-start justify-center">
                <MdEmail className="text-[17px] mr-[6px]" />
                  <a className="">
                  badshapha@gmail.com
                  </a>
                </li>
                <li className="flex items-center py-[5px] md:text-left text-center  md:justify-start justify-center">
                <FaPhoneFlip className="text-[15px] mr-[6px]" />
                  <a className="">
                  +880 130 301 0014
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="">
          <div className="xl:w-[1230px] w-[96%] mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row items-center">
          <span className="inline-flex sm:hidden sm:ml-auto mt-[-2px] justify-center sm:justify-start z-10 pb-[10px] text-[15px]">
              <a href="" className="text-white cursor-pointer">
                Terms & Condition
              </a>
              <a href="" className="text-white ml-[10px] cursor-pointer">
                Privacy Policy
              </a>
            </span>

            <p className="text-[#ffffff9c] text-sm text-center sm:text-left">
              Designed with love by
              <a
                href=""
                rel="noopener noreferrer"
                className="text-[#ffffffd4] font-semibold mx-1"
                target="_blank"
              >
                Mr. Atikulla
              </a>
              2022
            </p>
            <span className="sm:inline-flex hidden sm:ml-auto mt-[-2px] justify-center sm:justify-start z-10">
              <a href="" className="text-white cursor-pointer">
                Terms & Condition
              </a>
              <a href="" className="text-white ml-[45px] cursor-pointer">
                Privacy Policy
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
