import { Routes, Route } from "react-router-dom";
import './App.css';
import Gift from "./components/Gift";
import Open from './components/Open';
import Quizz from './components/Quizz';
import Quizz2 from "./components/Quizz2";
import Quizz3 from "./components/Quizz3";

function App() {
  return (
    <div className="App bg-black min-h-screen text-white">
      <Routes>
        <Route exact path="/" element={<Open/>}/>
        <Route exact path="/quizz" element={<Quizz/>}/>
        <Route exact path="/quizz2" element={<Quizz2/>}/>
        <Route exact path="/quizz3" element={<Quizz3/>}/>
        <Route exact path="/gift" element={<Gift/>}/>
      </Routes>
    </div>
  );
}

export default App;
