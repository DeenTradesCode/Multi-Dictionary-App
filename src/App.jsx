import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Built components
import RandomWordPage from './pages/RandomWordPage';
import QuizGame from './pages/QuizGame';
import Home from './pages/Home';
import DictionaryPage from './pages/DictionaryPage';
import NavBar from './components/NavBar';


function App() {
  return (
    <Router>
        <NavBar /> 
        <Home />
        <Routes>
          <Route path="/biology" element={<RandomWordPage />} />
          <Route path="/chemistry" element={<RandomWordPage />} />
          <Route path="/geology" element={<RandomWordPage />} />
          <Route path="/medical" element={<RandomWordPage />} />
          <Route path="/ph" element={<RandomWordPage />} />
          <Route path="/" element={<Home />} /> 
          <Route path="/quiz" element={<QuizGame />} />  
          <Route path="/dictionary/:id" element={<DictionaryPage />} />  
        </Routes>
    
    </Router>
  );
}


export default App;
