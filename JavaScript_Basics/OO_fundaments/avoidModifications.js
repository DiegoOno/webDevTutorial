//Object.preventExtensions
const prod = Object.preventExtensions({
    name: 'Toilet Paper',
    price: 5.99,
    tag: 'sale'
});

console.log('Extensible: ' + Object.isExtensible(prod));

// The object can be modified, but it can't extend 
console.log('Before changes: ', prod);

prod.name = 'Pen';
prod.description = 'This pen is blue';
delete prod.tag;

console.log('After changes: ', prod);

//Object.seal -> Can't add attributes, but can modify existing attributes
const person = {
    name: 'Juliana',
    age: 35
};
Object.seal(person);
console.log('Sealed: ', Object.isSealed(person));

console.log('Before changes: ', person);
person.secondName = 'Silva';
delete person.name;
console.log('After changes: ', person);

//Object.freeze -> Can't do any change in the object's attributes