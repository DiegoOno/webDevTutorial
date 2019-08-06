const shoppingCart = [
    '{ "name": "Pen", "price": 2.00 }',
    '{ "name": "Notebook", "price": 15.50 }',
    '{ "name": "Pencil", "price": 3.45 }'
];

const toObject = json => JSON.parse(json);
const onlyPrice = product => product.price;

const result = shoppingCart.map(toObject).map(onlyPrice);
console.log(result);