import React, { useState, useEffect } from 'react';

// Dictionary object containing biology terms and their meanings
const biologyDictionary = {
    'Cell': 'The basic structural, functional, and biological unit of all known living organisms.',
    'DNA': 'Deoxyribonucleic acid, a molecule that carries most of the genetic instructions used in the growth, development, functioning, and reproduction of all known living organisms and many viruses.',
    'Gene': 'A sequence of DNA or RNA that codes for a molecule that has a function.',
    'Evolution': 'The change in the heritable characteristics of biological populations over successive generations.',
    'Photosynthesis': 'A process used by plants and other organisms to convert light energy into chemical energy.',
    'Mitosis': 'A part of the cell cycle in which replicated chromosomes are separated into two new nuclei.',
    'Osmosis': 'The spontaneous net movement of solvent molecules through a selectively permeable membrane into a region of higher solute concentration.',
    'Homeostasis': 'The state of steady internal, physical, and chemical conditions maintained by living systems.',
    'Ecosystem': 'A community of living organisms in conjunction with the nonliving components of their environment, interacting as a system.',
    'Biodiversity': 'The variety and variability of life on Earth.'
};

// Function to get a random word and its meaning from the dictionary
const getRandomWord = () => {
    const words = Object.keys(biologyDictionary); // Get all the words (keys) from the dictionary
    const randomIndex = Math.floor(Math.random() * words.length); // Generate a random index
    const word = words[randomIndex]; // Get the word at the random index
    const meaning = biologyDictionary[word]; // Get the meaning of the word
    return { word, meaning }; // Return an object containing the word and its meaning
};

const RandomWordPage = () => {
    const [randomWord, setRandomWord] = useState({ word: '', meaning: '' }); // State to store the random word and its meaning

    useEffect(() => {
        setRandomWord(getRandomWord()); // Set a random word and its meaning when the component mounts
    }, []);

    return (
        <div>
            <h1>General Biology Word</h1>
            <p><strong>{randomWord.word}</strong>: {randomWord.meaning}</p> {/* Display the random word and its meaning */}
            <button onClick={() => setRandomWord(getRandomWord())}>Get Another Word</button> {/* Button to get another random word */}
        </div>
    );
};

const dictionaryUrl = 'https://example.com/dictionary'; // Define the dictionary URL
export const randomWordUrl = `${dictionaryUrl}/random-word`;