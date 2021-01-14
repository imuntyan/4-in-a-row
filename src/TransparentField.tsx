import React from 'react';
import './TransparentField.css';
import TransparentPiece from "./TransparentPiece";

interface TransparentFieldProps {
    col: number
    currentCol: number | undefined
    player: number
}
class TransparentField extends React.Component<TransparentFieldProps> {
    constructor(props: TransparentFieldProps) {
        super(props);
    }

    render() {
        return (
            <div className="transparent-field">
                <TransparentPiece col={this.props.col} currentCol={this.props.currentCol} />
            </div>
        )
    }
}

export default TransparentField;