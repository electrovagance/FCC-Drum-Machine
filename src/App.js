import React, { Component } from 'react';
import DrumName from './components/DrumName'
import DrumSettings from './components/DrumSettings'
import DrumPad from './components/DrumPad'
import DrumDisplay from './components/DrumDisplay'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        name: 'MT22 v1',
        power: false
      }
  }

  render() {
    return (
      <div id="drum-container">
        <div id="drum-machine">
          <DrumName name={this.state.name}/>
          <DrumSettings power={this.state.power} />
          <DrumPad />
          <DrumDisplay />
          <section id="display"></section>
        </div>
      </div>

    );
  }
}

export default App;
