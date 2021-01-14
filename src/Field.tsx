import React, {createRef} from 'react';
import './Field.css';
import Piece from "./Piece";

interface FieldProps {
    col: number
    value?: number
    onMouseEnter: () => void
    onClick: () => void
}

class Field extends React.Component<FieldProps> {
    constructor(props: FieldProps) {
        super(props);
    }

    render() {

        return (
            <div onMouseEnter={this.props.onMouseEnter} onClick={this.props.onClick} className="field">
                <Piece value={this.props.value} />
            </div>
        )
    }
}

export default Field;