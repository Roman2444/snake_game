class Snake{
    
    constructor(matrix, x, y, course){
        this.matrix = matrix;
        this.x = x;
        this.y = y;
        this.course = course;
    
        this.alive = true;
  
    }
    
    show(){
        this.matrix.setCell(this.x, this.y, 'snake');
    }
    
    move(){
        if(!this.alive){
            return
        }
        
        var lastX = this.x
        var lastY = this.y


        console.log(this.x, this.y)



        switch(this.course){
            case 'right':
                this.x++;
                break;
            case 'left':
                this.x--;
                break;
            case 'down':
                this.y++;
                break;
            case 'up':
                this.y--;
                break;
        }

        if (!this._checkAlive()){
            this.alive = false
            return;
        }

        this.matrix.setCell(lastX, lastY, '');
        this.matrix.setCell(this.x, this.y, 'snake');
    }

// проверка на стену
    _checkAlive() {
        return this.x > 0 && this.x <= this.matrix.cols &
               this.y > 0 && this.y <= this.matrix.rows;
    }

}