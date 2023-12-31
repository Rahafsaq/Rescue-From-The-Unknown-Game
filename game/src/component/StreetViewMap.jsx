import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";

function StreetViewMap() {
  const [map, setMap] = useState(null);
  const [panorama, setPanorama] = useState(null);

  const apiKey = `AIzaSyD4c6gNvaofT9bAGdjEg4duCTcGilnlllI`;

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
      icon: "http://localhost:5174/src/assets/character-1.png",
      title: "Cafe",
    });

    // Clean up the panorama
    return () => {
      mapInstance.setStreetView(null);
      setPanorama(null);
      setMap(null);
    };
  }, []);

  return (
    <>
      {/* Start Hero map section */}
      <section className="min-h-screen w-screen bg-slate-500">
        {/* show map */}
        <div className="relative flex justify-center items-center w-screen">
          <div id="panorama" style={{ width: "100%", height: "100vh" }}></div>
          <div
            id="map"
            className="absolute"
            style={{ width: "600px", height: "450px" }}
          ></div>
        </div>
      </section>
      {/* End Hero map section */}
    </>
  );
}

export default StreetViewMap;
