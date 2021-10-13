import React from 'react';
import './Tutorial.css';

const Tutorial = ({
    level: {
        title,
        tutorialText,
    },
}) => (
    <React.Fragment>
        <div className="line-break" />
        <div className="tutorial-container">
            <span className="subtitle"> {`${title} Selector Tutorial`} </span>
            <div className="tutorial-text">
                {tutorialText}
            </div>
        </div>
    </React.Fragment>
);

export default Tutorial;
