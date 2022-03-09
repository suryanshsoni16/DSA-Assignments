var sortColors = function(arr) {
    
    let one=0, zero=0, two=0
    for(let elem of arr){
        if(elem == 0) zero++
        else if ( elem == 1) one ++
        else two ++
    }
   arr.length=0;
    for(let i=0;i<zero;i++) arr.push(0)
    for(let i=0;i<one;i++) arr.push(1)
    for(let i=0;i<two;i++) arr.push(2)    
    

};


let arr = [2,0,2,1,1,0]
sortColors(arr);
console.log(arr)