import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QuizGame from './pages/QuizGame';
import Home from './pages/Home';
import DictionaryPage from './pages/DictionaryPage';
import NavBar from './components/NavBar';
function App() {
  return (
    <Router>
      <div className="container grid m-auto mt-4">
        <NavBar /> 
        <Home />
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
