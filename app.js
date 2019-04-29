const { argv } = require('./config/yargs');
const toDo = require('./to-do/to-do');
const colors = require('colors');

let command = argv._[0];
// console.log(argv);

switch (command) {
  case 'create':
    let task = toDo.create(argv.description);
    console.log(task);
    break;

  case 'list':
    let toDoList = toDo.getToDoList();
    console.log(toDoList);

    for (let toDo of toDoList) {
      console.log('==========TO DO=========='.green);
      console.log(`Description: ${toDo.description}`);
      console.log(`Completed: ${toDo.completed}`);
      console.log('========================='.green);
    }
    break;

  case 'update':
    let updated = toDo.update(argv.description, argv.completed);
    console.log(updated);
    break;

  case 'delete':
    let deleted = toDo.deleteToDo(argv.description);
    console.log(deleted);
    break;

  default:
    console.log('The command was not recognized');
}