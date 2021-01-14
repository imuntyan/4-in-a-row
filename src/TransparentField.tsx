import React from 'react';
import './TransparentField.css';
import TransparentPiece from "./TransparentPiece";

interface TransparentFieldProps {
    col: number
    currentCol: number | undefined
    player: number
    onMouseEnter: () => void
    onClick: () => void
}
class TransparentField extends React.Component<TransparentFieldProps> {
    constructor(props: TransparentFieldProps) {
        super(props);
    }

    render() {
        return (
            <div onMouseEnter={this.props.onMouseEnter} onClick={this.props.onClick} className="transparent-field">
                <TransparentPiece col={this.props.col} currentCol={this.props.currentCol} player={this.props.player} />
            </div>
        )
    }
}

export default TransparentField;