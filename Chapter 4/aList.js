function arrayToList(arr) {
    let list = {};
    for (const value of arr.reverse()) {
       list = {value: value, rest: list}
    }
    return list;
}

function listToArray(list) {
    let arr = []
    while(list.rest !== undefined){
        arr.push(list.value);
        list = list.rest;
    }
    return arr;
}

let list = arrayToList([1,2,3]);
console.log(list);
let myList = { value: 1, rest: { value: 2, rest: { value: 3, rest: {} } } };
let arr = listToArray(myList);
console.log(arr);
