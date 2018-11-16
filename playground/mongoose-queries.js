const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

User.findById('5bebe94907ce26dc74cf4e42').then((user) => {
    if(!user) {
        return console.log('Unable to find user');
    }

    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
});
/* var id = '5bee5b759efa61bc812a2e1f';

if(!ObjectID.isValid(id)) {
    console.log('ID not valid');
} */

/* Todo.find({

    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo);
}); */

/* Todo.findById(id).then((todo) => {
    if(!todo) {
        console.log('Id not found');
    }
    console.log('Todo By Id', todo);
}).catch((e) => console.log(e)); */