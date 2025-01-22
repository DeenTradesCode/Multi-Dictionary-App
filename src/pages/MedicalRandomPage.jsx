import React, { useState, useEffect } from 'react';

// Dictionary object containing medicine terms and their meaning
const medicineDictionary = {
    'Antibiotics': 'Drugs used to kill bacteria.',
    'Anticoagulants': 'Drugs used to reduce blood clotting.',
    'Antifungals': 'Drugs used to kill fungi.',
    'Antiviral drugs': 'Drugs used to kill viruses.',
    'Antineoplastics': 'Drugs used to treat neoplasms.',
    'Antimicrobial agents': 'Drugs used to kill microorganisms.',
    'Antioxidants': 'Drugs used to protect cells from damage by free radicals.',
    'Antipsychotics': 'Drugs used to treat psychological disorders.',
    'Antipsychotic drugs': 'Drugs used to treat psychological disorders.',
);

// Function to get a random word and its meaning from the dictionary
const getRandomWord = () => {
    const words = Object.keys(medicineDictionary); // Get all the words (keys) from the dictionary
    const randomIndex = Math.floor(Math.random() * words.length); // Generate a random index
    const word = words[randomIndex]; // Get the word at the random index
    const meaning = medicineDictionary[word]; // Get the meaning of the word
    return { word, meaning }; // Return an object containing the word and its meaning
};

const RandomWordPage = () => {
    const [randomWord, setRandomWord] = useState({ word: '', meaning: '' }); // State to store the random word and its meaning

    useEffect(() => {
        setRandomWord(getRandomWord()); // Set a random word and its meaning when the component mounts
    }, []);

    return (
        <div>
            <h1>Random Medicine Word</h1>
            <p><strong>{randomWord.word}</strong>: {randomWord.meaning}</p> {/* Display the random word and its meaning */}
            <button onClick={() => setRandomWord(getRandomWord())}>Get Another Word</button> {/* Button to get another random word */}
        </div>
    );
};

// Export the RandomWordPage component and the dictionary URL
const dictionaryUrl = 'https://example.com/dictionary'; // Define the dictionary URL
export const randomWordUrl = `${dictionaryUrl}/random-word`;





















const dictionaryUrl = 'https://example.com/dictionary'; // Define the dictionary URL
export const randomWordUrl = `${dictionaryUrl}/random-word`;