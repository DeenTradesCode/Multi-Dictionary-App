import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import biologyData from '../data/biology.json';
import chemistryData from '../data/chemistry.json';
import geologyData from '../data/geology.json';
import medicineData from '../data/medicine.json';

//this is where we choose dictionary type (med, geo, biology, chemistry)
function DictionaryPage() {
  const { id } = useParams(); 
  const [words, setWords] = useState([]);

  // loading data based on the route parameter so (`id`)
  useEffect(() => {
    switch (id) {
      case 'biology':
        setWords(biologyData);
        break;
      case 'chemistry':
        setWords(chemistryData);
        break;
      case 'geology':
        setWords(geologyData);
        break;
      case 'medicine':
        setWords(medicineData);
        break;
      default:
        setWords([]);
    }
  }, [id]);

  return (
    <div>
      <h2>{id.charAt(0).toUpperCase() + id.slice(1)} Dictionary</h2>
      <ul>
        {words.map((word) => (
          <li key={word.id}>
            <strong>{word.word}</strong>: {word.definition}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DictionaryPage;