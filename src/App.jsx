import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



// Built pages


import Home from './pages/Home';

// Base pages
import BiologyDictionary from './pages/BiologyDictionary';
import ChemistryDictionary from './pages/ChemistryDictionary';
import GeologyDictionary from './pages/GeologyDictionary';
import MedDictionary from './pages/MedDictionary';



function App() {
  return (
    <Router>
       
        <Home />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/biology" element={<BiologyDictionary />} />
          <Route path="/chemistry" element={<ChemistryDictionary />} />
          <Route path="/geology" element={<GeologyDictionary />} />
          <Route path="/medical" element={<MedDictionary />} />
          {/* <Route path="/ph" element={<RandomWordPage />} /> */}
          
          {/* <Route path="/quiz" element={<QuizGame />} />  
          <Route path="/dictionary/:id" element={<DictionaryPage />} />   */}
        </Routes>
    
    </Router>
  );
}


export default App;
