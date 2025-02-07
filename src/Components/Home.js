import React, { useState } from "react";
import Navber from "./Navber";
import profilePhoto from "../image/web-photo_Badsha.png";
import bg from "../image/home_P_1.png";

// partical s
import partical1 from "../image/home_partical_1.png";
import partical2 from "../image/home_partical_2.png";
import partical3 from "../image/home_partical_3.png";
import partical4 from "../image/home_partical_4.png";
import protfoliodesignHi from "../image/protfolio-design-Hi.png";

import { TbBrandFiverr } from "react-icons/tb";
import { FiLinkedin } from "react-icons/fi";
import { FaUpwork } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";

import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { Link } from "react-scroll";
import main_image from "../image/Skype_Picture.jpeg";

function Home() {
  const [countState, setCountState] = useState();
  return (
    <div className="w-full h-full relative" name="Home">
      <Navber />
      <div className="absolute left-0 top-0 z-0 select-none w-[100%] h-full">
        <img src={bg} className="w-[100%] h-[100%] select-none" />
      </div>

      {/* particals */}

      <div className="xl:w-[1230px] w-[96%] h-[100%] flex desktop3:flex-row flex-col justify-between items-center mx-auto md:pt-[120px] pt-[85px] relative">
        <div
          className="md:w-[60%] w-[90%] h-[100%] flex desktop3:hidden justify-center items-center z-10 mx-auto"
          // data-aos="zoom-out"
        >
          <img
            src={profilePhoto}
            className="w-[95%] h-[95%] rounded-[50%] border-[7px] border-[#03BFFF] p-[7px]"
          />
        </div>

        {/* ````````````````````````````````````````````````````particals```````````````````````````````````````````````````` */}
        <div className="absolute sm2:left-[0px] sm3:left-[-20px] left-[-25px] sm2:top-[180px] top-[130px] z-0 select-none stext1:w-[150px] sm:w-[130px] sm3:w-[105px] w-[90px] rotate-[-46deg] flex desktop3:hidden">
          <img src={partical3} className="w-[100%] h-[100%] select-none" />
        </div>
        <div
          className="desktop3:w-[60%] md:w-[90%] w-[100%] z-10 GeologicaFont text-white relative desktop3:text-left text-center desktop3:pt-0 pt-[35px]"
          data-aos="fade-right"
        >
          {/* particals */}
          <div className="absolute md:left-[30px] left-[35px] md:top-[50px] top-[-30px] z-0 select-none stext1:w-[65px] sm:w-[55px] w-[45px] flex desktop3:hidden">
            <img src={partical1} className="w-[100%] h-[100%] select-none" />
          </div>

          <div className="absolute right-[65px] top-[-25px] z-0 select-none w-[50px]">
            <img src={partical4} className="w-[100%] h-[100%] select-none" />
          </div>

          <p className="sm2:text-[19px] sm3:text-[18px] text-[16px] KarlaFont">
            Welcome To
          </p>
          {/* <h1 className="stext1:text-[25px] stext2:text-[22px] text-[20px]">
            Hello Buyers,
          </h1> */}

          {/* <h1 className="stext1:text-[42px] stext2:text-[39px] sm2:text-[35px] text-[30px] font-[800] stext2:w-full desktop3:w-[545px] sm:w-[545px] w-full desktop3:mx-0 mx-auto">
            I am A{" "}
            <span className="text-[#03BFFF]">Lead Generation Expert.</span>
          </h1> */}
          <h1 className="stext1:text-[65px] stext2:text-[65px] sm:text-[65px] sm2:text-[55px] sm3:text-[45px] text-[35px] font-[800] desktop3:mx-[] mx-auto text-[#03BFFF] stext2:leading-[75px] sm:leading-[65px] sm2:leading-[60px] sm3:leading-[50px] leading-[36px] ml-[-5px] sm:pb-[11px] pb-[8px]">
            <span className="text-white">Badsha</span> Agency
          </h1>
          <p className="stext2:w-[589px] sm:w-[500px] w-[98%] stext1:text-[16px] sm3:text-[15px] text-[13px] desktop3:mx-0 mx-auto leading-[25px] KarlaFont">
            New York Besed{" "}
            <span className="font-semibold">Lead Generation Expert</span>
          </p>
          <p className="stext2:w-[589px] sm:w-[500px] w-[98%] stext1:text-[16px] sm3:text-[15px] text-[13px] desktop3:mx-0 mx-auto sm3:leading-[25px] leading-[20px] KarlaFont">
            Im here for helping you to reach your Target. I'm well experienced
            in B2b Lead Generation, Contact List, Email list building, Prospect
            list building, and Web Research.
          </p>
          {/* <p className="stext2:w-[589px] sm:w-[500px] w-[98%] stext1:text-[16px] text-[15px] desktop3:mx-0 mx-auto leading-[25px]">
            New York Besed <span className="font-semibold">Lead Generation Expert</span>
          </p> */}
          <div className="flex desktop3:justify-start justify-center items-center pt-[20px] desktop3:mx-0 mx-auto">
            <Link
              to="Contact"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              aria-current="page"
              className="sm2:text-[15px] sm3:text-[13px] text-[11px] sm2:px-[28px] sm3:px-[23px] px-[12px] sm2:py-[10px] py-[9px] border-[2px] rounded-[50px] border-[#03BFFF] text-[#03BFFF] social_icon_hover transition-[0.3s] cursor-pointer KarlaFont font-[600]"
            >
              Get Connected
            </Link>
            <a
              href="https://www.fiverr.com/hapshakhatun"
              target="_blank"
              className="sm2:w-[40px] sm3:w-[38px] w-[35px] sm2:h-[40px] sm3:h-[38px] h-[35px] sm3:ml-[10px] ml-[8px] sm3:mr-[5px] mr-[3px] border-[2px] border-[#03BFFF] text-[#03BFFF] flex justify-center items-center rounded-[50%] cursor-pointer social_icon_hover transition-[0.3s]"
            >
              <TbBrandFiverr className="sm2:text-[22px] sm3:text-[20px] text-[18px]" />
            </a>
            <a
              href="https://www.linkedin.com/in/md-moharom-5bab5b161/"
              target="_blank"
              className="sm2:w-[40px] sm3:w-[38px] w-[35px] sm2:h-[40px] sm3:h-[38px] h-[35px] sm3:mx-[5px] mx-[3px] border-[2px] border-[#03BFFF] text-[#03BFFF] flex justify-center items-center rounded-[50%] cursor-pointer social_icon_hover transition-[0.3s]"
            >
              <FiLinkedin className="sm2:text-[19px] sm3:text-[17px] text-[15px]" />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~0125a8b16776daf98f"
              target="_blank"
              className="sm2:w-[40px] sm3:w-[38px] w-[35px] sm2:h-[40px] sm3:h-[38px] h-[35px] sm3:mx-[5px] mx-[3px] border-[2px] border-[#03BFFF] text-[#03BFFF] flex justify-center items-center rounded-[50%] cursor-pointer social_icon_hover transition-[0.3s]"
            >
              <FaUpwork className="sm2:text-[21px] sm3:text-[19px] text-[17px] ml-[2px] mt-[2px]" />
            </a>
            <a
              href="https://www.facebook.com/moharom.badsha"
              target="_blank"
              className="sm2:w-[40px] sm3:w-[38px] w-[35px] sm2:h-[40px] sm3:h-[38px] h-[35px] sm3:ml-[5px] ml-[3px] border-[2px] border-[#03BFFF] text-[#03BFFF] flex justify-center items-center rounded-[50%] cursor-pointer social_icon_hover transition-[0.3s]"
            >
              <FiFacebook className="sm2:text-[20px] sm3:text-[18px] text-[16px] sm2:ml-[-3px] ml-[-1px]" />
            </a>
          </div>
        </div>
        <div
          className="w-[40%] h-[100%] desktop3:flex hidden justify-center items-center z-10"
          // data-aos="fade-down"
        >
          <img
            src={profilePhoto}
            className="w-[90%] h-[90%] rounded-[50%] border-[10px] border-[#03BFFF] p-[10px]"
          />
        </div>

        {/* ````````````````````````````````````````````````````particals```````````````````````````````````````````````````` */}
        <div className="absolute right-[48%] bottom-[-50px] z-0 select-none stext1:w-[65px] w-[55px] desktop3:flex hidden">
          <img src={partical1} className="w-[100%] h-[100%] select-none" />
        </div>
        <div className="absolute desktop1:right-[-60px] right-0 sm3:top-[85px] top-[70px] z-0 select-none stext1:w-[120px] sm:w-[100px] sm3:w-[80px] w-[65px]">
          <img src={partical2} className="w-[100%] h-[100%] select-none" />
        </div>
        <div className="absolute desktop1:left-[-125px] left-[-70px] desktop1:top-[160px] top-[125px] z-0 select-none stext1:w-[150px] w-[130px] rotate-[-46deg] desktop3:flex hidden">
          <img src={partical3} className="w-[100%] h-[100%] select-none" />
        </div>
        <div className="absolute desktop2:right-[-45px] desktop3:right-[-20px] sm:right-0 right-[-5px] desktop2:bottom-[-25px] desktop3:bottom-[-50px] sm:bottom-0 bottom-[50px] z-0 select-none stext1:w-[150px] sm:w-[130px] w-[100px] rotate-[50deg]">
          <img src={partical3} className="w-[100%] h-[100%] select-none" />
        </div>
        <div className="absolute left-[-35px] bottom-[25px] z-0 select-none w-[50px]">
          <img src={partical4} className="w-[100%] h-[100%] select-none" />
        </div>
        <div className="absolute right-[38%] bottom-[-60px] z-0 select-none w-[50px]">
          <img src={partical4} className="w-[100%] h-[100%] select-none" />
        </div>
        <div
          className="absolute right-[35%] top-[26%] z-0 select-none w-[310px] desktop3:flex hidden"
          data-aos="zoom-in"
        >
          <img
            src={protfoliodesignHi}
            className="w-[100%] h-[100%] select-none"
          />
        </div>
        {/* ````````````````````````````````````````````````````particals```````````````````````````````````````````````````` */}
      </div>
      <div className="relative w-full text-white">
        <ScrollTrigger
          onEnter={() => setCountState(true)}
          onExit={() => setCountState(false)}
        >
          <div className="xl:w-[1180px] sm:w-[100%] w-[98%] md:h-[200px] sm:h-[100px] sm2:h-[100px] sm3:h-[105px] h-[100px] flex justify-around items-center mx-auto GeologicaFont md:mt-0 mt-[40px] desktop3:pt-[50px] pt-[0px]">
            <div className="sm2:flex block items-center sm2:text-left text-center md:w-[160px] sm:w-[145px] sm2:w-[120px] sm3:w-[85px] w-[73px]">
              <p className="md:text-[55px] sm:text-[50px] sm2:text-[45px] sm3:text-[35px] text-[26px] font-bold sm:pr-[15px] sm2:pr-[10px] pr-0">
                {countState && (
                  <CountUp start={0} end={7} duration={3.75}/>
                )}
              </p>
              <p className="md:text-[20px] sm:text-[18px] sm3:text-[15px] text-[13px] sm:w-[105px] sm3:w-[80px] w-full sm:leading-[22px] sm3:leading-[19px] leading-[17px] sm2:mx-0 mx-auto">
                Years of Experience
              </p>
            </div>
            <div className="sm2:flex block items-center sm2:text-left text-center md:w-[300px] sm:w-[270px] sm2:w-[232px] sm3:w-[110px] w-[83px]">
              <p className="md:text-[55px] sm:text-[50px] sm2:text-[45px] sm3:text-[35px] text-[26px] font-bold sm:pr-[15px] sm2:pr-[10px] pr-0 flex">
                {countState && (
                  <CountUp start={0} end={3021} duration={3.75}/> 
                )} +
              </p>
              <p className="md:text-[20px] sm:text-[18px] sm3:text-[15px] text-[13px] sm:w-[105px] sm3:w-[80px] w-full sm:leading-[22px] sm3:leading-[19px] leading-[17px] sm2:mx-0 mx-auto">
                Project Completed
              </p>
            </div>
            <div className="sm2:flex block items-center sm2:text-left text-center md:w-[200px] sm:w-[185px] sm2:w-[160px] sm3:w-[85px] w-[73px]">
              <p className="md:text-[55px] sm:text-[50px] sm2:text-[45px] sm3:text-[35px] text-[26px] font-bold sm:pr-[15px] sm2:pr-[10px] pr-0 flex">
                {countState && (
                  <CountUp start={0} end={2} duration={3.75}/> 
                )} .
                {countState && (
                  <CountUp start={0} end={9} duration={3.75}/> 
                )}K
              </p>
              <p className="md:text-[20px] sm:text-[18px] sm3:text-[15px] text-[13px] sm:w-[105px] sm3:w-[80px] w-full sm:leading-[22px] sm3:leading-[19px] leading-[17px] sm2:mx-0 mx-auto">
                Happy Client
              </p>
            </div>
          </div>
        </ScrollTrigger>
      </div>
      <div className="xl:w-[1230px] w-[100%] px-5 mx-auto desktop3:pt-[1rem] md:pt-0 pt-[2rem] pb-[1rem] relative">
        <img src={main_image} className="w-full object-cover" />
      </div>
    </div>
  );
}

export default Home;
