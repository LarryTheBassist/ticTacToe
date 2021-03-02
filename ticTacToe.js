const gameBoard = (() => {
    const board = ["x","o","x","o","x","o","x","o","x"];
    
    const renderBoard = () => {
        for (let i = 0; i < board.length; i++) {
            const square = document.querySelector(`#square${i}`);
            console.log(square);
            square.textContent = board[i];
        }
    }

    const makeMark = function(space, symbol){
        board[space] = symbol;
        renderBoard();
    }

    const boardArray = () => {
        const array = Array.from(board);
        return array;
    }

    return {
        renderBoard,
        makeMark,
        board: boardArray,
    }
})();

const gameController = (()=>{
    const players = []
    let currentPlayer = players[0];
})()

const Player = function(name, symbol) {
    function returnName() {
        return name;
    }

    function returnSymbol() {
        return symbol;
    }
    return {
        name: returnName,
        symbol: returnSymbol
    };
}
const Jeff = Player("Jeff", "x");
gameBoard.renderBoard();