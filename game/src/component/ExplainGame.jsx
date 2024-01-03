

import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import video1 from '../assets/images/video1.mp4';
import Map from "../assets/images/green-map_1.png";
import Bgmapp from '../assets/images/bg-ex.png'

function ExplainGame() {
  const videoRef = useRef(null)
  useEffect(() => {
    const video = videoRef.current;

    video.play();

    return () => {
      video.pause();
    };
  }, []);

  return (
    <>


      <div className="w-full h-screen  bg-[#5b776d5e]  " >
	  <div className="flex justify-center items-center flex-col gap-9 relative ">
	  <p className="text-black text-4xl font-primary mt-11 max-sm:text-2xl">طريقة اللعبة</p>
	  <video
            ref={videoRef}
            src={video1}
            autoPlay 
            loop 
            className="object-cover w-[60vw] h-[70vh] rounded-xl max-sm:w-[90vw] max-sm:h-[65vh] "
          />
		<Link to={`/Popup`}>
								<button className='bg-[#8D3333] font-primary text-white p-2 rounded-xl'>ابدأ اللعبة</button>
							</Link>
      </div>
	  </div>
    </>
  );
}

export default ExplainGame;