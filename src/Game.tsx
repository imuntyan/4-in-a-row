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
        const colNum = 7
        const rowNum = 6
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
            const matchingLines = this.checkWinner(row, col, this.state.player);
            console.log(matchingLines);
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

    gen(rowStep: number, colStep: number) {
        function g(rowStep: number, colStep: number) {
            return function* (row: number, col: number){
                while(true) {
                    row += rowStep
                    col += colStep
                    yield [row, col]
                }
            }
        }
        return [g(rowStep, colStep), g(-rowStep, -colStep)]
    }


    checkWinner(_row: number, _col: number, _player: number) {
        const dirs = [
            this.gen(1, 0),
            this.gen(0, 1),
            this.gen(1,1),
            this.gen(-1, 1)
        ];
        return dirs.reduce( (acc: number[][], oppositeDirs: ((row: number, col: number) => Generator<number[], void, unknown>)[]) => {
            const acc2: any = oppositeDirs.reduce( (acc2: any, dir: ((row: number, col: number) => Generator<number[], void, unknown>)) => {
                const gen = dir(_row, _col)
                while(true) {
                    const [row, col] = gen.next().value as number[];
                    if (row >= this.state.config.rowNum || row < 0 || col >= this.state.config.colNum || col < 0)
                        return acc2;
                    const index = this.coordToIndex(row, col);
                    if (this.state.fields[index] === _player) {
                        acc2.matchingLine.push(index);
                        acc2.matches += 1;
                    }
                    else return acc2;
                }
            }, {matchingLine: [this.coordToIndex(_row, _col)], matches: 1});
            if (acc2.matches >= 4) {
                acc.push(acc2.matchingLine);
            }
            return acc;
        }, []);
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