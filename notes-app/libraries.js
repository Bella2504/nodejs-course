const validator = require('validator');
const chalk = require('chalk');
const { getNotes } = require('./notes.js');

console.log(chalk.red.bold(getNotes()));
console.log(validator.isEmail('sdsd@dd.com'))