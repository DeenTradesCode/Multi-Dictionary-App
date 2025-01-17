import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DictionarySelector from './components/dictionarySelector';

function App() {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Welcome to the Dictionary App</h1>
      <DictionarySelector />
    </div>
  );
}

export default App;
