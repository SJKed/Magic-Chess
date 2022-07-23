import './chessBoard.css';
import pieceCalc from './pieceCalc';



function ChessBoard() {

    let board = new pieceCalc.initBoardState();

    let activePiece = null;

    function grabPiece(e) {
        const element = e.target;
        if (element.className === "chess-piece") {
            activePiece = element;
            //-50 is the offset of the pieces size
            const mouseX = e.clientX - 50;
            const mouseY = e.clientY - 50;
            element.style.position = "absolute";
            element.style.left = `${mouseX}px`;
            element.style.top = `${mouseY}px`;
        }
    }
    function movePiece(e) {

        if (activePiece) {
            const minX = 800 - 45;
            const maxX = 300 + 55;
            const minY = 800 - 55;
            const maxY = 200 + 45;
            const mouseX = e.clientX - 50;
            const mouseY = e.clientY - 50;
            activePiece.style.position = "absolute";
            activePiece.style.left = `${mouseX}px`;
            activePiece.style.top = `${mouseY}px`;
            console.log(mouseX + "px" + mouseY + "px");

            if (mouseX > minX) {
                activePiece.style.left = `${minX}px`;
            }
            else if (mouseX < maxX) {
                activePiece.style.left = `${maxX}px`;
            }
            else {
                activePiece.style.left = `${mouseX}px`;
            }
            if (mouseY > minY) {
                activePiece.style.top = `${minY}px`;
            }
            else if (mouseY < maxY) {
                activePiece.style.top = `${maxY}px`;
            }
            else {
                activePiece.style.top = `${mouseY}px`;
            }

            // activePiece.style.left = mouseX > minX ? `${minX}px` : `${mouseX}px`;
            // activePiece.style.top = mouseY > minY ? `${minY}px` : `${mouseY}px`;
        }
    }
    function letGo(e) {
        if (activePiece.className === "chess-piece" && activePiece !== null) {
            activePiece = null;
        }
    }

    return (
        <div
            onMouseDown={e => grabPiece(e, activePiece)}
            onMouseMove={e => movePiece(e, activePiece)}
            onMouseUp={e => letGo(e, activePiece)}
            className="chessBoard">
            {board}
        </div>
    )
}

export default ChessBoard;