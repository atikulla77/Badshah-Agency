import React from "react";
import FadeLoader  from "react-spinners/FadeLoader";

function Lodding() {
  return (
    <div className="w-full h-[100vh] fixed top-0 left-0 flex justify-center items-center bg-[#1E1345] z-[100]">
      <FadeLoader  color="#03BFFF" />
    </div>
  );
}

export default Lodding;
