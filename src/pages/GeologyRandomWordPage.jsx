import { useState, useEffect } from 'react';

const geologyDictionary = {
    'Mountain range': 'A series of mountains that form a continuous landmass.',
    'Plate tectonics': 'The study of the movement and forces that cause tectonic plates to move and interact.',
    'Earthquakes': 'The sudden release of energy from the Earth\'s crust through the movement of rocks and deformations.',
    'Volcanoes': 'Lava flows that erupt from the Earth\'s crust, forming volcanic mountains and formations.',
    'Seismic activity': 'The occurrence of earthquakes and volcanic eruptions.',
    'Fault lines': 'The boundaries between tectonic plates and the boundaries between sedimentary rocks.',
    'Tectonic plates': 'The large chunks of rock and soil that move continually through the Earth\'s crust.'
};

//function to get a random word from the dictionary
const getRandomWord = () => {
    const words = Object.keys(geologyDictionary); // Get all the words (keys) from the dictionary
    const randomIndex = Math.floor(Math.random() * words.length); // Generate a random index
    const word = words[randomIndex]; // Get the word at the random index
    const meaning = geologyDictionary[word]; // Get the meaning of the word
    return { word, meaning }; // Return an object containing the word and its meaning
};

const RandomWordPage = () => {
    const [randomWord, setRandomWord] = useState({ word: '', meaning: '' }); // State to store the random word and its meaning

    useEffect(() => {
        setRandomWord(getRandomWord()); // Set a random word and its meaning when the component mounts
    }, []);

    return (
        <div>
            <h1>Geological Science Word</h1>
            <p><strong>{randomWord.word}</strong>: {randomWord.meaning}</p> {/* Display the random word and its meaning */}
            <button onClick={() => setRandomWord(getRandomWord())}>Get Another Word</button> {/* Button to get another random word */}
        </div>
    );
};

const dictionaryUrl = 'https://example.com/dictionary'; // Define the dictionary URL
export const randomWordUrl = `${dictionaryUrl}/random-word`;

































const dictionaryUrl = 'https://example.com/dictionary'; // Define the dictionary URL
export const randomWordUrl = `${dictionaryUrl}/random-word`;