import React, { useState, useEffect } from 'react';

const chemistryDictionary = {
    'Atomic number': 'The number of protons in an atom, which determines the element.',
    'Atomic mass': 'The mass of an atom, calculated by adding the atomic masses of all the protons and neutrons in the nucleus.',
    'Isotopes': 'Atoms with the same atomic number but different atomic masses.',
    'Nuclear fission': 'The process by which nuclear particles split into two or more smaller particles, releasing energy.',
    'Nuclear fusion': 'The process by which nuclear particles combine into larger particles, releasing energy.',
    'Nuclear power': 'The use of nuclear energy to generate electricity.',
    'Nuclear reactor': 'A device used to generate nuclear power.',
    'Nuclear weapons': 'Weapons and devices designed to release nuclear energy.',
    'Particle physics': 'The study of fundamental particles, their interactions, and the forces that govern their behavior.',
    'Particle accelerators': 'Devices used to create high-energy particles.',
    'Quarks': 'The fundamental particles of matter that make up protons and neutrons.',
    'Quark model': 'A proposed theory that explains the behavior of quarks and other subatomic particles.',
    'Strong nuclear force': 'The force between quarks, which holds protons and neutrons together within atomic nuclei.',
    'Weak nuclear force': 'The force between quarks, which causes the weak nuclear decay of certain atomic particles.',
    'Weak interaction': 'The force that allows particles to change their flavor during the decay of other particles.',
    'Electromagnetic force': 'The force that attracts or repels two charged particles.',
    'Gravitational force': 'The force that attracts two masses.'
};

const getRandomWord = () => {
    const words = Object.keys(chemistryDictionary); // Get all the words (keys) from the dictionary
    const randomIndex = Math.floor(Math.random() * words.length); // Generate a random index
    const word = words[randomIndex]; // Get the word at the random index
    const meaning = chemistryDictionary[word]; // Get the meaning of the word
    return { word, meaning }; // Return an object containing the word and its meaning
};

const RandomWordPage = () => {
    const [randomWord, setRandomWord] = useState({ word: '', meaning: '' }); // State to store the random word and its meaning

    useEffect(() => {
        setRandomWord(getRandomWord()); // Set a random word and its meaning when the component mounts
    }, []);

    return (
        <div>
            <h1>General Chemistry Word</h1>
            <p><strong>{randomWord.word}</strong>: {randomWord.meaning}</p> {/* Display the random word and its meaning */}
            <button onClick={() => setRandomWord(getRandomWord())}>Get Another Word</button> {/* Button to get another random word */}
        </div>
    );
};

const dictionaryUrl = 'https://example.com/dictionary'; // Define the dictionary URL
export const randomWordUrl = `${dictionaryUrl}/random-word`;

