const obj = {
    a: 2,
    b: 4,
    c: 5,
    soma() {
        return a + b + this.c;
    }
}

console.log(JSON.stringify(obj));
console.log(JSON.parse('{ "a": 3, "b": 4, "c": 5 }'));
obj2 = JSON.parse('{ "a": 4, "b": 3, "c": "string", "bool": true, "object": {}, "array": [] }');
console.log(typeof obj2.a, typeof obj2.b, typeof obj2.c, typeof obj2.bool, typeof obj2.object, typeof obj2.array);

