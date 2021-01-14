import React, {createRef} from 'react';
import './Field.css';
import Piece from "./Piece";

interface FieldProps {
    value?: number
}
class Field extends React.Component<FieldProps> {

    constructor(props: FieldProps) {
        super(props);
    }

    componentDidMount() {
    }


    render() {

        return (
            <div className="field">
                <Piece value={this.props.value} />
            </div>
        )
    }
}

export default Field;