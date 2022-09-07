const express = require('express');
const app = express();
const Datastore = require('nedb');

app.use(express.urlencoded())

/* app.get('/', (req, res) => {
    console.log('hello world'); 
}) */
const port = 3000;

app.listen(port, () => {
    console.log(`listening to ${port}`);
});

app.use('/', express.static('public'));

// create a database and load automatically
let db = new Datastore({ filename: './database/accounts.db', autoload: true });

app.post('/register', (req, res, next) => {
   console.log(req.body);
   let register = req.body;
   let username = register.email;
   let name = register.name;
   let password = register.password;
   let registerTime = new Date();
   register.registerTime = registerTime.toString();
   console.log("register: ")
   console.log(register)
   //console.log(`name, username, password: ${name}, ${username}, ${password}`);
   db.insert(register, function (err, newDoc) { 
    console.log("register is saved to db...")
   });
   res.send("you are registered!")
});