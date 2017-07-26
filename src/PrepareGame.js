import React, { Component } from 'react'
import firebase from 'firebase'
import { connect } from 'react-firebase'

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
        <select>
        {
          allPlayers.map((player) => {
            return <option value={ player }>{ player }</option>
          })
        }
        </select>

        <select>
        {
          allPlayers.map((player) => {
            return <option value={ player }>{ player }</option>
          })
        }
        </select>
      </div>
  )}
}

export default PrepareGame