// AllWords.jsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const API_URL = "https://1rnoszgn46.execute-api.us-east-1.amazonaws.com/only-words";

const AllWords = () => {
    const { tag } = useParams();
    const [words, setWords] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAllWords = async () => {
            try {
                const response = await fetch(`${API_URL}?tag=${tag}`);
                if (!response.ok) throw new Error(`Error: ${response.statusText}`);
                const data = await response.json();
                setWords(data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchAllWords();
    }, [tag]);

    if (error) return <p style={{ color: 'red' }}>{error}</p>;
    if (!words.length) return <p>Loading...</p>;

    return (
        <ul>
            {words.map((word, index) => (
                <li key={index}>{word}</li>
            ))}
        </ul>
    );
};

export default AllWords;
