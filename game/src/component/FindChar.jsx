// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Char1 from '../assets/character-1.png';
// import Map360 from '../assets/images/googlemap.png';
// import Prsion from '../assets/images/prsion.png';
// import StagesChallenge from './stagesChallenge.js';

// function FindChar() {
// 	//axios
// 	// useEffect(()=>{
// 	//   // call api
// 	// },[])

// 	// get google map api
// 	// axios.get(`https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY`)
// 	// .then((res)=>{
// 	//   console.log(res)
// 	// })
// 	// .catch((err)=>{console.log("there is an error: " + err)})
// 	// let panorama;

// 	// function initialize() {
// 	//   panorama = new google.maps.StreetViewPanorama(
// 	//     document.getElementById("street-view"),
// 	//     {
// 	//       position: { lat: 37.86926, lng: -122.254811 },
// 	//       pov: { heading: 165, pitch: 0 },
// 	//       zoom: 1,
// 	//     }
// 	//   );
// 	// }

// 	// window.initialize = initialize;
// 	const navigate = useNavigate();
// 	const [time, setTime] = useState(5 * 60); // بالثواني

// 	const id = localStorage.getItem('id');
// 	console.log(id);
// 	const [cityimage, setCityimage] = useState('');
// 	const [charname, setcharname] = useState('');
// 	// const Challenge = StagesChallenge.find((item) => item.challengeId == challengeId);
// 	const [currentId, setCurrentId] = useState(null);

// 	const handleClickButton1 = () => {
// 		setCurrentId('1');
// 		navigate(`/Challenge/${currentId}`);
// 		console.log(currentId);
// 	};

// 	const handleClickButton2 = () => {
// 		setCurrentId(2);
// 	};

// 	const handleClickButton3 = () => {
// 		setCurrentId(3);
// 	};

// 	// Assuming your array of objects is called "objects"
// 	const Challenge = StagesChallenge.filter((item) => item.id == currentId);

// 	useEffect(() => {
// 		axios
// 			.get(`https://658d2e7c7c48dce94738a443.mockapi.io/gamedate/${id}`)

// 			.then((res) => {
// 				console.log(res.data);
// 				setCityimage(res.data.cityimage);
// 			})
// 			.catch((error) => {
// 				console.log(error);
// 			});

// 		axios
// 			.get(`https://658d2e7c7c48dce94738a443.mockapi.io/characters/${id}`)

// 			.then((res) => {
// 				console.log(res.data);
// 				setcharname(res.data.name);
// 			})
// 			.catch((error) => {
// 				console.log(error);
// 			});
// 	}, []);

// 	// useEffect(() => {
// 	//   const interval = setInterval(() => {
// 	//     setTime((prevTime) => prevTime - 1);
// 	//   }, 1000); // يقوم بتحديث الوقت كل ثانية واحدة

// 	//   return () => clearInterval(interval); // يتم إلغاء الفاصل الزمني عندما يتم تفكيك العنصر
// 	// }, []);

// 	// const minutes = Math.floor(time / 60);
// 	// const seconds = time % 60;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Char1 from "../assets/character-1.png";
import Map360 from "../assets/images/googlemap.png";
import Prsion from "../assets/images/prsion.png";
// import {
//   Modal,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   Button,
//   useDisclosure,
// } from "@nextui-org/react";

function FindChar() {
  const [time, setTime] = useState(5 * 60); // Time in seconds

  const id = localStorage.getItem("id");
  console.log(id);

  const [cityimage, setCityImage] = useState("");
  const [charname, setCharName] = useState("");
  const [currentId1, setCurrentId1] = useState("1");
  const [currentId2, setCurrentId2] = useState("2");
  const [currentId3, setCurrentId3] = useState("3");
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

  const handleClickButton1 = (challengeId) => {
    setCurrentId1(challengeId);
  };
  const handleClickButton2 = (challengeId) => {
    setCurrentId2(challengeId);
  };
  const handleClickButton3 = (challengeId) => {
    setCurrentId3(challengeId);
  };

  // popup
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = React.useState("opaque");

  const backdrops = ["opaque", "blur", "transparent"];

  const handleOpen = (backdrop) => {
    setBackdrop(backdrop);
    onOpen();
  };
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
            {/* title */}
            <div className="flex justify-end gap-[480px] text-center items-center w-full text-white font-bold mt-4 mb-2">
              <p className="text-2xl">
                {" "}
                {`${charname}`}الان عليك البحث وانقاذ{" "}
              </p>
              <p className="">الشخصية المفقودة</p>
            </div>
            {/* Nav Bar */}
            <nav className="flex justify-between items-center w-1/2 ">
              {/* city Stage */}
              <img
                src={`${cityimage}`}
                alt="city-img"
                width={150}
                className=""
              />
              {/* char and time */}
              <div>
                <div className="flex justify-center items-center ">
                  <img src={Char1} alt="charcters-img" width={100} />
                  <p className="text-white font-semibold text-2xl mt-16 ">1</p>
                </div>
                {/* <div>
                  {minutes.toString().padStart(2, "0")}:
                  {seconds.toString().padStart(2, "0")}
                </div> */}
              </div>
              {/* <p>الشخصية المفقودة</p> */}
              {/* logo */}
            </nav>
            {/* Start Find the charachter */}
            <div className="flex justify-end items-start absolute right-48 top-60">
              <img src={Char1} alt="character-img" width={120} />
            </div>
            {/* prsion */}
            <div className="flex justify-end items-start absolute right-24 top-56">
              <img src={Prsion} alt="Prsion-img" />
            </div>
            <Link to={`/Challenge/${currentId1}`}>
              <div className="flex justify-end items-start absolute right-32 top-44">
                <button
                  onClick={() => {
                    handleClickButton1;
                  }}
                  id="confirm-button"
                  type="button"
                  className="py-2 px-11 w-full text-sm font-medium text-center text-white rounded-lg bg-[#8D3333] sm:w-auto"
                >
                  اقبل التحدي
                </button>
              </div>
            </Link>
            {/* End Find the charachter */}
            {/* ///////////////////////////////////////////////////////////// */}
            {/* Start Find the charachter */}
            <div className="flex justify-end items-start absolute left-48 top-60">
              <img src={Char1} alt="character-img" width={120} />
            </div>
            {/* prsion */}
            <div className="flex justify-end items-start absolute left-24 top-56">
              <img src={Prsion} alt="Prsion-img" />
            </div>
            {/* <Link to={'/Challenge'}> */}
            <Link to={`/Challenge/${currentId2}`}>
              {" "}
              <div className="flex justify-end items-start absolute left-32 top-44">
                <button
                  onClick={() => {
                    handleClickButton1;
                  }}
                  id="confirm-button"
                  type="button"
                  className="py-2 px-11 w-full text-sm font-medium text-center text-white rounded-lg bg-[#8D3333] sm:w-auto"
                >
                  اقبل التحدي
                </button>
              </div>
            </Link>
            {/* End Find the charachter */}
            {/* ///////////////////////////////////////////////////////////////////// */}
            {/* Start Find the charachter */}
            <div className="flex justify-end items-start absolute right-80 top-60">
              <img src={Char1} alt="character-img" width={120} />
            </div>
            {/* prsion */}
            <div className="flex justify-end items-start absolute right-80 top-56">
              <img src={Prsion} alt="Prsion-img" />
            </div>
            {/* <Link to={'/Challenge'}> */}
            <Link to={`/Challenge/${currentId3}`}>
              {" "}
              <div className="flex justify-end items-start absolute right-80 top-44">
                <button
                  onClick={() => {
                    handleClickButton3;
                  }}
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

      {/* Modal */}

      {/* <div className="flex flex-wrap gap-3">
        {backdrops.map((b) => (
          <Button
            key={b}
            variant="flat"
            color="warning"
            onPress={() => handleOpen(b)}
            className="capitalize"
          >
            {b}
          </Button>
        ))}
      </div>
      <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {" "}
                ابدأ {Challenge.name}
              </ModalHeader>
              <ModalBody>
                <p>{Challenge.question}</p>
                <div>
                  <img
                    src={Challenge.image}
                    alt="q1-img"
                    className="relative z-10"
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  تحقق
                </Button>
                {/* <Button color="primary" onPress={onClose}>
                  Action
                </Button> */}
      {/* </ModalFooter>
            </> */}
      {/* )} */}
      {/* //     </ModalContent> */}
      {/* //   </Modal> */}
    </>
  );
}

export default FindChar;
