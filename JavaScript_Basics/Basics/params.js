// arguments is a propriety that have all paramters in a array.
function sum() {
    let sum = 0;
    for(i in arguments) {
        sum += arguments[i];
    }
    return sum;
}

console.log(sum(1, 2, 3, 4, 5))
console.log(sum(1))

// Generate a default values
function sum2(a, b, c) {
    a = a !== undefined ? a : 1;        // if a not undefined a = a; else a = 1;
    b = b !== undefined ? b : 1;
    c = c !== undefined ? c : 1;
    return a + b + c;
}

console.log(sum2(), sum2(1), sum2(1, 2), sum2(1, 2, 3), sum2(0, 0, 0));

// Default values in ES2015
function sum3(a = 1, b = 1, c = 1) {
    return a + b + c;
}

console.log(sum3(), sum3(1), sum3(1, 2), sum3(1, 2, 3), sum3(0, 0, 0));