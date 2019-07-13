// Classic sintax of function declaration
let double = function (a) {
    return 2 * a;
}

// Sintax with arrow function
double = (a) => {
    return 2 * a;
}

// We can declarate functions with one line, in this type we have implicit return
sum = (a, b) => a + b;
console.log(sum(2, 3))

