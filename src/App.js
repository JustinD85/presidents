import React, { Component } from 'react';
import './App.css';
import { getPresidents } from './api'
import PresidentsArea from './PresidentsArea'
class App extends Component {
  state = {
    presidents: ''
  }

  async componentDidMount() {
    
  }
  render() {

    return (
      <div className="App">
        <PresidentsArea presidents={this.state.presidents}/>
      </div>
    );
  }
}

export default App;
