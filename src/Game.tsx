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

        setTimeout(() => {
            this.fields[0] = 1
            this.fields[1] = 2
            this.setState({
                fields: this.fields
            })

        }, 1000)

    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any) {
    }


    render() {
        return (
            <Board rowNum={this.rowNum} colNum={this.colNum} playerNum={this.playerNum} fields={this.fields} />
        )
    }
}

export default Game;