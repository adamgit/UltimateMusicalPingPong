import React, { Component } from 'react';
import { Provider } from 'react-firebase'
import { initializeApp } from 'firebase'
import logo from './logo.svg';
import CreatePlayer from './CreatePlayer.js';
import PrepareGame from './PrepareGame.js';
import './App.css';
import Main from './components/Main';

const firebaseApp = initializeApp({
  databaseURL: 'https://ultimatemusicalpingpong.firebaseio.com/'
})

class App extends Component {

  render() {
    return (
      <Provider firebaseApp={ firebaseApp }>
        <div className="App">
          <div className="App-header">
            <CreatePlayer/>
            <PrepareGame/>

          </div>
          
          <Main />        
        </div>
      </Provider>
    );
  }
}

export default App
