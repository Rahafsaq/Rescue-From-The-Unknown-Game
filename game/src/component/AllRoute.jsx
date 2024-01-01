import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import Characters from "../component/Characters.jsx";
import ExplainGame from "../component/ExplainGame.jsx";
import Popup from "../component/Popup.jsx";
import StagesGame from "../component/StagesGame.jsx";
import Challenge from "./Challenge.jsx";
// import Test from "./Test.jsx";
import Errorpage from "../Pages/Errorpage.jsx";
// import Tes from '../component/Tes.jsx'

import FindChar from "./FindChar.jsx";
import StreetViewMap from "./StreetViewMap.jsx";
import Stagel from "./Stagel.jsx";

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
        {/* <Route path="/Test" element={<Test />} /> */}
        <Route path="/*" element={<Errorpage />} />
        {/* <Route path="Tes" element={<Tes />} /> */}

        <Route path="/Challenge/:challengeId" element={<Challenge />} />
        <Route path="/StreetViewMap" element={<StreetViewMap />} />
        <Route path="/Stagel" element={<Stagel />} />
      </Routes>
    </div>
  );
}

export default AllRoute;
