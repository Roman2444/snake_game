class Matrix{
    
    /* 
     * на дз - M x N
     * */
    constructor(elem){
        this.elem = elem;
        this.cells = [];
    }
    
    create(){
        for(let i = 0; i < 400; i++){
            let div = document.createElement('div');
            this.elem.appendChild(div);
            this.cells[i] = '';
        }
    }
    
    getCell(x, y){
        let num = this._calcNum(x, y);
        return this.cells[num];
    }
    
    setCell(x, y, val){
        let num = this._calcNum(x, y);
        this.cells[num] = val;
        this.elem.children[num].className = val;
    }
    
    /* пересчитать № строки и № столбца в i */ 
    _calcNum(x, y){
        /* НЕПРАВИЛЬНО */
        return Math.floor(Math.random() * 400);
    }
}