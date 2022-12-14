window.onload = function (e) {

    var div = document.querySelector('.fields');
    var matrix = new Matrix(div, 30, 30);
    matrix.create();
    
    matrix.setCell(4, 5, 'fruit');
    matrix.setCell(5, 8, 'fruit');
    
    var snake = new Snake(matrix, 6, 6, 'right');
    snake.show();

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

   let timer = setInterval(() => {
        snake.move();

    if(!snake.alive) {
        clearInterval(timer);
        alert('Game over')
    }

    }, 500);


}
