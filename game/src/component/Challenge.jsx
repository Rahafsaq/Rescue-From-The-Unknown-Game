import React from "react";
import Map360 from "../assets/images/googlemap.png";
// import GreenBG from "../assets/images/greenBG.png";
import Q1 from "../assets/images/q1.png";
import Char1 from "../assets/character-1.png";
import City1 from "../assets/images/city1.png";
import { Link } from "react-router-dom";
function Challenge() {
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
            style={{ backgroundColor: `rgba(0, 0, 0, 0.6)` }}
          >
            {/* Start Modal window */}
            <div className="flex justify-center items-center h-[100vh] ">
              <div className="relative z-10 p-4 w-full max-w-lg h-full md:h-auto">
                <div
                  className="relative p-4  rounded-lg shadow dark:bg-gray-800 md:p-8 bg-cover bg-no-repeat"
                  style={{
                    backgroundImage: `url(${GreenBG})`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center`,
                    // filter: "blur(3px)",
                  }}
                >
                  <div className="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
                    <div className="text-white absolute right-6 top-3 font-normal text-2xl">
                      X
                    </div>

                    <h3 className="mb-3 text-lg font-medium text-white dark:text-white">
                      ابدأ التحدي:
                    </h3>
                    <p className="text-white font-bold leading-9 text-2xl">
                      {" "}
                      ما المقصود من الرموز؟{" "}
                    </p>
                    <div>
                      <img src={Q1} alt="q1-img" />
                    </div>
                  </div>
                  {/* input */}
                  <div>
                    <input
                      type="text"
                      placeholder="اكتب هنا"
                      className="border border-none text-center rounded-sm mb-6 outline-none"
                    />
                  </div>
                  <div className="flex justify-center items-center pt-0 space-y-4 sm:flex sm:space-y-0">
                    <div className="flex justify-center items-center space-y-4 sm:space-x-4 sm:flex sm:space-y-0">
                      <Link to={"/FindChar"}>
                        {" "}
                        <button
                          id="confirm-button"
                          type="button"
                          className="py-2 px-11 w-full text-sm font-medium text-center text-white rounded-lg bg-[#8D3333] sm:w-auto"
                        >
                          تحقق
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Modal window */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Challenge;
