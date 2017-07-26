import React, { Component } from 'react'
import { connect } from 'react-firebase'

class CreatePlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    }
  }

  render() {
    const { setPlayer } = this.props
    const { name } = this.state

    return (
      <div>
        <input type="text" onBlur={ (e) => this.setState({ name: e.target.value })}/>
        <button onClick={ () => setPlayer(name) }>Add player</button>
      </div>
  )}
}

export default connect((props, ref) => ({
  setPlayer: player => ref('players').push(player)
}))(CreatePlayer)