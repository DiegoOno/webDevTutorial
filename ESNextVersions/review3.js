//ES8: Object.values / Object.entries
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj));
console.log(Object.entries(obj));

//Improvements in literal notation
const name = 'Joseph';
const person = {
    name,
    age: 20,
    hello() {
        console.log('Hello!!!');
    }
};
console.log(person);
person.hello();