import { Routes, Route } from "react-router-dom";
import './App.css';
import Open from './components/Open';
import Quizz from './components/Quizz';

function App() {
  return (
    <div className="App bg-black min-h-screen text-white">
      <Routes>
      <Route exact path="/" element={<Open/>}/>
        <Route exact path="/quizz" element={<Quizz/>}/>
      </Routes>
    </div>
  );
}

export default App;
