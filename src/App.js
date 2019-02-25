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
        power: false,
        display: ''
      }
    // this.handleClick = this.handleClick.bind(this);
    this.updateDisplay = this.updateDisplay.bind(this);
  }

  updateDisplay = (id) => {
    let x = document.getElementById(id);
    x.play();
    this.setState({ display: id });

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
          <DrumPad onClick={this.updateDisplay}/>
          <DrumDisplay textToDisplay={this.state.display}/>
        </div>
      </div>
    );
  }
}

export default App;
