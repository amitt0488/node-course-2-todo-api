const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    /* db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {

        console.log(result);
    }); */

    /* db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
        
                console.log(result);
            }); */

          /*   db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
                
                        console.log(result);
                    }); */
    

                   /*  db.collection('Users').deleteMany({name: 'Amit'}).then((result) => {
                        
                                console.log(result);
                            }); */

                            db.collection('Users').findOneAndDelete({_id: new ObjectId('5bdc17d86f36cc4504342500')}).then((result) => {
                                
                                        console.log(result);
                                    }); 
    //db.close();
});