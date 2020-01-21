const utils = require('./utils');
const chalk = require('chalk');

const addNote = (title, body) => {
  const notes = utils.loadFile('notes.json');
  const duplicateNote = notes.find((note) => note.title === title);


  if (!duplicateNote) {
    notes.push({
      title,
      body
    });
    utils.saveFile('notes.json', notes);
    console.log(chalk.green.inverse('New note added!'));
  } else {
    console.log(chalk.red.inverse('Note title taken!'));
  }
  // debugger
}

const removeNote = (title) => {
  const notes = utils.loadFile('notes.json');

  if (notes.length > 0) {
    const filteredNotes = notes.filter((note) => note.title !== title);
    utils.saveFile('notes.json', filteredNotes);

    if (notes.length > filteredNotes.length) {
      console.log(chalk.green.inverse(`Note with title "${title} was removed."`));
    } else {
      console.log(chalk.red.inverse(`Note with title "${title}" doesn't exist.`));
    }
  }
}

const listNotes = () => {
  const notes = utils.loadFile('notes.json');

  if (notes.length > 0) {
    console.log(chalk.white.inverse('Your Notes!'));
    notes.forEach((note, idx) => console.log(`${idx}) ${note.title}`));
  } else {
    console.log(chalk.red.inverse('You don\'t have any notes'));
  }
}

const readNote = (title) => {
  const notes = utils.loadFile('notes.json');

  if (notes.length > 0) {
    const findedNote = notes.find((note) => note.title === title);
    if (findedNote) {
      console.log(chalk.green.inverse(`Title: ${findedNote.title} - Body: ${findedNote.body}`));
    } else {
      console.log(chalk.red.inverse(`Note with title "${title}" wasn't founded.`));
    }
  }
}

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote
}