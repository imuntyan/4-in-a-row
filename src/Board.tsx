import React from 'react';
import './Board.css';

class Board extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="game-board">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </div>
        )
    }
}

export default Board;