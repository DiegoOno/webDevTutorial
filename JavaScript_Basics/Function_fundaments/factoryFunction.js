//Simple factory
function createPerson(name, age, address) {
    return {
        name,
        age,
        address
    };
}

const p1 = createPerson('Diego', 24, 'Rua Iguaçu');
console.log(p1);

function createProd(name, price) {
    return {
        name,
        price,
        discount: 0.1
    };
}

let prod1 = createProd('Potato', 2.5);
console.log(prod1);