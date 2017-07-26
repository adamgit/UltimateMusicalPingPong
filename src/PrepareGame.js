import React, { Component } from 'react'
import firebase from 'firebase'

class PrepareGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allPlayers: [],
      player1: "",
      player2: ""
    }
  }

  componentDidMount() {
    firebase.database().ref('players').on('value', (snapshot) => {
      const values = snapshot.val()
      let players = []

      Object.keys(values).map((key) => {
        players.push(values[key])
      })

      this.setState({
        allPlayers: players
      })
    })
  }

  render() {
    const { allPlayers } = this.state

    return ( 
      <div>
        <select className="PrepareGame-select">
        {
          allPlayers.map((player, index) => {
            return <option key={`player1-${index}`} value={ player }>{ player }</option>
          })
        }
        </select>

        <select className="PrepareGame-select">
        {
          allPlayers.reverse().map((player, index) => {
            return <option key={`player1-${index}`} value={ player }>{ player }</option>
          })
        }
        </select>
      </div>
  )}
}

export default PrepareGame