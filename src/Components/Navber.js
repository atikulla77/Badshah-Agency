import { useEffect, useState } from "react";
import logo from "../image/badsha_Logo.png";

import { HiOutlineMenu } from "react-icons/hi";
import { ImCross } from "react-icons/im";

// import { Link } from "react-router-dom";
import { Link } from "react-scroll";

function Navber() {
  const navItems = [
    { id: 1, name: "Home", link: "Home" },
    { id: 2, name: "About", link: "About" },
    { id: 3, name: "Service", link: "Service" },
    { id: 4, name: "Team", link: "Team" },
    { id: 5, name: "Contact", link: "Contact" },
  ];
  //      ``````````````````
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 24) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  const [nevMobileVButton, setNevMobileVButton] = useState(false);

  return (
    <div className={` w-full flex fixed top-[0px] z-50`}>
      <nav
        className={`text-white w-full relative ${
          color
            ? "bg-[#1e1345d6] shadow-[0px_0px_3px_0px_#0003]"
            : "bg-transparent"
        }`}
        style={{ transition: ".1s ease-in" }}
      >
        <div
          className="mx-auto px-2 sm:px-6 lg:px-[0] xl:w-[1230px] w-[96%]"
          data-aos="fade-down"
        >
          <div className="items-center sm2:h-[5rem] h-[4rem] flex justify-between w-full GeologicaFont">
            <Link to="Home" className="flex items-center z-[2]">
              <img src={logo} className="sm:w-[31px] w-[28px] select-none" />
              <h1 className="sm:text-[23px] text-[21px] pl-[6px] cursor-pointer text-white font-[600] mt-[5px] select-none">
                Badsh<span className="text-[#03BFFF]">a</span>
              </h1>
            </Link>

            <div className="sm:flex hidden items-center justify-center text-white mt-[5px] ">
              <div className="flex sm:space-x-4 space-x-1">
                {navItems.map((key) => {
                  return (
                    <Link
                      key={key.id}
                      to={key.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={300}
                      className={`sm:px-3 px-[5px] py-2 text-sm font-medium cursor-pointer hover:text-[#03BFFF]`}
                      aria-current="page"
                    >
                      {key.name}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div
              className={`${
                nevMobileVButton ? "hidden" : "flex sm:hidden"
              } z-[2]`}
              onClick={() => setNevMobileVButton(true)}
            >
              <HiOutlineMenu className="text-[23px]" />
            </div>
            <div
              className={`${
                nevMobileVButton ? "flex sm:hidden" : "hidden"
              } z-[2]`}
              onClick={() => setNevMobileVButton(false)}
            >
              <p className="text-[35px] rotate-[45deg]">+</p>
            </div>

            <div
              className={`absolute top-0 left-0 w-full h-[100vh] bg-[#1e1345ed] z-0 ${
                nevMobileVButton ? "flex sm:hidden" : "hidden"
              }`}
            >
              <div className="w-full h-full flex flex-col justify-center items-center">
                {navItems.map((key) => {
                  return (
                    <Link
                      key={key.id}
                      to={key.link}
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={500}
                      className="sm:px-3 px-[5px] py-2 text-base font-medium cursor-pointer block KarlaFont"
                      aria-current="page"
                      onClick={() => setNevMobileVButton(false)}
                    >
                      {key.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navber;
