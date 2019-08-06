const students = [
    { name: 'João', grade: 7.3, scholarship: true },
    { name: 'Maria', grade: 9.2, scholarship: false },
    { name: 'Pedro', grade: 9.8, scholarship: true },
    { name: 'Ana', grade: 8.7, scholarship: false },
];

const result = students.map(student => student.grade).reduce(function(acc, curr) {
    console.log(acc, curr);
    return acc + curr;    
})

console.log(result);