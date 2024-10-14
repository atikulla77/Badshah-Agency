import React, { useRef } from "react";

import partical1 from "../image/carcal_blur_blue.png";
import partical3 from "../image/carcal_blur_parple.png";
import partical2 from "../image/about_PP_2.png";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const EmailInputValue = useRef();
  const NameInputValue = useRef();
  const MassageInputValue = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_j74nwg1", "template_ehiiwm6", form.current, {
        publicKey: "tpCvvYv1ol_oVMJoE",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          EmailInputValue.current.value = "";
          NameInputValue.current.value = "";
          MassageInputValue.current.value = "";
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <main
      className={`w-full h-full relative pt-[1.5rem] desktop3:pb-[3rem] pb-[1rem] GeologicaFont bg-[#1E1345]`}
      id="Contact"
    >
      <div className="w-full text-center text-white relative z-10 sm2:pb-[0px] pb-[15px]">
        <p className="text-[#03BFFF] sm2:text-[15px] sm4:text-[13px] text-[12px] mx-auto sm4:leading-[20px] leading-[16px]">
          Contact
        </p>
        <h1 className="sm2:text-[30px] sm4:text-[25px] text-[22px] font-bold">
          I Want to Hear from You
        </h1>
      </div>
      <div className="mx-auto xl:w-[1230px] w-[96%] h-[100%] relative z-[1] flex justify-center items-center">
        <div className="flex justify-center w-full xl:py-0 sm:py-[1.3rem] sm4:py-[0.8rem] py-[0.3rem] text-white z-10">
          {/* <div className="stext1:w-[400px] sm5:w-[700px] w-[98%] GeologicaFont stext1:mx-0 mx-auto">
            <div className="w-full stext1:text-left text-center">
              <h4 className="mt-0 mb-1 text-2xl font-medium leading-normal ">
                Contact Info
              </h4>
              <p className="text-sm font-light  ">
                Always available for freelance work if the right project
                <br /> comes along, Feel free to contact me!
              </p>
              <p className="pt-[2px] mb-6 text-sm font-light ">
                You can Order me in{" "}
                <span className="font-semibold">Fiver, UpWork</span>
              </p>
            </div>
            <div className="sm5:w-[400px] w-[93%]">
              <div>
                <div className="flex items-center text-left mb-[30px]">
                  <span className="w-[60px] h-[60px] flex items-center justify-center bg-[#03BFFF] rounded-[50%] text-white">
                    <IoLocationSharp className="text-[28px]" />
                  </span>
                  <div className="ml-[21px] text-left leading-[26px]">
                    <p className="text-[19px] font-[600]">Location</p>
                    <span className="text-sm text-[#ffffff9c] ">
                      Rajshahi, Paba 6210
                    </span>
                  </div>
                </div>
                <div className="flex items-center text-left mb-[30px]">
                  <span className="w-[60px] h-[60px] flex items-center justify-center bg-[#03BFFF] rounded-[50%] text-white">
                    <MdEmail className="text-[28px]" />
                  </span>
                  <div className="ml-[21px] text-left leading-[26px]">
                    <p className="text-[19px] font-[600]">Email</p>
                    <span className="text-sm text-[#ffffff9c] ">
                      badshapha@gmail.com
                    </span>
                  </div>
                </div>
                <div className="flex items-center text-left mb-[30px]">
                  <span className="w-[60px] h-[60px] flex items-center justify-center bg-[#03BFFF] rounded-[50%] text-white">
                    <FaPhoneFlip className="text-[28px]" />
                  </span>
                  <div className="ml-[21px] text-left leading-[26px]">
                    <p className="text-[19px] font-[600]">Phone</p>
                    <span className="text-sm text-[#ffffff9c] ">
                      +880 130 301 0014
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="sm2:w-[700px] w-[100%] GeologicaFont mx-auto text-center lg:pb-0 pb-[1.5rem]">
            <form
              className="sm:px-[0] sm2:px-[1.5rem] sm4:px-[15px] px-0"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="grid gap-6 mb-4 pt-[1.5rem] md:grid-cols-2 text-left">
                <div data-aos="fade-right">
                  <label className="relative">
                    <input
                      type="text"
                      ref={NameInputValue}
                      name="user_name"
                      autoComplete="off"
                      required
                      placeholder=""
                      className="inputStyleIng  border-[2px] border-[#ffffff42] text-white text-sm rounded-lg focus:ring-[#03BFFF] focus:border-[#ffffff42] block w-full p-2.5 dark:!bg-transparent dark:border-[#ffffff42] placeholder-[#pffffff9c] dark:focus:ring-[#03BFFF] dark:focus:border-[#03BFFF] font-[500] outline-none"
                    />
                    <span className="inputStyleIngText text-sm text-white text-opacity-80 bg-[#26185669] absolute left-2 top-3 px-1 transition duration-200 input-text cursor-text">
                      Your Name
                    </span>
                  </label>
                </div>
                <div data-aos="fade-down-right">
                  <label className="relative">
                    <input
                      type="email"
                      ref={EmailInputValue}
                      name="user_email"
                      autoComplete="off"
                      required
                      placeholder=""
                      className="inputStyleIng  border-[2px] border-[#ffffff42] text-white text-sm rounded-lg focus:ring-[#03BFFF] focus:border-[#ffffff42] block w-full p-2.5 dark:!bg-transparent dark:border-[#ffffff42] placeholder-[#pffffff9c] dark:focus:ring-[#03BFFF] dark:focus:border-[#03BFFF] font-[500] outline-none"
                    />
                    <span className="inputStyleIngText text-sm text-white text-opacity-80 bg-[#26185669] absolute left-2 top-3 px-1 transition duration-200 input-text cursor-text">
                      Email address
                    </span>
                  </label>
                </div>
              </div>
              <div className="mb-6 text-left" data-aos="fade-up">
                <label className="relative">
                  <textarea
                    type="text"
                    ref={MassageInputValue}
                    name="message"
                    autoComplete="off"
                    required
                    rows="13"
                    placeholder=""
                    className="inputStyleIng  border-[2px] border-[#ffffff42] text-white text-sm rounded-lg focus:ring-[#03BFFF] focus:border-[#ffffff42] block w-full p-2.5 dark:!bg-transparent dark:border-[#ffffff42] placeholder-[#pffffff9c] dark:focus:ring-[#03BFFF] dark:focus:border-[#03BFFF] font-[500] outline-none"
                  />
                  <span className="inputStyleIngText text-sm text-white text-opacity-80 bg-[#26185669] absolute left-2 top-3 px-1 transition duration-200 input-text cursor-text">
                    Your message
                  </span>
                </label>
              </div>

              <button
                type="submit"
                value="Submit Now"
                className="text-[14px] px-[22px] py-[8px] rounded-[50px] hover:!bg-transparent bg-[#03BFFF] text-[#fff] hover:text-[#03BFFF] border-[2px] border-[#03BFFF] transition-[0.4s]"
              >
                Submit Now
              </button>
            </form>
          </div>
        </div>

        <div className="absolute sm5:left-[-10%] left-[-3%] bottom-[-25%] select-none sm5:w-[450px] w-[320px] sm5:h-[450px] h-[320px] z-0 overflow-hidden">
          <img
            src={partical1}
            className="sm5:w-[440px] w-[310px] h-[100%] select-none blur-[60px]"
          />
        </div>
        <div className="absolute right-[0%] top-[-35%] select-none sm5:w-[450px] w-[320px] sm5:h-[450px] h-[320px] rounded-[50%] z-0 overflow-hidden">
          <img
            src={partical3}
            className="sm5:w-[460px] w-[310px] h-[100%] select-none blur-[60px]"
          />
        </div>
        <div className="absolute sm5:left-[-6%] left-[0px] bottom-[-18%] select-none sm5:w-[250px] w-[150px] sm5:h-[250px] h-[150px] z-1">
          <img
            src={partical2}
            className="w-[100%] h-[100%] select-none opacity-[0.7]"
          />
        </div>
      </div>
    </main>
  );
};

export default Contact;
