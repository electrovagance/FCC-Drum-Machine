import React from 'react';
import '../App.css';

const DrumDisplay = (props) => 
    <section id="display">
        <div className="display-wrapper">{props.textToDisplay}</div>
    </section>;

export default DrumDisplay;