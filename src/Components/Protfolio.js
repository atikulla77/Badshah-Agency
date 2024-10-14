import React from "react";
import { useState } from "react";

import LeadGenerationProtfolioImage1 from "../image/Portfolio/Lead_Generation_P/l_g_P_1.jpg";
import LeadGenerationProtfolioImage2 from "../image/Portfolio/Lead_Generation_P/l_g_P_2.jpg";
import LeadGenerationProtfolioImage3 from "../image/Portfolio/Lead_Generation_P/l_g_P_3.jpg";
import LeadGenerationProtfolioImage5 from "../image/Portfolio/Lead_Generation_P/l_g_P_5.jpg";
import LeadGenerationProtfolioImage6 from "../image/Portfolio/Lead_Generation_P/l_g_P_6.jpg";
import LeadGenerationProtfolioImage7 from "../image/Portfolio/Lead_Generation_P/l_g_P_7.jpg";
import LeadGenerationProtfolioImage8 from "../image/Portfolio/Lead_Generation_P/l_g_P_8.jpg";
import LeadGenerationProtfolioImage9 from "../image/Portfolio/Lead_Generation_P/l_g_P_9.jpg";
import LeadGenerationProtfolioImage10 from "../image/Portfolio/Lead_Generation_P/l_g_P_10.jpg";
import LeadGenerationProtfolioImage11 from "../image/Portfolio/Lead_Generation_P/l_g_P_11.jpg";
import LeadGenerationProtfolioImage12 from "../image/Portfolio/Lead_Generation_P/l_g_P_12.jpg";
import LeadGenerationProtfolioImage13 from "../image/Portfolio/Lead_Generation_P/l_g_P_13.jpg";

import DataEntryProtfolioImage1 from "../image/Portfolio/Data_Entry_P/d_e_P_1.jpg";
import DataEntryProtfolioImage2 from "../image/Portfolio/Data_Entry_P/d_e_P_2.jpg";
import DataEntryProtfolioImage3 from "../image/Portfolio/Data_Entry_P/d_e_P_3.jpg";

import DataMiningProtfolioImage1 from "../image/Portfolio/Data_Mining_P/d_m_P_1.jpg";
import DataMiningProtfolioImage2 from "../image/Portfolio/Data_Mining_P/d_m_P_2.jpg";

import EmailMarketingProtfolioImage1 from "../image/Portfolio/Email_Marketion_P/e_m_P_1.jpg";
import EmailMarketingProtfolioImage2 from "../image/Portfolio/Email_Marketion_P/e_m_P_2.jpg";


const Protfolio = () => {
  const AllCatagoryCard = [
    { id: 1_1, img: LeadGenerationProtfolioImage1, catagoryName: "Lead Generation" },
    { id: 1_2, img: LeadGenerationProtfolioImage2, catagoryName: "Lead Generation" },
    { id: 1_3, img: LeadGenerationProtfolioImage3, catagoryName: "Lead Generation" },
    { id: 1_5, img: LeadGenerationProtfolioImage5, catagoryName: "Lead Generation" },
    // Data Mining
    { id: 1_20, img: DataMiningProtfolioImage2, catagoryName: "Data Mining" },
    { id: 1_6, img: LeadGenerationProtfolioImage6, catagoryName: "Lead Generation" },
    // Email Marketing
    { id: 1_14, img: EmailMarketingProtfolioImage1, catagoryName: "Email Marketing" },
    // Data Entry
    { id: 1_16, img: DataEntryProtfolioImage1, catagoryName: "Data Entry" },
    { id: 1_7, img: LeadGenerationProtfolioImage7, catagoryName: "Lead Generation" },
    { id: 1_8, img: LeadGenerationProtfolioImage8, catagoryName: "Lead Generation" },
    // Data Entry
    { id: 1_17, img: DataEntryProtfolioImage2, catagoryName: "Data Entry" },
    { id: 1_9, img: LeadGenerationProtfolioImage9, catagoryName: "Lead Generation" },
    { id: 1_10, img: LeadGenerationProtfolioImage10, catagoryName: "Lead Generation" },
    // Data Entry
    { id: 1_18, img: DataEntryProtfolioImage3, catagoryName: "Data Entry" },
    { id: 1_11, img: LeadGenerationProtfolioImage11, catagoryName: "Lead Generation" },
    // Data Mining
    { id: 1_19, img: DataMiningProtfolioImage1, catagoryName: "Data Mining" },
    { id: 1_12, img: LeadGenerationProtfolioImage12, catagoryName: "Lead Generation" },
    // Email Marketing
    { id: 1_15, img: EmailMarketingProtfolioImage2, catagoryName: "Email Marketing" },
    { id: 1_13, img: LeadGenerationProtfolioImage13, catagoryName: "Lead Generation" },
  ];
  const LeadGenerationCatagoryCard = [
    { id: 1_1, img: LeadGenerationProtfolioImage1, catagoryName: "Lead Generation" },
    { id: 1_2, img: LeadGenerationProtfolioImage2, catagoryName: "Lead Generation" },
    { id: 1_3, img: LeadGenerationProtfolioImage3, catagoryName: "Lead Generation" },
    { id: 1_5, img: LeadGenerationProtfolioImage5, catagoryName: "Lead Generation" },
    { id: 1_6, img: LeadGenerationProtfolioImage6, catagoryName: "Lead Generation" },
    { id: 1_7, img: LeadGenerationProtfolioImage7, catagoryName: "Lead Generation" },
    { id: 1_8, img: LeadGenerationProtfolioImage8, catagoryName: "Lead Generation" },
    { id: 1_9, img: LeadGenerationProtfolioImage9, catagoryName: "Lead Generation" },
    { id: 1_10, img: LeadGenerationProtfolioImage10, catagoryName: "Lead Generation" },
    { id: 1_11, img: LeadGenerationProtfolioImage11, catagoryName: "Lead Generation" },
    { id: 1_12, img: LeadGenerationProtfolioImage12, catagoryName: "Lead Generation" },
    { id: 1_13, img: LeadGenerationProtfolioImage13, catagoryName: "Lead Generation" },
  ];
  const EmailMarketingCatagoryCard = [
    { id: 1_1, img: EmailMarketingProtfolioImage1, catagoryName: "Email Marketing" },
    { id: 1_2, img: EmailMarketingProtfolioImage2, catagoryName: "Email Marketing" },
  ];
  const DataEntryCatagoryCard = [
    { id: 1_1, img: DataEntryProtfolioImage1, catagoryName: "Data Entry" },
    { id: 1_2, img: DataEntryProtfolioImage2, catagoryName: "Data Entry" },
    { id: 1_3, img: DataEntryProtfolioImage3, catagoryName: "Data Entry" },
  ];
  const DataMiningCatagoryCard = [
    { id: 1_1, img: DataMiningProtfolioImage1, catagoryName: "Data Mining" },
    { id: 1_2, img: DataMiningProtfolioImage2, catagoryName: "Data Mining" },
  ];
  const [Catagory, setCatagory] = useState(AllCatagoryCard);
  // ********************************************************
  const [onClickProjectLi1, setOnClickProjectLi1] = useState("true");
  const [onClickProjectLi2, setOnClickProjectLi2] = useState("false");
  const [onClickProjectLi3, setOnClickProjectLi3] = useState("false");
  const [onClickProjectLi4, setOnClickProjectLi4] = useState("false");
  const [onClickProjectLi5, setOnClickProjectLi5] = useState("false");

  const HandleProjectLi1 = () => {
    setOnClickProjectLi1("true");
    setOnClickProjectLi2("false");
    setOnClickProjectLi3("false");
    setOnClickProjectLi4("false");
    setOnClickProjectLi5("false");
    setCatagory(AllCatagoryCard);
  };
  const HandleProjectLi2 = () => {
    setOnClickProjectLi1("false");
    setOnClickProjectLi2("true");
    setOnClickProjectLi3("false");
    setOnClickProjectLi4("false");
    setOnClickProjectLi5("false");
    setCatagory(LeadGenerationCatagoryCard);
  };
  const HandleProjectLi3 = () => {
    setOnClickProjectLi1("false");
    setOnClickProjectLi2("false");
    setOnClickProjectLi3("true");
    setOnClickProjectLi4("false");
    setOnClickProjectLi5("false");
    setCatagory(EmailMarketingCatagoryCard);
  };
  const HandleProjectLi4 = () => {
    setOnClickProjectLi1("false");
    setOnClickProjectLi2("false");
    setOnClickProjectLi3("false");
    setOnClickProjectLi4("true");
    setOnClickProjectLi5("false");
    setCatagory(DataEntryCatagoryCard);
  };
  const HandleProjectLi5 = () => {
    setOnClickProjectLi1("false");
    setOnClickProjectLi2("false");
    setOnClickProjectLi3("false");
    setOnClickProjectLi4("false");
    setOnClickProjectLi5("true");
    setCatagory(DataMiningCatagoryCard);
  };
  return (
    <main
      className={`w-[100%] h-[100%] flex items-center justify-center relative GeologicaFont bg-[#1E1345]`}
    >
      <div className="xl:w-[1230px] w-[96%] h-[100%] mx-auto flex flex-col justify-center py-[4rem] Quicksand">
        <div className="w-full text-center text-white relative z-10 sm2:pb-[25px] pb-[15px]">
          <h1 className="sm2:text-[30px] sm4:text-[25px] text-[22px] font-semibold">
            Projects
          </h1>
          <p className="text-[#03BFFF] sm2:text-[15px] sm4:text-[13px] text-[12px] sm4:w-[405px] w-[285px] mx-auto sm4:leading-[20px] leading-[16px]">
            Take A Look At Our Latest Portfolio
          </p>
        </div>

        <div className="flex items-center sm:justify-center justify-start text-center w-[95%] overflow-x-auto mx-auto protfolio-Scroll-bar">
          <ul className="flex w-[640px] pb-[10px]">
            <li
              className="sm:mx-[10px] mx-1 cursor-pointer w-[2.2rem] projectLi"
              onClick={HandleProjectLi1}
            >
              <p
                className={`pb-[5px] sm4:text-[16px] text-[15px] ${
                  onClickProjectLi1 === "true"
                    ? "text-[#03BFFF]"
                    : "text-[#fff]"
                }`}
              >
                All
              </p>
              <div
                className={`h-[2px] ${
                  onClickProjectLi1 === "true"
                    ? "w-[2.2rem] bg-[#03BFFF]"
                    : "w-[0rem] bg-[#fff]"
                } rounded projectLiBottomBar`}
                style={{ "--bar-width": "2.2rem" }}
              ></div>
            </li>
            <p className="cursor-default text-[#f8f8f870]">{"|"}</p>
            <li
              className="sm:mx-[10px] mx-1 cursor-pointer w-[8.57rem] projectLi"
              onClick={HandleProjectLi2}
            >
              <p
                className={`pb-[5px] sm4:text-[16px] text-[15px] ${
                  onClickProjectLi2 === "true"
                    ? "text-[#03BFFF]"
                    : "text-[#fff]"
                }`}
              >
                Lead Generation
              </p>
              <div
                className={`h-[2px] ${
                  onClickProjectLi2 === "true"
                    ? "w-[8.57rem] bg-[#03BFFF]"
                    : "w-[0rem] bg-[#fff]"
                } rounded projectLiBottomBar`}
                style={{ "--bar-width": "8.57rem" }}
              ></div>
            </li>
            <p className="cursor-default text-[#f8f8f870]">{"|"}</p>
            <li
              className="sm:mx-[10px] mx-1 cursor-pointer w-[8.8rem] projectLi"
              onClick={HandleProjectLi3}
            >
              <p
                className={`pb-[5px] sm4:text-[16px] text-[15px] ${
                  onClickProjectLi3 === "true"
                    ? "text-[#03BFFF]"
                    : "text-[#fff]"
                }`}
              >
                Email Marketing
              </p>
              <div
                className={`h-[2px] ${
                  onClickProjectLi3 === "true"
                    ? "w-[8.8rem] bg-[#03BFFF]"
                    : "w-[0rem] bg-[#fff]"
                } rounded projectLiBottomBar`}
                style={{ "--bar-width": "8.8rem" }}
              ></div>
            </li>
            <p className="cursor-default text-[#f8f8f870]">{"|"}</p>
            <li
              className="sm:mx-[10px] mx-1 cursor-pointer w-[6.2rem] projectLi"
              onClick={HandleProjectLi4}
            >
              <p
                className={`pb-[5px] sm4:text-[16px] text-[15px] ${
                  onClickProjectLi4 === "true"
                    ? "text-[#03BFFF]"
                    : "text-[#fff]"
                }`}
              >
                Data Entry
              </p>
              <div
                className={`h-[2px] ${
                  onClickProjectLi4 === "true"
                    ? "w-[6.2rem] bg-[#03BFFF]"
                    : "w-[0rem] bg-[#fff]"
                } rounded projectLiBottomBar`}
                style={{ "--bar-width": "6.2rem" }}
              ></div>
            </li>
            <p className="cursor-default text-[#f8f8f870]">{"|"}</p>
            <li
              className="sm:mx-[10px] mx-1 cursor-pointer w-[7rem] projectLi"
              onClick={HandleProjectLi5}
            >
              <p
                className={`pb-[5px] sm4:text-[16px] text-[15px] ${
                  onClickProjectLi5 === "true"
                    ? "text-[#03BFFF]"
                    : "text-[#fff]"
                }`}
              >
                Data Mining
              </p>
              <div
                className={`h-[2px] ${
                  onClickProjectLi5 === "true"
                    ? "w-[7rem] bg-[#03BFFF]"
                    : "w-[0rem] bg-[#fff]"
                } rounded projectLiBottomBar`}
                style={{ "--bar-width": "7rem" }}
              ></div>
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap justify-around w-full h-full pt-[25px] relative">
          {Catagory.map((catagory) => (
            <label
              htmlFor={`my-modal-${catagory.id}`}
              key={catagory.id}
              data-aos="fade-up"
              className="w-[380px] sm3:h-[224px] h-[190px] rounded-[10px] bg-[#261856] overflow-hidden projectCardAnimation mb-[30px] relative flex justify-center items-center shadow-[0px_0px_6px_0px_#0000000f]"
            >
              <div className="w-[90%] h-[86%] rounded-[10px] overflow-hidden">
                <img
                  src={catagory.img}
                  className="w-[100%] cursor-pointer"
                  alt=""
                />
              </div>
              <div className="absolute bottom-0 left-0 h-[40px] cursor-pointer text-center flex justify-center items-center bg-[#261856] text-white rounded-tr-[20px] mb-[-5px]">
                <p className="px-[25px] mt-[-5px] sm:text-[16px] sm3:text-[15px] text-[14px]">{catagory.catagoryName}</p>
              </div>
            </label>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Protfolio;
