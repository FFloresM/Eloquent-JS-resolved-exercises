function deepComparion(value1, value2) {
    if(typeof value1 === 'object' && value1 !== null){
        return Object.keys(value1) === Object.keys(value2);
    }else{
        return value1 === value2;
    }
}

console.log(deepComparion({vaca: "molly"},{vaca: "Tedy"}));