import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
function StreetViewMap3() {
  const [map, setMap] = useState(null);
  const [panorama, setPanorama] = useState(null);
  //buttons
  const [currentId1, setCurrentId1] = useState("4");
  const [currentId2, setCurrentId2] = useState("5");
  // const [currentId3, setCurrentId3] = useState("3");

  const nav = useNavigate();

  const charhImage = localStorage.getItem("image");

  //42.345430699233326, -71.09824338195276
  // call api
  useEffect(() => {
    const fenway = { lat: -26.206919, lng: 28.041089 };

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

    //Set up the markers on the map
    const charMarker1 = new window.google.maps.Marker({
      position: { lat: -26.209307, lng: 28.040993 },
      map: panoramaInstance,
      icon: {
        url: charhImage,
        scaledSize: new window.google.maps.Size(500, 500),
      },
      title: "CharMarker1",
    });
    // -26.207001, 28.040745
    const charMarker2 = new window.google.maps.Marker({
      position: { lat: -26.207001, lng: 28.040745 },
      map: panoramaInstance,
      icon: {
        url: charhImage,
        scaledSize: new window.google.maps.Size(500, 500),
      },
      title: "CharMarker2",
    });

    // Add click event listener to cafeMarker
    charMarker1.addListener("click", handleCafeMarkerClick);
    charMarker2.addListener("click", handleCafeMarkerClick2);

    // Clean up the panorama
    return () => {
      mapInstance.setStreetView(null);
      setPanorama(null);
      setMap(null);
    };
  }, []);

  const handleCafeMarkerClick = () => {
    // Handle the click event here
    nav(`/Challenge/${currentId1}`);
  };
  const handleCafeMarkerClick2 = () => {
    // Handle the click event here
    nav(`/Challenge/${currentId2}`);
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

export default StreetViewMap3;
