import './App.css'
import {HashRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom";
import ScoreOverlay from "./pages/ScoreOverlay.jsx";
import ScorePillOverlay from "./pages/ScorePillOverlay.jsx";
import PlayerScore from "./pages/PlayerScore.jsx";
import PlayerDetails from "./pages/PlayerDetails.jsx";
import Menu from "./pages/Menu.jsx";
import PlayerOneCharacters from "./pages/PlayerOneCharacters.jsx";
import PlayerTwoCharacters from "./pages/PlayerTwoCharacters.jsx";
import LeftPlayerSimple from "./pages/LeftPlayerSimple.jsx"
import RightPlayerSimple from "./pages/RightPlayerSimple.jsx"
import CharacterConfigPage from "./pages/CharacterConfigPage.jsx";
import CharacterStatePage from "./pages/CharacterStatePage.jsx";
import ScreenConfigPage from "./pages/ScreenConfigPage.jsx";
import WhiteTimer from "./pages/WhiteTimer.jsx";
import BlackTimer from "./pages/BlackTimer.jsx";

function App() {

  return (
      <Router>
          <Routes>
              <Route path="character-state" element={<CharacterStatePage />} />
              <Route path="one" element={<PlayerOneCharacters />} />
              <Route path="two" element={<PlayerTwoCharacters />} />
              <Route path="score" element={<ScoreOverlay />} />
              <Route path="score-pill" element={<ScorePillOverlay />} />
              <Route path="left-simple" element={<LeftPlayerSimple />} />
              <Route path="right-simple" element={<RightPlayerSimple />} />
              <Route path="config" element={<PlayerDetails />} />
              <Route path="characterConfig" element={<CharacterConfigPage />} />
              <Route path="screenConfig" element={<ScreenConfigPage />} />
              <Route path="board" element={<PlayerScore />} />
              <Route path="white-timer" element={<WhiteTimer />} />
              <Route path="black-timer" element={<BlackTimer />} />
              <Route path="*" element={<Menu />} />
          </Routes>
      </Router>
  )
}

export default App;