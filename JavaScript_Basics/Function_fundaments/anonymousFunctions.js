const sum = function (x, y) {
    return x + y;
}

const printResult = function(a, b, operation = sum) {
    console.log(operation(a, b));
}

printResult(10, 5);
printResult(10, 5, function (x, y) {
    return x - y;
})
printResult(10, 5, (x, y) => x * y);