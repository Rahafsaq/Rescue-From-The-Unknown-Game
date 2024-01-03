// import React from "react";
// import { Link } from "react-router-dom";
// import BGImgae from "../assets/images/Summer-Map-Game.png";
// import LittleBoy from "../assets/images/littleBoy.png";
// import erth from "../assets/erth.png";
// // import MainBG1 from "../assets/images/mainBG1.png";
// import MainBG2 from "../assets/images/mainBG2.png";
// import Prsions from "../assets/images/prsions.png";
// import Map from "../assets/images/green-map_1.png";
// import "../App.css";
// import line from "../assets/line.svg";
// import medal from "../assets/medal.png";
// import searching from "../assets/searching.png";
// import ui from '../assets/images/ui.png'
// import NewBg from
// function Homepage() {
//   return (
//     <>

// <div className="overflow-hidden">
//         <div
//           className="relative bg-cover bg-no-repeat p-12 text-center h-[90vh]  max-sm:overflow-auto max-md:overflow-auto "
//           style={{

//             backgroundImage: `url(${ui})`,
//             backgroundImage: `url(${NewBg})`,
//             backgroundColor: `black`,
//             backgroundSize: `cover`,
//             backgroundPosition: `center`,}}>

//           <div
//             className=" absolute bottom-0 left-0 right-0 top-0 h-full w-full  bg-fixed max-sm:overflow-auto max-md:overflow-auto"
//           >
//             {/* Content Hero */}
//             <div className="flex justify-around items-center h-[100vh]">
//               {/* Title */}
//               <div className=" text-white flex flex-col gap-y-11 items-center">
//                 <h2 className="text-white font-bold text-6xl font-primary">
//                   الإنقاذ من المجهول
//                 </h2>
//                 <Link to="/Characters">
                
//                 <button className="text-black w-52 h-10 text-lg font-secondary font-bold bg-[#d6d3cbff] shadow-2xl  rounded-2xl p-1">
//                   ابدأ
//                 </button>
//                 </Link>

//               </div>
//               {/* Images */}
//               <div className=" flex flex-col items-center  relative h-full ">
//                 <img
//                   src={LittleBoy}
//                   alt="LittleBoy"
//                   className=" z-10"
//                   width={250}
//                 />
//                 <img
//                   src={Prsions}
//                   alt="Earth"
//                   className="absolute bottom-9"
//                   width={270}/>

                
//               </div>
              
//             </div>
//           </div>
//         </div>


//         <footer className="h-auto  w-full bg-[#687687ff]  p-4">
//             <div className=" ">
//               <h1 className="text-white text-center text-3xl leading-snug max-sm:text-xl  ">
//               &#129293;صُنعت بكل بحب  </h1>
//             </div>
//           </footer>

//           </div>

//     </>
//   );
// }

// export default Homepage;


// import { Link } from "react-router-dom";

import React from 'react'
import Prsions from "../assets/images/prsions.png";
import LittleBoy from "../assets/images/littleBoy.png";
import NewBg from '../assets/images/newbg.png'
import { Link } from "react-router-dom";


function Homepage() {
  return (
    <>
<div className=' bg-gray-200'>

  <div className='flex justify-evenly  h-screen  '
            style={{

              // backgroundImage: `url(${ui})`,
              backgroundImage: `url(${NewBg})`,
              backgroundColor: `black`,
              backgroundSize: `cover`,
              backgroundPosition: `center`,}}>
  
  

<div className='flex flex-col gap-14 items-center justify-center max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:h-screen '>
<h1 className="text-white font-bold text-6xl font-primary  max-sm:text-2xl max-sm:flex mt-10   ">
                  الإنقاذ من المجهول
                </h1>
             <p className='font-secondary text-white text-xl text-right w-[39vw] max-sm:text-right max-sm:w-[66vw] max-sm:text-xl'>
             مشروعنا عبارة عن لعبة تفاعلية حيث يختار اللاعبون شخصية من
              الشخصيات المحددة ويبدأون اللعب في مغامرة قائمة على البحث عبر
                مواقع محددة
             </p>

<Link to="/Characters">

<button className="text-white w-52 h-10 text-lg font-secondary font-bold bg-[#8D3333] shadow-2xl  rounded-2xl p-1 ">
ابدأ
</button>
</Link>

</div>
              {/* Images */}
              <div className=" flex flex-col items-center  relative h-full ">
                <img
                  src={LittleBoy}
                  alt="LittleBoy"
                  className=" z-10 max-sm:hidden  "
                  width={250}
                />
                <img
                  src={Prsions}
                  alt="Earth"
                  className="absolute bottom-9 max-sm:hidden "
                  width={270}/>

                
              </div>

  </div>
              <footer className="h-auto absolute bottom-0  w-full bg-[#6482a1c0] p-2">
            <div className=" ">
              <h1 className="text-white font-secondary text-center text-xl leading-snug max-sm:text-xl  ">
              &#129293;صُنعت بكل بحب  </h1>
            </div>
          </footer>
</div>

    </>
  )
}

export default Homepage