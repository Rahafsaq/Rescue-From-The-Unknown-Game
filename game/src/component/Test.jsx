import React, { useEffect, useState } from "react";
import Q1 from "../assets/images/q1.png";
// import { StreetViewPanorama, GoogleMapProvider } from "@react-google-maps/api";

import "../App.css";
import axios from "axios";

function Test() {
  const [map, setMap] = useState(null);
  const [panorama, setPanorama] = useState(null);
  //       src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initialize&v=weekly"

  const apiKey = `AIzaSyD4c6gNvaofT9bAGdjEg4duCTcGilnlllI`;
  // https://streetviewpublish.googleapis.com/v1/photo:startList?key=AIzaSyD4c6gNvaofT9bAGdjEg4duCTcGilnlllI
  // https://streetviewpublish.googleapis.com/$discovery/rest?version=v1
  // https://streetviewpublish.googleapis.com/v1/photo:startList?key=YOUR_API_KEY
  // https://maps.googleapis.com/maps/api/js?key=AIzaSyD4c6gNvaofT9bAGdjEg4duCTcGilnlllI&callback=initMap
  // apiKey = `AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initialize&v=weekly`;

  // AIzaSyAPU4Fv231Duu6DzPfVCGElLfNouuOCZxM

  // https://maps.googleapis.com/maps/api/streetview?size=400x400&location=47.5763831,-122.4211769&fov=80&heading=70&pitch=0&key=AIzaSyAPU4Fv231Duu6DzPfVCGElLfNouuOCZxM
  // call api
  useEffect(() => {
    const fenway = { lat: 42.345573, lng: -71.098326 };

    const mapOptions = {
      center: fenway,
      zoom: 14,
    };
    const mapInstance = new window.google.maps.Map(
      document.getElementById("map"),
      mapOptions
    );
    setMap(mapInstance);

    const panoramaOptions = {
      position: fenway,
      pov: {
        heading: 34,
        pitch: 10,
      },
    };
    const panoramaInstance = new window.google.maps.StreetViewPanorama(
      document.getElementById("panorama"),
      panoramaOptions
    );
    setPanorama(panoramaInstance);

    mapInstance.setStreetView(panoramaInstance);

    // Clean up the map and panorama instances when the component unmounts
    return () => {
      mapInstance.setStreetView(null);
      setPanorama(null);
      setMap(null);
    };
  }, []);
  // get api
  const getMapApi = () => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/js?key=AIzaSyByC839jRjJwFIjuSn2jKIaE7dr5wWStLI&callback=initialize&v=weekly`
      )
      .then((res) => {
        console.log("res done");
      })
      .catch((err) => {
        console.log("there is error: " + err);
      });
  };
  // street view code
  // function initialize() {
  //   const fenway = { lat: 42.345573, lng: -71.098326 };
  //   const map = new google.maps.Map(setMap(), {
  //     center: fenway,
  //     zoom: 14,
  //   });
  //   const panorama = new google.maps.StreetViewPanorama(setPano(), {
  //     position: fenway,
  //     pov: {
  //       heading: 34,
  //       pitch: 10,
  //     },
  //   });

  //   map.setStreetView(panorama);
  // }

  // window.initialize = initialize;
  // AIzaSyByC839jRjJwFIjuSn2jKIaE7dr5wWStLI
  return (
    <>
      {/* <iframe
        width="600"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyByC839jRjJwFIjuSn2jKIaE7dr5wWStLI
    &q=Space+Needle,Seattle+WA"
      ></iframe> */}

      <div className="flex justify-center items-center">
        {/* map */}
        <div>
          <div id="map" style={{ width: "600px", height: "450px" }}></div>
          <div id="panorama" style={{ width: "600px", height: "450px" }}></div>
        </div>
      </div>
      {/* <GoogleMapProvider>
        <StreetViewPanorama
          position={{ lat: 40.712776, lng: -74.005974 }}
          pov={{ heading: 165, pitch: 0 }}
          options={{ streetViewControl: true }}
          onLoad={(streetView) => {
            // Street View loaded
            console.log("Street View loaded:", streetView);
          }}
        />
      </GoogleMapProvider> */}
    </>
    // <div className="bg-slate-800 h-screen w-screen flex justify-center items-center flex-wrap">
    //   {" "}
    //   <div class="card">
    //     <a class="card1" href="#">
    //       <p> 👋مرحبا بك في المكان الأول</p>
    //       <p class="small">:ابحث عن اليكس في</p>
    //       <p class="small"> &#128663; مواقف السيارات -</p>
    //       <p class="small"> &#127968; حديقة المنزل -</p>
    //       <div class="go-corner" href="#">
    //         <div class="go-arrow">→</div>
    //       </div>
    //     </a>
    //   </div>{" "}
    //   {/* Card Changllge */}
    //   <div class="card">
    //     <a class="card1" href="#">
    //       <p className="text-center font-bold"> &#128293; ابدأ التحدي</p>
    //       <p class="small"> ما المقصود من الرموز؟ </p>
    //       <p class="small">
    //         {" "}
    //         <img src={Q1} alt="q1-img" />
    //       </p>
    //       <p class="small">
    //         {" "}
    //         <input
    //           type="text"
    //           placeholder="اكتب هنا"
    //           className="border border-[#5b776d8a] text-center rounded-sm mb-6 outline-none"
    //         />
    //       </p>
    //       <div className="flex justify-center items-center space-y-4 sm:space-x-4 sm:flex sm:space-y-0">
    //         <button
    //           id="confirm-button"
    //           type="button"
    //           className="py-2 px-11 w-full text-sm font-medium text-center text-white rounded-lg bg-[#8D3333] sm:w-auto"
    //         >
    //           تحقق
    //         </button>
    //       </div>
    //       <div class="go-corner" href="#">
    //         <div class="go-arrow">→</div>
    //       </div>
    //     </a>
    //   </div>{" "}
    //   {/* Cards Design Two */}
    //   <br />
    //   <div class=" card5">
    //     {/* <div class="circle"></div>
    // <div class="circle"></div> */}
    //     <div class="card-inner text-white">
    //       <p className="text-center font-bold text-white ">
    //         {" "}
    //         &#128640; ابدأ التحدي
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Test;
