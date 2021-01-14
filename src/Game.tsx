import React from 'react';
import Board from './Board';

interface GameState {
    config: {
        colNum: number
        rowNum: number
        playerNum: number
    }
    player: number
    fields: (number|undefined)[]
}
class Game extends React.Component<any, GameState> {

    constructor(props: any) {
        super(props);
        const colNum = 6
        const rowNum = 5
        this.state = {
            config: {
                colNum: colNum,
                rowNum: rowNum,
                playerNum: 2
            },
            player: 0,
            fields: Array<number|undefined>(colNum * rowNum).fill(undefined)
        }
    }

    indexToCoord(index: number) {
       const [col, row] =  [index % this.state.config.colNum, index / this.state.config.colNum]
        return [col, row]
    }
    coordToIndex(row: number, col: number) {
        return row * this.state.config.colNum + col
    }


    undoHandler = (e: React.MouseEvent) => {}
    newGameHandler = (e: React.MouseEvent) => {}

    pieceDroppedHandler = (col: number) => {
        const row = this.placePiece(col);
        if (row !== -1) {
            const ind = this.coordToIndex(row, col);
            const newFields = this.state.fields.slice();
            newFields[ind] = this.state.player;
            this.setState({
                config: this.state.config,
                player: (this.state.player + 1) % 2,
                fields: newFields
            })
        }
    }

    placePiece(col: number) {
        let row = 0
        while (row < this.state.config.rowNum) {
            const ind = this.coordToIndex(row, col)
            if (this.state.fields[ind] !== undefined) return (row - 1);
            row += 1;
        }
        return (row - 1);
    }




    render() {
        return (
            <Board
                rowNum={this.state.config.rowNum}
                colNum={this.state.config.colNum}
                playerNum={this.state.config.playerNum}
                player={this.state.player}
                fields={this.state.fields}
                undoHandler={this.undoHandler}
                newGameHandler={this.newGameHandler}
                pieceDroppedHandler = {this.pieceDroppedHandler}
            />
        )
    }
}

export default Game;