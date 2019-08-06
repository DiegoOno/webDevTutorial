//Literal notation 
const obj1 = {};
console.log('Tipo: ' + typeof(obj1) + '\n' + obj1);

//With New operator
const obj2 = new Object;
console.log('Tipo: ' + typeof(obj2) + '\n' + obj2);

//With function
function Product(name, price, discount) {
    this.name = name;   //public
    this.getPriceWithDiscount = () => {     //public
        return price * (1 - discount);
    }
}

const prod1 = new Product('Pen', 7.99, 0.15);
const prod2 = new Product('Notebook', 3000, 0.25);
console.log(prod1.getPriceWithDiscount(), prod2.getPriceWithDiscount());

//Function Factory
function createWorker(name, salary, skips) {
    return {
        name, 
        salary,
        skips,
        getSalary() {
            return (salary / 30) * (30 - skips);
        }
    };
}

const worker1 = createWorker('João', 10000, 3);
const worker2 = createWorker('Maria', 10000, 5);
console.log('João\'s salary : ' + worker1.getSalary());
console.log('Maria\'s salary: ' + worker2.getSalary());

//Object.create
const daughter = Object.create(null);
daughter.name = 'Ana';
console.log(daughter);

//Create object from JSON (Javascript Object Notation)
const fromJSON = JSON.parse('{"info": "I am a JSON"}');
console.log(fromJSON);