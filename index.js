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

app.post('/signin', (req, res, next) => {
   console.log(req.body);
   let input = req.body;
   let username = input.username;
   let password = input.password;
//   db.insert(input, function (err, newDoc) { 
   res.send(".....................")
   console.log(`username, password: ${username}, ${password}`);
});

app.post('/signup', (req, res, next) => {
   console.log(req.body);
   let username = req.body.email;
   let name = req.body.name;
   let password = req.body.pword;
   let register = [username =  {
       'some name': name, 
       'some password': password
 }];


   db.insert(register, function (err, newDoc) { 
     console.log("register is saved to db...")
   });
   res.send("you are registered!")
   console.log(`name, username, password: ${name}, ${username}, ${pword}`);
});
