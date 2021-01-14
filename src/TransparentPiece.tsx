import React, {createRef} from 'react';
import './TransparentPiece.css';

interface TransparentPieceProps {
    col: number
    currentCol: number | undefined
}
class TransparentPiece extends React.Component<TransparentPieceProps> {
    pieceRef: any;

    constructor(props: TransparentPieceProps) {
        super(props);
        this.pieceRef = createRef()
    }

    componentDidUpdate(prevProps: Readonly<TransparentPieceProps>, prevState: Readonly<{}>, snapshot?: any) {
        const piece = this.pieceRef.current;
        if (this.props.col === this.props.currentCol)
            piece.style.setProperty("--background-color", "red")
        else
            piece.style.setProperty("--background-color", "var(--background-white)");
    }

    render() {
        return (
            <div ref={this.pieceRef} className="piece"></div>
        )
    }
}

export default TransparentPiece;