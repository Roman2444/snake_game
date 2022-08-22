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
        // if(this.y > this.rows){
        //     this.y=1
        // } 
        // else if(this.y < 1){
        //     this.y = this.rows
        // }
        // if(this.x > this.cols){
        //     this.x=1
        // } 
        // else if(this.x < 1){
        //     this.x = this.cols
        // }


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