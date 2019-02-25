import React from 'react';
import '../App.css';

const DrumPad = (props) => 
    <section id="pad">
        {props.sounds.map(pad => (
            <div key={pad.id} 
                className="drum-pad" 
                onClick={() => props.onClick(pad.id)}>
                    {pad.letter}
                    <audio type="audio/mp3" src={pad.source} id={pad.id}/>
            </div>
        ))}
    </section>;


export default DrumPad;