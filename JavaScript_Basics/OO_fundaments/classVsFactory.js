// Create object with class
class Person {
    constructor(name) {
        this.name = name;
    };

    speak() {
        console.log(`My name is ${this.name}`);
    };
}

const p1 = new Person('Diego');
p1.speak();

// Create object with function
const createPerson = name => {
    return {
        speak: () => console.log(`My name is ${name}`)
    };
};
const p2 = createPerson('Ana');
p2.speak();
