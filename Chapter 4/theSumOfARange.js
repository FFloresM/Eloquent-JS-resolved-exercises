function range(start, end, step=1) {
    const arr = []
    if(end>start){
        for (let index = start; index <= end; index+=step) {
            arr.push(index);
        }
    }else{
        for (let index = start; index >= end; index+=step) {
            arr.push(index);
        }
    }
    return arr;
}

function sum(arg) {
    let sum = 0;
    for (const value of arg) {
        sum += value;
    }
    return sum;
}

//test range
console.log(range(1,50));
//test sum
console.log(sum([1,2,3,4,5]));

console.log(sum(range(1,10)));

//test range with step
console.log(range(1,10,2));
//test range with negative step
console.log(range(5,2,-1));