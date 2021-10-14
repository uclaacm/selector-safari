import React from 'react';
import './Tutorial.css';

const Tutorial = ({
    level: {
        title,
        tutorialText,
    },
}) => (
    <div className="tutorial-container">
        <span className="subtitle"> {`${title} Selector Tutorial`} </span>
        <div className="tutorial-text">
            {tutorialText}
        </div>
    </div>
);

export default Tutorial;
