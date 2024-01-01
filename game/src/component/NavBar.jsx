import axios from "axios";
import React, { useEffect, useState } from "react";
import Logo from "../assets/images/prsions.png";
import { Link } from "react-router-dom";

function NavBar() {
  const [time, setTime] = useState(5 * 60); // Time in seconds
  const [cityimage, setCityImage] = useState("");
  const [charname, setCharName] = useState("");

  // get data from mokAPI
  const charName = localStorage.getItem("name");
  const charImage = localStorage.getItem("image");
  const id = localStorage.getItem("id");
  console.log(id);
  useEffect(() => {
    axios
      .get(`https://658d2e7c7c48dce94738a443.mockapi.io/gamedate/${id}`)
      .then((res) => {
        console.log(res.data);
        setCityImage(res.data.cityimage);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`https://658d2e7c7c48dce94738a443.mockapi.io/characters/${id}`)
      .then((res) => {
        console.log(res.data);
        setCharName(res.data.name);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  // time
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <>
      <nav className="w-[98vw]">
        {/* save the character */}
        <div className="flex justify-center items-center h-10 text-white">
          <p className="font-bold text-xl font-primary">
            الآن عليك الإنقاذ والبحث عن {charName}
          </p>
        </div>
        <div className="flex  justify-between items-center ">
          <div>
            <img src={`${cityimage}`} alt="city-img" width={150} className="" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-center flex flex-col items-center">
              <p className="text-white font-secondary">نسخ الشخصيات المكتسبة</p>
              <img src={`${charImage}`} alt="charcter choose nav" width={90} />
              <p className="text-center font-secondary text-white">0/3</p>
            </div>
            <div>
              {/* <p>الوقت المتبقي</p> */}
              <div className="text-center font-secondary text-white">5:30</div>
              {/* <div>
                {minutes.toString().padStart(2, "0")}:
                {seconds.toString().padStart(2, "0")}
              </div> */}
            </div>
          </div>
          {/* logo */}
          <div className="">
            <Link to={"/"}>
              {" "}
              <img src={`${Logo}`} alt="logo" width={100} />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

// <div className="flex justify-center items-center">
// {/* title */}
// <div className="flex justify-end gap-[480px] text-center items-center w-full text-black font-bold mt-4 mb-2">
//   <p className="text-2xl"> {`${charName}`} الان عليك البحث وانقاذ </p>
//   <img src={`${Logo}`} alt="logo" width={150} />
// </div>
// {/* Nav Bar */}
// <nav className="flex justify-between items-center w-1/2 ">
//   {/* city Stage */}
//   <img src={`${cityimage}`} alt="city-img" width={150} className="" />
//   {/* char and time */}
//   <div>
//     <div className="flex justify-center items-center ">
//       <img src={charImage} alt="charcters-img" width={100} />
//       <p className="text-white font-semibold text-2xl mt-16 ">1</p>
//     </div>
//     {/* <div>
//           {minutes.toString().padStart(2, "0")}:
//           {seconds.toString().padStart(2, "0")}
//         </div> */}
//   </div>
//   {/* <p>الشخصية المفقودة</p> */}
//   {/* logo */}
// </nav>
// </div>
