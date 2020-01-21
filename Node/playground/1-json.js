const fs = require('fs');

const dataBuffer = fs.readFileSync('1-json.json');

if (!dataBuffer) {
    const book = {
        title: 'Ego is the enemy',
        author: 'Ryan Holiday'
    }
    const bookJSON = JSON.stringify(book);
    fs.writeFileSync('1-json.json', bookJSON);
} else {
    const dataJSON = dataBuffer.toString();
    const data = JSON.parse(dataJSON);
    console.log(dataBuffer, dataJSON, data);
}