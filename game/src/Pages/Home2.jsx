import React from "react";
import { Link } from "react-router-dom";
import BGImgae from "../assets/images/Summer-Map-Game.png";
import LittleBoy from "../assets/images/littleBoy.png";
import erth from "../assets/erth.png";
// import MainBG1 from "../assets/images/mainBG1.png";
import MainBG2 from "../assets/images/mainBG2.png";
import Prsions from "../assets/images/prsions.png";
import Map from "../assets/images/green-map_1.png";
import "../App.css";
import line from "../assets/line.svg";
import medal from "../assets/medal.png";
import searching from "../assets/searching.png";
function Home2() {
  return (
    <>
      {/* Start Hero Section */}
      <section className="min-h-screen w-screen">
        {/* Hero image Background */}
        <div
          className="relative overflow-hidden bg-cover  bg-no-repeat p-12 text-center h-screen  max-sm:overflow-auto max-md:overflow-auto"
          style={{
            backgroundImage: `url(${MainBG2})`,
            backgroundSize: `cover`,
            backgroundPosition: `center`,
          }}
        >
          <div
            className=" absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed max-sm:overflow-auto max-md:overflow-auto"
            style={{ backgroundColor: `rgba(0, 0, 0, 0.3)` }}
          >
            {/* Content Hero */}
            <div className="flex justify-around items-center h-[100vh]">
              {/* Title */}
              <div className=" text-white flex flex-col gap-y-11 items-center">
                <h2 className="text-white font-bold text-6xl">
                  الإنقاذ من المجهول
                </h2>
                <button className="text-white  text-lg font-bold bg-[#8D3333] w-28 shadow-2xl rounded-2xl p-1">
                  ابدأ
                </button>
              </div>
              {/* Images */}
              <div className=" flex flex-col items-center  relative h-full ">
                <img
                  src={LittleBoy}
                  alt="LittleBoy"
                  className=" z-10"
                  width={200}
                />
                <img
                  src={Prsions}
                  alt="Earth"
                  className="absolute bottom-9"
                  width={270}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Hero Section */}

      {/* Start Content Section */}
      <section className="min-h-screen w-screen">
        <div className="relative overflow-hidden bg-[#5b776d] p-12 text-center min-h-screen  max-sm:overflow-auto max-md:overflow-auto">
          {/* top map image */}
          <img
            src={Map}
            alt="map-home"
            className="absolute bottom-[-10px]  right-0 opacity-40"
            width={700}
          />

          {/* content  */}
          <div className=" relative  z-10">
            <h2 className="text-white font-bold text-6xl">طريقة اللعب </h2>
            {/* Paragraph 1 */}
            <div className="flex justify-between items-center ">
              <div className="flex justify-center items-center w-[70%] mt-6">
                <img src={searching} alt="searching" width={300} className="" />
              </div>
              <p className="z-10 text-white font-normal leading-16 text-right text-3xl">
                <br /> مشروعنا عبارة عن لعبة تفاعلية حيث يختار اللاعبون شخصية من
                .الشخصيات المحددة ويبدأون اللعب في مغامرة قائمة على البحث عبر
                مواقع محددة
              </p>
            </div>
            {/* Paragraph 2 */}
            <div className="flex justify-between items-center ">
              <div className="flex justify-center items-center w-[100%] mt-6">
                <img src={erth} alt="earth" width={700} />
              </div>
              <p className="z-10 text-white font-normal leading-16 text-right text-3xl">
                سيتم توزيع كل نسخة من نسخ الشخصية على مواقع عشوائية على خرائط
                Google ويحتاج اللاعب إلى بدء البحث عن نسخ الشخصيات باستخدام
                التجوّل الافتراضي في خرائط Google
              </p>
            </div>
            {/* Paragraph 3 */}
            <div className="flex justify-between items-center ">
              <div className="flex justify-center items-center w-[35%] mt-6">
                <img src={medal} alt="medal" width={250} />
              </div>
              <p className="z-10 text-white font-normal leading-16 text-right text-3xl">
                في كل موقع سيواجه اللاعبون تحديات متعددة يجب عليهم حلها
                <br /> لتحرير نسخ شخصياتهم والفوز باللعبة
              </p>
            </div>
          </div>
          {/* bottom map image */}
          <img
            src={Map}
            alt="map-home"
            className="absolute top-[-10px]  left-0 opacity-40 z-0"
            width={700}
          />
          {/* Footer section */}
          <footer className="h-auto w-full bg-[#5B776D] ] p-6 mt-20">
            <div className=" ">
              <h1 className="text-white text-center text-2xl leading-snug max-sm:text-xl ">
                ©2023 Copyright: الإنقاذ من المجهول.com
              </h1>
            </div>
          </footer>
        </div>
        {/* <div className="relative bg-[#5B776D] p-12 text-center min-h-screen  max-sm:overflow-auto max-md:overflow-auto">
          <h1 className="text-5xl font-bold text-white text-center p-20 max-sm:text-4xl">
            طريقة اللعبة
          </h1>

          <div className="flex items-center justify-center w-4/5 m-auto  max-sm:flex max-sm:flex-col ">
            <div className="flex justify-around items-center w-full">
              <h1 className="text-white font-serif w-[50vw] mt-12 text-4xl leading-snug text-right">
                مشروعنا عبارة عن لعبة تفاعلية حيث يختار اللاعبون شخصية من
                الشخصيات المحددة ويبدأون اللعب في مغامرة قائمة على البحث عبر
                مواقع محددة
              </h1>
              <div className=" ">
                <img className="ml-10 " src={erth} alt="" width={500} />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-4/5 m-auto max-sm:flex max-sm:flex-col">
            <div>
              <img className="" src={searching} alt="" width={500} />
            </div>
            <div className="flex justify-around items-center w-full">
              <h1 className="text-white font-serif w-[50vw] mt-12 text-4xl leading-snug text-right">
                سيتم توزيع كل نسخة من نسخ الشخصية على مواقع عشوائية على خرائط
                Google ويحتاج اللاعب إلى بدء البحث عن نسخ الشخصيات باستخدام
                التجوّل الافتراضي في خرائط Google
              </h1>
            </div>
          </div>

          <div className="flex items-center justify-center w-4/5 m-auto max-sm:flex max-sm:flex-col  ">
            <div className="flex justify-around items-center w-full">
              <h1 className="text-white font-serif w-[50vw] mt-12 text-4xl leading-snug text-right">


                في كل موقع سيواجه اللاعبون تحديات متعددة يجب عليهم حلها لتحرير
                نسخ شخصياتهم والفوز باللعبة


              </h1>
            </div>

            <div>
              <img className="" src={medal} alt="" width={500} />
            </div>
          </div>

          <div>
            <img src={line} alt="" />
          </div>

          <div className="h-auto w-full bg-[#5B776D] ] p-6 ">
            <h1 className="text-white text-center text-2xl leading-snug max-sm:text-xl ">
              ©2023 Copyright: ImprisonedCharacters.com
            </h1>
          </div>
        </div> */}
      </section>
      {/* End Content Hero Section */}
    </>
  );
}

export default Home2;
