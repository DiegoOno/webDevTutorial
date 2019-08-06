const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

// Exercise: Find the lowest-paid chinese woman
const chinese = worker => worker.pais === 'China';
const women = worker => worker.genero === 'F';
const lowestPaid = (worker, currWorker) => {
    return worker.salario < currWorker.salario ? worker : currWorker;
}

axios.get(url).then(response => {
    const workers = response.data;
    const lowestPaidWorker = workers.filter(chinese).filter(women).reduce(lowestPaid);
    console.log(lowestPaidWorker);
})

