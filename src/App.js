import React, { Component } from 'react';
import { Provider } from 'react-firebase'
import { initializeApp } from 'firebase'
import logo from './logo.svg';
import CreatePlayer from './CreatePlayer.js';
import PrepareGame from './PrepareGame.js';
import './App.css';

const firebaseApp = initializeApp({
  databaseURL: 'https://ultimatemusicalpingpong.firebaseio.com/'
})

class App extends Component {

  render() {
    return (
      <Provider firebaseApp={ firebaseApp }>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>

            <CreatePlayer/>
            <PrepareGame/>

          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </Provider>
    );
  }
}

export default App
