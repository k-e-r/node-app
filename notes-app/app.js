// const validator = require('validator');
// const getNotes = require('./notes.js');
// const chalk = require('chalk');
import chalk from 'chalk';

// const msg = getNotes();
// console.log(msg);
const Msg = chalk('Success!');
console.log(Msg);
const greenMsg = chalk.green.inverse('Success!');
console.log(greenMsg);
