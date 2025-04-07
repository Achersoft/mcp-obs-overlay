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

function App() {

  return (
      <Router>
          <Routes>
              <Route path="one" element={<PlayerOneCharacters />} />
              <Route path="two" element={<PlayerTwoCharacters />} />
              <Route path="score" element={<ScoreOverlay />} />
              <Route path="scorePill" element={<ScorePillOverlay />} />
              <Route path="leftSimple" element={<LeftPlayerSimple />} />
              <Route path="rightSimple" element={<RightPlayerSimple />} />
              <Route path="config" element={<PlayerDetails />} />
              <Route path="characterConfig" element={<CharacterConfigPage />} />
              <Route path="board" element={<PlayerScore />} />
              <Route path="*" element={<Menu />} />
          </Routes>
      </Router>
  )
}

export default App;