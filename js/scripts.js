window.onload = function (e) {

    var div = document.querySelector('.fields');
    var matrix = new Matrix(div);
    matrix.create();
    
    matrix.setCell(4, 5, 'fruit');
    
    var snake = new Snake(matrix, 5, 6, 'up');
    snake.show();
    
    setInterval(() => {
        snake.move();
    }, 500);
}
