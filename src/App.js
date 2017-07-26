import React, { Component } from 'react';
import { Provider } from 'react-firebase'
import { initializeApp } from 'firebase'
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';

const firebaseApp = initializeApp({
  databaseURL: 'https://ultimatemusicalpingpong.firebaseio.com/'
})

class App extends Component {
  render() {
    return (
      <Provider firebaseApp={ firebaseApp }>                  
            <Main />        
      </Provider>
    );
  }
}

export default App;
