import React, { Component } from 'react';
import DrumName from './components/DrumName'
import DrumSettings from './components/DrumSettings'
import DrumPad from './components/DrumPad'
import DrumDisplay from './components/DrumDisplay'
import './App.css';

const sounds = [
  {
    id: 'heater-1',
    letter: 'Q',
    key: 81,
    source: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    id: 'heater-2',
    letter: 'W',
    key: 87,
    source: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    id: 'heater-3',
    letter: 'E',
    key: 69,
    source: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    id: 'heater-4',
    letter: 'A',
    key: 65,
    source: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    id: 'clap',
    letter: 'S',
    key: 83,
    source: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    id: 'open-hh',
    letter: 'D',
    key: 68,
    source: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    id: 'kick-n-hat',
    letter: 'Z',
    key: 90,
    source: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    id: 'kick',
    letter: 'X',
    key: 88,
    source: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    id: 'closed-hh',
    letter: 'C',
    key: 67,
    source: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
]

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        name: 'MT22 v1',
        power: false,
        display: ''
      }
    // this.handleClick = this.handleClick.bind(this);
    this.updateDisplay = this.updateDisplay.bind(this);
    this.playSoundOnKeyDown = this.playSoundOnKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.playSoundOnKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.playSoundOnKeyDown);
  }

  updateDisplay = (id) => {
    let x = document.getElementById(id);
    x.play();
    this.setState({ display: id });
  }

  playSoundOnKeyDown = (event) => {
    console.log(event);
    switch(event.keyCode) {
      case 81:
        this.updateDisplay(sounds[0].id)
        break;
      case 87:
        this.updateDisplay(sounds[1].id)
        break;
      case 69:
        this.updateDisplay(sounds[2].id)
        break;
      case 65:
        this.updateDisplay(sounds[3].id)
        break;
      case 83:
        this.updateDisplay(sounds[4].id)
        break;
      case 68:
        this.updateDisplay(sounds[5].id)
        break;
      case 90:
        this.updateDisplay(sounds[6].id)
        break;
      case 88:
        this.updateDisplay(sounds[7].id)
        break;
      case 67:
        this.updateDisplay(sounds[8].id)
        break;
      default:
        break;
    }
  }

  // handleClick() {
  //   this.setState(state => ({
  //     isToggleOn: !state.isToggleOn
  //   }));
  // }

  render() {
    return (
      <div id="drum-container">
        <div id="drum-machine">
          <DrumName name={this.state.name}/>
          <DrumSettings power={this.state.power} />
          <DrumPad onClick={this.updateDisplay} onKeyDown={this.playSoundOnKeyDown} sounds={sounds}/>
          <DrumDisplay textToDisplay={this.state.display}/>
        </div>
      </div>
    );
  }
}

export default App;
