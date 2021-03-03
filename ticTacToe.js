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
        for (let i = 0 ; i < board.length; i++) {
            board[i] = "";
        }
        renderBoard();
    }

    renderBoard();

    return {
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
        if (winner) return;
        const target = e.target;
        const squareNumber = Number(target.id.slice(6))
        //check if space already has a symbol on it
        if (gameBoard.board()[squareNumber] !== "") {
            return;
        }
        gameBoard.makeMark(squareNumber, currentPlayer.symbol());
        //check win conditions
        winner = winCheck();
        if (winner){
            //show congrats message
            console.log(`${winner.name()} wins`);
        }
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
        const symbol = currentPlayer.symbol();
        if ((symbol === board[0] && symbol === board[3] && symbol === board[6]) || 
            (symbol === board[1] && symbol === board[4] && symbol === board[7]) ||
            (symbol === board[2] && symbol === board[5] && symbol === board[8]) || 
            (symbol === board[0] && symbol === board[4] && symbol === board[8]) ||
            (symbol === board[2] && symbol === board[4] && symbol === board[6]) ||
            (symbol === board[0] && symbol === board[1] && symbol === board[2]) ||
            (symbol === board[3] && symbol === board[4] && symbol === board[5]) || 
            (symbol === board[6] && symbol === board[7] && symbol === board[8])) {
                return currentPlayer;
            }
        if (!gameBoard.board().includes("")) {
            console.log("Nobody wins :(")
        }
    }

    const reset = () => {
        winner = "";
        gameBoard.reset();
    }

    return {
        reset,
    }

})()
