import DictionarySelector from './components/dictionarySelector';
let group = ["Dante Singh", "Ricardo Marmolejo", "Saif Shihadeh", "Justin Hill"];
let messages = group.map(person => `${person}, `);


function App() {
  return (
    <main class="bg-slate-100 p-8 dark:bg-slate-800">
      <h1 className="mb-4 text-2xl font-bold pt-6 space-y-4 text-sky-500 dark:text-sky-400">Welcome to the Dictionary App</h1>
      <h3 class="text-slate-700 dark:text-slate-500">A collaboration between {messages}.</h3>
      <DictionarySelector />
    </main>
  );
}

export default App;
