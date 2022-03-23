function isEven(n){
    //check positive whole number and avoid -> RangeError: Maximum call stack size exceeded
    if(n%1 != 0 || n<0){
        return;
    }
    if(n == 0){
        return true;
    }
    if(n == 1){
        return false;
    }
    return isEven(n-2);
}

console.log(isEven(10));