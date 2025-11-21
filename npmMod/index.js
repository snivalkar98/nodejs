import chalk from 'chalk';
import validator from 'validator';
console.log(chalk.green.underline('Success'));
const res = validator.isEmail("ssn@ssn.sm");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));