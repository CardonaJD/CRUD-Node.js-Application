const description = {
  demand: true,
  alias: 'd',
  desc: 'to do description'
};

const completed = {
  alias: 'c',
  default: true,
  desc: 'marks as completed or awaiting the to do'
};

const argv = require('yargs')
  .command('create', 'create a new to do', { description })
  .command('list', 'return the to do list', { completed })
  .command('update', 'update the state of to do', { description, completed })
  .command('delete', 'delete to to for to do list', { description })
  .help()
  .argv;

module.exports = {
  argv
};