const fs = require('fs');

let toDoList = [];

const loadDB = () => {

  try {
    toDoList = require('../db/data.json');
  } catch (error) {
    toDoList = [];
  }
};
const saveDB = () => {
  let data = JSON.stringify(toDoList);
  fs.writeFile('db/data.json', data, (err) => {
    if (err) {
      throw new Error('No se pudo grabar');
    }
  });
};

const create = (description) => {

  loadDB();

  let toDo = {
    description,
    completed: false
  };

  toDoList.push(toDo);

  saveDB();

  return toDo;
};

const getToDoList = (searchCriteria) => {

  loadDB();

  return toDoList;
};

const update = (description, completed = true) => {
  loadDB();

  let index = toDoList.findIndex(toDo => toDo.description === description);

  if (index >= 0) {
    toDoList[index].completed = completed;
    saveDB();
    return true;
  }

  return false;

};

const deleteToDo = (description) => {
  loadDB();
  let newToDoList = toDoList.filter(toDo => toDo.description !== description);

  if (newToDoList.length === toDoList.length) {
    return false;
  } else {
    toDoList = newToDoList;
    saveDB();
    return true;
  }
};


module.exports = {
  create,
  getToDoList,
  update,
  deleteToDo
};