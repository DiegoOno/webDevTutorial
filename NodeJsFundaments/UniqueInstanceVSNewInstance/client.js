const counterA = require('./uniqueInstance');
const counterB = require('./uniqueInstance');
const counterC = require('./newInstance')();
const counterD = require('./newInstance')();

counterA.inc();
counterA.inc();
console.log(counterA.value, counterB.value);

counterC.inc();
counterC.inc();
counterC.inc();
counterC.inc();

console.log(counterC.value, counterD.value);