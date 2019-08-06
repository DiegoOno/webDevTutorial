//Literal
//function func1() {}

//Store a function in a variable
//const func2 = function () {}

// Arrow Function
// 'this' isn't variable
const props = {
    v1: 10,
    v2: 20
}

const sum = (props) => {
    return props.v1 + props.v2;
}

const sub = (props) => {
    return props.v2 - props.v1;
}

console.log(sum(props));
console.log(sub(props));