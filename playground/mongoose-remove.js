const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//Todo.remove({}).then((result) => {
  //  console.log(result);
//});

Todo.findByIdAndRemove('5bf530b3955cca89341d5587').then((todo) => {
    console.log(todo);
});