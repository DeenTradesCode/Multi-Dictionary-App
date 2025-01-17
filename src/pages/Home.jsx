import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
   
    return (
        <div>
          <h1>Welcome to the Multi-Dictionary App</h1>
          <p>Select a category to start browsing words</p>
          <ul>
            <li><Link to="/dictionary/biology">Biology</Link></li>
            <li><Link to="/dictionary/chemistry">Chemistry</Link></li>
            <li><Link to="/dictionary/geology">Geology</Link></li>
            <li><Link to="/dictionary/medicine">Medicine</Link></li>
            <li><Link to="/quiz">Start Quiz Game</Link></li> 
          </ul>
        </div>
      );
    }
 //approach using Array and .map() instead
//     const dictionaries = [
//         { name: 'Biology', path: '/dictionary/biology' },
//         { name: 'Chemistry', path: '/dictionary/chemistry' },
//         { name: 'Geology', path: '/dictionary/geology' },
//         { name: 'Medicine', path: '/dictionary/medicine' },
//     ];

//     return (
//         <div>
//             <h1>Welcome to the Multi-Dictionary App!</h1>
//             <p>Select a category to start browsing words</p>
//             <ul>
//                 {dictionaries.map((dict) => (
//                     <li key={dict.name}>
//                         <Link to={dict.path}>{dict.name}</Link>
//                     </li>
//                 ))}
//                 <li>
//                     <Link to="/quiz">Start Quiz Game</Link> {/* start the quiz */}
//                 </li>
//             </ul>
//         </div>
//     );mm
// }
//Hardcoded alternative approach
export default Home;
