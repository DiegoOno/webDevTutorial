const tecnologies = new Map();
tecnologies.set('react', { framework: false });
tecnologies.set('angular', { framework: true });
console.log(tecnologies.get('react').framework);

const variableKeys = new Map([
    [function () { }, 'Function'],
    [{}, 'Object'],
    [123, 'Number']
])

variableKeys.forEach((val, key) => {
    console.log(val, key);
})