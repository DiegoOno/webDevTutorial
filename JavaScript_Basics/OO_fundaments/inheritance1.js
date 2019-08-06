const ferrari = {
    model: 'F40',
    maxSpeed: 324
};

const volvo = {
    model: 'V40',
    maxSpeed: 200
};

console.log(ferrari.__proto__ === Object.prototype)

//Prototype chain
Object.prototype.attr0 = '0';       // This is dangerous!!
const grandFather = { attr1: 'A' };
const father = { __proto__: grandFather, attr2: 'B', attr3: 'H' };
const son = { __proto__: father, attr3: 'C' };

// son.attr0 -> search on father -> search on grandFather -> search on __proto__
// son.attr1 -> search on father -> search on grandFather
// son.attr2 -> search on father
// son.attr0 -> get closest level (shadowing)
console.log(son.attr0, son.attr1, son.attr2, son.attr3);

//Example car
const car = {
    currSpeed: 0,
    maxSpeed: 200,
    accelerate(delta) {
        if(this.currSpeed + delta <= this.maxSpeed) {
            this.currSpeed += delta;
        } else {
            this.currSpeed = this.maxSpeed;
        }
    },
    status() {
        return `${this.currSpeed} KM/h of ${this.maxSpeed} KM/h.`;
    }
}

const camaro = {
    model: 'SS',
    maxSpeed: 300
}

const scania = {
    model: 'L10',
    status() {
        return `${this.model}: ${super.status()}`;
    }
}

//Object.setPrototypeOf -> this method establishes a prototype relationship between to objects. 
Object.setPrototypeOf(camaro, car);
Object.setPrototypeOf(scania, car);

console.log(camaro);
console.log(scania);

camaro.accelerate(100);
console.log(camaro.currSpeed);
