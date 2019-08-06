const fs = require('fs');

const product = {
    name: 'Cellphone',
    price: 2500.00,
};

fs.writeFile(__dirname + '/generatedFile.json', JSON.stringify(product), err => {
    console.log(err || 'File saved');
})