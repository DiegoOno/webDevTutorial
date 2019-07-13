// Closure is the scope created when a function was declared
// This scope allows the function to acess and manipulate variable external to the function.

const x = 'Global';

function out() {
    const x = 'Local';
    function inside() {
        return x;
    }
    return inside;
}

const myFunction = out();
console.log(myFunction());