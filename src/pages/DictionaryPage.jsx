// DictionaryPage.jsx
import { Outlet, useNavigate, useParams } from 'react-router-dom';

const DictionaryPage = () => {
    const { tag } = useParams(); // Extract the tag from the URL
    const navigate = useNavigate();

    const handleNavigation = (action) => {
        navigate(`/dictionary/${tag}/${action}`);
    };

    return (
        <div>
            <h1>{tag.charAt(0).toUpperCase() + tag.slice(1)} Dictionary</h1>

            {/* Action Buttons */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', margin: '20px 0' }}>
                <button onClick={() => handleNavigation('random')}>Random Word</button>
                <button onClick={() => handleNavigation('all')}>All Words</button>
                <button onClick={() => handleNavigation('quiz')}>Quiz</button>
            </div>

            {/* Nested Routes Rendered Here */}
            <Outlet />
        </div>
    );
};

export default DictionaryPage;
