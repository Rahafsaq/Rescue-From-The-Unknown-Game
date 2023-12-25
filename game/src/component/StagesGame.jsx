import React from "react";
import Mapbg from "../assets/images/mapbg.png";
import City3 from "../assets/images/city3.png";
import City2 from "../assets/images/city2.png";
import City1 from "../assets/images/city1.png";
import Location3 from "../assets/images/locaionIcon3.png";
import Location2 from "../assets/images/locationIcon2.png";
import Location1 from "../assets/images/locationIcon1.png";
import Locked from "../assets/images/locked.png";
import Paper from "../assets/images/paper.png";
function StagesGame() {
  return (
    <>
      {/* start section */}
      <section className="min-h-screen w-scree">
        {/* image Background */}
        <div
          className="relative overflow-hidden bg-cover bg-no-repeat p-12 text-center h-screen"
          style={{
            backgroundImage: `url(${Mapbg})`,
            backgroundSize: `cover`,
            backgroundPosition: `center`,
          }}
        >
          <div
            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
            style={{ backgroundColor: `rgba(0, 0, 0, 0.3)` }}
          >
            {/* Start Game Stages */}
            {/* Grid container */}
            <div className="grid grid-cols-2 ">
              {/* Row-1 Col-1 */}
              <div className=" ">
                <div className="relative overflow-hidden p-12 text-center flex justify-center items-center">
                  <img
                    src={`${City3}`}
                    alt="city-img"
                    width={205}
                    className="cursor-pointer"
                  />
                  {/* location-locked images box */}
                  <div className="absolute flex">
                    <div className="flex h-24 mt-8 ">
                      <img src={`${Locked}`} alt="Locked-img" />
                    </div>
                    <div className="flex h-20  pr-4 ">
                      <img src={`${Location3}`} alt="Location-img" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Row-1 Col-2 */}
              <div className=" ">
                <div className="relative overflow-hidden p-12 text-center flex justify-center items-center">
                  <img src={`${Paper}`} alt="city-img" width={300} />
                  <div className="absolute flex">
                    <p className="text-black font-bold text-xl">
                      :البداية
                      <br />
                      <span className="text-black font-sans text-lg font-medium">
                        انطلق وانقذ شخصيتك
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              {/* Row-2 Col-1 */}
              <div className=" ">
                <div className="relative overflow-hidden p-12 text-center flex justify-center items-center ">
                  <img
                    src={`${City2}`}
                    alt="city-img"
                    width={250}
                    className="cursor-pointer"
                  />
                  {/* location-locked images box */}
                  <div className="absolute flex">
                    <div className="flex h-20  pl-10 mt-4 z-10">
                      <img src={`${Location2}`} alt="Location-img" />
                    </div>
                    <div className="flex h-24">
                      <img src={`${Locked}`} alt="Locked-img" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Row-2 Col-2 */}
              <div className=" ">
                <div className="relative overflow-hidden p-12 text-center flex justify-center items-center">
                  <img
                    src={`${City1}`}
                    alt="city-img"
                    width={250}
                    className="cursor-pointer"
                  />
                  {/* location-locked images box */}
                  <div className="absolute flex">
                    <div className="flex h-20 z-10">
                      <img src={`${Location1}`} alt="Location-img" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Col-2 */}
              {/* <div className="bg-red-500">
                <div className="relative overflow-hidden p-12 text-center">
                  <img src={`${City3}`} alt="city-img" />
                </div>
              </div>
              <div className="bg-red-500">
                <div className="relative overflow-hidden p-12 text-center">
                  <img src={`${City3}`} alt="city-img" />
                </div>
              </div>
              <div className="bg-red-500">
                <div className="relative overflow-hidden p-12 text-center">
                  <img src={`${City3}`} alt="city-img" />
                </div>
              </div> */}
            </div>
            {/* <div className="flex h-full items-center justify-center">
           <div className="text-white">
             <h2 className="mb-4 text-4xl font-semibold">Heading</h2>
             <h4 className="mb-6 text-xl font-semibold">Subheading</h4>
             <button
               type="button"
               className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
               data-te-ripple-init
               data-te-ripple-color="light">
               Call to action
             </button>
           </div>
         </div> */}
            {/* End Game Stages */}
          </div>
        </div>

        {/* End section */}
      </section>
    </>
  );
}

export default StagesGame;
