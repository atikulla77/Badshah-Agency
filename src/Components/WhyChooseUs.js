import React from "react";
import cercal_blue from "../image/carcal_blur_blue.png";

const WhyChooseUs = () => {
  const content = [
    {
      id: 1,
      conponent: <Svg1 />,
    },
    {
      id: 2,
      conponent: <Svg2 />,
    },
    {
      id: 3,
      conponent: <Svg3 />,
    },
    {
      id: 4,
      conponent: <Svg4 />,
    },
  ];

  return (
    <main
      className={`w-[100%] h-[100%] flex justify-center items-center bg-[#1E1345] py-[3.5rem]`}
    >
      <div className="xl:w-[1230px] w-[96%] mx-auto text-center grid GeologicaFont relative h-full">
        <div className="w-full text-center text-white relative z-10  pb-[45px]">
          <p className="text-[#03BFFF] sm2:text-[15px] sm4:text-[13px] text-[12px] sm4:w-[385px] w-[285px] mx-auto sm4:leading-[20px] leading-[16px]">
            Why Choose Us
          </p>
          <h1 className="sm2:text-[30px] sm4:text-[25px] text-[22px] font-semibold">
            How We Handle Projects
          </h1>
        </div>

        <div className="flex flex-wrap w-[100%] mx-auto justify-between xl:gap-[0] gap-[30px] relative z-10">
          {content.map((key) => {
            return (
              <div
              key={key.id}
                className={`w-[290px] h-[250px] relative flex justify-center items-center overflow-hidden bg-[#26185669] rounded-[20px] mx-auto why_choose_us_box`}
                data-aos="flip-up"
              >
                {key.conponent}
              </div>
            );
          })}
        </div>




        <div className="absolute left-[-200px] desktop3:bottom-[-100px] bottom-0 z-0 select-none w-[420px]  h-[420px] flex overflow-hidden rounded-[50%]">
          <img
            src={cercal_blue}
            className=" select-none w-[410px] h-[100%] blur-[30px]"
          />
        </div>

      </div>
    </main>
  );
};

function Svg1() {
  return (
    <div className="text-center p-[25px] relative z-10 text-white py-[1rem] w-[280px] h-[240px] flex flex-col justify-center items-center why_choose_us_box_container rounded-[20px]">
      <svg
        className="w-[3.5rem] fill-[#03BFFF] mx-auto relative z-[5]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path d="M187.7 153.7c-34 0-61.7 25.7-61.7 57.7 0 31.7 27.7 57.7 61.7 57.7s61.7-26 61.7-57.7c0-32-27.7-57.7-61.7-57.7zm143.4 0c-34 0-61.7 25.7-61.7 57.7 0 31.7 27.7 57.7 61.7 57.7 34.3 0 61.7-26 61.7-57.7.1-32-27.4-57.7-61.7-57.7zm156.6 90l-6 4.3V49.7c0-27.4-20.6-49.7-46-49.7H76.6c-25.4 0-46 22.3-46 49.7V248c-2-1.4-4.3-2.9-6.3-4.3-15.1-10.6-25.1 4-16 17.7 18.3 22.6 53.1 50.3 106.3 72C58.3 525.1 252 555.7 248.9 457.5c0-.7.3-56.6.3-96.6 5.1 1.1 9.4 2.3 13.7 3.1 0 39.7.3 92.8.3 93.5-3.1 98.3 190.6 67.7 134.3-124 53.1-21.7 88-49.4 106.3-72 9.1-13.8-.9-28.3-16.1-17.8zm-30.5 19.2c-68.9 37.4-128.3 31.1-160.6 29.7-23.7-.9-32.6 9.1-33.7 24.9-10.3-7.7-18.6-15.5-20.3-17.1-5.1-5.4-13.7-8-27.1-7.7-31.7 1.1-89.7 7.4-157.4-28V72.3c0-34.9 8.9-45.7 40.6-45.7h317.7c30.3 0 40.9 12.9 40.9 45.7v190.6z" />
      </svg>
      <h1 href="#" className="text-[19px] font-[700] pt-[1rem] relative z-[5]">
        A World of Creativity
      </h1>
      <p className="text-[14px] leading-[18px] font-light h-[60px] pt-[3px] relative z-[5]">
        Make your plans to occur, a great deal of inventive services are
        prepared to provide.
      </p>
    </div>
  );
}
function Svg2() {
  return (
    <div className="text-center p-[25px] relative z-10 text-white py-[1rem] w-[280px] h-[240px] flex flex-col justify-center items-center why_choose_us_box_container rounded-[20px]">
      <svg
        className="w-[3.5rem] fill-[#03BFFF] mx-auto relative z-[5]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 512"
      >
        <path d="M272,288H208a16,16,0,0,1-16-16V208a16,16,0,0,1,16-16h64a16,16,0,0,1,16,16v37.12C299.11,232.24,315,224,332.8,224H469.74l6.65-7.53A16.51,16.51,0,0,0,480,207a16.31,16.31,0,0,0-4.75-10.61L416,144V48a16,16,0,0,0-16-16H368a16,16,0,0,0-16,16V87.3L263.5,8.92C258,4,247.45,0,240.05,0s-17.93,4-23.47,8.92L4.78,196.42A16.15,16.15,0,0,0,0,207a16.4,16.4,0,0,0,3.55,9.39L22.34,237.7A16.22,16.22,0,0,0,33,242.48,16.51,16.51,0,0,0,42.34,239L64,219.88V384a32,32,0,0,0,32,32H272ZM629.33,448H592V288c0-17.67-12.89-32-28.8-32H332.8c-15.91,0-28.8,14.33-28.8,32V448H266.67A10.67,10.67,0,0,0,256,458.67v10.66A42.82,42.82,0,0,0,298.6,512H597.4A42.82,42.82,0,0,0,640,469.33V458.67A10.67,10.67,0,0,0,629.33,448ZM544,448H352V304H544Z" />
      </svg>
      <h1 href="#" className="text-[19px] font-[700] pt-[1rem] relative z-[5]">
        Work Remotely
      </h1>
      <p className="text-[14px] leading-[18px] font-light h-[60px] pt-[3px] relative z-[5]">
        Working remotely, you can begin and end your day as
        <br /> you pick.
      </p>
    </div>
  );
}
function Svg3() {
  return (
    <div className="text-center p-[25px] relative z-10 text-white py-[1rem] w-[280px]  h-[240px] flex flex-col justify-center items-center why_choose_us_box_container rounded-[20px]">
      <svg
        className="w-[3.5rem] fill-[#03BFFF] mx-auto relative z-[5]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 512"
      >
        <path d="M608 32H32C14.33 32 0 46.33 0 64v384c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zM176 327.88V344c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-16.29c-11.29-.58-22.27-4.52-31.37-11.35-3.9-2.93-4.1-8.77-.57-12.14l11.75-11.21c2.77-2.64 6.89-2.76 10.13-.73 3.87 2.42 8.26 3.72 12.82 3.72h28.11c6.5 0 11.8-5.92 11.8-13.19 0-5.95-3.61-11.19-8.77-12.73l-45-13.5c-18.59-5.58-31.58-23.42-31.58-43.39 0-24.52 19.05-44.44 42.67-45.07V152c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v16.29c11.29.58 22.27 4.51 31.37 11.35 3.9 2.93 4.1 8.77.57 12.14l-11.75 11.21c-2.77 2.64-6.89 2.76-10.13.73-3.87-2.43-8.26-3.72-12.82-3.72h-28.11c-6.5 0-11.8 5.92-11.8 13.19 0 5.95 3.61 11.19 8.77 12.73l45 13.5c18.59 5.58 31.58 23.42 31.58 43.39 0 24.53-19.05 44.44-42.67 45.07zM416 312c0 4.42-3.58 8-8 8H296c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h112c4.42 0 8 3.58 8 8v16zm160 0c0 4.42-3.58 8-8 8h-80c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16zm0-96c0 4.42-3.58 8-8 8H296c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h272c4.42 0 8 3.58 8 8v16z" />
      </svg>
      <h1 href="#" className="text-[19px] font-[700] pt-[1rem] relative z-[5]">
        Money Back Guarantee
      </h1>
      <p className="text-[14px] leading-[18px] font-light h-[60px] pt-[3px] relative z-[5]">
        In case you're not happy with our service, we ensure you to <br />
        refund your cash.
      </p>
    </div>
  );
}
function Svg4() {
  return (
    <div className="text-center p-[25px] relative z-10 text-white py-[1rem] w-[280px] h-[240px] flex flex-col justify-center items-center why_choose_us_box_container rounded-[20px]">
      <svg
        className="w-[3.5rem] fill-[#03BFFF] mx-auto relative z-[5]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z" />
      </svg>
      <h1 href="#" className="text-[19px] font-[700] pt-[1rem] relative z-[5]">
        24/7 Online Support
      </h1>
      <p className="text-[14px] leading-[18px] font-light h-[60px] pt-[3px] relative z-[5]">
        When you need Services, we are here all day, every day <br />
        for you.
      </p>
    </div>
  );
}

export default WhyChooseUs;
