const gameBoard = (() => {
    const board = ["x","o","x","o","x","o","x","o","x"];
    
    const renderBoard = () => {
        for (let i = 0; i < board.length; i++) {
            const square = document.querySelector(`#square${i}`);
            console.log(square);
            square.textContent = board[i];
        }
    }

    return {
        renderBoard,
    }
})()

const player = function() {
    return {};
}

gameBoard.renderBoard();