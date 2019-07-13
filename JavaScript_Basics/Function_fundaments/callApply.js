function getPrice(tax = 0, currency = 'R$') {
    return `${currency} ${this.price * (1 - this.desc) * (1 + tax)}`;
}

const product = {
    name: 'Notebook',
    price: 5000,
    desc: 0.15,
    getPrice
};

console.log(product.getPrice());

// Using call and apply
const car = { price: 30000, desc: 0.1 };
console.log(getPrice.call(car));
console.log(getPrice.apply(car));

// The difference  between call and apply  is in passage of parameters 
//call -> (context, param1, ... , paramn);
console.log(getPrice.call(car, 0.17, '$'));

//apply -> (context, [param1, ... , paramn]);
console.log(getPrice.apply(car, [0.17, '$']));