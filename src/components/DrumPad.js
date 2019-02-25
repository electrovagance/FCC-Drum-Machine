import React from 'react';
import '../App.css';

const sounds = [
    {
        id: 'heater-1',
        letter: 'Q',
        source: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
        id: 'heater-2',
        letter: 'W',
        source: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
        id: 'heater-3',
        letter: 'E',
        source: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
        id: 'heater-4',
        letter: 'A',
        source: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
        id: 'clap',
        letter: 'S',
        source: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
        id: 'open-hh',
        letter: 'D',
        source: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
        id: 'kick-n-hat',
        letter: 'Z',
        source: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
        id: 'kick',
        letter: 'X',
        source: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
        id: 'closed-hh',
        letter: 'C',
        source: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
]

const DrumPad = (props) => 
    <section id="pad">
        {sounds.map(pad => (
            <div key={pad.id} 
                className="drum-pad" 
                onClick={() => props.onClick(pad.id)}>
                    {pad.letter}
                    <audio type="audio/mp3" src={pad.source} id={pad.id}/>
            </div>
        ))}
    </section>;


export default DrumPad;