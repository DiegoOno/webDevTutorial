// Arithmetic
const [a, b, c, d] = [3, 5, 1, 15];

const sum = a + b + c + d;
const sub = a- b - c - d;
const mul = a * b * c *d; 
const div = a / b;
const mod = d % b;

console.log('Sum: ' + sum);
console.log('Sub: ' + sub);
console.log('Mul: ' + mul);
console.log('Div: ' + div);
console.log('Mod: ' + mod);

//Relational
const greaterThan = a > b;
const lessThan = d < b;
const greaterOrEqual = d >= b;
const lessOrEqual = a <= b;
const equal = a == a;
const diff = a != b;
const same = a === '3';
const diffType = a !== '3';

console.log(a + ' greater than ' + b +': ' + greaterThan);
console.log(d + ' less than ' + b +': ' + lessThan);
console.log(d + ' greater or equal than ' + b +': ' + greaterOrEqual);
console.log(a + ' less or equal than  ' + b +': ' + lessOrEqual);
console.log(a + ' equal to ' + a +': ' + equal);
console.log(a + ' is different from ' + b +': ' + diff);
console.log(a + ' is closely equal ' + '"3"' +': ' + same);
console.log(a + ' is closely different ' + '"3"' +': ' + diffType);

//Logic
const and = true && false;
const or = true || true;
const not = !true;
console.log(and);
console.log(or);
console.log(not);

//Unary operators
let num1 = 1;
let num2 = 2;

//posfix
num1++;

//prefix
--num1;

//Ternary operator
const result = grade => grade >= 7 ? 'Success' : 'Fail';
console.log(result(6.9));