import React from "react";
import cercal_blue from "../image/carcal_blur_blue.png";
import cercal_parple from "../image/carcal_blur_parple.png";

import Mizanur_Rahman from "../image/Team/Mizanur_Rahman.jpg";
import Tofazzul_Hossain from "../image/Team/Tofazzul_Hossain.jpg";
import Al_Amin from "../image/Team/Al_Amin.jpg";
import Masum_Reja from "../image/Team/Masum_Reja.jpg";
import MST_Ruma from "../image/Team/Ruma.jpg";
import Atikulla from "../image/Team/Atikulla.jpg";
import Abu_Raihan from "../image/Team/Abu_Raihan.jpg";
import Hafizur_Rahman from "../image/Team/Hafizur_Rahman.jpg";
import Najirul_Islam_Bijoy from "../image/Team/Najirul_Islam_Bijoy.jpg";
import Asik_Sheikh from "../image/Team/Asik_Sheikh.jpg";
import Mahafuja_Aktar from "../image/Team/Mahafuja_Aktar.jpg";
import Monirul_Islam from "../image/Team/Monirul_Islam.jpg";
import Luban_Mukaddas from "../image/Team/Luban_Mukaddas.jpg";


const Team = () => {
  const allTeam = [
    {
      id: 1,
      image: Al_Amin,
      name: "Al Amin",
      work: "Lead Generation & Web Research Expert",
    },
    {
      id: 2,
      image: Mizanur_Rahman,
      name: "Mizanur Rahman",
      work: "B2B Leads & Email Finding Expert",
    },
    {
      id: 3,
      image: Tofazzul_Hossain,
      name: "Tofazzul Hossain",
      work: "Data Entry Expert",
    },
    {
      id: 4,
      image: Masum_Reja,
      name: "Masum Reja",
      work: "Business Leads Generation Expert",
    },
    {
      id: 5,
      image: Monirul_Islam,
      name: "Monirul Islam",
      work: "Lead Generation Expert",
    },
    {
      id: 6,
      image: Mahafuja_Aktar,
      name: "Mahafuja Aktar",
      work: "Owner's PA",
    },
    {
      id: 7,
      image: MST_Ruma,
      name: "MST Ruma",
      work: "Email Collecting Expert",
    },
    {
      id: 8,
      image: Atikulla,
      name: "Mr Atikulla",
      work: "Digital Marketing Expert",
    },
    {
      id: 9,
      image: Abu_Raihan,
      name: "Abu Raihan",
      work: "Targeted Email Finding Expert",
    },
    {
      id: 10,
      image: Hafizur_Rahman,
      name: "Hafizur Rahman",
      work: "Lead Research and English Speaking Expert",
    },
    {
      id: 11,
      image: Najirul_Islam_Bijoy,
      name: "Najirul Islam Bijoy",
      work: "Email Finding Expert",
    },
    {
      id: 12,
      image: Asik_Sheikh,
      name: "Asik Sheikh",
      work: "LinkedIn Lead Generation Expert",
    },
    {
      id: 13,
      image: Luban_Mukaddas,
      name: "Luban Mukaddas",
      work: "Targeted Lead Finding Expert",
    },
  ];

  return (
    <main
      className={`w-full h-full pt-[4rem] sm2:pb-[2.5rem] pb-[1rem] GeologicaFont bg-[#1E1345]`}
      id="Team"
    >
      <div className="xl:w-[1230px] w-[96%] h-[100%] z-[1] flex items-center mx-auto relative ">
        {/* Team */}
        <div className="w-full overflow-hidden">
          <div className="w-full text-center text-white relative z-10 sm2:pb-[25px] pb-[15px]">
            <h1 className="sm2:text-[30px] sm4:text-[25px] text-[22px] font-semibold">
              Our Team
            </h1>
            <p className="text-[#03BFFF] sm2:text-[15px] sm4:text-[13px] text-[12px] sm4:w-[405px] w-[285px] mx-auto sm4:leading-[20px] leading-[16px]">
              With over 6 years of combined experience, we've{" "}
              <br className="sm4:hidden flex" /> got
              <br className="sm4:flex hidden" /> a well-seasoned team at the
              helm
            </p>
          </div>

          {/* <Marquee className="py-[1rem]">
            {allTeam.map((key) => {
              return (
                <div
                  className={`sm2:w-[260px] sm4:w-[230px] w-[215px] sm2:h-[265px] sm4:h-[250px] h-[225px] rounded-[15px] bg-[#26185669] sm2:mr-[20px] mr-[15px] shadow-[0px_0px_6px_0px_#0000000f]`}
                >
                  <div
                    className={`w-[190px] flex items-center justify-center flex-col opacity-[0.9] h-full mx-auto`}
                    style={{ transition: "0.5s" }}
                  >
                    <div className="sm2:w-[105px] w-[85px] sm2:h-[105px] h-[85px] rounded-[50%] overflow-hidden relative">
                      <img src={key.image} className="w-full h-full" alt="" />
                    </div>
                    <div className="text-[#fff] text-center sm2:mt-[15px] mt-[12px]">
                      <h3 className="sm2:text-[19px] text-[18px] pb-[0px]">
                        {key.name}
                      </h3>

                      <p className="sm2:text-[14px] text-[13px] h-[35px] w-[180px] mx-auto">
                        {key.work}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Marquee> */}
          <div
            className="w-full relative grid place-items-center"
            id="SliderTeam"
          >
            <div className=" flex z-10 relative " id="Slider-track-Team" data-aos="zoom-out">
              {allTeam.map((key) => {
                return (
                  <div
                    className={`sm2:w-[260px] sm4:w-[230px] w-[215px] sm2:h-[265px] sm4:h-[250px] h-[225px] rounded-[15px] bg-[#26185669] sm2:mr-[20px] mr-[15px] shadow-[0px_0px_6px_0px_#0000000f]`}
                  >
                    <div
                      className={`sm2:w-[260px] sm4:w-[230px] w-[215px] flex items-center justify-center flex-col opacity-[0.9] h-full mx-auto`}
                      style={{ transition: "0.5s" }}
                    >
                      <div className="sm2:w-[105px] w-[85px] sm2:h-[105px] h-[85px] rounded-[50%] overflow-hidden relative">
                        <img src={key.image} className="w-full h-full" alt="" />
                      </div>
                      <div className="text-[#fff] text-center sm2:mt-[15px] mt-[12px]">
                        <h3 className="sm2:text-[19px] text-[18px] pb-[0px]">
                          {key.name}
                        </h3>

                        <p className="sm2:text-[14px] text-[13px] h-[35px] w-[180px] mx-auto">
                          {key.work}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}

              {allTeam.map((key) => {
                return (
                  <div
                    className={`sm2:w-[260px] sm4:w-[230px] w-[215px] sm2:h-[265px] sm4:h-[250px] h-[225px] rounded-[15px] bg-[#26185669] sm2:mr-[20px] mr-[15px] shadow-[0px_0px_6px_0px_#0000000f]`}
                  >
                    <div
                      className={`sm2:w-[260px] sm4:w-[230px] w-[215px] flex items-center justify-center flex-col opacity-[0.9] h-full mx-auto`}
                      style={{ transition: "0.5s" }}
                    >
                      <div className="sm2:w-[105px] w-[85px] sm2:h-[105px] h-[85px] rounded-[50%] overflow-hidden relative">
                        <img src={key.image} className="w-full h-full" alt="" />
                      </div>
                      <div className="text-[#fff] text-center sm2:mt-[15px] mt-[12px]">
                        <h3 className="sm2:text-[19px] text-[18px] pb-[0px]">
                          {key.name}
                        </h3>

                        <p className="sm2:text-[14px] text-[13px] h-[35px] w-[180px] mx-auto">
                          {key.work}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}

              {allTeam.map((key) => {
                return (
                  <div
                    className={`sm2:w-[260px] sm4:w-[230px] w-[215px] sm2:h-[265px] sm4:h-[250px] h-[225px] rounded-[15px] bg-[#26185669] sm2:mr-[20px] mr-[15px] shadow-[0px_0px_6px_0px_#0000000f]`}
                  >
                    <div
                      className={`sm2:w-[260px] sm4:w-[230px] w-[215px] flex items-center justify-center flex-col opacity-[0.9] h-full mx-auto`}
                      style={{ transition: "0.5s" }}
                    >
                      <div className="sm2:w-[105px] w-[85px] sm2:h-[105px] h-[85px] rounded-[50%] overflow-hidden relative">
                        <img src={key.image} className="w-full h-full" alt="" />
                      </div>
                      <div className="text-[#fff] text-center sm2:mt-[15px] mt-[12px]">
                        <h3 className="sm2:text-[19px] text-[18px] pb-[0px]">
                          {key.name}
                        </h3>

                        <p className="sm2:text-[14px] text-[13px] h-[35px] w-[180px] mx-auto">
                          {key.work}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
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
    </main>
  );
};
// function NextButton() {
//   return <div className="hidden"></div>;
// }
// function PrevButton() {
//   return <div className="hidden"></div>;
// }

export default Team;
