window.onload = function (e) {

    var div = document.querySelector('.fields');
    var matrix = new Matrix(div);
    matrix.create();
    
    matrix.setCell(4, 5, 'fruit');
    
    var snake = new Snake(matrix, 5, 5, 'right');
    snake.show();
    
    setInterval(() => {
        snake.move();
    }, 500);
}
