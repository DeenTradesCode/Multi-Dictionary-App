import { Home } from "./pages/Home";
import DictionaryList from "./components/DictionaryList";
import WordList from "./components/WordList";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [tag, setTag] = useState("");
  const [dictionaries, setDictionaries] = useState([]);

  return (
    <>
      <div className="bg-emerald-500 text-center text-color">
        <Home />
        <DictionaryList setTag={setTag} />
        <div className="capitalize text-3xl font-bold">{tag}</div>
        <WordList tag={tag} />
        <Footer />
      </div>
    </>
  );
}

export default App;