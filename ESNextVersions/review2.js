// Arrow function
const sum = (a, b) => a + b;
console.log(sum(2, 3));

//Arrow function with 'this'
const lexicon1 = () => console.log(this === exports);
const lexicon2 = lexicon1.bind({});
lexicon1();
lexicon2();

// default paramter
function log(text = 'Hello World!!!') {
    console.log(text);
}

log();
log('I\'m stronger');

//rest operator
function sumArr(...numbers) { 
    let total = 0;
    numbers.forEach(n => total += n);
    return total;
}
console.log(sumArr(2, 4, 6, 8, 10));