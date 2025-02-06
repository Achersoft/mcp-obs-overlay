import './App.css'
import {HashRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom";
import StartingSoon from "./pages/StartingSoon.jsx";
import HomePage from "./pages/HomePage.jsx";
import NextRound from "./pages/NextRound.jsx";
import AppOld from "./pages/AppOld.jsx";
import ScoreOverlay from "./pages/ScoreOverlay.jsx";
import PlayerScore from "./pages/PlayerScore.jsx";


function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path="score" element={<ScoreOverlay />} />
              <Route path="board" element={<PlayerScore />} />
              <Route path="*" element={<AppOld />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App;