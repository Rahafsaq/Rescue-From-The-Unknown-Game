import React from "react";
import NavBar from "./NavBar";
import StreetViewMap2 from "./StreetViewMap2";

function Stagell() {
  return (
    <>
      <div className="absolute z-10 top-0 ">
        <NavBar totalChallenges={"2"} />
      </div>
      <StreetViewMap2 />
    </>
  );
}

export default Stagell;
