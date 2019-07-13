//ES2015
//Part1
const person = {
    name: 'Ana',
    age: 24,
    address: {
        street: 'Rua Iguaçu',
        number: '311'
    }
};

const { name, age } = person;
console.log(name, age);

const { secondName, isHappy = true} = person;
console.log(secondName, isHappy);

const { address: { street, number, cep }} = person
console.log(street, number, cep);

//Part2
//Destructuring with array
const [a] = [10]
console.log(a);

const [n1, , n3, n4, n5, n6 = 0] = [10, 7, 8, 5, 6];
console.log(n1, n3, n4, n5, n6);

// Don't use this in real aplications!!!!
const [ , [ , grade]] = [[ , 8, 8], [9, 6, 8]];
console.log(grade)

//Part3
function rand({min = 0, max = 1000}) {
    const value = Math.random() * (max - min) + min;
    return Math.floor(value);
}

const obj = {max: 50, min: 10};
console.log(rand(obj));

//Part 4
function aaray_rand([min = 0, max = 100]) {
    if(min > max) [min, max] = [max, min];
    const value = Math.random() * (max - min) + min;
    return Math.floor(value);
}

console.log(aaray_rand([50, 40]))