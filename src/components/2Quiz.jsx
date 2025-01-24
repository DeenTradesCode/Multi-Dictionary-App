// Quiz.jsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const API_URL = "https://1rnoszgn46.execute-api.us-east-1.amazonaws.com/multichoice";

const Quiz = () => {
    const { tag } = useParams();
    const [quizData, setQuizData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchQuizData = async () => {
            try {
                const response = await fetch(`${API_URL}?tag=${tag}`);
                if (!response.ok) throw new Error(`Error: ${response.statusText}`);
                const data = await response.json();
                setQuizData(data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchQuizData();
    }, [tag]);

    if (error) return <p style={{ color: 'red' }}>{error}</p>;
    if (!quizData.length) return <p>Loading...</p>;

    return (
        <div>
            <h2>Quiz Game</h2>
            {quizData.map((item) => (
                
                <p key={item._id}>
                    {item.word}: {item.definition}
                </p>
            ))}
        </div>
    );
};

export default Quiz;
