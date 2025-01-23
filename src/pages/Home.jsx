import DictionarySelector from '../components/1dictionarySelector';

function Home() {
   
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
         <h1 className="mb-4 text-4xl font-bold">Welcome to the Multi-Dictionary App</h1>
          <p className="mb-6 text-lg">Select a category to start browsing words!!</p>
        <div>
           <DictionarySelector />
        </div>
      </div>
    );
   }
export default Home;