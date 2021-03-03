const gameBoard = (() => {
    const board = ["","","","","","","","",""];
    
    const renderBoard = () => {
        for (let i = 0; i < board.length; i++) {
            const square = document.querySelector(`#square${i}`);
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

    const reset = () => {
        board.forEach((space) => {
            space = '';
        })
    }

    return {
        renderBoard,
        makeMark,
        board: boardArray,
        reset,
    }
})();


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
const gameController = (()=>{
    const player1 = Player("player1", "X");
    const player2 = Player("player2", "O");
    const players = [player1, player2];
    let winner;
    let currentPlayer = players[0];
    
    const domBoard = document.querySelector("#ticTacToeGrid");
    domBoard.addEventListener("click", (e)=> {
        const target = e.target;
        const squareNumber = Number(target.id.slice(6))
        //check if space already has a symbol on it
        if (gameBoard.board()[squareNumber] !== "") {
            return;
        }
        gameBoard.makeMark(squareNumber, currentPlayer.symbol());
        //check win conditions
        winCheck();
        switchPlayer();
    })

    function switchPlayer() {
        if (currentPlayer === players[0]) {
            currentPlayer = players[1];
        } else {
            currentPlayer = players[0]
        }
    };

    function winCheck() {
        const board = gameBoard.board();
        if ((board[0] === board[3] && board[3] === board[6]) || (board[1] === board[4] && board[4] === board[7]) ||
            (board[2] === board[5] && board[5] === board[8]) || (board[0] === board[4] && board[4] === board[8]) ||
            (board[2] === board[4] && board[4] === board[6]) || (board[0] === board[1] && board[1] === board[2]) ||
            (board[3] === board[4] && board[4] === board[5]) || (board[6] === board[7] && board[7]=== board[8])) {
                console.log(true);
            }
        if (!gameBoard.board().includes("")) {
            console.log("Nobody wins :(")
        }
    }

})()
const Jeff = Player("Jeff", "x");
gameBoard.renderBoard();