import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DictionarySelector from './components/dictionarySelector';
import QuizGame from './pages/QuizGame';
import Home from './pages/Home';
import DictionaryPage from './pages/DictionaryPage';
import NavBar from './components/NavBar';
function App() {
  return (
    <Router>
      <div>
        <NavBar /> 
        <h1 className="mb-4 text-2xl font-bold">Welcome to the Dictionary App</h1>
        <DictionarySelector /> 
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/quiz" element={<QuizGame />} />  
          <Route path="/dictionary/:id" element={<DictionaryPage />} />  
        </Routes>
      </div>
    </Router>
  );
}


export default App;
