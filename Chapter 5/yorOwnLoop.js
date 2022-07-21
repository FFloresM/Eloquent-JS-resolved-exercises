function loop(value, testF, updateF, bodyF) {
    while(testF(value)){
        bodyF(value)
        value = updateF(value)
    }
}

let num = 10;
const is_positive = function (v) {
    return v > 0;
}
const restar = v => v-1;
const show_value = v => console.log(v);
//testing loop function
loop(num, is_positive, restar, show_value);