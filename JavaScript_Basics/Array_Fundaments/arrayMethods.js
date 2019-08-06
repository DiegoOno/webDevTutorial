const pilots = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];

//Array.pop -> Remove the last element
pilots.pop();
console.log(pilots);

//Array.push -> Add the element in the last position
pilots.push('Verstappen');
console.log(pilots);

//Array.shift -> Remove the element in first position
pilots.shift();
console.log(pilots);

//Array.unshift -> Add the element in first position
pilots.unshift('Hamilton');
console.log(pilots);

//Array.splice -> This method can add and remove element in an array
//Add
pilots.splice(2, 0, 'Bottas', 'Massa');
console.log(pilots);

//Remove
pilots.splice(3, 1);
console.log(pilots);

//Array.slice(position) -> return a new array based in an inteval
const somePilots = pilots.slice(2, 4);
console.log(somePilots);