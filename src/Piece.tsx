import React, {createRef} from 'react';
import './Piece.css';

interface PieceProps {
    value?: number
}
class Piece extends React.Component<PieceProps> {
    pieceRef: any;

    constructor(props: PieceProps) {
        super(props);
        this.pieceRef = createRef()
    }

    componentDidUpdate(prevProps: Readonly<PieceProps>, prevState: Readonly<{}>, snapshot?: any) {
        const piece = this.pieceRef.current;
        if (this.props.value === undefined)
            piece.style.setProperty("--background-color", "var(--background-white)")
        else if (this.props.value === 0)
            piece.style.setProperty("--background-color", "red");
        else if (this.props.value === 1)
            piece.style.setProperty("--background-color", "blue");
    }

    render() {
        return (
            <div ref={this.pieceRef} className="piece"></div>
        )
    }
}

export default Piece;