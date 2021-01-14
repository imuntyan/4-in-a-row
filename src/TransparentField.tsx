import React from 'react';
import './TransparentField.css';
import TransparentPiece from "./TransparentPiece";

interface TransparentFieldProps {
    col: number
    player: number
}
class TransparentField extends React.Component<TransparentFieldProps> {
    constructor(props: TransparentFieldProps) {
        super(props);
    }

    render() {

        return (
            <div className="transparent-field">
                <TransparentPiece value={undefined} />
            </div>
        )
    }
}

export default TransparentField;