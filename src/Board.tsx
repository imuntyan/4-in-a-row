import React, {MouseEvent, createRef} from 'react';
import './Board.css';
import Field from "./Field";
import TransparentField from "./TransparentField";

interface BoardProps {
    rowNum: number
    colNum: number
    playerNum: number
    player: number
    fields: (number | undefined)[]
    undoHandler: (e: MouseEvent) => void
    newGameHandler: (e: MouseEvent) => void
    pieceDroppedHandler: (col: number) => void
}
interface BoardState {
    currentCol: number | undefined
}
class Board extends React.Component<BoardProps> {

    boardRef: any;
    topRowRef: any;

    state: BoardState = {
        currentCol: undefined
    }

    constructor(props: BoardProps) {
        super(props);
        this.boardRef = createRef()
        this.topRowRef = createRef()
    }

    componentDidMount() {
        const board = this.boardRef.current;
        board.style.setProperty("--colNum", this.props.colNum.toString());
        board.style.setProperty("--rowNum", this.props.rowNum.toString());
        const topRow = this.topRowRef.current;
        topRow.style.setProperty("--colNum", this.props.colNum.toString())
    }

    onMouseEnter = (i: number) => () => {
        const col = i % this.props.colNum;
        this.setState({currentCol: col})
    }

    onClick = () => {
        if (this.state.currentCol !== undefined)
            this.props.pieceDroppedHandler(this.state.currentCol)
    }

    renderField(i: number) {
        const col = i % this.props.colNum;
        return (
            <Field
                key={i}
                value={this.props.fields[i]}
                col={col}
                onMouseEnter={this.onMouseEnter(i)}
                onClick={this.onClick}
            />
        );
    }
    renderTransparentField(i: number) {
        const col = i % this.props.colNum;
        return (
            <TransparentField
                key={i}
                player={this.props.player}
                col={col}
                currentCol={this.state.currentCol}
                onMouseEnter={this.onMouseEnter(i)}
                onClick={this.onClick}
            />
        );
    }

    render() {
        return (
            <div>
                <div ref={this.topRowRef} className="top-row">
                    {Array.from(Array(this.props.colNum)).map( (x, index) =>  this.renderTransparentField(index))}
                </div>
                <div ref={this.boardRef} className="game-board">
                    {Array.from(Array(this.props.colNum * this.props.rowNum)).map( (x, index) =>  this.renderField(index))}
                </div>
                <div className="Controls">
                    <button onClick={this.props.undoHandler}>Undo</button>
                    <button onClick={this.props.newGameHandler}>New Game</button>
                </div>
            </div>
        )
    }
}

export default Board;