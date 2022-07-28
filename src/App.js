import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./Components/Main";
import Workout from "./Components/Workout";
import Nutrition from "./Components/Nutrition";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/:userId/workout" element={<Workout />} />
          <Route exact path="/:userId/nutrition" element={<Nutrition />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
