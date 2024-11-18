import React from "react";
import FadeLoader  from "react-spinners/FadeLoader";

function Lodding() {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-[#1E1345]">
      <FadeLoader  color="#03BFFF" />
    </div>
  );
}

export default Lodding;
