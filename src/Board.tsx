import React, {createRef} from 'react';
import './Board.css';
import Field from "./Field";

interface BoardProps {
    rowNum: number
    colNum: number
    playerNum: number
    fields: (number|undefined)[]
}
class Board extends React.Component<BoardProps> {

    boardRef: any;

    constructor(props: BoardProps) {
        super(props);
        this.boardRef = createRef()

    }

    componentDidMount() {
        const board = this.boardRef.current;
        board.style.setProperty("--colNum", this.props.colNum.toString());
        board.style.setProperty("--rowNum", this.props.rowNum.toString());
    }

    renderField(i: number) {
        return (
            <Field
                key={i}
                value={this.props.fields[i]}
            />
        );
    }

    render() {
        return (
            <div ref={this.boardRef} className="game-board">
                {Array.from(Array(this.props.colNum * this.props.rowNum)).map( (x, index) =>  this.renderField(index))}
            </div>
        )
    }
}

export default Board;