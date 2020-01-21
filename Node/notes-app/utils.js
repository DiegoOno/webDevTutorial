const fs = require('fs');

const loadFile = (fileName) => {
  try {
    const dataBuffer = fs.readFileSync(fileName);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
}

const saveFile = (fileName, data) => {
  const dataJSON = JSON.stringify(data);
  fs.writeFileSync(fileName, dataJSON);
}

module.exports = { loadFile, saveFile };