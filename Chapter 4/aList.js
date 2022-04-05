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

function prepend(element, list) {
    return {value: element, rest: list};
}

function nth(list, number) {
    let pos = 0;
    while(list.rest != undefined){
        if(pos == number)
            break
        list = list.rest;
        pos++;
    }
    return list.value;
}

let list = arrayToList([1,2,3]);
console.log(list);
let myList = { value: 1, rest: { value: 2, rest: { value: 3, rest: {} } } };
let arr = listToArray(myList);
console.log(arr);
console.log(prepend(4,list)); // puts 4 at begin
console.log(nth(list,3));
console.log(nth(list,0)); //why this nth doesn't return 4?
//YOU have to write a recursive version of nth