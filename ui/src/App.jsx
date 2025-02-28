import './App.css'
import {HashRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom";
import ScoreOverlay from "./pages/ScoreOverlay.jsx";
import PlayerScore from "./pages/PlayerScore.jsx";
import PlayerDetails from "./pages/PlayerDetails.jsx";
import Menu from "./pages/Menu.jsx";
import PlayerOneCharacters from "./pages/PlayerOneCharacters.jsx";

function App() {

  return (
      <Router>
          <Routes>
              <Route path="one" element={<PlayerOneCharacters />} />
              <Route path="score" element={<ScoreOverlay />} />
              <Route path="config" element={<PlayerDetails />} />
              <Route path="board" element={<PlayerScore />} />
              <Route path="*" element={<Menu />} />
          </Routes>
      </Router>
  )
}

export default App;