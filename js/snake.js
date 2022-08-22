class Snake{
    
    constructor(matrix, x, y, course){
        this.matrix = matrix;
        this.x = x;
        this.y = y;
        this.course = course;
    }
    
    show(){
        this.matrix.setCell(this.x, this.y, 'snake');
    }
    
    move(){
        this.matrix.setCell(this.x, this.y, '');
        console.log(this.x, this.y)
        if(this.y > 20){
            this.y=1
        } 
        else if(this.y < 1){
            this.y = 20
        }
        if(this.x > 20){
            this.x=1
        } 
        else if(this.x < 1){
            this.x = 20
        }


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
        
        
        this.matrix.setCell(this.x, this.y, 'snake');
    }

}