window.onload = function (e) {

    var div = document.querySelector('.fields');
    var matrix = new Matrix(div, 15, 15);
    matrix.create();
    
    var fruit = new Fruit(matrix, [[1, 4]]);
    fruit.show();
    
    var wall = new Wall(matrix, [[3, 7], [4, 7], [5, 7], [6, 7]]);
    wall.show();
    
    var snake = new Snake(matrix, [[5, 5], [4, 5], [3, 5]], 'right');
    snake.show();

    this.document.addEventListener('keydown', function(e) {
        snake.course = e.key
        let lastCourse = snake.course
        console.log(lastCourse)
        console.log(e.key)
        if (e.key === 'ArrowUp' && lastCourse !=='down'){
            snake.course='up'
        } else if (e.key === 'ArrowDown' && lastCourse !=='up'){
            snake.course='down'
        } else if (e.key === 'ArrowRight' && lastCourse !=='left'){
            snake.course='right'
        } else if (e.key === 'ArrowLeft' && lastCourse !=='right' ){
            snake.course='left'
        }  
    })

    
    // this.document.addEventListener('keydown', function(e){
    //     // snake.course = e.key;
    //     let lastCourse = snake.course
    //     console.log(snake.course)
    //     /* добавить защиту от смены курса на противоположный */
    //     // switch(e.key){
    //     //     case 'ArrowLeft':
    //     //         if(lastCourse!='right){ 
    //     //         snake.course = 'left';
    //     //         console.log(snake.course)
    //     //         break};
    //     //     case 'ArrowUp':
    //     //         snake.course = 'up';
    //     //         break;
    //     //     case 'ArrowRight':
    //     //         snake.course = 'right';
    //     //         console.log(snake.course)
    //     //         break;
    //     //     case 'ArrowDown':
    //     //         snake.course = 'down';
    //     //         break;




    //     }
    // })
    
    let timer = setInterval(() => {
        snake.move();
        
        if(!snake.alive){
            clearInterval(timer);
            alert('gameover');
        }
        
        /* 
         * если покушала, новый фрукт на случайном поле + очки
         * 
         * */
    }, 500);
}
