function chessBoard(rows, columns) {
    // your code goes here
    let board = [];
    let ch = 'X';
    for(let i = 0; i < rows; i++){
        board[i] = [];
        for(let j = 0; j < columns; j++){
            ch = ch == 'X' ? 'O' : 'X';
            board[i][j] = ch;
        }
        ch = board[i][0];
    }
    return board;
}
console.log(chessBoard(2, 4));