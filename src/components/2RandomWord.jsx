// RandomWord.jsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const API_URL = "https://1rnoszgn46.execute-api.us-east-1.amazonaws.com/random-word";

const RandomWord = () => {
    const { tag } = useParams(); // Get the tag from the URL
    const [randomWord, setRandomWord] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRandomWord = async () => {
            try {
                const response = await fetch(`${API_URL}?tag=${tag}`);
                if (!response.ok) throw new Error(`Error: ${response.statusText}`);
                const data = await response.json();
                setRandomWord(data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchRandomWord();
    }, [tag]);

    if (error) return <p style={{ color: 'red' }}>{error}</p>;
    if (!randomWord) return <p>Loading...</p>;

    return (
        <div>
            <p>
                <strong>{randomWord.word}</strong>: {randomWord.meaning}
            </p>
            <button onClick={() => setRandomWord(null)}>Get Another Word</button>
        </div>
    );
};

export default RandomWord;
