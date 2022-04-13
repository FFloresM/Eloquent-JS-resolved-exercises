function deepEqual(value1, value2) {
    if(typeof value1 == 'object' && value1 != null && typeof value2 == 'object' && value2 != null){
        for (const key of Object.keys(value2)) {
            if(!Object.keys(value1).includes(key)){
                return false;
            }
        }
        return true;
    }else{
        return value1 === value2;
    }
}

console.log(deepEqual({vaca: "molly"},{vaca: "Tedy"}));
console.log(deepEqual(10,10));
console.log(deepEqual({vaca: "molly"},'hello'));
console.log(deepEqual({vaca: "molly"},9));