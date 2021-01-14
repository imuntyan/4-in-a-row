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
        const colNum = 4
        const rowNum = 5
        this.state = {
            config: {
                colNum: 4,
                rowNum: 5,
                playerNum: 2
            },
            player: 0,
            fields: Array<number|undefined>(colNum * rowNum).fill(undefined)
        }
    }

    undoHandler = (e: React.MouseEvent) => {}
    newGameHandler = (e: React.MouseEvent) => {}

    pieceDroppedHandler = (column: number) => {
        const newFields = this.state.fields.slice();
        newFields[column] = this.state.player;
        this.setState({
            config: this.state.config,
            player: (this.state.player + 1) % 2,
            fields: newFields
        })
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