const countBs = n => {
    /*
    let counter = 0;
    for (let i = 0; i < n.length; i++) {
        const element = n[i];
        if(element === 'B'){
            counter ++;
        }
    }
    return counter;
    */
    return countChar(n, 'B');
}

const countChar = (n,c) => {
    let counter = 0;
    for (let i = 0; i < n.length; i++) {
        const element = n[i];
        if(element === c){
            counter++;
        }
    }
    return counter;
}

console.log(countBs('BABEABA'));
console.log(countChar('BABEABA', 'A'));