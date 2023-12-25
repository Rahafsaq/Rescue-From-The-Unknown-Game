import { Route, Routes } from "react-router-dom";
import "./App.css";
import StagesGame from "./component/StagesGame";

function App() {
  return (
    <>
      <Routes>
        <Route path="/StagesGame" element={<StagesGame />} />
      </Routes>
    </>
  );
}

export default App;
