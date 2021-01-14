import React, {createRef} from 'react';
import './TransparentPiece.css';

interface TransparentPieceProps {
    value?: number
}
class TransparentPiece extends React.Component<TransparentPieceProps> {
    pieceRef: any;

    constructor(props: TransparentPieceProps) {
        super(props);
        this.pieceRef = createRef()
    }

    componentDidUpdate(prevProps: Readonly<TransparentPieceProps>, prevState: Readonly<{}>, snapshot?: any) {
        const piece = this.pieceRef.current;
        if (this.props.value === undefined)
            piece.style.setProperty("--background-color", "var(--background-white)")
        else if (this.props.value === 1)
            piece.style.setProperty("--background-color", "red");
        else if (this.props.value === 2)
            piece.style.setProperty("--background-color", "blue");
    }

    render() {
        return (
            <div ref={this.pieceRef} className="piece"></div>
        )
    }
}

export default TransparentPiece;