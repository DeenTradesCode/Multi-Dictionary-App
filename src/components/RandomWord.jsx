// DictionaryPage.jsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const API_URL = "https://1rnoszgn46.execute-api.us-east-1.amazonaws.com/random-word";

const DictionaryPage = () => {
    const { dictionary } = useParams(); // Get the dictionary name from the URL
    const [randomWord, setRandomWord] = useState({ word: '', meaning: '' });
    const [error, setError] = useState(null);

    // Fetch a random word when the component loads or dictionary changes
    useEffect(() => {
        const fetchRandomWord = async () => {
            try {
                const response = await fetch(`${API_URL}?tag=${dictionary}`);
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const data = await response.json();
                setRandomWord(data);
                setError(null); // Clear previous errors
            } catch (err) {
                setError(err.message);
            }
        };

        fetchRandomWord();
    }, [dictionary]);

    return (
        <div>
            <h1>{dictionary.charAt(0).toUpperCase() + dictionary.slice(1)} Dictionary</h1>

            {error ? (
                <p style={{ color: 'red' }}>Error: {error}</p>
            ) : (
                <p>
                    <strong>{randomWord.word}</strong>: {randomWord.meaning}
                </p>
            )}

            <button onClick={() => setRandomWord(null)}>Get Another Word</button>
        </div>
    );
};

export default DictionaryPage;
