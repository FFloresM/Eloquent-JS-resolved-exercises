let arr = [
    ['this', 'is', 'the', 'first', 'array'],
    ['this', 'is', 'the', 'second'],
    ['the', '4th', 'only', 'has', 'numbers'],
    [1,2,3,4,5]
];

console.log(arr.reduce((a,b) => a.concat(b)));