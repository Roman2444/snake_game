window.onload = function (e) {

    var div = document.querySelector('.fields');
    var matrix = new Matrix(div, 100, 100);
    matrix.create();
    
    matrix.setCell(4, 5, 'fruit');
    
    var snake = new Snake(matrix, 5, 6, 'left');
    snake.show();
    
    setInterval(() => {
        snake.move();
    }, 100);

    this.document.addEventListener('keydown', function(e) {
        console.log(e.key)
        if (e.key === 'ArrowUp'){
            snake.course='up'
        } else if (e.key === 'ArrowDown'){
            snake.course='down'
        } else if (e.key === 'ArrowRight'){
            snake.course='right'
        } else if (e.key === 'ArrowLeft'){
            snake.course='left'
        }  
    })

}
