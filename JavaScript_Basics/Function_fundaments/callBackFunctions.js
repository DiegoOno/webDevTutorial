//Ex1
const builders = ['Mercedes', 'Audi', 'BMW'];

function print_builder(name, index) {
    console.log(`${index + 1}. ${name}`);
}

builders.forEach(print_builder);
builders.forEach(builders => console.log(builders))

//Ex2
const grades = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

//Without callback
let worstGrades = [];
for (let i in grades) {
    if(grades[i] < 7) {
        worstGrades.push(grades[i]);
    }
}
console.log(worstGrades);

//With callback and arrow function
let worstGrades2 = []
worstGrades2 = grades.filter(grade => grade < 7);
console.log(worstGrades2)