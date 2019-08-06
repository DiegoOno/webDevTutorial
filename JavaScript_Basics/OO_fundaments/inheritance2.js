const father = {
    name: 'Pedro',
    hairColor: 'Black'
}

const daughter1 = Object.create(father);
daughter1.name = 'Ana';
console.log(daughter1.hairColor);

const daughter2 = Object.create(father, {
    name: { value: 'Beatriz', writable: false, enumerable: true },
    age: {value: 25, writable: false, enumerable: true}    
});

console.log(daughter2.name);
daughter2.name = 'Carla';
console.log(`${daughter2.name} has ${daughter2.hairColor} hair color.`);

console.log(Object.keys(daughter1));
console.log(Object.keys(daughter2));
console.log(Object.keys(father));

for(let key in daughter2) {
    daughter2.hasOwnProperty(key) ? console.log(key) : console.log(`By inheritance: ${key}`);
}