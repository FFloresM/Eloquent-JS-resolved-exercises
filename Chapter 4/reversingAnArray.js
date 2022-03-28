function reverseArray(arr) {
    let array = [];
    while (arr.length != 0) {
        array.push(arr.pop())
    }
    return array;
}

function reverseArrayInPlace(arr) {
    const len = arr.length;
    for (let i = 0; i < len/2; i++) {
        let aux = arr[i];
        arr[i] = arr[len-(i+1)]
        arr[len-(i+1)] = aux;
    }
   return arr;
}

console.log(reverseArray([1,2,3,4,5,6]))
console.log(reverseArrayInPlace([1,2,3,4,5,6]))