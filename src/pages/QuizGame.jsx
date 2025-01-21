import React, { useState, useEffect } from 'react';
import './QuizGame.css';


const dictionaryUrl = 'https://1rnoszgn46.execute-api.us-east-1.amazonaws.com';
const multiChoiceUrl = `${dictionaryUrl}/multichoice`;

function QuizGame() {
    const [score, setScore] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [feedback, setFeedback] = useState('');
    const [questions, setQuestions] = useState([]);
    const [selectedTag, setSelectedTag] = useState('geology'); 

    const tags = ['geology', 'biology', 'chemistry', 'medicine'];

    useEffect(() => {
        const fetchQuizData = async () => {
            try {
                const response = await fetch(`${multiChoiceUrl}?tag=${selectedTag}`);
                const data = await response.json();
                console.log('Fetched Questions:', data.questions);  // Log fetched data
                setQuestions(data.questions);  // Set questions data
              } catch (error) {
                setError(error);  
                console.error('Error fetching quiz data:', error);
              } 
            };
        
            fetchQuizData();
          }, [selectedTag]);  
          if (questionIndex >= questions.length) {
            return <div>Your Score: {score} / {questions.length}</div>;
          }
        

    const handleAnswer = (userAnswer) => {
        if (userAnswer === questions[questionIndex].correctAnswer) {
            setScore(score + 1);
            setFeedback('Correct! Well done.');
        } else {
            setFeedback('Ahhh Incorrect.. Try Again!');
        }

        // Move to the next question or finish the quiz
        if (questionIndex + 1 < questions.length) {
            setTimeout(() => {
                setFeedback('');
                setQuestionIndex(questionIndex + 1);
            }, 1000);
        }
    };
    if (questionIndex >= questions.length) {
        return <div>Your Score: {score} / {questions.length}</div>;
    }

    return (
        <div>
            <h3>Quiz Game</h3>
            <p>{questions[questionIndex]?.question}</p>

            <div class="answers-container">
                {questions[questionIndex]?.choices.map((choice, index) => (
                    <button key={index} onClick={() => handleAnswer(choice)}>
                        {choice}
                    </button>
                ))}
            </div>

            {feedback && <p>{feedback}</p>}
        </div>
    );
}


export default QuizGame;