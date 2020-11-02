#!/usr/bin/env node
const pkg = require('./package.json');
const chalk = require('chalk');

console.log(`
  name: ${pkg.name},
  version: ${pkg.version},
  description: ${pkg.description},
`);

console.log(chalk.green('Greetings, Professor Falken.'));
console.log(chalk.bgBlue.cyanBright('This will look pretty ugly!'));
console.warn(
  chalk.yellow(
    `Here's a yellow line, ${chalk.bold.blue.underline(
      'with a segment with underlined blue text'
    )} and then back to yellow.`
  )
);
