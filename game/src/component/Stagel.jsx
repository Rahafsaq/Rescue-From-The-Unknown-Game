import React from "react";
import NavBar from "./NavBar";
import StreetViewMap from "./StreetViewMap";

function Stagel() {
  return (
    <>
      <div className="absolute z-10 top-0 ">
        <NavBar />
      </div>
      <StreetViewMap />
    </>
  );
}

export default Stagel;
