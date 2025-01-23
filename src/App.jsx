import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DictionaryPage from './pages/DictionaryPage';
import RandomWord from './components/2RandomWord';
import AllWords from './components/2Allwords';
import Quiz from './components/2Quiz';


function App() {
  return (
     <Router>
            <div>
                <Routes>
                    {/* Home Page */}
                    <Route path="/" element={<Home />} />

                    {/* Dynamic Dictionary Page */}
                    <Route path="/dictionary/:tag" element={<DictionaryPage />}>
                        <Route path="random" element={<RandomWord />} />
                        <Route path="all" element={<AllWords />} />
                        <Route path="quiz" element={<Quiz />} />
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;