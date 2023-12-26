import { Routes } from "react-router-dom";
import ExplainGame from "./component/ExplainGame";
import StagesGame from "./component/StagesGame";

function App() {
  return (
    <>
      <ExplainGame />
      <div>
        <StagesGame />
      </div>
    </>
  );
}

export default App;
