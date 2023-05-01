function mazeRunner(maze, directions) {
    // Code here
    let path = [], curX; curY;
    for(let i = 0; i < maze.length; i++) {
        for(let j = 0; j < maze[i].length; j++) {
            if(maze[i][j] === 2) {
                curX = j;
                curY = i;
            }
        }
    }

    for(let i = 0; i < directions.length; i++) {
        if(directions[i] === 'N') curY--;
        if(directions[i] === 'S') curY++;
        if(directions[i] === 'W') curX--;
        if(directions[i] === 'E') curX++;

        if(!maze[curY]) return 'Dead';
        if(maze[curY][curX] === 3) return 'Finish';
        if(maze[curY][curX] === undefined || maze[curY][curX] === 1) return 'Dead'
    }
    return 'Lost'
}