const numbers =[1, 2, 3, 4, 5, 6];

let result = numbers.map(function(e) {
    return e * e;
})

console.log(result);

const sum10 = e => e + 10;
const triple = e => e * 3;
const convertToMoney = e => `RS ${parseFloat(e).toFixed(2).replace('.', ',')}`;

result = numbers.map(sum10).map(triple).map(convertToMoney);
console.log(result);
