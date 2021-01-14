import React from 'react';
import Board from './Board';

class Game extends React.Component {

    colNum = 4
    rowNum = 5
    playerNum = 2
    fields = Array<number|undefined>(this.colNum,this.rowNum).fill(undefined)
    constructor(props: any) {
        super(props);
        this.state = {
            fields: Array
        }
    }

    undoHandler = (e: React.MouseEvent) => {}
    newGameHandler = (e: React.MouseEvent) => {}

    render() {
        return (
            <Board
                rowNum={this.rowNum}
                colNum={this.colNum}
                playerNum={this.playerNum}
                fields={this.fields}
                undoHandler={this.undoHandler}
                newGameHandler={this.newGameHandler}
            />
        )
    }
}

export default Game;