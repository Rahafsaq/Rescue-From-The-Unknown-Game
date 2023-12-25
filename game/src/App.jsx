import { Route, Routes } from "react-router-dom";
import "./App.css";
import StagesGame from "./component/StagesGame";
import ExplainGame from "./component/ExplainGame";

function App() {
  return (
    <>
      <Routes>
        <Route path="/StagesGame" element={<StagesGame />} />
        <Route path="/ExplainGame" element={<ExplainGame />} />
      </Routes>
    </>
  );
}

export default App;
