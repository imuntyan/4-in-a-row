import React, {createRef} from 'react';
import './Board.css';
import Field from "./Field";

interface BoardProps {
    rowNum: number
    colNum: number
    playerNum: number
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

    componentDidUpdate(prevProps: Readonly<BoardProps>, prevState: Readonly<{}>, snapshot?: any) {
    }

    render() {

        return (
            <div ref={this.boardRef} className="game-board">
                {Array(this.props.colNum * this.props.rowNum).fill(<Field />)}
            </div>
        )
    }
}

export default Board;