import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function DictionarySelector() {
  const [dictionaries, setDictionaries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch dictionary data
    fetch('https://1rnoszgn46.execute-api.us-east-1.amazonaws.com/multi-details')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch dictionaries.');
        }
        return response.json();
      })
      .then((data) => {
        // Extract the array of dictionaries and store in state
        setDictionaries(data.dictionaries);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

// conditional rendering based on loading state and error state

  if (isLoading) {
    return <p>Loading dictionaries...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }


//  ! this only supports four dictionaries
  return (
    <div class="flex flex-col space-y-2">
      {dictionaries.map((dict) => (
        <button
          key={dict._id}
          class="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          onClick={() => {
            // Handle user selection of a dictionary here
            console.log(`Selected dictionary: ${dict.title}`);
          }}
        >
          {dict.title}
        </button>
      ))}
    </div>
  );
}

export default DictionarySelector;
