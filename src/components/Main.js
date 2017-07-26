import React from "react";
import Button from "./Button";
import ScoreCard from "./ScoreCard";

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            gameInPlay: false,
            player0Score: 0,
            player1Score: 0,
            activePlayer: 0,
        }
    }

    incrementScore(player) {
     player==="player0" ? this.setState({ player0Score: this.state.player0Score+1 }) : this.setState({ player1Score: this.state.player1Score+1 });

        if(this.state.player0Score === 21 || this.state.player1Score === 21) {
            
        }
     


    }

    handleClick() {        
        this.setState({
            gameInPlay: true
        })
    }

    render() {

        const {gameInPlay, player0Score, player1Score} = this.state;
        return (
            <div>
                { !gameInPlay && <Button onclick={this.handleClick.bind(this)} />}
                { gameInPlay && <ScoreCard playerScores={{player0Score, player1Score}} incrementScore={this.incrementScore.bind(this)} /> }
            </div>
        )
        
    }
}