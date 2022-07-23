import Tile from '../Tile/Tile.jsx'

function initBoardState() {

    let board = [];

    const horizontalAxis = ["a", "b", "c", "d", "e"];
    const verticalAxis = ["1", "2", "3", "4", "5"];

    const piecesW = [
        {
            name: "pawnW",
            image: "assets/pawn_w.png"
        },
        {
            name: "bishopW",
            image: "assets/bishop_w.png"
        },
        {
            name: "knightW",
            image: "assets/knight_w.png"
        },
        {
            name: "towerW",
            image: "assets/tower_w.png"
        },
        {
            name: "queenW",
            image: "assets/queen_w.png"
        }
    ];
    const piecesB = [
        {
            name: "pawnB",
            image: "assets/pawn_b.png"
        },
        {
            name: "bishopB",
            image: "assets/bishop_b.png"
        },
        {
            name: "knightB",
            image: "assets/knight_b.png"
        },
        {
            name: "towerB",
            image: "assets/tower_b.png"
        },
        {
            name: "queenB",
            image: "assets/queen_b.png"
        }
    ];

    for (let j = verticalAxis.length - 1; j >= 0; j--) {
        for (let i = 0; i < horizontalAxis.length; i++) {
            const number = `${horizontalAxis[i]}${verticalAxis[j]}`;

            if (j === 0) {
                if (i === 0) {
                    board.push(<Tile number={number} image={piecesW[3].image} key={number} />);
                }
                if (i === 1) {
                    board.push(<Tile number={number} image={piecesW[2].image} key={number} />);
                }
                if (i === 2) {
                    board.push(<Tile number={number} image={piecesW[4].image} key={number} />);
                }
                if (i === 3) {
                    board.push(<Tile number={number} image={piecesW[2].image} key={number} />);
                }
                if (i === 4) {
                    board.push(<Tile number={number} image={piecesW[3].image} key={number} />);
                }
            }
            else if (j === 1) {
                board.push(<Tile key={number} number={number} image={piecesW[0].image} />);
            }
            else if (j === 3) {
                board.push(<Tile key={number} number={number} image={piecesB[0].image} />);
            }
            else if (j === 4) {
                if (i === 0) {
                    board.push(<Tile number={number} image={piecesB[3].image} key={number} />);
                }
                if (i === 1) {
                    board.push(<Tile number={number} image={piecesB[2].image} key={number} />);
                }
                if (i === 2) {
                    board.push(<Tile number={number} image={piecesB[4].image} key={number} />);
                }
                if (i === 3) {
                    board.push(<Tile number={number} image={piecesB[2].image} key={number} />);
                }
                if (i === 4) {
                    board.push(<Tile number={number} image={piecesB[3].image} key={number} />);
                }
            }
            else {
                board.push(<Tile key={number} number={number} />);
            }
        }
    }
    return board;
}

function grabPiece(e) {
    const element = e.target;
    if (element.className === "chess-piece") {
        //-50 is the offset of the pieces size
        const mouseX = e.clientX - 50;
        const mouseY = e.clientY - 50;
        element.style.position = "absolute";
        element.style.left = `${mouseX}px`;
        element.style.top = `${mouseY}px`;

    }
}

function movePiece(e) {
    const element = e.target;
    if (element.className === "chess-piece") {
        console.log(element)
        const mouseX = e.clientX - 50;
        const mouseY = e.clientY - 50;
        element.style.position = "absolute";
        element.style.left = `${mouseX}px`;
        element.style.top = `${mouseY}px`;
    }
}

// eslint-disable-next-line
export default {
    initBoardState,
    grabPiece,
    movePiece,
}