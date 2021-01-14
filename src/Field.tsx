import React, {createRef} from 'react';
import './Field.css';

interface FieldProps {
}
class Field extends React.Component<FieldProps> {

    fieldRef: any;

    constructor(props: FieldProps) {
        super(props);
        this.fieldRef = createRef()

    }

    componentDidMount() {
        const board = this.fieldRef.current;
        // board.style.setProperty("--colNum", this.props.colNum.toString());
        // board.style.setProperty("--rowNum", this.props.rowNum.toString());
    }

    componentDidUpdate(prevProps: Readonly<FieldProps>, prevState: Readonly<{}>, snapshot?: any) {
    }

    render() {

        return (
            <div className="field"></div>
        )
    }
}

export default Field;