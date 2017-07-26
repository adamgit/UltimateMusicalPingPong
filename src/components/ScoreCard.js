import React from "react";

export default class ScoreCard extends React.Component {
    render() {

        const {playerScores, incrementScore} = this.props;
        
        return (
            <div>
                <button onClick={incrementScore.bind(this,'player0')}>+</button><h3>Player 1 : {playerScores.player0Score}</h3>
                <h3>Player 2 : {playerScores.player1Score}</h3><button onClick={incrementScore.bind(this,'player1')}>+</button >
            </div>
        )
    }
}