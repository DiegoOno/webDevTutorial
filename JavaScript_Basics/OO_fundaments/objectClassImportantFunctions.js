const person = {
    name: 'Rebeca',
    age: 30,
    weight: 48
};

// Object.keys -> return all attributes of a object
console.log(Object.keys(person));

// Object.values -> return all values of attributes of a object
console.log(Object.values(person));

// Object.entries -> Array with arrays, where each sub array is a pair key and value.
console.log(Object.entries(person));

Object.entries(person).forEach(([key, value]) => {
    console.log(`${key}: ${value}`)    
});

// Object.defineProperty -> Define a attribute and set some properties
Object.defineProperty(person, 'birth', {
    enumerable: true,
    writable: false,
    value: '30/05/1997'
});

// Won't change, because the property writable is disabled
// We can list birth because the property enumerable is true
person.birth = '05/10/2000';
console.log(person.birth);
console.log(Object.keys(person));

// Object.assign -> concatenates objects attributes to a target object (ECMAScript 2015)
//Object.assign(target_obj, obj1, obj2, ..., objN);
const target = {
    a: 10
};
const obj1 = {
    b: 20,
    c: 30
};
const obj2 = {
    a: 5,
    d: 50
};

Object.assign(target, obj1, obj2);
console.log(target);

// Object.freeze -> makes object attributes immutable
Object.freeze(target);
target.c = 1000;
console.log(target.c);