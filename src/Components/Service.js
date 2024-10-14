import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faDisplay,
  faPenToSquare,
  faCameraRetro,
  faCubes,
  faChartPie,
} from "@fortawesome/free-solid-svg-icons";
import "./Service.css";
import cercal_blue from "../image/carcal_blur_blue.png";
import cercal_parple from "../image/carcal_blur_parple.png";

const Service = () => {
  const serviceCardList = [
    {
      id: 1,
      tittle: "Lead Generation",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque.",
    },
    {
      id: 2,
      tittle: "Email Marketing",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque.",
    },
    {
      id: 3,
      tittle: "Data Entry",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque.",
    },
    {
      id: 4,
      tittle: "Data Mining",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque.",
    },
    {
      id: 5,
      tittle: "Virtual Assistant",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque.",
    },
    {
      id: 6,
      tittle: "Cold Email Marketing",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque.",
    },
  ];

  return (
    <section
      className="S_Main_Section bg-[#1E1345] GeologicaFont h-full w-full grid place-items-center pt-[3rem] pb-[1rem]"
      id="Service"
    >
      <div className="w-full text-center text-white relative z-10 sm2:pb-[35px] sm5:pb-[15px] pb-[40px]">
        <h1 className="sm2:text-[30px] sm4:text-[25px] text-[22px] font-semibold">
          Service
        </h1>
        <p className="text-[#03BFFF] sm2:text-[15px] text-[13px] sm2:w-[320px] w-[265px] mx-auto sm2:leading-[20px] leading-[18px]">
          We Provide The Best In Class Services For Our Customers
        </p>
      </div>
      <div className="S_Row flex flex-wrap justify-between xl:w-[1230px] md2:w-[815px] sm5:w-[400px] w-[310px] relative">
        <div className="mx-auto relative z-10" data-aos="fade-right">
          <div className="S_Card mx-auto  sm5:w-[390px] sm3:w-[310px] w-[290px] sm5:h-[280px] h-[250px] sm5:p-[2em_1.5em] sm3:p-[2em_1em] p-[2em_10px] rounded-[5px] cursor-pointer grid justify-center text-center mb-[25px]">
            <div
              className="S_Icon_Wrapper    bg-[#03BFFF] relative m-auto text-[30px] sm5:h-[2.5em] h-[2em] sm5:w-[2.5em] w-[2em] text-[#ffffff] rounded-[50%] grid place-items-center"
              style={{ transition: "0.5s" }}
            >
              <FontAwesomeIcon
                icon={faDisplay}
                className="sm5:text-[30px] text-[24px]"
              />
            </div>
            <div className="sm5:h-[130px] h-[110px]">
            <p className="sm3:text-[20px] text-[18px] font-[600] text-[#fff] pt-[10px]">
              Lead Generation
            </p>
            <p className="text-[#d8d8d8] sm5:text-[15px] sm3:text-[13px] text-[12px] sm5:leading-[1.4] sm3:leading-[1.2] leading-[1.3] tracking-[0.03em] mt-[0]">
              Lead Generation the process of generating consumer interest for a
              product or service with the goal of turning that interest into a
              sale.
            </p>
            </div>
          </div>
        </div>
        <div className="mx-auto relative z-10">
          <div className="S_Card mx-auto  sm5:w-[390px] sm3:w-[310px] w-[290px] sm5:h-[280px] h-[250px] sm5:p-[2em_1.5em] sm3:p-[2em_1em] p-[2em_10px] rounded-[5px] cursor-pointer grid justify-center text-center mb-[25px]">
            <div
              className="S_Icon_Wrapper    bg-[#03BFFF] relative m-auto text-[30px] sm5:h-[2.5em] h-[2em] sm5:w-[2.5em] w-[2em] text-[#ffffff] rounded-[50%] grid place-items-center"
              style={{ transition: "0.5s" }}
            >
              <FontAwesomeIcon
                icon={faDisplay}
                className="sm5:text-[30px] text-[24px]"
              />
            </div>
            <div className="sm5:h-[130px] h-[110px]">
            <p className="sm3:text-[20px] text-[18px] font-[600] text-[#fff] pt-[10px]">
              Email Marketing
            </p>
            <p className="text-[#d8d8d8] sm5:text-[15px] sm3:text-[13px] text-[12px] sm5:leading-[1.4] sm3:leading-[1.2] leading-[1.3] tracking-[0.03em] mt-[0]">
              Email marketing is typically used to create product or brand
              awareness and generate leads or sales.
            </p>
            </div>
          </div>
        </div>
        <div className="mx-auto relative z-10" data-aos="fade-down-right">
          <div className="S_Card mx-auto  sm5:w-[390px] sm3:w-[310px] w-[290px] sm5:h-[280px] h-[250px] sm5:p-[2em_1.5em] sm3:p-[2em_1em] p-[2em_10px] rounded-[5px] cursor-pointer grid justify-center text-center mb-[25px]">
            <div
              className="S_Icon_Wrapper    bg-[#03BFFF] relative m-auto text-[30px] sm5:h-[2.5em] h-[2em] sm5:w-[2.5em] w-[2em] text-[#ffffff] rounded-[50%] grid place-items-center"
              style={{ transition: "0.5s" }}
            >
              <FontAwesomeIcon
                icon={faDisplay}
                className="sm5:text-[30px] text-[24px]"
              />
            </div>
            <div className="sm5:h-[130px] h-[110px]">
            <p className="sm3:text-[20px] text-[18px] font-[600] text-[#fff] pt-[10px]">
              Data Entry
            </p>
            <p className="text-[#d8d8d8] sm5:text-[15px] sm3:text-[13px] text-[12px] sm5:leading-[1.4] sm3:leading-[1.2] leading-[1.3] tracking-[0.03em] mt-[0]">
              Data Entry specialist means that they have to type information
              into an electronic format and create spreadsheets with large
              figures of numbers.
            </p>
            </div>
          </div>
        </div>
        <div className="mx-auto relative z-10" data-aos="fade-right">
          <div className="S_Card mx-auto  sm5:w-[390px] sm3:w-[310px] w-[290px] sm5:h-[280px] h-[250px] sm5:p-[2em_1.5em] sm3:p-[2em_1em] p-[2em_10px] rounded-[5px] cursor-pointer grid justify-center text-center mb-[25px]">
            <div
              className="S_Icon_Wrapper    bg-[#03BFFF] relative m-auto text-[30px] sm5:h-[2.5em] h-[2em] sm5:w-[2.5em] w-[2em] text-[#ffffff] rounded-[50%] grid place-items-center"
              style={{ transition: "0.5s" }}
            >
              <FontAwesomeIcon
                icon={faDisplay}
                className="sm5:text-[30px] text-[24px]"
              />
            </div>
            <div className="sm5:h-[130px] h-[110px]">
            <p className="sm3:text-[20px] text-[18px] font-[600] text-[#fff] pt-[10px]">
              Data Mining
            </p>
            <p className="text-[#d8d8d8] sm5:text-[15px] sm3:text-[13px] text-[12px] sm5:leading-[1.4] sm3:leading-[1.2] leading-[1.3] tracking-[0.03em] mt-[0]">
              Data Mining process of uncovering patterns and other valuable
              information from large data sets.
            </p>
            </div>
          </div>
        </div>
        <div className="mx-auto relative z-10">
          <div className="S_Card mx-auto  sm5:w-[390px] sm3:w-[310px] w-[290px] sm5:h-[280px] h-[250px] sm5:p-[2em_1.5em] sm3:p-[2em_1em] p-[2em_10px] rounded-[5px] cursor-pointer grid justify-center text-center mb-[25px]">
            <div
              className="S_Icon_Wrapper    bg-[#03BFFF] relative m-auto text-[30px] sm5:h-[2.5em] h-[2em] sm5:w-[2.5em] w-[2em] text-[#ffffff] rounded-[50%] grid place-items-center"
              style={{ transition: "0.5s" }}
            >
              <FontAwesomeIcon
                icon={faDisplay}
                className="sm5:text-[30px] text-[24px]"
              />
            </div>
            <div className="sm5:h-[130px] h-[110px]">
            <p className="sm3:text-[20px] text-[18px] font-[600] text-[#fff] pt-[10px]">
              Virtual Assistant
            </p>
            <p className="text-[#d8d8d8] sm5:text-[15px] sm3:text-[13px] text-[12px] sm5:leading-[1.4] sm3:leading-[1.2] leading-[1.3] tracking-[0.03em] mt-[0]">
              Virtual Assistant is a self-employed worker who specializes in
              offering administrative services to clients from a remote
              location, usually a home office.
            </p>
            </div>
          </div>
        </div>
        <div className="mx-auto relative z-10" data-aos="fade-down-right">
          <div className="S_Card mx-auto  sm5:w-[390px] sm3:w-[310px] w-[290px] sm5:h-[280px] h-[250px] sm5:p-[2em_1.5em] sm3:p-[2em_1em] p-[2em_10px] rounded-[5px] cursor-pointer grid justify-center text-center mb-[25px]">
            <div
              className="S_Icon_Wrapper    bg-[#03BFFF] relative m-auto text-[30px] sm5:h-[2.5em] h-[2em] sm5:w-[2.5em] w-[2em] text-[#ffffff] rounded-[50%] grid place-items-center"
              style={{ transition: "0.5s" }}
            >
              <FontAwesomeIcon
                icon={faDisplay}
                className="sm5:text-[30px] text-[24px]"
              />
            </div>
            <div className="sm5:h-[130px] h-[110px]">
            <p className="sm3:text-[20px] text-[18px] font-[600] text-[#fff] pt-[10px]">
              Cold Email Marketing
            </p>
            <p className="text-[#d8d8d8] sm5:text-[15px] sm3:text-[13px] text-[12px] sm5:leading-[1.4] sm3:leading-[1.2] leading-[1.3] tracking-[0.03em] mt-[0] ">
              Cold email marketing is reaching out to prospects you don't know
              by email rather than by cold calling, messages on social media, or
              any other method.
            </p>
            </div>
          </div>
        </div>

        <div className="absolute right-0 sm2:bottom-[-100px] bottom-0 z-0 select-none w-[320px] h-[320px] flex overflow-hidden rounded-[50%]">
          <img
            src={cercal_parple}
            className="w-[310px] h-[100%] select-none blur-[60px]"
          />
        </div>
        <div className="absolute desktop3:left-0 left-[-100px] desktop3:top-[0px] top-0 z-0 select-none w-[390px]  h-[390px] flex overflow-hidden rounded-[50%]">
          <img
            src={cercal_parple}
            className=" select-none w-[380px] h-[100%] blur-[30px]"
          />
        </div>
        <div className="absolute left-[50%] top-[50px] z-0 select-none w-[390px]  h-[320px] desktop3:flex hidden  overflow-hidden rounded-[50%]">
          <img
            src={cercal_blue}
            className=" select-none w-[380px] h-[100%] blur-[30px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Service;
