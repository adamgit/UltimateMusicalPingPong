import React from "react";

export default class Button extends React.Component {
    render() {

        const {onclick} = this.props;
        
        return (
            <div>
                <button onClick={onclick}>Start</button>
            </div>
        )
    }
}