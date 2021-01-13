import React, {createRef} from 'react';
import './Board.css';

class Board extends React.Component {

    boardRef: any;

    constructor(props: any) {
        super(props);
        this.boardRef = createRef()
    }

    componentDidMount() {
        this.init();
    }

    init() {
        const board = this.boardRef.current;

        // board.style.setProperty("", "")
        console.log(board)
        board.style.setProperty("--colNum", "3")

    }

    render() {

        return (
            <div ref={this.boardRef} className="game-board">
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