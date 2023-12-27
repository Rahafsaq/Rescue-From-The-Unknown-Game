import React from "react";
import Map360 from "../assets/images/googlemap.png";
import Prsion from "../assets/images/prsion.png";
import Char1 from "../assets/character-1.png";
import { Link } from "react-router-dom";

function FindChar() {
  return (
    <>
      {/* start section */}
      <section className="min-h-screen w-screen">
        {/* image Background */}
        <div
          className="relative overflow-hidden bg-cover bg-no-repeat p-12 text-center h-screen max-sm:overflow-auto max-md:overflow-auto"
          style={{
            backgroundImage: `url(${Map360})`,
            backgroundSize: `cover`,
            backgroundPosition: `center`,
            // filter: "blur(3px)",
          }}
        >
          <div
            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed max-sm:overflow-auto max-md:overflow-auto"
            style={{ backgroundColor: `rgba(0, 0, 0, 0.0)` }}
          >
            {/* Start Find the charachter */}
            <div className="flex justify-end items-start absolute right-48 top-60">
              <img src={Char1} alt="character-img" width={120} />
            </div>
            {/* prsion */}
            <div className="flex justify-end items-start absolute right-24 top-56">
              <img src={Prsion} alt="Prsion-img" />
            </div>
            <Link to={"/Challenge"}>
              {" "}
              <div className="flex justify-end items-start absolute right-32 top-44">
                <button
                  id="confirm-button"
                  type="button"
                  className="py-2 px-11 w-full text-sm font-medium text-center text-white rounded-lg bg-[#8D3333] sm:w-auto"
                >
                  اقبل التحدي
                </button>
              </div>
            </Link>
            {/* End Find the charachter */}
          </div>
        </div>
      </section>
    </>
  );
}

export default FindChar;
