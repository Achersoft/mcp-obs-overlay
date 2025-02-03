import './App.css'
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import StartingSoon from "./pages/StartingSoon.jsx";
import HomePage from "./pages/HomePage.jsx";
import NextRound from "./pages/NextRound.jsx";
import AppOld from "./pages/AppOld.jsx";
import Score from "./pages/Score.jsx";


function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Score/>}/>
        </Routes>
    </Router>
  )
}

export default App
