import React, { useEffect, useState } from "react";
import "../App.css";

function StreetViewMap() {
  const [map, setMap] = useState(null);
  const [panorama, setPanorama] = useState(null);
  //buttons
  const [currentId1, setCurrentId1] = useState("1");
  const [currentId2, setCurrentId2] = useState("2");
  const [currentId3, setCurrentId3] = useState("3");

  const charhImage = localStorage.getItem("image");

  //42.345430699233326, -71.09824338195276
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

    // Set up the markers on the map
    const cafeMarker = new window.google.maps.Marker({
      position: { lat: 42.346634898587794, lng: -71.10063531753458 },
      map: panoramaInstance,
      icon: {
        url: charhImage,
        scaledSize: new window.google.maps.Size(500, 500),
      },
      title: "CharMarker1",
    });
    // 42.34440530744076, -71.09962209569088
    const charMarker2 = new window.google.maps.Marker({
      position: { lat: 42.34440530744076, lng: -71.09962209569088 },
      map: panoramaInstance,
      icon: {
        url: charhImage,
        scaledSize: new window.google.maps.Size(500, 500),
      },
      title: "CharMarker2",
    });
    // 42.34608773409417, -71.0956607107891
    const charMarker3 = new window.google.maps.Marker({
      position: { lat: 42.34608773409417, lng: -71.0956607107891 },
      map: panoramaInstance,
      icon: {
        url: charhImage,
        scaledSize: new window.google.maps.Size(500, 500),
      },
      title: "CharMarker3",
    });

    // Add click event listener to cafeMarker
    cafeMarker.addListener("click", handleCafeMarkerClick);

    // Clean up the panorama
    return () => {
      mapInstance.setStreetView(null);
      setPanorama(null);
      setMap(null);
      // cafeMarker.removeListener("click", handleCafeMarkerClick);
    };
  }, []);

  const handleCafeMarkerClick = () => {
    // Handle the click event here
    // console.log("Cafe marker clicked!");
  };

  // buttons
  const handleClickButton1 = (challengeId) => {
    setCurrentId1(challengeId);
  };
  const handleClickButton2 = (challengeId) => {
    setCurrentId2(challengeId);
  };
  const handleClickButton3 = (challengeId) => {
    setCurrentId3(challengeId);
  };

  return (
    <>
      {/* Start Hero map section */}
      <section className="min-h-screen w-screen bg-slate-500">
        {/* show map */}
        <div className="relative flex justify-center items-center w-screen">
          <div id="panorama" style={{ width: "100%", height: "100vh" }}></div>

          <div
            id="map"
            className="absolute z-10 left-5 bottom-5 border-3 border-black rounded-lg  "
            style={{ width: "200px", height: "150px" }}
          ></div>
        </div>
      </section>
      {/* End Hero map section */}
    </>
  );
}

export default StreetViewMap;
