import { useEffect, useState } from 'react';

const dictionaryUrl =
  'https://1rnoszgn46.execute-api.us-east-1.amazonaws.com/multi-details';

function DictionaryList({ setTag }) {
  const [dictionaries, setDictionaries] = useState([]); // To store the list of dictionaries

  // Fetch the dictionary list on component mount
  useEffect(() => {
    fetch(dictionaryUrl)
      .then((response) => response.json())
      .then((data) => setDictionaries(data.dictionaries))
      .catch((error) => console.error('Error fetching dictionaries:', error));
  }, []);

  return (
    <div>
      <div className="button-container">
        {dictionaries.map((dictionary) => (
          <button
            key={dictionary._id}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-3xl mx-8 my-8"
            onClick={() => setTag(dictionary.tags[0])}
          >
            <p>{dictionary.title}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default DictionaryList;