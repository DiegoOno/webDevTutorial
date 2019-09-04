//let -> variables declared with 'let' may only be visible in their scope
{
    var a = 2;
    let b = 3;
    console.log(b);
}
console.log(a);

// Template string
const product = 'iPad';
console.log(`${product} is expensive.`);

// Destructuring string
const [l, e, ...tters] = 'javascript';
console.log(l, e, tters);

// Destructuring array
const [x, ,y] = [1, 2, 3];
console.log(x, y);

// Destructuring object
const { name: n, age} = {age: 20, name: 'Jojo'};
console.log(n, age);