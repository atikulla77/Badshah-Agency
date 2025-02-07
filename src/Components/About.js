import React from "react";

import logo from "../image/badsha_Logo.png";
import bg from "../image/about.png";
import cercal_blue from "../image/carcal_blur_blue.png";
import cercal_parple from "../image/carcal_blur_parple.png";

import G_Partical from "../image/about_PP_1.png";

import web_kit_mask_main_image from "../image/about/web_kit_mask_main_image.png";
import image from "../image/about/image.jpg";
import raward from "../image/about/raward.png";
import MOHAROM_BADSHA_CV_DONE from "../image/MOHAROM_BADSHA_CV_DONE.jpg";

const About = () => {
  return (
    <main
      className={`w-full h-full relative sm5:pt-[4.5rem] pt-[3.5rem] desktop3:pb-[3rem] pb-[1rem] GeologicaFont bg-[#1E1345]`}
      id="About"
    >
      <div className="w-full text-center text-white relative z-10 sm2:pb-[45px] pb-[15px]">
        <p className="text-[#03BFFF] sm2:text-[15px] sm4:text-[13px] text-[12px] sm4:w-[385px] w-[285px] mx-auto sm4:leading-[20px] leading-[16px]">
          About Me
        </p>
        <h1 className="sm2:text-[30px] sm4:text-[25px] text-[22px] font-semibold">
          A Passionate Expart
        </h1>
      </div>
      <div className="mx-auto xl:w-[1230px] w-[96%] h-[100%] relative z-[1] flex justify-center items-center">
        <div className="absolute sm:left-[-150px] left-[-75px] sm:top-[-200px] sm5:top-[-145px] top-[-95px] z-0 select-none sm:w-[320px] sm5:w-[250px] w-[190px] sm:h-[320px] sm5:h-[250px] h-[190px] flex  overflow-hidden">
          <img
            src={G_Partical}
            className="w-[310px] h-[100%] select-none opacity-[0.5]"
          />
        </div>
        <div className="flex desktop3:flex-row flex-wrap w-full xl:py-0 py-[1.3rem] lg:justify-around desktop3:justify-between justify-center text-black z-10">
          <div className="stext1:w-[615px] lg:w-[500px] sm5:w-[450px] sm4:w-[370px] sm3:w-[330px] w-[300px] stext1:h-[600px] lg:h-[550px] sm5:h-[480px] sm4:h-[400px] sm3:h-[375px] h-[360px] flex justify-center relative">
            <div
              className={`absolute top-0 right-0 stext1:w-[350px] lg:w-[300px] sm5:w-[250px] sm4:w-[220px] sm3:w-[200px] w-[190px] stext1:h-[480px] lg:h-[430px] sm5:h-[370px] sm4:h-[320px] sm3:h-[295px] h-[285px] overflow-hidden flex justify-center items-center sm5:rounded-[15px] rounded-[10px]`}
            >
              <img
                src={image}
                className={` w-[100%]`}
                style={{ transition: "1s" }}
                alt=""
              />
            </div>
            <div
              className={`absolute stext1:top-[23%] sm5:top-[34%] sm4:top-[40.1%] sm3:top-[42.1%] top-[43.5%] stext1:left-[16%] lg:left-[15%] sm5:left-[20%] sm4:left-[16%] sm3:left-[15%] left-[12%] stext1:w-[130px] lg:w-[110px] sm5:w-[90px] sm4:w-[75px] sm3:w-[70px] w-[65px] stext1:h-[130px] lg:h-[110px] sm5:h-[90px] sm4:h-[75px] sm3:h-[70px] h-[65px] overflow-hidden flex justify-center items-center sm5:rounded-[15px] rounded-[10px]`}
              data-aos="zoom-out"
            >
              <img
                src={raward}
                className={`w-[100%]`}
                style={{ transition: "1s" }}
                alt=""
              />
            </div>
            <div
              className={`absolute bottom-0 left-0 stext1:w-[350px] lg:w-[280px] sm5:w-[250px] sm4:w-[200px] sm3:w-[190px] w-[170px] stext1:h-[300px] lg:h-[240px] sm5:h-[210px] sm4:h-[150px] sm3:h-[137px] h-[130px] z-[1] sm5:rounded-[15px] rounded-[10px] overflow-hidden`}
            >
              <img
                src={web_kit_mask_main_image}
                className={`w-[100%]`}
                style={{ transition: "1s" }}
                alt=""
              />
            </div>
            <div
              className={`absolute lg:bottom-[8px] sm5:bottom-[11px] bottom-[8px] right-[0px] stext1:w-[250px] lg:w-[205px] sm5:w-[190px] sm4:w-[160px] sm3:w-[130px] w-[124px] lg:h-[100px] sm5:h-[85px] sm3:h-[62px] h-[60px] z-[1] overflow-hidden flex items-center`}
            >
              <div className="h-full lg:w-[8px] sm4:w-[5px] w-[4px] bg-[#03BFFF]"></div>
              <div className="flex items-center text-white sm4:pl-[17px] pl-[7px]"
              data-aos="fade-right">
                <h1 className="lg:text-[55px] sm5:text-[50px] text-[40px] sm5:font-bold font-semibold">
                  6
                </h1>
                <h1 className="sm4:pl-[10px] pl-[5px] lg:text-[20px] sm5:text-[18px] sm4:text-[15px] sm3:text-[14px] text-[13px] sm3:font-bold font-semibold lg:leading-[25px] sm5:leading-[21px] sm3:leading-[18px] leading-[17px]">
                  Successful <br />
                  Years
                </h1>
              </div>
            </div>
          </div>
          <div
            className="desktop4:w-[465px] desktop3:w-[415px] sm2:w-[530px] w-[98%] text-white desktop3:text-left text-center desktop3:mt-[0px] mt-[40px] relative"
            data-aos="zoom-in"
          >
            <p className="text-[20px] font-bold z-10 relative">My Bio</p>
            <p className="sm2:text-[15px] sm5:text-[14px] text-[13px] sm2:font-extralight font-thin text-[#ffffffab] pt-[13px] sm2:tracking-[0.3px] tracking-[0.2px] sm2:leading-[21px] leading-[18px] z-10 relative">
              {/* Duis aute irure dolor in reprehenderit in voluptate velit esse
              <br className="xl:flex hidden" />
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat
              <br className="xl:flex hidden" />
              cupidatat non proident, sunt in culpa qui officia dese runt mollit
              <br className="xl:flex hidden" />
              anim id est laborum velit esse cillum dolore eu fugiat nulla pari
              <br className="xl:flex hidden" />
              etu epteur culpa qui official dese */}
              <span className="text-sm font-light  ">
                I'am a Profesonal{" "}
                <span className="font-semibold">Lead Generation Expert</span>{" "}
                With over 6 years of combined experience. we've got a
                well-seasoned team at the helm
              </span>
              <br />
              <span className="text-sm font-light  ">
                Always available for freelance work if the right project
                <br className="sm5:flex hidden" /> comes along, Feel free to
                contact me!
              </span>
              <br />
              <span className="pt-[2px] mb-6 text-sm font-light ">
                You can Order me in{" "}
                <span className="font-semibold">Fiver, UpWork</span>
              </span>
            </p>
            <div className="border-[2px] border-[#ffffff42] w-full desktop4:h-[230px] desktop3:h-[200px] sm5:h-[230px] sm3:h-[200px] h-[392px] rounded-[15px] sm3:flex block mt-[20px] mb-[22px] sm3:pt-0 pt-[20px] z-10 relative">
              <div className="sm3:w-[50%] w-[100%] sm3:h-full h-[180px] sm3:border-r-[1px] border-[0px] border-r-[#ffffff42] desktop4:pl-[35px] desktop3:pl-[25px] sm5:pl-[35px] sm3:pl-[18px] pl-[25px] desktop4:py-[25px] sm5:py-[15px] sm3:py-[10px] py-0 flex flex-wrap items-center text-left justify-start">
                <div className="w-full h-[50px]">
                  <p className="text-[15px] font-semibold">Name</p>
                  <p className="text-[14px] font-extralight text-[#ffffffab]">
                    Moharom Badsha
                  </p>
                </div>
                <div className="w-full h-[50px]">
                  <p className="text-[15px] font-semibold">Email</p>
                  <p className="text-[14px] font-extralight text-[#ffffffab]">
                    badshapha@gmail.com
                  </p>
                </div>
                <div className="w-full h-[50px]">
                  <p className="text-[15px] font-semibold">Phone</p>
                  <p className="text-[14px] font-extralight text-[#ffffffab]">
                    +880 130 301 0014
                  </p>
                </div>
              </div>
              <div className="sm3:w-[50%] w-[100%] sm3:h-full h-[180px] sm3:border-l-[1px] border-[0px] border-l-[#ffffff42] desktop4:pl-[35px] desktop3:pl-[25px] sm5:pl-[35px] sm3:pl-[18px] pl-[25px] desktop4:py-[25px] sm5:py-[15px] sm3:py-[10px] py-0 flex flex-wrap items-center text-left justify-start">
                <div className="w-full h-[50px]">
                  <p className="text-[15px] font-semibold">Address</p>
                  <p className="text-[14px] font-extralight text-[#ffffffab]">
                    Rajshahi, Paba 6210
                  </p>
                </div>
                <div className="w-full h-[50px]">
                  <p className="text-[15px] font-semibold">DOB</p>
                  <p className="text-[14px] font-extralight text-[#ffffffab]">
                    June 21, 1998
                  </p>
                </div>
                <div className="w-full h-[50px]">
                  <p className="text-[15px] font-semibold">Freelance</p>
                  <p className="text-[14px] font-extralight text-[#ffffffab]">
                    Available
                  </p>
                </div>
              </div>
            </div>
            <a
              download
              href={MOHAROM_BADSHA_CV_DONE}
              target="_blank"
              className="text-[14px] px-[22px] py-[8px] rounded-[50px] hover:bg-transparent bg-[#03BFFF] text-[#fff] hover:text-[#03BFFF] border-[2px] border-[#03BFFF] transition-[0.4s] z-10 relative"
            >
              Download CV
            </a>
            <div className="absolute right-[0px] bottom-[0px] z-0 select-none flex w-[320px] h-[320px] overflow-hidden rounded-[50%]">
              <img
                src={cercal_parple}
                className="w-[310px] h-[100%] select-none blur-[60px]"
              />
            </div>
          </div>
        </div>

        <div className="absolute right-0 top-[-100px] z-0 select-none w-[320px] h-[320px] flex overflow-hidden rounded-[50%]">
          <img
            src={cercal_parple}
            className="w-[310px] h-[100%] select-none blur-[60px]"
          />
        </div>
        <div className="absolute left-0 top-[-100px] z-0 select-none sm2:w-[320px] w-[200px] sm2:h-[320px] h-[200px] flex overflow-hidden rounded-[50%]">
          <img
            src={cercal_blue}
            className=" select-none sm2:w-[310px] w-[190px] h-[100%] blur-[30px]"
          />
        </div>
        <div className="absolute left-[50%] top-[0px] z-0 select-none w-[320px]  h-[320px] desktop3:flex hidden overflow-hidden rounded-[50%]">
          <img
            src={cercal_blue}
            className=" select-none w-[310px] h-[100%] blur-[30px]"
          />
        </div>
        <div className="absolute desktop4:right-[45%] right-[20%] top-[0px] z-0 select-none flex w-[320px] h-[320px] overflow-hidden rounded-[50%]">
          <img
            src={cercal_parple}
            className="w-[310px] h-[100%] select-none blur-[60px]"
          />
        </div>
      </div>
    </main>
  );
};

// const About = () => {
//   return (
//     <main
//       className={`w-full md:h-[100vh] h-full  relative py-[4.5rem] QuicksandFont bg-[#1E1345]`}
//     >
//       <div className="xl:w-[1230px] w-[96%] relative z-[1] flex flex-wrap justify-between items-center mx-auto xl:gap-0 gap-[30px] mt-[3.5rem]">
//         <div className="absolute left-[-150px] top-[-200px] z-0 select-none w-[320px] h-[320px] desktop3:flex hidden overflow-hidden">
//           <img
//             src={G_Partical}
//             className="w-[310px] h-[100%] select-none"
//           />
//         </div>

//         <div className="w-[50%]">

//         </div>
//         <div className="w-[50%]">

//         </div>

//       </div>
//     </main>
//   );
// };

export default About;
