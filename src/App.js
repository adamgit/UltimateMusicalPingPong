import React, { Component } from 'react';
import { Provider } from 'react-firebase'
import { initializeApp } from 'firebase'
import CreatePlayer from './CreatePlayer.js';
import PrepareGame from './PrepareGame.js';
import './App.css';
import Main from './components/Main';
import pingpong from './pingpong.jpg';

const firebaseApp = initializeApp({
  databaseURL: 'https://ultimatemusicalpingpong.firebaseio.com/'
})

class App extends Component {

  render() {
    return (
      <Provider firebaseApp={ firebaseApp }>
        <div className="App">

          <div className="App-header">
            <img src={pingpong} className="App-logo" alt="logo"/>

          </div>
          <div className="App-main">
            <CreatePlayer/>
            <PrepareGame/>

            <Main />    
          </div>    
        </div>
      </Provider>
    );
  }
}

export default App
