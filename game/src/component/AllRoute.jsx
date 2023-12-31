// import Homepage from ' ./Pages/Homepage.jsx';
import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import Characters from "../component/Characters.jsx";
import StagesGame from "../component/StagesGame.jsx";
import ExplainGame from "../component/ExplainGame.jsx";
import Popup from "../component/Popup.jsx";
import FindChar from "./FindChar.jsx";
import Challenge from "./Challenge.jsx";
import Test from "./Test.jsx";
import Home2 from "../Pages/Home2.jsx";
function AllRoute() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Characters" element={<Characters />} />
        <Route path="/StagesGame" element={<StagesGame />} />
        <Route path="/ExplainGame" element={<ExplainGame />} />
        <Route path="/Popup" element={<Popup />} />
        <Route path="/FindChar" element={<FindChar />} />
        <Route path="/Challenge" element={<Challenge />} />
        <Route path="/Test" element={<Test />} />
        <Route path="/Home2" element={<Home2 />} />
      </Routes>
    </div>
  );
}

export default AllRoute;
