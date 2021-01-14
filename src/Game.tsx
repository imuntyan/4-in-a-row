import React, {createRef} from 'react';
import Board from './Board';

class Game extends React.Component {

    constructor(props: any) {
        super(props);
        this.state = {
            squares: Array
        }
    }


    render() {

        return (
            <Board rowNum={5} colNum={4} playerNum={2} />
        )
    }
}

export default Game;